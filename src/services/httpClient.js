import axios from "axios";
import {
  API_BASE_URL,
  API_TIMEOUT_MS,
  API_MAX_RETRIES,
  API_CIRCUIT_THRESHOLD,
  API_CIRCUIT_COOLDOWN_MS,
  IS_DEV,
} from "../config";
import { getToken } from "./auth";
import { log } from "../utils/logger";

// Circuit breaker implementation (simple, per-base level)
const circuit = {
  failures: 0,
  openUntil: 0,
};

function isOpen() {
  const now = Date.now();
  return circuit.openUntil > now;
}

function recordFailure() {
  circuit.failures += 1;
  if (circuit.failures >= API_CIRCUIT_THRESHOLD) {
    circuit.openUntil = Date.now() + API_CIRCUIT_COOLDOWN_MS;
    log.warn("API circuit opened", { until: circuit.openUntil });
  }
}

function recordSuccess() {
  circuit.failures = 0;
  circuit.openUntil = 0;
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

const instance = axios.create({
  baseURL: API_BASE_URL || undefined,
  timeout: API_TIMEOUT_MS,
  headers: { "Content-Type": "application/json" },
});

// Attach token if present
instance.interceptors.request.use((config) => {
  if (isOpen()) {
    const err = new Error("API circuit open. Please try again shortly.");
    err.code = "CIRCUIT_OPEN";
    return Promise.reject(err);
  }
  const token = getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response handling + retry with exponential backoff for idempotent methods
instance.interceptors.response.use(
  (res) => {
    recordSuccess();
    return res;
  },
  async (error) => {
    const config = error?.config || {};
    const method = String(config.method || "").toUpperCase();
    const status = error?.response?.status;

    // Network/error tracking
    if (status >= 500 || !status) {
      recordFailure();
    }
    log.error(error, { url: config.url, method, status });

    const shouldRetry = ["GET", "HEAD"].includes(method) || (status && status >= 500);
    const tries = (config.__retryCount || 0);
    if (shouldRetry && tries < API_MAX_RETRIES) {
      const delay = Math.min(1000 * Math.pow(2, tries), 4000) + Math.floor(Math.random() * 200);
      if (IS_DEV) {
        log.info("Retrying request", { tries: tries + 1, delay, url: config.url });
      }
      await sleep(delay);
      config.__retryCount = tries + 1;
      return instance(config);
    }

    // Map to a safe user-facing message
    const friendly =
      error?.response?.data?.error ||
      error?.message ||
      "Request failed. Please try again.";
    const e = new Error(friendly);
    e.cause = error;
    e.status = status;
    throw e;
  }
);

export default instance;
