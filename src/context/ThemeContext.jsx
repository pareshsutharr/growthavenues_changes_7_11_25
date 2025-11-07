import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

function getInitialTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  // Default to light theme regardless of OS/mobile preference
  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    try { localStorage.setItem("theme", theme); } catch {}
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  // Disable automatic switching based on OS preference
  useEffect(() => {}, []);

  const value = useMemo(() => ({ theme, toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
