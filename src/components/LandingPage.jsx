import { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react";
import SeoHead from "./SeoHead";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
// import Header from "./Header";
// import SubHeader from "./SubHeader";
import Header2 from "./Header2";

import Footer from "./Footer";
import WhoWeAre from "./WhoWeAre";
import { MENU_CONFIG, MENU_LOOKUP, DEFAULT_MENU_ID } from "../config/menuConfig";
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Career = lazy(() => import("./Career"));
const Blogs = lazy(() => import("./Blogs"));
const Insights = lazy(() => import("./Insights"));
const ContactUs = lazy(() => import("./ContactUs"));
// Strategy page removed
const Sip = lazy(() => import("./Sip"));
// Admin portal removed for static site
const Downloads = lazy(() => import("./Downloads"));
const Leads = lazy(() => import("./Leads"));
const SipCalculator = lazy(() => import("./SipCalculator"));
import { LOGIN_URL } from "../constants";
import { FiTarget, FiShield, FiCheckCircle, FiUsers, FiTrendingUp, FiBarChart2, FiZap, FiAward, FiChevronUp, } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { AiFillAlert } from "react-icons/ai";
import { SiAwsorganizations } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
function HeroSection() {
  const [showBehaviorModal, setShowBehaviorModal] = useState(false);
  const behaviorPanelRef = useRef(null);
  const previousFocusRef = useRef(null);

  const handleKnowMore = (event) => {
    event.preventDefault();
    previousFocusRef.current = typeof document !== "undefined" ? document.activeElement : null;
    setShowBehaviorModal(true);
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const closeBehaviorModal = useCallback(() => {
    setShowBehaviorModal(false);
  }, []);

  useEffect(() => {
    if (!showBehaviorModal) {
      return;
    }

    if (typeof document === "undefined") {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeBehaviorModal();
        return;
      }

      if (event.key === "Tab") {
        const panelEl = behaviorPanelRef.current;
        if (!panelEl) {
          return;
        }
        const focusableSelectors =
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
        const focusable = Array.from(
          panelEl.querySelectorAll(focusableSelectors)
        ).filter(
          (el) =>
            !el.hasAttribute("disabled") &&
            !el.getAttribute("aria-hidden") &&
            typeof el.focus === "function"
        );

        if (focusable.length === 0) {
          event.preventDefault();
          panelEl.focus({ preventScroll: true });
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (event.shiftKey) {
          if (active === first || !panelEl.contains(active)) {
            event.preventDefault();
            last.focus();
          }
        } else if (active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const onPointerDown = (event) => {
      const panelEl = behaviorPanelRef.current;
      if (panelEl && !panelEl.contains(event.target)) {
        closeBehaviorModal();
      }
    };

    try {
      behaviorPanelRef.current?.focus({ preventScroll: true });
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", onPointerDown);
      document.addEventListener("touchstart", onPointerDown);
    } catch {
      // no-op
    }

    return () => {
      try {
        document.removeEventListener("keydown", onKeyDown);
        document.removeEventListener("mousedown", onPointerDown);
        document.removeEventListener("touchstart", onPointerDown);
      } catch {
        // no-op
      }
    };
  }, [showBehaviorModal, closeBehaviorModal]);

  useEffect(() => {
    if (showBehaviorModal) {
      return;
    }

    if (typeof document === "undefined") {
      previousFocusRef.current = null;
      return;
    }

    const previouslyFocused = previousFocusRef.current;
    if (
      previouslyFocused &&
      typeof previouslyFocused.focus === "function" &&
      document.body.contains(previouslyFocused)
    ) {
      try {
        previouslyFocused.focus({ preventScroll: true });
      } catch {
        previouslyFocused.focus();
      }
    }
    previousFocusRef.current = null;
  }, [showBehaviorModal]);

  return (
    <>
      <section id="home" className="hero-wrapper position-relative">
        <div className="container hero-shell">
          <div className="hero-copy">
            <h1 className="hero-title">Behaviour&#8209;First Investing</h1>
            <h2 className="hero-subtitle">Rewriting the rules of wealth creation</h2>
            <p className="hero-text">
              We&#8217;ve spent years decoding why most investors struggle to create wealth and discovered that the answer wasn&#8217;t in the markets. It was hidden in how they actually behave.That&#8217;s why we go beyond market research to design data-backed, behavior-first strategies that turn ordinary investing into lasting wealth.
            </p>
            <div className="hero-actions">
              <button type="button" onClick={handleKnowMore} className="btn btn-primary hero-btn">
                Know more
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <img src="assets/landingpageman.png" alt="Investor illustration" className="hero-image" />
          </div>
        </div>

        {showBehaviorModal ? (
          <div className="behavior-panel-wrap" role="presentation">
            <span className="behavior-panel-overlay" aria-hidden="true" />
            <div className="behavior-panel-shell">
              <div
                className="behavior-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="behaviorPanelTitle"
                aria-describedby="behaviorPanelDesc"
                ref={behaviorPanelRef}
                tabIndex={-1}
              >
                <div className="behavior-panel-header">
                  <div className="behavior-panel-heading">
                    <h3 id="behaviorPanelTitle" className="behavior-panel-title">
                      Why Behaviour Comes First
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="behavior-panel-close"
                    aria-label="Close behaviour insights"
                    onClick={closeBehaviorModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="behavior-panel-body" id="behaviorPanelDesc">
                  <div className="behavior-panel-scroll">
                    <p>Most investors spend their lives trying to beat the market. But decades of research &mdash; and countless failed strategies &mdash; prove the truth: the real battle isn&rsquo;t outside, it&rsquo;s inside. Fear, greed, impatience, and overconfidence destroy more wealth than any market downturn ever could.</p>
                    <p>Great investors have known this for decades. Warren Buffett has often said that temperament matters more than intelligence in investing. Nobel Prize winner Henry Markowitz, the father of Modern Portfolio Theory, admitted that when it came to his own money, he made choices based on behaviour &mdash; not formulas.</p>
                    <p>We stand on the shoulders of these giants. Backed by their timeless wisdom, and powered by years of our own research and analysis, we&rsquo;ve gone deeper &mdash; uncovering why behaviour, not markets, decides wealth creation.</p>
                    <p>Take a simple example: in 1979, the Sensex was at just 100. Today, it&rsquo;s at over 81,000. A monthly SIP of only Rs. 1,000/- would have become Rs. 2.25crore. On paper, the opportunity for extraordinary wealth was there for everyone. Yet very few investors actually captured those returns. The difference wasn&rsquo;t the market. It was behaviour.</p>
                    <p>This difference is what we call the behavioural gap: the distance between potential returns and actual returns, caused by emotional anomalies like fear, greed, and impatience.</p>
                    <p>This isn&rsquo;t just theory. Data shows that in a popular Mutual Fund, the average investor stays invested for just 2.5 years. Most quit before compounding can do its magic. That&rsquo;s why so many fail to create long-term wealth &mdash; not because markets didn&rsquo;t perform, but because they didn&rsquo;t.</p>
                    <p>Our product is designed to close this gap. By bridging the behavioral gap and tackling emotional bias, we help investors stay invested, stay disciplined, and actually capture the wealth creation that markets deliver.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      {/* this is who we are page section  */}
     <WhoWeAre/>

      <style>{`
        
        .hero-shell {
          display: grid;
          gap: clamp(32px, 7vw, 72px);
          align-items: center;
          justify-items: center;
          text-align: center;
        }

        /* Add spacing around hero section */
        .hero-wrapper {
          padding-top: clamp(110px, 4vw, 48px);
          margin-bottom: clamp(24px, 4vw, 56px);
        }

        @media (min-width: 992px) {
          .hero-shell {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          }
        }

        .hero-copy {
          max-width: 560px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          text-align: center;
        }

        .hero-title {
          margin: 0;
          padding-bottom: 6px;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 1.1;
          background: linear-gradient(110deg, #044B73 0%, #0077BA 52%, #088ED9 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-subtitle {
          margin: 0;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: clamp(20px, 2.5vw, 28px);
          color: #0c2a3f;
        }

        .hero-text {
          margin: 0;
          font-family: var(--font-body);
          font-size: clamp(16px, 1.5vw, 19px);
          line-height: 1.6;
          color: #1a2f40;
          text-align: center;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .hero-btn {
          min-width: 150px;
          min-height: 48px;
          border-radius: 28px;
          font-weight: 600;
          background: linear-gradient(110deg, #044B73 0%, #0077BA 52%, #088ED9 100%);
          border: none;
          box-shadow: 0 18px 32px rgba(4, 75, 115, 0.22);
        }

        .hero-btn:focus-visible {
          outline: 3px solid rgba(8, 142, 217, 0.45);
          outline-offset: 2px;
        }

        .hero-visual {
          display: flex;
          justify-content: flex-end;
        }

        .hero-image {
          width: min(100%, 540px);
          border-radius: 28px;
          // box-shadow: 0 28px 60px rgba(5, 38, 60, 0.24);
          object-fit: cover;
        }

        @media (max-width: 991.98px) {
          .hero-shell {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            align-items: center;
            text-align: center;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-visual {
            justify-content: center;
          }

          .hero-image {
            width: min(100%, 420px);
          }
        }

        .behavior-panel-wrap {
          position: fixed;
          inset: 0;
          z-index: 1400;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(16px, 6vw, 56px);
        }

        .behavior-panel-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4, 17, 33, 0.78);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: behaviorFade 180ms ease-out forwards;
        }

        .behavior-panel-shell {
          position: relative;
          width: min(860px, 100%);
          pointer-events: none;
          display: flex;
          justify-content: center;
          z-index: 1;
        }

        .behavior-panel {
          position: relative;
          width: 100%;
          max-height: calc(100vh - clamp(48px, 10vh, 128px));
          background: #ffffff;
          border-radius: 28px;
          border: 1px solid rgba(8, 142, 217, 0.08);
          box-shadow: 0 38px 80px rgba(5, 38, 60, 0.32);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          pointer-events: auto;
          animation: behaviorSlide 220ms ease-out forwards;
        }

        .behavior-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 10% 4%, rgba(8, 142, 217, 0.14), transparent 45%),
                      radial-gradient(circle at 90% 10%, rgba(4, 75, 115, 0.12), transparent 55%);
          pointer-events: none;
        }

        .behavior-panel-header {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: clamp(24px, 5vw, 36px);
          border-bottom: 1px solid rgba(8, 142, 217, 0.08);
        }

        .behavior-panel-heading {
          flex: 1 1 auto;
          min-width: 0;
        }

        .behavior-panel-title {
          margin: 0;
          font-family: var(--font-body);
          font-size: clamp(24px, 3vw, 30px);
          font-weight: 700;
          color: #04253a;
          line-height: 1.2;
        }

        .behavior-panel-body {
          position: relative;
          flex: 1 1 auto;
          min-height: 0;
          padding: 0 clamp(24px, 5vw, 36px) clamp(26px, 5vw, 40px);
          display: flex;
          flex-direction: column;
        }

        .behavior-panel-scroll {
          flex: 1 1 auto;
          overflow-y: auto;
          padding-right: 6px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 16px;
          line-height: 1.65;
          color: #1f3648;
          -webkit-overflow-scrolling: touch;
        }

        .behavior-panel-scroll p {
          margin: 0;
        }

        .behavior-panel-close {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: none;
          background: rgba(4, 75, 115, 0.1);
          color: #044b73;
          font-size: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 180ms ease, background 180ms ease;
        }

        .behavior-panel-close:hover {
          background: rgba(4, 75, 115, 0.18);
          transform: translateY(-1px);
        }

        .behavior-panel-close:focus-visible {
          outline: 3px solid rgba(8, 142, 217, 0.35);
          outline-offset: 2px;
        }

        @media (max-width: 767.98px) {
          .behavior-panel-wrap {
            padding: clamp(12px, 5vw, 24px);
            align-items: flex-start;
          }

          .behavior-panel {
            max-height: calc(100vh - 32px);
            border-radius: 22px;
          }

          .behavior-panel-header {
            flex-direction: column;
            padding: 22px 20px 14px;
          }

          .behavior-panel-close {
            align-self: flex-end;
            width: 40px;
            height: 40px;
            font-size: 22px;
          }

          .behavior-panel-body {
            padding: 0 20px 20px;
          }
        }

        @keyframes behaviorFade {
          from { opacity: 0; }
          to { opacity: 0.94; }
        }

        @keyframes behaviorSlide {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
// Home-only extra sections for a complete landing experience
function TiltCard({ children }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -6; // rotateX
    const ry = ((x / r.width) - 0.5) * 6;  // rotateY
    setStyle({ transform: `translateY(-6px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)` });
  };
  const onLeave = () => setStyle({ transform: 'translateY(0) rotateX(0) rotateY(0)' });
  return (
    <div className="tilt-card" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={style}>
      {children}
    </div>
  );
}

function HomeExtras() {
  const scrollTop = () => {
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch { window.scrollTo(0,0); }
  };
  const valuesGrid = [
    {
      title: "Compliant Mindset ",
      copy: "We are always ‘Audit-Ready’ in spirit too. Ethics is in our DNA.",
      icon: GiBrain,
      accent: "linear-gradient(135deg, rgba(4, 75, 115, 0.22), rgba(8, 142, 217, 0.28))",
      badge: "linear-gradient(135deg, rgba(4, 75, 115, 0.18), rgba(8, 142, 217, 0.32))",
    },
    {
      title: "Competent Organization",
      copy: "Meritocracy will prevail throughout the organization. We tolerate no mediocracy. We are great learners.",
      icon: SiAwsorganizations,
      accent: "linear-gradient(135deg, rgba(1, 87, 117, 0.25), rgba(0, 180, 204, 0.3))",
      badge: "linear-gradient(135deg, rgba(0, 129, 164, 0.16), rgba(0, 180, 204, 0.32))",
    },
    {
      title: "Proactive Behavior",
      copy: "Whether it is a customer service, adopting new technology or developing investor friendly products we always go an extra-mile to stay ahead. We are always ready to experiment.",
      icon: FaUserTie,
      accent: "linear-gradient(135deg, rgba(25, 101, 104, 0.225), rgba(47, 179, 177, 0.29))",
      badge: "linear-gradient(135deg, rgba(34, 138, 141, 0.20), rgba(57, 188, 185, 0.34))",
    },
    {
      title: "Sense of Urgency",
      copy: "As an organisation and as a country we need to do a lot. We are calm in planning and superfast in action. We have a start-up mentality.",
      icon: AiFillAlert,
      accent: "linear-gradient(135deg, rgba(49, 115, 92, 0.2), rgba(94, 178, 150, 0.28))",
      badge: "linear-gradient(135deg, rgba(68, 147, 118, 0.24), rgba(115, 196, 166, 0.36))",
    },
    
  ];
  return (
    <>

      {/* Primary CTA band */}
      <section className="cta-band py-5">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <h2 className="mb-2">Invest with Behaviour-First Mutual Fund Strategies</h2>
              <p className="mb-0 lead-alt">Seamless onboarding via our secure portal, research-backed guidance, and a partner that plans for your goals.</p>
            </div>
            <div className="col-lg-4 d-flex gap-2 justify-content-lg-end">
              <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-light px-3 py-2 rounded-pill fw-semibold ga-cta ga-cta--live">Start SIP</a>
              <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light px-3 py-2 rounded-pill fw-semibold">Login</a>
            </div>
          </div>
        </div>
      </section>

      {/* Wisdom quotes */}
      <section className="wisdom py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <h3 className="mb-2">Investor Wisdom</h3>
              <p className="text-secondary m-0">Principles to keep your compass steady.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="glass-panel h-100 p-3">
                <p className="mb-2 fw-semibold">“If you aren't willing to own a stock for 10 yeras, don't even think about owing it for 10 minutes.”</p>
                <div className="text-secondary">— Warren Baffett</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="glass-panel h-100 p-3">
                <p className="mb-2 fw-semibold">“Respect the market. Have an open mind. Know what to stake. Know when to take a loss. Be responsible.”</p>
                <div className="text-secondary">— Rakesh Jhunjhunwala</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="glass-panel h-100 p-3">
                <p className="mb-2 fw-semibold">“Successful investing is about managing risk, not avoiding it.”</p>
                <div className="text-secondary">— Benjamin Graham</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="values-section py-5" id="values">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <span className="values-kicker">Our values</span>
              <h3 className="mb-2">Principles that shape every recommendation</h3>
              <p className="text-secondary m-0">
                A behaviour-first practice backed by research, technology, and radical transparency so investors stay rational for the long game.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {valuesGrid.map(({ title, copy, icon: Icon, accent, badge }) => (
              <div className="col-12 col-md-6 col-xl-3" key={title}>
                <div
                  className="values-card h-100"
                  style={{ '--values-accent': accent, '--values-icon-bg': badge }}
                >
                  <span className="values-icon">
                    <Icon />
                  </span>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </section>


      {/* FAQ */}
      <section className="faq py-5" id="faqs">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <h3 className="mb-2">Frequently asked questions</h3>
              <p className="text-secondary m-0">A quick primer before you get started.</p>
            </div>
          </div>
          <div className="accordion" id="homeFAQ">
            {[
              { q: 'How long does account opening take?', a: 'Most clients complete KYC and onboarding within minutes. Some cases may take up to 24–48 hours depending on verification.' },
              { q: 'What are your fees?', a: 'We keep our fee structure transparent and aligned to your chosen services. Your proposal outlines fees before you sign up.' },
              { q: 'Can I pause or change my SIP?', a: 'Yes. You can pause, top-up, or change your SIP as needed. We’ll also recommend step-ups aligned with income changes.' },
              { q: 'Is support available?', a: 'Yes. Our team responds quickly during business hours and we strive for an average response time of ~2 hours.' },
            ].map((item, idx) => (
              <div className="accordion-item" key={idx}>
                <h2 className="accordion-header" id={`faq-h-${idx}`}>
                  <button className={`accordion-button${idx===0?'':' collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq-c-${idx}`} aria-expanded={idx===0?'true':'false'} aria-controls={`faq-c-${idx}`}>
                    {item.q}
                  </button>
                </h2>
                <div id={`faq-c-${idx}`} className={`accordion-collapse collapse${idx===0?' show':''}`} aria-labelledby={`faq-h-${idx}`} data-bs-parent="#homeFAQ">
                  <div className="accordion-body">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Back to top */}
      {/* <button type="button" className="back-top btn btn-primary rounded-pill" onClick={scrollTop} aria-label="Back to top"><FiChevronUp /></button> */}

      <style>{`
        .trust-bar { background: #ffffff; }
        .metric-value { font-weight: 800; font-size: 22px; }
        .metric-label { color: #6b7280; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: .3px; }

        .cta-band { background: linear-gradient(112deg, #012a44 10%, #044b73 52%, #0a82b8 92%); color: #fff; }
        .lead-alt { opacity: .85; }

        .feature-card { border: 1px solid rgba(0,0,0,0.06); border-radius: 14px; transition: box-shadow .2s ease, border-color .2s ease; backdrop-filter: saturate(140%) blur(4px); }
        .feature-card .card-title { font-weight: 700; }
        .feature-card .card-text { color: #374151; }
        .feature-icon-wrap { width: 40px; height: 40px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #e6f0f9, #f6fbff); border: 1px solid rgba(4,75,115,0.12); }
        .feature-icon { color: #044B73; }

        .tilt-scene { perspective: 900px; }
        .tilt-card { transform-style: preserve-3d; transition: transform .15s ease; will-change: transform; }
        .tilt-card:active { transition: transform .05s ease; }

        .values-section { position: relative; background: linear-gradient(180deg, #f6f9fb 0%, #ffffff 68%); }
        .values-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(4, 75, 115, 0.12), transparent 58%),
            radial-gradient(circle at 85% 20%, rgba(8, 142, 217, 0.08), transparent 60%);
          pointer-events: none;
        }
        .values-section .container { position: relative; z-index: 1; }
        .values-kicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 16px;
          border-radius: 999px;
          background: rgba(4, 75, 115, 0.1);
          color: #044B73;
          font-weight: 600;
          letter-spacing: .6px;
          text-transform: uppercase;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .values-card {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          padding: 28px 26px;
          background: #ffffff;
          border: 1px solid rgba(4, 78, 115, 0.12);
          box-shadow: 0 18px 40px rgba(2, 39, 62, 0.08);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .values-card::before {
          content: "";
          position: absolute;
          inset: -45% -35% 65% -35%;
          background: var(--values-accent, rgba(4, 75, 115, 0.12));
          opacity: 0;
          filter: blur(60px);
          transition: opacity .3s ease;
        }
        .values-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 50px rgba(2, 39, 62, 0.18);
        }
        .values-card:hover::before { opacity: 1; }
        .values-card h4 {
          position: relative;
          z-index: 1;
          font-size: 18px;
          font-weight: 600;
          color: #012a44;
          margin-bottom: 10px;
        }
        .values-card p {
          position: relative;
          z-index: 1;
          margin: 0;
          color: rgba(15, 35, 52, 0.78);
          line-height: 1.7;
          font-size: 15px;
        }
        .values-icon {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: var(--values-icon-bg, rgba(4, 75, 115, 0.12));
          color: #012a44;
          margin-bottom: 18px;
          box-shadow: 0 14px 28px rgba(2, 39, 62, 0.12);
        }
        .values-icon svg { width: 22px; height: 22px; }

        .testimonials { background: #f7f9fb; }
        .testimonial-card { border: 1px solid rgba(0,0,0,0.06); }
        .quote-icon { opacity: .65; }

        .disclaimer { background: #f9fafb; }

        .back-top { position: fixed; right: 14px; bottom: 86px; width: 42px; height: 42px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; z-index: 1199; }

        /* Dark theme overrides removed to keep home sections light */

        @media (prefers-reduced-motion: reduce) {
          .tilt-card { transition: none !important; }
        }

        /* Glassmorphism panel (Apple water drop style) */
        .glass-panel {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.35);
          background: radial-gradient(120% 140% at 0% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.14) 30%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.06) 100%),
                      linear-gradient(180deg, rgba(255,255,255,0.28), rgba(255,255,255,0.10));
          -webkit-backdrop-filter: saturate(160%) blur(14px);
          box-shadow: 0 12px 28px rgba(2, 20, 35, 0.15), inset 0 1px 0 rgba(255,255,255,0.35);
          color: #0f172a;
        }
        .glass-panel:hover{
          transform: translateY(-8px);
        }
        .wisdom .glass-panel p { color: #0b1730; }
        .wisdom { background: linear-gradient(180deg, #f8fbff 0%, #f5f8fc 100%); }
      `}</style>
    </>
  );
}

const PAGES = {
  home: HeroSection,
  about: About,
  services: Services,
  'why-mf': Services,
  solutions: Services,
  career: Career,
  blogs: Blogs,
  insights: Insights,
  contact: ContactUs,
  sip: Sip,
  product: Sip,
  leads: Leads,
  downloads: Downloads,
  calculator: SipCalculator,
};

function LandingPage() {
  const [activeMenuId, setActiveMenuId] = useState(DEFAULT_MENU_ID);
  const heroRef = useRef(null);

  const location = useLocation();
  const mapPathToPage = (pathname) => {
    const path = String(pathname || "/").replace(/\/+$/, "");
    if (path === "/") return "home";
    if (path === "/services") return "services";
    if (path === "/why-mf") return "why-mf";
    if (path === "/solutions") return "solutions";
    if (path === "/product") return "product";
    if (path === "/leads") return "leads";
    if (path === "/sip") return "sip";
    if (path === "/calculator") return "calculator";
    if (path === "/calculators") return "calculator";
    if (path === "/blogs") return "blogs";
    if (path === "/insights") return "insights";
    if (path === "/about") return "about";
    if (path === "/contact") return "contact";
    if (path === "/downloads") return "downloads";
    return "home";
  };

  const resolveMenuIdFromComponent = useCallback((componentKey) => {
    const match = MENU_CONFIG.find((item) => item.componentKey === componentKey);
    return match ? match.id : DEFAULT_MENU_ID;
  }, []);

  const activeMenuItem = MENU_LOOKUP[activeMenuId] || MENU_LOOKUP[DEFAULT_MENU_ID];
  const activePage = activeMenuItem.componentKey;
  const Page = PAGES[activePage] || HeroSection;

  // Sync page with hash (so footer/# links work and deep links open correct section)
  useEffect(() => {
    const componentKey = mapPathToPage(location.pathname);
    const nextId = resolveMenuIdFromComponent(componentKey);
    if (nextId !== activeMenuId) {
      setActiveMenuId(nextId);
    }
  }, [location.pathname, activeMenuId, resolveMenuIdFromComponent]);

  useEffect(() => {
    if (!location.hash) return;
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return;
    const item = MENU_LOOKUP[hash];
    if (item && item.id !== activeMenuId) {
      setActiveMenuId(item.id);
    }
  }, [location.hash, activeMenuId]);

  const handleMenuClick = useCallback(
    (menuOrItem) => {
      const menuItem =
        typeof menuOrItem === "string" ? MENU_LOOKUP[menuOrItem] : menuOrItem;
      if (!menuItem) return;
      if (menuItem.id !== activeMenuId) {
        setActiveMenuId(menuItem.id);
      }
      if (typeof window !== "undefined") {
        const { pathname, search, href, origin } = window.location;
        const base = `${pathname}${search}`.replace(/#.*$/, "");
        const hashFragment =
          menuItem.hash && menuItem.hash !== "home" ? `#${menuItem.hash}` : "";
        const newUrl = `${base}${hashFragment}`;
        if (`${origin}${newUrl}` !== href) {
          window.history.replaceState(null, "", newUrl);
          try {
            window.dispatchEvent(
              new HashChangeEvent("hashchange", {
                oldURL: href,
                newURL: `${origin}${newUrl}`,
              })
            );
          } catch {
            // HashChangeEvent unsupported; safe to ignore.
          }
        }
      }
      requestAnimationFrame(() => {
        try {
          heroRef.current?.focus({ preventScroll: true });
        } catch {}
        try {
          heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {}
      });
    },
    [activeMenuId]
  );

  // If on the calculators route, ensure the calculators section is focused via query param
  useEffect(() => {
    try {
      if (location.pathname === "/calculators") {
        const url = new URL(window.location.href);
        if (!url.searchParams.get("sec")) {
          url.searchParams.set("sec", "calculators");
          window.history.replaceState({}, "", url.toString());
        }
      }
    } catch {}
  }, [location.pathname]);

  // Move focus to the swapped HERO content for accessibility
  useEffect(() => {
    const t = setTimeout(() => {
      try { heroRef.current && heroRef.current.focus(); } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, [activePage]);

  // SEO maps (safe defaults)
  const SEO_TITLES = {
    home: "Growth Avenues – Behaviour-First Mutual Fund Strategies",
    "why-mf": "Why Mutual Funds | Growth Avenues",
    solutions: "Mutual Fund Solutions | Growth Avenues",
    sip: "SIP & Goal Planning | Growth Avenues",
    blogs: "Learn – Blogs & Resources | Growth Avenues",
    insights: "Insights | Growth Avenues",
    about: "About Us | Growth Avenues",
    contact: "Contact | Growth Avenues",
    downloads: "Downloads Library | Growth Avenues",
    calculator: "SIP Calculator | Growth Avenues",
    services: "Our Services | Growth Avenues",
    product: "Products | Growth Avenues",
  };
  const SEO_DESCS = {
    home: "Behaviour-first mutual fund distribution and goal-based SIP planning. Simple, disciplined, transparent investing.",
    "why-mf": "Benefits of Mutual Funds: diversification, professional management, SIP discipline, goal-based planning.",
    solutions: "Explore mutual fund categories: Equity, Debt, Hybrid, Index/ETF, Solution-oriented, Liquid.",
    sip: "Plan SIPs with an interactive calculator and goal-based guidance.",
    blogs: "Short explainers on SIPs, risk, asset allocation, ELSS, and more.",
    insights: "Fresh perspectives and explainers on behaviour-first investing.",
    about: "Our mission: behaviour-first investing with research-driven guidance.",
    contact: "Get in touch – book a call, ask a question, or request support.",
    downloads: "Browse research PDFs, playbooks, and client-ready documents.",
    calculator: "Use our SIP calculator to estimate future value and plan contributions.",
    services: "Explore advisory services: wealth, portfolio review, retirement, family office, and more.",
    product: "Explore our products with SIP journeys and calculators to get started.",
  };

  // Basic SEO: update title, meta description, and canonical per section
  useEffect(() => {
    const titles = {
      home: "Growth Avenues — Behaviour‑First Mutual Fund Strategies",
      "why-mf": "Why Mutual Funds | Growth Avenues",
      solutions: "Mutual Fund Solutions | Growth Avenues",
      sip: "SIP & Goal Planning | Growth Avenues",
      blogs: "Learn — Blogs & Resources | Growth Avenues",
      insights: "Insights | Growth Avenues",
      about: "About Us | Growth Avenues",
      contact: "Contact | Growth Avenues",
      downloads: "Downloads Library | Growth Avenues",
      calculator: "SIP Calculator | Growth Avenues",
      services: "Our Services | Growth Avenues",
      product: "Products | Growth Avenues",
      
    };
    const descs = {
      services: "Explore advisory services: wealth, portfolio review, retirement, family office, and more.",
      product: "Explore our products with SIP journeys and calculators to get started.",
      home: "Behaviour‑first mutual fund distribution and goal‑based SIP planning. Simple, disciplined, transparent investing.",
      "why-mf": "Benefits of Mutual Funds: diversification, professional management, SIP discipline, goal‑based planning.",
      solutions: "Explore mutual fund categories: Equity, Debt, Hybrid, Index/ETF, Solution‑oriented, Liquid.",
      sip: "Plan SIPs with an interactive calculator and goal‑based guidance.",
      blogs: "Short explainers on SIPs, risk, asset allocation, ELSS, and more.",
      insights: "Fresh perspectives and explainers on behaviour-first investing.",
      about: "Our mission: behaviour‑first investing with research‑driven guidance.",
      contact: "Get in touch — book a call, ask a question, or request support.",
      downloads: "Browse research PDFs, playbooks, and client‑ready documents.",
      
    };
    try {
      document.title = titles[activePage] || titles.home;
      const ensure = (selector, create) => {
        let el = document.querySelector(selector);
        if (!el && create) {
          el = document.createElement(create.tag);
          Object.entries(create.attrs || {}).forEach(([k,v]) => el.setAttribute(k, v));
          document.head.appendChild(el);
        }
        return el;
      };
      const mDesc = ensure('meta[name="description"]', { tag: 'meta', attrs: { name: 'description' } });
      if (mDesc) mDesc.setAttribute('content', descs[activePage] || descs.home);
      const linkCanon = ensure('link[rel="canonical"]', { tag: 'link', attrs: { rel: 'canonical' } });
      if (linkCanon) linkCanon.setAttribute('href', window.location.origin + '/');
      // Update OpenGraph basic tags
      const ogTitle = ensure('meta[property="og:title"]', { tag: 'meta', attrs: { property: 'og:title' } });
      if (ogTitle) ogTitle.setAttribute('content', document.title);
      const ogDesc = ensure('meta[property="og:description"]', { tag: 'meta', attrs: { property: 'og:description' } });
      if (ogDesc) ogDesc.setAttribute('content', descs[activePage] || descs.home);
    } catch {}
  }, [activePage]);

  // After swapping active page, perform a deferred scroll to target id with header offset.
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const params = new URLSearchParams(location.search);
        const hasHash = !!location.hash;
        const shouldDefer = (location.pathname === "/sip" && params.has("sec")) || hasHash;
        if (!shouldDefer) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, [activePage, location.pathname, location.search, location.hash]);

  // If a hash is present (e.g. /insights#slug), scroll with header offset so content isn't hidden
  useEffect(() => {
    if (!location.hash) return;
    const t = setTimeout(() => {
      try {
        const id = location.hash.replace('#','');
        const el = document.getElementById(id);
        if (!el) return;
        const headerH = 56 + 56; // subheader + header approx
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerH;
        window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <>
      <SeoHead
        title={SEO_TITLES[activePage] || SEO_TITLES.home}
        description={SEO_DESCS[activePage] || SEO_DESCS.home}
        canonical={(typeof window !== 'undefined' ? window.location.origin : '') + '/'}
        og={{ url: (typeof window !== 'undefined' ? window.location.href : '/'), title: SEO_TITLES[activePage] || SEO_TITLES.home, description: SEO_DESCS[activePage] || SEO_DESCS.home }}
        twitter={{ title: SEO_TITLES[activePage] || SEO_TITLES.home, description: SEO_DESCS[activePage] || SEO_DESCS.home, card: 'summary_large_image' }}
      />
      {/* SubHeader as main top bar */}
      {/* <SubHeader /> */}
      {/* Header as sub-navigation */}
      {/* <Header activePage={activePage} onMenuClick={handleMenuClick} /> */}
      {/* Spacer to offset two fixed headers */}
        <Header2 />
      {/* <div
        className="app-fixed-offset"
        style={{
          outline:"none",
          height:
            activePage === 'home'
              ? '100px'
              : 'calc(var(--subheader-h, 56px) + var(--header-h, 56px))',
        }}
      /> */}

      {/* Render only the active section inside HERO shell with transition */}
      <section aria-live="polite" aria-label="Main content" className="hero-swap-shell">
        <div key={activePage} ref={heroRef} tabIndex={-1} className="hero-swap enter">
          {activePage === 'home' ? (
            <HeroSection />
          ) : (
            <Suspense fallback={<div className="hero-loading"><Loading /></div>}>
              {activePage === 'downloads' ? <Downloads embedded /> : activePage === 'calculator' ? <SipCalculator calculatorsOnly /> : <Page />}
            </Suspense>
          )}
        </div>
      </section>

      {/* Home extras for a complete landing page */}
      {activePage === 'home' ? <HomeExtras /> : null}
      {/* legacy demat component removed */}
      <Footer />
      {/* Floating updates widget */}
      <style>{`
        .hero-swap { outline: none; }
        .hero-swap.enter { animation: fadeSlideIn .28s ease both; }
        .hero-loading { padding: 32px; text-align: center; color: #6b7280; }
        @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        /* Remove outlines across landing shell */
        .hero-wrapper, .hero-wrapper * { outline: none !important; }
        .hero-swap-shell, .hero-swap-shell * { outline: none !important; }
        .behavior-panel-wrap, .behavior-panel-wrap * { outline: none !important; }
      `}</style>
      {activePage !== 'home' ? (
        <style>{`
          /* Add top/bottom spacing to all active-page wrappers rendered in hero-swap */
          /* Uniform zero spacing for active-page wrappers */
          .hero-swap > * { margin: 0 !important; padding: 0 !important; }
          /* Explicit page wrappers (if present) */
          .hero-swap-shell .blogs-page,
          .hero-swap-shell .insights-page,
          .hero-swap-shell .services-page,
          .hero-swap-shell .career-page,
          .hero-swap-shell .contactus-page,
          .hero-swap-shell .privacy-page,
          .hero-swap-shell .disclaimer-page,
          .hero-swap-shell .refund-page,
          .hero-swap-shell .page { margin: 0 !important; padding: 0 !important; }
        `}</style>
      ) : null}
      {activePage === 'home' ? (
        <style>{`
          /* Remove borders/outlines on hero and landing page (home) */
          
          .hero-wrapper, .hero-wrapper * { border: none !important; outline: none !important; }
          .hero-swap-shell, .hero-swap-shell * { border: none !important; outline: none !important; }
        `}</style>
      ) : null}
    </>
  );
}

export default LandingPage;
