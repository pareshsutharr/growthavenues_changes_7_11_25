import React, { useEffect, useRef, useState } from "react";
import { href, Link } from "react-router-dom";
import ProductServicesMenu from "./ProductServicesMenu";
import { CLIENT_PORTAL_URL, LOGIN_URL, BACKOFFICE_URL } from "../constants";
import { FiLogIn, FiUserPlus, FiMenu, FiDroplet } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";


// Material-inspired sub-navigation bar (no external deps)
// - Static (not fixed), elevated surface
// - Responsive: desktop dropdowns, mobile drawer
// - Scoped styles to avoid collisions

const NAV_ITEMS = [
  { key: "home", label: "Home", href: "/" },
  { key: "product", label: "Services & Products" },
  { key: "blogs", label: "Blogs", menu: [
      { label: "Behaviour-First Investing", href: "/insights#bfi" },
      { label: "Market Research", href: "/insights#market-research" },
    ] },
  {
    key: "utilities",
    label: "Utilities",
    menu: [
      { label: "Calculators", href: "/calculator" },
      { label: "Downloads", href: "/downloads" },
    ],
  },
  {
    key: "about",
    label: "About",
     href: "/about"
  },
  { key: "contact", label: "Contact", href: "/contact" },
];

export default function Header2() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const wrapperRef = useRef(null);
  const loginRef = useRef(null);
  const timeoutsRef = useRef(new Map());
  const itemRefsRef = useRef(new Map());
  const btnRefsRef = useRef(new Map());

  const cancelClose = (key) => {
    const t = timeoutsRef.current.get(key);
    if (t) {
      clearTimeout(t);
      timeoutsRef.current.delete(key);
    }
  };

  const scheduleClose = (key, delay = 280) => {
    cancelClose(key);
    const timer = setTimeout(() => {
      const el = itemRefsRef.current.get(key);
      if (!el) {
        setOpenDropdown((prev) => (prev === key ? null : prev));
        return;
      }
      const active = typeof document !== 'undefined' ? document.activeElement : null;
      const hasFocusInside = active && el.contains(active);
      const hovering = el.matches ? el.matches(':hover') : false;
      if (hasFocusInside || hovering) return;
      setOpenDropdown((prev) => (prev === key ? null : prev));
    }, Math.max(200, Math.min(400, delay)));
    timeoutsRef.current.set(key, timer);
  };
  useEffect(() => {
    const onClickAway = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setLoginOpen(false);
      }
    };
    document.addEventListener("click", onClickAway);
    return () => document.removeEventListener("click", onClickAway);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="ga-h2-wrap" ref={wrapperRef}>
      <div className="ga-h2-surface">
        <div className={`ga-h2-inner${scrolled ? " scrolled" : ""}`}>
          <div className="ga-h2-left">
            <Link to="/" className="ga-h2-brand" aria-label="Go to home">
              <img
                src="assets/companylogo.png"
                alt="Company Logo"
                width={148}
                height={36}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "assets/companylogo.png";
                }}
              />
            </Link>
          </div>
          <div className="ga-h2-center">
            <nav className="ga-h2-nav" aria-label="Secondary navigation">
              {NAV_ITEMS.map((item) => {
                const isProduct = item.key === "product";
                const hasMenu = isProduct || Array.isArray(item.menu);
                const open = openDropdown === item.key;
                return (
                  <div
                    key={item.key}
                    className={`ga-h2-item${hasMenu ? " has-menu" : ""}${open ? " open" : ""}`}
                    data-dropdown={hasMenu ? item.key : undefined}
                    ref={(el) => {
                      if (el) itemRefsRef.current.set(item.key, el);
                      else itemRefsRef.current.delete(item.key);
                    }}
                    onMouseEnter={() => {
                      if (!hasMenu) return;
                      cancelClose(item.key);
                      setOpenDropdown(item.key);
                    }}
                    onMouseLeave={() => {
                      if (!hasMenu) return;
                      scheduleClose(item.key);
                    }}
                    onFocus={(e) => {
                      if (!hasMenu) return;
                      cancelClose(item.key);
                      setOpenDropdown(item.key);
                    }}
                    onBlur={(e) => {
                      if (!hasMenu) return;
                      const container = itemRefsRef.current.get(item.key);
                      const next = e.relatedTarget;
                      if (!container || !next || !container.contains(next)) {
                        scheduleClose(item.key);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        e.preventDefault();
                        setOpenDropdown(null);
                        const btn = btnRefsRef.current.get(item.key);
                        try { btn && btn.focus(); } catch {}
                      }
                    }}
                  >
                    {item.href && !hasMenu ? (
                      <a className="ga-h2-link" href={item.href} onClick={() => setOpenDropdown(null)}>
                        {item.label}
                      </a>
                    ) : (
                      <button
                        className="ga-h2-link btnlike"
                        id={isProduct ? "ps-toggle" : undefined}
                        ref={(el) => {
                          if (el) btnRefsRef.current.set(item.key, el);
                          else btnRefsRef.current.delete(item.key);
                        }}
                        onClick={() => setOpenDropdown(open ? null : item.key)}
                        aria-expanded={open}
                        aria-haspopup={hasMenu}
                      >
                        {item.label}
                        {hasMenu && <span className="chev" aria-hidden="true"><IoMdArrowDropdown />
</span>}
                      </button>
                    )}
                    {hasMenu && (
                      isProduct ? (
                        <ProductServicesMenu
                          open={open}
                          onClose={() => setOpenDropdown(null)}
                          labelledBy="ps-toggle"
                          menuId="ps-menu"
                          showUpcoming
                        />
                      ) : (
                        <div className="ga-h2-menu" role="menu">
                          {item.menu?.map((m) => (
                            <a key={m.label} role="menuitem" className="ga-h2-menu-item" href={m.href} onClick={() => setOpenDropdown(null)}>
                              {m.label}
                            </a>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="ga-h2-right">
            <button
              className="ga-h2-burger"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <FiMenu size={20} />
            </button>
            <a
              className="ga-h2-cta primary"
              href={CLIENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiUserPlus size={16} />
              <span>Open your account</span>
            </a>
            <div className={`ga-h2-login${loginOpen ? " open" : ""}`} ref={loginRef}>
              <button
                className="ga-h2-cta ghost"
                aria-haspopup="menu"
                aria-expanded={loginOpen}
                onClick={() => setLoginOpen((v) => !v)}
              >
                <FiLogIn size={16} />
                <span>Login</span>
                <span className="chev" aria-hidden="true"><IoMdArrowDropdown />
</span>
              </button>
              <div className="ga-h2-login-menu" role="menu" aria-label="Login options">
                <a role="menuitem" className="login-item" href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                  Mutual Fund
                </a>
                <a role="menuitem" className="login-item" href={BACKOFFICE_URL} target="_blank" rel="noopener noreferrer">
                  Backoffice
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`ga-h2-drawer${mobileOpen ? " open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="ga-h2-drawer-backdrop" onClick={() => setMobileOpen(false)} />
        <aside className="ga-h2-drawer-panel" role="dialog" aria-label="Menu">
          <div className="ga-h2-drawer-head">
            <div className="title">Menu</div>
            <button className="close" aria-label="Close" onClick={() => setMobileOpen(false)}>x</button>
          </div>
          <div className="ga-h2-drawer-body">
            <div className="drawer-ctas">
              <a className="drawer-cta primary" href={CLIENT_PORTAL_URL} target="_blank" rel="noopener noreferrer">
                <FiUserPlus size={16} />
                <span>Open your account</span>
              </a>
              <div className="drawer-login">
                <div className="drawer-label">Login</div>
                <a className="drawer-link" href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                  <FiLogIn size={16} />
                  <span style={{ marginLeft: 8 }}>Mutual Fund</span>
                </a>
                <a className="drawer-link" href={BACKOFFICE_URL} target="_blank" rel="noopener noreferrer">
                  <FiLogIn size={16} />
                  <span style={{ marginLeft: 8 }}>Backoffice</span>
                </a>
              </div>
            </div>
            {NAV_ITEMS.map((item) => (
              <div key={item.key} className="drawer-section">
                <div className="drawer-label">{item.label}</div>
                {Array.isArray(item.menu) ? (
                  <div className="drawer-menu">
                    {item.menu.map((m) => (
                      <a key={m.label} className="drawer-link" href={m.href} onClick={() => setMobileOpen(false)}>
                        {m.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a className="drawer-link" href={item.href} onClick={() => setMobileOpen(false)}>
                    Go to {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Scoped styles */}
      <style>{`
        :root {
          --ga-h2-radius: 14px;
          --ga-h2-bg: #ffffff;
          --ga-h2-border: rgba(0,0,0,.08);
          --ga-h2-shadow: 0 0 0 rgba(0,0,0,0);
          --ga-h2-text: rgba(0,0,0,.80);
          --ga-h2-text-strong: #111213;
          --ga-h2-accent: #1976d2; /* Material blue 700-ish */
          --header2-h: 75px; /* expose height for page offset */
          --header-h: var(--header2-h); /* keep compatibility with existing offset usage */
          --subheader-h: 0px; /* SubHeader removed */
        }

        .ga-h2-wrap { position: fixed; top: env(safe-area-inset-top, 0); left: 0; right: 0; z-index: 999; width: 100%; display: flex; justify-content: center; padding: 6px 0; background: transparent; border-bottom: none; }
        .ga-h2-surface { width: 100%; max-width: 1500px; padding: 0 12px; }
        .ga-h2-inner {
          background: var(--ga-h2-bg);
          border: 1px solid var(--ga-h2-border);
          box-shadow: var(--ga-h2-shadow);
          border-radius: 999px; /* edge circle */
          height: var(--header2-h);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          position: relative;
          padding: 0 12px 0 25px;
          gap: 8px;
        }
        .ga-h2-inner.scrolled { box-shadow: none; }

        .ga-h2-left { display: flex; align-items: center; gap: 10px; min-width: 0; justify-content: flex-start; }
        .ga-h2-brand { display: inline-flex; align-items: center; }
        .ga-h2-brand img { display: block; height: 36px; width: auto; object-fit: contain; }
        .ga-h2-burger { display: none; width: 38px; height: 38px; border-radius: 999px; border: 1px solid var(--ga-h2-border); background: #fff; align-items: center; justify-content: center; padding: 0 9px; }
        .ga-h2-burger span { display: block; width: 100%; height: 2px; background: #1b1b1b; border-radius: 2px; }
        .ga-h2-burger span + span { margin-top: 5px; }
        .ga-h2-burger:focus { outline: none; box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.20); }

        .ga-h2-center { display: flex; align-items: center; justify-content: center; }
        .ga-h2-nav { display: flex; align-items: center; gap: 6px; height: 100%; }
        .ga-h2-item { position: relative; height: 100%; display: flex; align-items: center; }
        .ga-h2-link { display: inline-flex; align-items: center; gap: 6px; height: 40px; padding: 0 10px; border-radius: 10px; color: var(--ga-h2-text); text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: .2px; }
        .ga-h2-link:hover { background: rgba(25, 118, 210, .06); color: var(--ga-h2-text-strong); text-decoration: none; }
        .ga-h2-link.btnlike { border: none; background: transparent; cursor: pointer; }
        .ga-h2-link .chev { opacity: .7; margin-left: 2px; }

        .ga-h2-item.has-menu .ga-h2-menu {
          position: absolute; top: calc(100% + 10px); left: 0; min-width: 220px; background: #fff; border: 1px solid var(--ga-h2-border); box-shadow: 0 12px 30px rgba(0,0,0,.12); border-radius: 12px; padding: 8px; opacity: 0; transform: translateY(-4px); pointer-events: none; transition: opacity .16s ease, transform .16s ease; z-index: 10;
        }
        .ga-h2-item.open .ga-h2-menu { opacity: 1; transform: translateY(0); pointer-events: auto; }
        .ga-h2-menu-item { display: block; padding: 10px 12px; border-radius: 8px; color: #111; text-decoration: none; font-weight: 500; }
        .ga-h2-menu-item:hover { background: rgba(25,118,210,.08); text-decoration: none; }

        .ga-h2-right { display: flex; align-items: center; gap: 8px; justify-content: flex-end; }
        .ga-h2-cta { display: inline-flex; align-items: center; gap: 8px; justify-content: center; height: 36px; padding: 0 14px; border-radius: 999px; font-weight: 700; text-decoration: none; border: 1px solid transparent; cursor: pointer; }
        .ga-h2-cta.primary { background: var(--ga-h2-accent); color: #fff; }
        .ga-h2-cta.primary:hover { filter: brightness(1.05); color: #fff; text-decoration: none; }
        .ga-h2-cta.ghost { background: #fff; color: #1b1b1b; border-color: var(--ga-h2-border); }
        .ga-h2-cta.ghost:hover { background: rgba(25,118,210,.06); }

        .ga-h2-login { position: relative; }
        .ga-h2-login .chev { opacity: .7; }
        .ga-h2-login-menu { position: absolute; right: 0; top: calc(100% + 8px); min-width: 220px; background: #fff; border: 1px solid var(--ga-h2-border); box-shadow: 0 12px 30px rgba(0,0,0,.12); border-radius: 12px; padding: 8px; opacity: 0; transform: translateY(-4px); pointer-events: none; transition: opacity .16s ease, transform .16s ease; z-index: 11; }
        .ga-h2-login.open .ga-h2-login-menu { opacity: 1; transform: translateY(0); pointer-events: auto; }
        .login-item { display: block; padding: 10px 12px; border-radius: 8px; color: #111; text-decoration: none; font-weight: 500; }
        .login-item:hover { background: rgba(25,118,210,.08); text-decoration: none; }

        /* Remove outlines within header2 scope */
        .ga-h2-wrap, .ga-h2-wrap * { outline: none !important; }

        /* Mobile */
        @media (max-width: 768px) {
          .ga-h2-inner { height: 52px; grid-template-columns: auto 1fr auto; padding-left: 14px; }
          .ga-h2-burger { display: inline-flex; }
          .ga-h2-center { display: none; }
          .ga-h2-brand img { height: 28px; }
          /* hide text labels for header CTAs on mobile, keep icons */
          .ga-h2-right .ga-h2-cta span { display: none; }
          .ga-h2-login .chev { display: none; }
        }

        /* Drawer */
        .ga-h2-drawer { position: fixed; inset: 0; z-index: 1000; pointer-events: none; }
        .ga-h2-drawer.open { pointer-events: auto; }
        .ga-h2-drawer-backdrop { position: absolute; inset: 0; background: rgba(0,0,0,.26); opacity: 0; transition: opacity .18s ease; }
        .ga-h2-drawer.open .ga-h2-drawer-backdrop { opacity: 1; }
        .ga-h2-drawer-panel { position: absolute; top: 0; right: 0; width: min(86vw, 380px); height: 100%; background: #fff; border-left: 1px solid var(--ga-h2-border); box-shadow: -8px 0 26px rgba(0,0,0,.12); transform: translateX(100%); transition: transform .2s ease; display: flex; flex-direction: column; }
        .ga-h2-drawer.open .ga-h2-drawer-panel { transform: translateX(0); }
        .ga-h2-drawer-head { display: flex; align-items: center; justify-content: space-between; padding: calc(12px + env(safe-area-inset-top, 0)) 14px 12px; border-bottom: 1px solid var(--ga-h2-border); }
        .ga-h2-drawer-head .title { font-weight: 700; }
        .ga-h2-drawer-head .close { border: 1px solid var(--ga-h2-border); width: 34px; height: 34px; border-radius: 9px; background: #fff; }
        .ga-h2-drawer-body { padding: 10px 10px calc(16px + env(safe-area-inset-bottom, 0)); overflow: auto; }
        @media (max-width: 768px) {
          .ga-h2-drawer-panel { width: 60vw; left: auto; right: 0; border-left: none; box-shadow: -8px 0 26px rgba(0,0,0,.12); }
        }
        .drawer-ctas { display: grid; gap: 8px; margin-bottom: 12px; }
        .drawer-cta { display: inline-flex; align-items: center; gap: 8px; justify-content: center; height: 40px; padding: 0 14px; border-radius: 999px; font-weight: 700; text-decoration: none; border: 1px solid transparent; cursor: pointer; }
        .drawer-cta.primary { background: var(--ga-h2-accent); color: #fff; }
        .drawer-section { padding: 10px 6px; }
        .drawer-label { font-weight: 700; font-size: 13px; color: rgba(0,0,0,.62); margin-bottom: 6px; text-transform: uppercase; letter-spacing: .4px; }
        .drawer-menu { display: grid; gap: 6px; }
        .drawer-link { display: block; padding: 10px 12px; border-radius: 10px; color: #111; background: #fafafa; border: 1px solid #f0f0f0; text-decoration: none; }
        .drawer-link:hover { background: #f5f7fb; text-decoration: none; }
      `}</style>
    </div>
  );
}

