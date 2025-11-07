import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CONTACT_PHONE } from "../constants";

export default function ProductServicesMenu({
  open = false,
  onClose = () => {},
  labelledBy = "ps-toggle",
  menuId = "ps-menu",
  showUpcoming = false, // pass true to show upcoming product cards (disabled)
  onMenuSelect = () => {},
  alignRight = false,
}) {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  /** ---------- Data (customize freely) ---------- */
  const products = useMemo(
    () => [
      {
        id: "mf",
        title: "Explore Mutual Funds",
        subtitle: "SIPs, tax-savers, index funds",
        to: "/sip",
        active: true,
        thumb: MFThumbSVG(),
      },
      {
        id: "three-percent",
        title: "UPCOMING",
        subtitle: "",
        to: "/products/three-percent",
        active: false, // upcoming
        tag: "Upcoming",
        thumb: PieThumbSVG(),
      },
      {
        id: "11-50",
        title: "UPCOMING",
        subtitle: "",
        to: "/products/11-50",
        active: false, // upcoming
        tag: "Upcoming",
        thumb: StocksThumbSVG(),
      },
    ],
    []
  );

  const TEL = 'tel:' + String(CONTACT_PHONE || '').replace(/\s+/g, '');
  const services = useMemo(
    () => [
      {
        id: "nse",
        label: "NSE",
        to: "https://investorhelpline.nseindia.com/NICEPLUS",
        icon: NSELogoSVG,
        sub: "Regulatory helpline",
      },
      {
        id: "bse",
        label: "BSE",
        to: "https://www.bseindia.com",
        icon: BSELogoSVG,
        sub: "Regulatory helpline",
      },
      {
        id: "mf",
        label: "Mutual Funds",
        to: "/sip",
        icon: MFThumbSVG,
        sub: "Investing tools",
        menuId: "sip",
      },
      {
        id: "ipo",
        label: "IPO",
        icon: IPOIconSVG,
        active: false,
        tag: "Upcoming",
        sub: "Launching soon",
      },
      
    ],
    []
  );

  /** ---------- A11y focus handling ---------- */
  const focusablesSelector =
    'a[role="menuitem"], button[role="menuitem"], [role="menuitem"][tabindex]';

  const moveFocus = useCallback((dir = 1) => {
    try {
      const root = menuRef.current;
      if (!root) return;
      const items = Array.from(root.querySelectorAll(focusablesSelector)).filter(
        (el) => !el.getAttribute("aria-disabled")
      );
      if (!items.length) return;
      const active = document.activeElement;
      let idx = Math.max(0, items.indexOf(active));
      idx = (idx + dir + items.length) % items.length;
      items[idx].focus();
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      try {
        const root = menuRef.current;
        if (!root) return;
        const first = root.querySelector(focusablesSelector);
        first && first.focus();
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        moveFocus(1);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        moveFocus(-1);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault(); // noop (two columns)
      }
    };
    const onDocClick = (e) => {
      try {
        if (!menuRef.current) return;
        if (!menuRef.current.contains(e.target)) onClose();
      } catch {}
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [open, onClose, moveFocus]);

  const onNavigate = (to, menuId) => {
    try {
      navigate(to);
    } catch {
      window.location.href = to;
    }
    if (menuId) {
      try {
        onMenuSelect(menuId);
      } catch {}
    }
    onClose();
  };

  const visibleProducts = products.filter((p) => p.active || showUpcoming);

  /** ---------- Render ---------- */
  return (
    <div
      id={menuId}
      ref={menuRef}
      className={`ps-menu-wrap${open ? " show" : ""}${alignRight ? " align-right" : ""}`}
      role="menu"
      aria-labelledby={labelledBy}
      hidden={!open}
    >
      <div className="ps-grid" role="group" aria-label="Services & Products">
        {/* Column: Services (left) */}
        <section className="ps-col" aria-label="Services">
          <h3 className="ps-h">Services</h3>
          {services.map(({ id, label, to, icon: Icon, sub, active = true, tag }) =>
            active ? (
              <Link
                key={id}
                to={to}
                role="menuitem"
                className="ps-card"
                onClick={(e) => {
                  e.preventDefault();
                  if (!to) return;
                  // Open external links in new tab, internal via router
                  if (to.startsWith("http")) {
                    try {
                      window.open(to, "_blank");
                    } catch {
                      window.location.href = to;
                    }
                    onClose();
                  } else if (to.startsWith("tel:")) {
                    try {
                      window.location.href = to;
                    } catch {
                      window.location.assign(to);
                    }
                    onClose();
                  } else {
                    onNavigate(to, menuId || id);
                  }
                }}
              >
                <div className="ps-thumb" aria-hidden="true">
                  <Icon />
                </div>
                <div className="ps-meta">
                  <span className="ps-title">{label}</span>
                  <span className="ps-sub">{sub || "Get help & guidance"}</span>
                </div>
              </Link>
            ) : (
              <button
                key={id}
                type="button"
                role="menuitem"
                className="ps-card is-disabled"
                aria-disabled="true"
                tabIndex={-1}
              >
                <div className="ps-thumb" aria-hidden="true">
                  <Icon />
                </div>
                <div className="ps-meta">
                  <span className="ps-title">{label}</span>
                  <span className="ps-sub">{sub || "Coming soon"}</span>
                </div>
                {tag ? <span className="ps-badge">{tag}</span> : null}
              </button>
            )
          )}
        </section>

        {/* Column: Products (right; only 3%, 11/50 here) */}
        <section className="ps-col" aria-label="Products">
          <h3 className="ps-h">Products</h3>

          {visibleProducts
            .filter((p) => p.id !== "mf")
            .map((p) =>
              p.active ? (
                <Link
                  key={p.id}
                  to={p.to}
                  role="menuitem"
                  className="ps-card"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(p.to);
                  }}
                >
                  <div className="ps-thumb" aria-hidden="true">
                    {p.thumb}
                  </div>
                  <div className="ps-meta">
                    <span className="ps-title">{p.title}</span>
                    <span className="ps-sub">{p.subtitle}</span>
                  </div>
                </Link>
              ) : (
                <button
                  key={p.id}
                  type="button"
                  role="menuitem"
                  className="ps-card is-disabled"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  <div className="ps-thumb" aria-hidden="true">
                    {p.thumb}
                  </div>
                  <div className="ps-meta">
                    <span className="ps-title">{p.title}</span>
                    <span className="ps-sub">{p.subtitle}</span>
                  </div>
                  {p.tag && <span className="ps-badge">{p.tag}</span>}
                </button>
              )
            )}
        </section>
      </div>
      {/* Unified CTA */}
      <div className="ps-unified-cta" role="group" aria-label="Schedule Consultancy">
        <a
          href="/contact"
          className="ps-cta-btn"
          role="menuitem"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/contact');
          }}
        >
          Schedule Consultancy
        </a>
      </div>

      {/* no bottom strip; services are in left column */}

      {/* Inline styles (scoped) */}
      <style>{`
        /* Container */
        .ps-menu-wrap {
          position: absolute;
          inset-inline-start: 0;
          top: calc(100% + 8px);
          min-width: clamp(320px, 70vw, 860px);
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 20px 40px rgba(0,0,0,0.10);
          border-radius: 14px;
          padding: 15px;
          z-index: 1000;
          transform-origin: top left;
          transform: scale(0.98) translateY(-6px);
          opacity: 0;
          pointer-events: none;
          transition: transform 160ms ease, opacity 160ms ease;
        }
        .ps-menu-wrap.align-right { inset-inline-start: auto; inset-inline-end: 0; }
        .ps-menu-wrap.show {
          transform: scale(1) translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        /* Grid */
        .ps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .ps-grid { grid-template-columns: 1fr; }
        }

        .ps-col { display: flex; flex-direction: column; gap: 10px; }
        .ps-h {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: .02em;
          color: #111827;
          margin: 4px 2px;
          text-transform: uppercase;
        }

        /* Cards */
        .ps-card {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f9fafb;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 12px;
          text-decoration: none;
          cursor: pointer;
          transition: transform 140ms ease, background 140ms ease, box-shadow 140ms ease;
          outline: none;
        }
        .ps-card:is(:hover, :focus-visible) {
          background: #f3f4f6;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
        }
        .ps-card.is-active {
          background: #eef6ff;
          border-color: #d0e7ff;
        }
        .ps-card.is-disabled {
          cursor: not-allowed;
          opacity: .6;
          background: #f5f5f5;
        }

        .ps-thumb {
          width: 56px; height: 56px;
          display: grid; place-items: center;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 10px;
          overflow: hidden;
        }

        .ps-meta { display: grid; gap: 4px; }
        .ps-title {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }
        .ps-sub {
          font-size: 12px;
          color: #475569;
        }
        .ps-badge {
          justify-self: end;
          font-size: 11px;
          font-weight: 700;
          color: #1f2937;
          background: #fef3c7;
          border: 1px solid #fde68a;
          padding: 4px 8px;
          border-radius: 999px;
          white-space: nowrap;
        }
        /* Ensure badge sits top-right on the card grid */
        .ps-card .ps-badge { grid-column: 3; grid-row: 1; align-self: start; }

        .ps-sep {
          border: none;
          height: 1px;
          background: rgba(0,0,0,0.06);
          margin: 14px 0;
        }

        /* Services row */
        .ps-services {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 10px;
        }
        @media (max-width: 520px) {
          .ps-services { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .ps-service {
          display: grid;
          grid-template-columns: 32px 1fr;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: #f9fafb;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 12px;
          text-decoration: none;
          font-size: 13px;
          color: #0f172a;
          transition: background 140ms ease, transform 140ms ease, box-shadow 140ms ease;
          outline: none;
        }
        .ps-service:is(:hover, :focus-visible) {
          background: #eef2ff;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
        }
        .ps-service-ico { width: 32px; height: 32px; display: grid; place-items: center; }
        .ps-service-label { font-weight: 600; }

        /* Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .ps-menu-wrap, .ps-card, .ps-service { transition: none !important; }
        }

        /* Unified CTA styling */
        .ps-unified-cta { margin-top: 10px; }
        .ps-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px 16px;
          background: linear-gradient(96.91deg, #044B73 13.64%, #0077BA 36.46%, #088ED9 70.39%);
          color: #fff;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: .2px;
          box-shadow: 0 8px 20px rgba(8,142,217,.22);
          transition: transform 140ms ease, box-shadow 140ms ease, filter 140ms ease;
        }
        .ps-cta-btn:is(:hover, :focus-visible) { transform: translateY(-1px); filter: brightness(1.03); box-shadow: 0 10px 24px rgba(8,142,217,.3); }
      `}</style>
    </div>
  );
}

/* ---------- Inline SVG thumbs/icons (no external assets) ---------- */
function MFThumbSVG() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
      <rect x="6" y="10" width="52" height="44" rx="10" fill="#E6F0FF" />
      <path d="M14 38 L26 28 L34 34 L48 22" stroke="#2563EB" strokeWidth="3" fill="none" />
      <circle cx="48" cy="22" r="3" fill="#2563EB" />
    </svg>
  );
}
function PieThumbSVG() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="2" />
      <path d="M32 10 A22 22 0 0 1 54 32 L32 32 Z" fill="#FB923C" />
    </svg>
  );
}
function StocksThumbSVG() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
      <rect x="8" y="14" width="48" height="36" rx="8" fill="#ECFDF5" stroke="#34D399" />
      <path d="M14 42 L24 30 L32 36 L40 26 L50 34" stroke="#10B981" strokeWidth="3" fill="none" />
    </svg>
  );
}
function TicketSVG() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M4 7h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4V7z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 7v10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function ChartSVG() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="6.5" y="11" width="3" height="8" rx="1" stroke="currentColor" fill="none"/>
      <rect x="11.5" y="8" width="3" height="11" rx="1" stroke="currentColor" fill="none"/>
      <rect x="16.5" y="6" width="3" height="13" rx="1" stroke="currentColor" fill="none"/>
    </svg>
  );
}
function PiggySVG() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M7 10c2-3 8-3 10 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="14" rx="7" ry="5" stroke="currentColor" fill="none"/>
      <circle cx="15" cy="12" r="1" fill="currentColor"/>
    </svg>
  );
}
function CalcSVG() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" fill="none"/>
      <rect x="7" y="5" width="10" height="4" rx="1" stroke="currentColor" fill="none"/>
      <path d="M8 12h2M12 12h2M16 12h0M8 15h2M12 15h2M8 18h2M12 18h2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function HelpSVG() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <circle cx="12" cy="12" r="9" stroke="currentColor" fill="none"/>
      <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.3-1.5 1-1.5 1.7V14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="17" r="1" fill="currentColor"/>
    </svg>
  );
}

function PhoneSVG() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M3 5a2 2 0 0 1 2-2h2.2a1.5 1.5 0 0 1 1.48 1.23l.46 2.3a1.5 1.5 0 0 1-.43 1.39l-1.22 1.2a12.5 12.5 0 0 0 6.39 6.39l1.2-1.22a1.5 1.5 0 0 1 1.39-.43l2.3.46A1.5 1.5 0 0 1 21 16.8V19a2 2 0 0 1-2 2h-1c-8.28 0-15-6.72-15-15V5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

// Simplified wordmark-style logos for NSE and BSE
function NSELogoSVG() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
      <rect x="6" y="6" width="52" height="52" rx="12" fill="#FFF2E6" stroke="#FB923C" />
      <text x="32" y="39" textAnchor="middle" fontFamily="Montserrat, 'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="18" fill="#EA580C">NSE</text>
    </svg>
  );
}
function BSELogoSVG() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
      <rect x="6" y="6" width="52" height="52" rx="12" fill="#EAF2FF" stroke="#60A5FA" />
      <text x="32" y="39" textAnchor="middle" fontFamily="Montserrat, 'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="18" fill="#1D4ED8">BSE</text>
    </svg>
  );
}

function IPOIconSVG() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
      <rect x="6" y="6" width="52" height="52" rx="12" fill="#F0F9FF" stroke="#93C5FD" />
      <path d="M18 42 L26 34 L32 38 L42 28 L50 36" stroke="#2563EB" strokeWidth="3" fill="none" />
      <circle cx="50" cy="36" r="3" fill="#2563EB" />
      <text x="16" y="22" fontFamily="Montserrat, 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="12" fill="#1E3A8A">IPO</text>
    </svg>
  );
}
