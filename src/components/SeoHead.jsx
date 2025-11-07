import { useEffect } from "react";

function ensure(selector, create) {
  let el = document.querySelector(selector);
  if (!el && create) {
    el = document.createElement(create.tag);
    Object.entries(create.attrs || {}).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
}

export default function SeoHead({
  title = "",
  description = "",
  canonical = "/",
  og = {},
  twitter = {},
}) {
  useEffect(() => {
    try {
      if (title) document.title = title;
      const mDesc = ensure('meta[name="description"]', { tag: 'meta', attrs: { name: 'description' } });
      if (mDesc && description) mDesc.setAttribute('content', description);

      const linkCanon = ensure('link[rel="canonical"]', { tag: 'link', attrs: { rel: 'canonical' } });
      if (linkCanon && canonical) linkCanon.setAttribute('href', canonical);

      const ogTitle = ensure('meta[property="og:title"]', { tag: 'meta', attrs: { property: 'og:title' } });
      if (ogTitle) ogTitle.setAttribute('content', og.title || title);
      const ogDesc = ensure('meta[property="og:description"]', { tag: 'meta', attrs: { property: 'og:description' } });
      if (ogDesc) ogDesc.setAttribute('content', og.description || description);
      const ogType = ensure('meta[property="og:type"]', { tag: 'meta', attrs: { property: 'og:type' } });
      if (ogType) ogType.setAttribute('content', og.type || 'website');
      const ogUrl = ensure('meta[property="og:url"]', { tag: 'meta', attrs: { property: 'og:url' } });
      if (ogUrl) ogUrl.setAttribute('content', og.url || canonical);

      const twCard = ensure('meta[name="twitter:card"]', { tag: 'meta', attrs: { name: 'twitter:card' } });
      if (twCard) twCard.setAttribute('content', twitter.card || 'summary_large_image');
      const twTitle = ensure('meta[name="twitter:title"]', { tag: 'meta', attrs: { name: 'twitter:title' } });
      if (twTitle) twTitle.setAttribute('content', twitter.title || title);
      const twDesc = ensure('meta[name="twitter:description"]', { tag: 'meta', attrs: { name: 'twitter:description' } });
      if (twDesc) twDesc.setAttribute('content', twitter.description || description);
    } catch {}
  }, [title, description, canonical, og.title, og.description, og.type, og.url, twitter.card, twitter.title, twitter.description]);

  return null;
}

