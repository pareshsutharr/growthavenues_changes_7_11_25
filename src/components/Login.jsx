import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { login, setAuthToken, fetchMe } from "../services/api";
import { useNavigate } from "react-router-dom";

/** Map any API/Network error to a safe message */
function getErrorMessage(err) {
  // Axios-style error?
  const dataMsg =
    err?.response?.data?.error ||
    err?.response?.data?.message ||
    err?.response?.data?.errors?.[0]?.message;

  if (dataMsg) return String(dataMsg);

  if (err?.message?.toLowerCase().includes("network"))
    return "Network error. Please check your connection and try again.";

  return "Login failed. Please try again.";
}

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const mounted = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    mounted.current = true;
    // Prefill email if user chose "Remember me"
    const rememberedEmail = localStorage.getItem("rememberEmail");
    if (rememberedEmail) {
      setForm((f) => ({ ...f, email: rememberedEmail, remember: true }));
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // prevent double submit
    setError("");
    setLoading(true);

    try {
      // Basic client-side validation
      if (!form.email || !form.password) {
        throw new Error("Please fill in both email and password.");
      }

      const { data } = await login(form.email.trim(), form.password);
      if (!data?.token) {
        throw new Error("No token received from server.");
      }

      setAuthToken(data.token);

      // Fetch current user
      const meRes = await fetchMe();
      const user = meRes?.data?.user;
      if (!user) {
        throw new Error("Unexpected response when fetching user profile.");
      }

      // Remember email optionally
      if (form.remember) {
        localStorage.setItem("rememberEmail", form.email.trim());
      } else {
        localStorage.removeItem("rememberEmail");
      }

      // Navigate to home (or any protected route)
      navigate("/");
    } catch (err) {
      if (!mounted.current) return;
      setError(getErrorMessage(err));
    } finally {
      if (mounted.current) setLoading(false);
    }
  };

    // If your backend provides an OAuth route:
    // window.location.href = "/api/auth/google";
    // F  const onGoogleLogin = () => {
or now, show a friendly message.
    setError("Google login isn’t configured yet.");
  };

  return (
    <>
      <style>{`
        .left-side { flex: 0 0 60%; }
        .right-side { flex: 0 0 40%; }
        @media (max-width: 768px) {
          .left-side { display: none; }
          .right-side { flex: 0 0 100%; }
        }
        .login-image {
          width: 100%;
          height: 100vh;
          object-fit: cover;
        }
        .login-box {
          width: 100%;
          max-width: 505px;
          border-radius: 16px;
          background: #f2f8fc;
          padding: 36px 28px;
          text-align: center;
          box-shadow: 0 6px 24px rgba(0,0,0,0.06);
        }
        .login-title {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 30px;
          margin-bottom: 12px;
          color: #043b6b;
        }
        .welcome {
          font-family: var(--font-body);
          font-size: 16px;
          margin-bottom: 24px;
          color: #333;
        }
        .custom-input {
          height: 52px;
          border: none;
          background: #fff;
          border-radius: 6px;
          font-size: 16px;
          padding: 10px 12px;
        }
        .input-wrapper {
          position: relative;
        }
        .toggle-password {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
        }
        .btn-login {
          height: 48px;
          background: #145c3d;
          color: #fff;
          border-radius: 6px;
          font-size: 18px;
          font-weight: 600;
          border: none;
        }
        .btn-login:disabled { opacity: 0.8; cursor: not-allowed; }
        .btn-login:active { transform: scale(0.98); }
        .forgot {
          display: inline-block;
          margin: 14px 0 8px;
          font-size: 15px;
          color: #044b73;
          text-decoration: none;
        }
        .forgot:hover { text-decoration: underline; }
        .btn-google {
          height: 48px;
          border: 1px solid #e5e7eb;
          background: #fff;
          border-radius: 6px;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .small-text {
          font-size: 14px;
          color: #6b7280;
        }
        .error-box {
          background: #fff1f2;
          border: 1px solid #fecdd3;
          color: #be123c;
          border-radius: 8px;
          padding: 10px 12px;
          text-align: left;
          margin-top: 12px;
          font-weight: 600;
        }
        .divider {
          display: flex;
          align-items: center;
          margin: 16px 0;
          color: #9ca3af;
          font-size: 14px;
        }
        .divider:before, .divider:after {
          content: "";
          flex: 1;
          border-bottom: 1px solid #e5e7eb;
        }
        .divider:not(:empty)::before { margin-right: .75em; }
        .divider:not(:empty)::after { margin-left: .75em; }
      `}</style>

      <div className="d-flex vh-100">
        {/* LEFT SIDE IMAGE */}
        <div className="left-side">
          <img
            src="assets/Pin-on-Social 1.png"
            alt="Decorative background"
            className="login-image"
            loading="lazy"
          />
        </div>

        {/* RIGHT SIDE LOGIN BOX */}
        <div
          className="right-side d-flex align-items-center justify-content-center"
          style={{ background: "#f2f8fc" }}
        >
          <div className="login-box" role="region" aria-label="Login form">
            <h1 className="login-title">Log In</h1>
            <p className="welcome">
              Welcome to Growth <span style={{ color: "green" }}>Avenues</span>
            </p>

            <form onSubmit={onSubmit} noValidate aria-busy={loading}>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label small-text">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="form-control custom-input"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                  aria-invalid={!!error}
                />
              </div>

              <div className="mb-2 text-start">
                <label htmlFor="password" className="form-label small-text">
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="form-control custom-input pe-5"
                    value={form.password}
                    onChange={onChange}
                    required
                    minLength={6}
                    autoComplete="current-password"
                    aria-invalid={!!error}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((s) => !s)}
                  >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={form.remember}
                    onChange={onChange}
                  />
                  <label className="form-check-label small-text" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="/forgot-password" className="forgot">
                  Forgot Password
                </a>
              </div>

              <button type="submit" className="btn-login w-100" disabled={loading}>
                {loading ? "Signing in…" : "Log in"}
              </button>

              {error && <div className="error-box" role="alert">{error}</div>}

              <div className="divider">or</div>

              <button
                className="btn btn-google w-100"
                type="button"
                onClick={onGoogleLogin}
                disabled={loading}
                aria-disabled={loading}
              >
                <FcGoogle size={22} />
                Continue with Google
              </button>

              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                  onClick={() => navigate("/signup")}
                  disabled={loading}
                >
                  Create a new account
                </button>
              </div>
            </form>

            {/* Optional: Legal/footnote */}
            <p className="small-text mt-3 mb-0">
              By continuing, you agree to our{" "}
              <a href="/terms" className="text-decoration-underline">Terms</a> and{" "}
              <a href="/privacy" className="text-decoration-underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
