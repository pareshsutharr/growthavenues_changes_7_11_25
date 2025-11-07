// Lightweight token management. Prefer httpOnly cookies on the backend; this
// module supports a fallback Bearer token in-memory to avoid persistent XSS risk.

let accessToken = null;

export function setToken(token) {
  accessToken = token || null;
  try {
    if (!token) {
      localStorage.removeItem("token");
    } else {
      // Optional: persist only if you must. Consider sessionStorage instead.
      localStorage.setItem("token", token);
    }
  } catch {}
}

export function getToken() {
  if (accessToken) {
    return accessToken;
  }
  try {
    return localStorage.getItem("token");
  } catch {
    return null;
  }
}

export function clearToken() {
  accessToken = null;
  try { localStorage.removeItem("token"); } catch {}
}

export default { setToken, getToken, clearToken };
