# Growth Avenues Frontend

Production-ready React + Vite frontend with modular config, centralized HTTP client (auth + retry + circuit breaker), monitoring (Sentry), error boundaries, and CI.

## Quickstart

- Node 20.x recommended
- Copy env template and edit values:

```
cp .env.example .env
```

### Dev

```
npm i
npm run dev
```

### Build

```
npm run build
npm run preview
```

## Key Architecture

- Env/config: `src/config.js` (VITE_ variables only)
- HTTP client: `src/services/httpClient.js`
  - Attaches `Authorization: Bearer <token>` when available
  - Timeout, exponential backoff retries, simple circuit breaker
  - Maps errors to safe user messages, logs to Sentry in prod
- Token management: `src/services/auth.js`
- Monitoring: `src/monitoring/sentry.js` (guarded by `VITE_SENTRY_DSN`)
- Logger: `src/utils/logger.js` (console in dev, Sentry in prod)
- Error boundary: `src/components/ErrorBoundary.jsx` (wrapped in `src/main.jsx`)

## Environment

Edit `.env` (see `.env.example`):

- `VITE_ENV`: `development|staging|production`
- `VITE_API_BASE`: API origin, e.g. `https://api.example.com`
- `VITE_SENTRY_DSN`: optional Sentry DSN for monitoring
- Compliance/contact `VITE_*`: ARN/SEBI, contact email/phone, etc.

## CI

GitHub Actions workflow: `.github/workflows/ci.yml`
- Installs deps, lints targeted infra files, runs tests (if any), builds.

## Deployment

Vercel configuration at project root `vercel.json` includes SPA rewrites and basic security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`).

If you enable Sentry, consider uploading source maps for improved stack traces.

## Notes

- For authentication, prefer server-set httpOnly cookies for refresh/session. The provided token helper supports an in-memory/localStorage fallback when unavoidable.
- Most content is currently static; API wrappers are present and safe to extend.

# growthavenues_changes_7_11_25
