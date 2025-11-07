// Static API wrappers (no backend calls)
import { setToken as setTokenInternal } from "./auth";

// --- Local storage helpers for Updates (acts like a local DB) ---
const UPDATES_KEY = "ga_updates";

function readLocalUpdates() {
  try {
    if (typeof window === "undefined") return { news: [], ann: [] };
    const raw = localStorage.getItem(UPDATES_KEY);
    if (!raw) return { news: [], ann: [] };
    const parsed = JSON.parse(raw);
    const news = Array.isArray(parsed?.news) ? parsed.news : [];
    const ann = Array.isArray(parsed?.ann) ? parsed.ann : [];
    return { news, ann };
  } catch {
    return { news: [], ann: [] };
  }
}

function writeLocalUpdates(updates) {
  try {
    if (typeof window === "undefined") return { news: [], ann: [] };
    const safe = {
      news: Array.isArray(updates?.news) ? updates.news : [],
      ann: Array.isArray(updates?.ann) ? updates.ann : [],
    };
    localStorage.setItem(UPDATES_KEY, JSON.stringify(safe));
    return safe;
  } catch {
    return { news: [], ann: [] };
  }
}

// Token helpers (kept for compatibility with components)
export const setAuthToken = (token) => {
  // Backwards-compatible setter; delegates to auth module
  try { setTokenInternal(token); } catch {}
};

// Note: API base is resolved by the http client/Vite proxy; no local constant needed

// Auth stubs
export const login = async () => ({ data: { token: null, user: null } });
export const register = async () => ({ data: { ok: false } });
export const fetchMe = async () => ({ data: { user: null } });

// Contact form removed; no contact submission endpoint

// Documents (public): return empty data
export const fetchDocuments = async () => ({ data: { items: [], total: 0 } });
export const fetchDocumentsMeta = async () => ({ data: { categories: [], tags: [], total: 0 } });
export const fetchDocumentById = async () => ({ data: null });

// Public content: no remote content
export const fetchPublicContent = async () => ({ data: { content: null } });
export const fetchPublicUpdates = async () => ({ data: { updates: readLocalUpdates() } });

// Admin stubs: all return empty/no-ops
export const adminListDocuments = async () => ({ data: { items: [], total: 0 } });
export const adminGetDocument = async () => ({ data: null });
export const adminCreateDocument = async () => ({ data: null });
export const adminUpdateDocument = async () => ({ data: null });
export const adminDeleteDocument = async () => ({ data: { ok: true } });
export const adminGetContent = async () => ({ data: { content: null } });
export const adminSaveContent = async (payload) => ({ data: { content: payload || null } });
export const adminGetUpdates = async () => ({ data: { updates: readLocalUpdates() } });
export const adminSaveUpdates = async (payload) => {
  const saved = writeLocalUpdates(payload);
  return { data: { updates: saved } };
};
export const adminListUsers = async () => ({ data: { users: [] } });
export const adminUpdateUser = async () => ({ data: null });
export const adminDeleteUser = async () => ({ data: { ok: true } });
export const adminListContacts = async () => ({ data: { items: [], total: 0 } });
export const adminDeleteContact = async () => ({ data: { ok: true } });
export const adminGetStats = async () => ({ data: { users: 0, documents: 0 } });

// Analytics tracking: no-op
export const trackVisit = async () => undefined;
