// Sentry initialization (optional, env-driven)
import * as Sentry from "@sentry/react";
import {
  APP_ENV,
  IS_PROD,
  SENTRY_DSN,
  SENTRY_TRACES_SAMPLE_RATE,
  SENTRY_REPLAYS_ERROR_SAMPLE_RATE,
  SENTRY_REPLAYS_SESSION_SAMPLE_RATE,
  APP_VERSION,
} from "../config";

let initialized = false;

export function initSentry() {
  if (initialized) {
    return;
  }
  if (!SENTRY_DSN) {
    return; // disabled if no DSN
  }
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: APP_ENV,
    release: APP_VERSION,
    integrations: [
      Sentry.replayIntegration({
        errorSampleRate: SENTRY_REPLAYS_ERROR_SAMPLE_RATE,
        sessionSampleRate: SENTRY_REPLAYS_SESSION_SAMPLE_RATE,
      }),
      Sentry.browserTracingIntegration(),
    ],
    tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
    // Keep sampling conservative by default; configure via env.
    defaultIntegrations: true,
    debug: !IS_PROD,
  });
  initialized = true;
}

export const sentryApi = Sentry;
