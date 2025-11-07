import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate, Link } from "react-router-dom";
import { register, setAuthToken, fetchMe } from "../services/api";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await register(form.name, form.email, form.password);
      setAuthToken(data.token);
      await fetchMe(); // optional; you can use the returned data if needed
      // after signup, go to login or home—your choice:
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.error || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .page {
          display:flex; align-items:center; justify-content:center;
          min-height:100vh; background: rgba(242, 248, 252, 1);
        }
        .signup-box {
          width:100%; max-width:505px; border-radius:20px; background:#fff;
          padding: 40px 30px; box-shadow: 0 10px 30px rgba(0,0,0,.08);
        }
        .title { font-size:32px; font-weight:600; color:#043b6b; text-align:center; margin-bottom:20px; }
        .custom-input { height:56px; border-radius:3px; }
        .btn-primary {
          height:47px; background:#145c3d; border:none; color:#fff; border-radius:3px; font-weight:600;
        }
      `}</style>

      <div className="page">
        <div className="signup-box">
          <h1 className="title">Create Account</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control custom-input"
                value={form.name}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control custom-input"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                placeholder="Password (min 6 chars)"
                className="form-control custom-input"
                value={form.password}
                onChange={onChange}
                required
                minLength={6}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Creating…" : "Sign up"}
            </button>
          </form>

          {error && <div className="mt-3 text-center" style={{ color: "crimson", fontWeight: 600 }}>{error}</div>}

          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
