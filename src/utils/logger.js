// Simple logger that is dev-friendly and production-safe
// In dev: logs to console. In prod: sends errors to Sentry (if configured)

import { IS_DEV } from "../config";

// Lazy import to avoid bundling Sentry when not used
let sentry = null;
async function ensureSentry() {
  if (sentry) {
    return sentry;
  }
  try {
    const mod = await import("../monitoring/sentry");
    sentry = mod?.sentryApi || null;
  } catch {
    sentry = null;
  }
  return sentry;
}

export const log = {
  debug: (...args) => {
    if (IS_DEV) {
      console.debug("[debug]", ...args);
    }
  },
  info: (...args) => {
    if (IS_DEV) {
      console.info("[info]", ...args);
    }
  },
  warn: (...args) => {
    if (IS_DEV) {
      console.warn("[warn]", ...args);
    }
  },
  error: async (err, context = {}) => {
    if (IS_DEV) {
      console.error("[error]", err, context);
    }
    try {
      const s = await ensureSentry();
      if (s?.captureException) {
        s.captureException(err, { extra: context });
      }
    } catch {}
  },
};

export default log;
