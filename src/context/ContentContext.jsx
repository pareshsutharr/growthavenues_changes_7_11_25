import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
// Static mode: no backend fetches

const defaultContent = {
  hero: {
    title: "Behavior-First Investing",
    subtitle: "Rewriting the rules of wealth creation",
    text:
      "We have spent years decoding why most investors struggle to create wealth, and we discovered that the answer was not in the markets. It was hidden in how they actually behave. That is why we go beyond market research to build data-backed, behavior-first strategies that turn ordinary investing into lasting wealth.",
    image: "assets/landingpageman.png",
  },
  whoWeAre: {
    title: "Who We Are",
    desc:
      "At Growth Avenues, we combine research-driven insights with behaviour-first frameworks to help investors stay consistent. We focus on disciplined SIPs, risk-aware allocations, and transparent guidance—so plans hold through cycles, not just on paper.",
  },
  // Optional list-type sections you may wire later
  services: [],
  blogs: [],
};

export const ContentContext = createContext({
  content: defaultContent,
  setContent: () => {},
  updateField: () => {},
  setList: () => {},
  resetDefaults: () => {},
  exportJSON: () => ({}),
  importJSON: () => {},
});

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Static content only
    setContent(defaultContent);
    setLoading(false);
  }, []);

  const updateField = useCallback((path, value) => {
    // path like "hero.title" or "whoWeAre.desc"
    setContent((prev) => {
      const next = { ...prev };
      const parts = String(path).split(".");
      let ref = next;
      for (let i = 0; i < parts.length - 1; i++) {
        const k = parts[i];
        ref[k] = ref[k] ?? {};
        ref = ref[k];
      }
      ref[parts[parts.length - 1]] = value;
      return next;
    });
  }, []);

  const setList = useCallback((key, items) => {
    setContent((prev) => ({ ...prev, [key]: Array.isArray(items) ? items : [] }));
  }, []);

  const resetDefaults = useCallback(() => {
    setContent(defaultContent);
  }, []);

  const exportJSON = useCallback(() => {
    return content;
  }, [content]);

  const importJSON = useCallback((obj) => {
    if (!obj || typeof obj !== "object") return;
    // Merge over defaults to avoid missing keys
    setContent({ ...defaultContent, ...obj });
  }, []);

  const saveContent = useCallback(async (partial) => {
    // No-op in static mode; update local state only
    const payload = partial || content;
    setContent({
      hero: payload.hero || defaultContent.hero,
      whoWeAre: payload.whoWeAre || defaultContent.whoWeAre,
      services: Array.isArray(payload.services) ? payload.services : [],
      blogs: Array.isArray(payload.blogs) ? payload.blogs : [],
    });
    return payload;
  }, [content]);

  const value = useMemo(
    () => ({ content, setContent, updateField, setList, resetDefaults, exportJSON, importJSON, saveContent, loading, error }),
    [content, updateField, setList, resetDefaults, exportJSON, importJSON, saveContent, loading, error]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}
