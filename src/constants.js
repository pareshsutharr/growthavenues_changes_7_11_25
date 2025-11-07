// Centralized constants and env-driven endpoints/compliance placeholders
// Use Vite env vars with sensible defaults for local dev

const env = (key, fallback = "") => {
  try {
    return (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key] !== undefined)
      ? import.meta.env[key]
      : fallback;
  } catch {
    return fallback;
  }
};

export const CLIENT_PORTAL_URL = env("VITE_CLIENT_PORTAL_URL", "https://client.growthavenues.in");
export const LOGIN_URL = env("VITE_LOGIN_URL", "https://client.growthavenues.in");
export const BACKOFFICE_URL = env("VITE_BACKOFFICE_URL", "https://backoffice.growthavenues.in");

// Mutual Fund compliance placeholders
export const ARN_NUMBER = env("VITE_ARN_NUMBER", "");
export const SEBI_REG = env("VITE_SEBI_REG", "");
export const NISM_CERTS = env("VITE_NISM_CERTS", "");

// Exchange memberships / certificates (if applicable)
export const BSE = env("VITE_BSE_NUMBER", "6900");
export const NSE = env("VITE_NSE_REG", "90409");
export const SEBI = env("VITE_SEBI_CERTS", "INZ000319830");
export const CDSL = env("VITE_CDSL_NUMBER", "XXXXXXXXXX");

// Contact/analytics
export const CONTACT_EMAIL = env("VITE_CONTACT_EMAIL", "info@growthavenues.co.in");
export const CONTACT_PHONE = env("VITE_CONTACT_PHONE", "+91 62010 88241	");
export const CONTACT_ADDRESS = env(
  "VITE_CONTACT_ADDRESS",
  "1018, Millennium Business Hub, Sarthana, Varachha Road, Surat- 395006"
);

export const GA_MEASUREMENT_ID = env("VITE_GA_MEASUREMENT_ID", "");

// Captcha toggles for contact form (client-side)
export const RECAPTCHA_SITE_KEY = env("VITE_RECAPTCHA_SITE_KEY", "");
export const CONTACT_ENABLE_MATH_CAPTCHA = env("VITE_CONTACT_ENABLE_MATH_CAPTCHA", "");
export const CONTACT_FORM_ENABLED = env("VITE_CONTACT_FORM_ENABLED", "true");
