// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/theme.css";
import "./styles/atoms.css";
import { initSentry } from "./monitoring/sentry";
import ErrorBoundary from "./components/ErrorBoundary";

// Initialize monitoring before app mounts (no-op if DSN missing)
try { initSentry(); } catch {}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);
