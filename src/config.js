// Centralized environment/configuration for the app (Vite)
// Only reads variables with the VITE_ prefix (as required by Vite)

const getEnv = (key, fallback = "") => {
  try {
    const v = import.meta?.env?.[key];
    return v !== undefined ? v : fallback;
  } catch {
    return fallback;
  }
};

export const APP_ENV = getEnv("VITE_ENV", "development");
export const IS_PROD = APP_ENV === "production";
export const IS_STAGING = APP_ENV === "staging";
export const IS_DEV = !IS_PROD && !IS_STAGING;

export const API_BASE_URL = getEnv("VITE_API_BASE", "");
export const API_TIMEOUT_MS = Number(getEnv("VITE_API_TIMEOUT_MS", "15000"));
export const API_MAX_RETRIES = Number(getEnv("VITE_API_MAX_RETRIES", "2"));
export const API_CIRCUIT_THRESHOLD = Number(getEnv("VITE_API_CIRCUIT_THRESHOLD", "5"));
export const API_CIRCUIT_COOLDOWN_MS = Number(getEnv("VITE_API_CIRCUIT_COOLDOWN_MS", "15000"));

// Monitoring
export const SENTRY_DSN = getEnv("VITE_SENTRY_DSN", "");
export const SENTRY_TRACES_SAMPLE_RATE = Number(getEnv("VITE_SENTRY_TRACES_SAMPLE_RATE", IS_PROD ? "0.2" : "0"));
export const SENTRY_REPLAYS_SESSION_SAMPLE_RATE = Number(getEnv("VITE_SENTRY_REPLAYS_SESSION_SAMPLE_RATE", "0"));
export const SENTRY_REPLAYS_ERROR_SAMPLE_RATE = Number(getEnv("VITE_SENTRY_REPLAYS_ERROR_SAMPLE_RATE", "0"));

export const APP_VERSION = getEnv("VITE_APP_VERSION", "0.0.0");

export default {
  APP_ENV,
  IS_PROD,
  IS_STAGING,
  IS_DEV,
  API_BASE_URL,
  API_TIMEOUT_MS,
  API_MAX_RETRIES,
  API_CIRCUIT_THRESHOLD,
  API_CIRCUIT_COOLDOWN_MS,
  SENTRY_DSN,
  SENTRY_TRACES_SAMPLE_RATE,
  SENTRY_REPLAYS_SESSION_SAMPLE_RATE,
  SENTRY_REPLAYS_ERROR_SAMPLE_RATE,
  APP_VERSION,
};

