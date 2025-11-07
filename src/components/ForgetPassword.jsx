import React, { useState } from "react";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    try {
      // Backend endpoint not yet available. Simulate success and guide user.
      await new Promise((r) => setTimeout(r, 450));
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", background: "#f2f8fc" }}>
      <div className="fp-box" role="region" aria-label="Reset password">
        <h1 className="fp-title">Forgot your password?</h1>
        <p className="fp-sub">Enter the email you used to sign up. We’ll send a reset link if an account exists.</p>

        {sent ? (
          <div className="fp-success" role="status">
            If an account exists for <strong>{email}</strong>, a reset link has been sent. Please check your inbox and spam folder.
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <label htmlFor="email" className="form-label small-text">Email</label>
            <input
              id="email"
              type="email"
              className="form-control fp-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            {error && <div className="fp-error" role="alert">{error}</div>}
            <button type="submit" className="btn fp-btn w-100 mt-3">Send reset link</button>
            <a href="/login" className="d-block text-center mt-3 small">Back to login</a>
          </form>
        )}

        <style>{`
          .fp-box { width: 100%; max-width: 460px; padding: 28px 24px; background: #fff; border-radius: 14px; box-shadow: 0 8px 28px rgba(0,0,0,.08); }
          .fp-title { font-size: 24px; font-weight: 700; margin: 0 0 6px 0; color: #043b6b; }
          .fp-sub { color: #475569; margin-bottom: 18px; }
          .fp-input { height: 48px; }
          .fp-btn { height: 46px; background: #044B73; color: #fff; font-weight: 600; border: none; border-radius: 8px; }
          .fp-btn:hover { filter: brightness(1.02); }
          .fp-error { margin-top: 8px; background: #fff1f2; border: 1px solid #fecdd3; color: #be123c; border-radius: 8px; padding: 8px 10px; font-weight: 600; }
          .fp-success { background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; border-radius: 10px; padding: 12px; font-weight: 600; }
        `}</style>
      </div>
    </div>
  );
}
