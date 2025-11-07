import React, { useContext, useEffect, useRef, useState } from "react";
import { FiCheckCircle, FiShield, FiClock, FiTrendingUp, FiArrowDown } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WhoWeAre from "./WhoWeAre";
import CareerwithGrowthAvenues from "./CareerwithGrowthAvenues";
import BehaviorBlueprint from "./BehaviorBlueprint";
import { ContentContext } from "../context/ContentContext";
import { LOGIN_URL } from "../constants";
import Loading from "./Loading";

function Herosection() {
  const { content } = useContext(ContentContext);
  const [showBehaviorModal, setShowBehaviorModal] = useState(false);
  const behaviorPanelRef = useRef(null);

  const handleLearnMore = (event) => {
    event.preventDefault();
    setShowBehaviorModal(true);
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const closeBehaviorModal = () => setShowBehaviorModal(false);

  useEffect(() => {
    if (!showBehaviorModal) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowBehaviorModal(false);
      }
    };

    try {
      behaviorPanelRef.current?.focus({ preventScroll: true });
    } catch {}

    const onPointerDown = (event) => {
      const panelEl = behaviorPanelRef.current;
      if (panelEl && !panelEl.contains(event.target)) {
        setShowBehaviorModal(false);
      }
    };

    try {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", onPointerDown);
      document.addEventListener("touchstart", onPointerDown);
    } catch {}

    return () => {
      try {
        document.removeEventListener("keydown", onKeyDown);
        document.removeEventListener("mousedown", onPointerDown);
        document.removeEventListener("touchstart", onPointerDown);
      } catch {}
    };
  }, [showBehaviorModal]);
  return (
    <>
    {/* <Loading/> */}
      <section id="home" className="hero-wrapper position-relative m-0">
        <div className="container-fluid px-0 hero-fixed">
          <div className="container px-3 hero-container">
          {/* Full-screen height row; columns stretch to match height */}
          <div className="row g-0 align-items-stretch hero-row min-vh-95">
            {/* LEFT: Content */}
            <div className="col-12 d-flex h-100 hero-col-left">
              <div className="hero-left w-100">
                <div className="hero-content">
                  {/* <div className="hero-badge">Smart. Calm. Behavior‑First.</div> */}
                  <h1 className="hero-title">Behaviour‑First Investing</h1>
                  <h3 className="hero-subtitle">Rewriting the rules of wealth creation </h3>
                  <p className="hero-text">
                  
                   We’ve spent years decoding why most investors struggle to create wealth 
                   and discovered that the answer wasn’t in the markets.
                   It was hidden in how they actually behave.That’s why we
                   go beyond market research to design data-backed, behavior-first
                   strategies that turn ordinary investing into lasting wealth.

                  </p>
                  <div className="hero-ctas d-flex flex-wrap gap-2">
                    {/* <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary hero-btn ga-cta ga-cta--live">Start SIP</a> */}
                    <button type="button" onClick={handleLearnMore} className="btn btn-outline-primary hero-btn">Learn more</button>
                  </div>
{/* 
                  <a className="scroll-indicator" href="#trust" onClick={onLearnMore} aria-label="Scroll to details">
                    <FiArrowDown />
                  </a> */}
                </div>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="col-12 d-flex align-items-stretch justify-content-end h-100 pe-0 hero-col-right">
              <div className="hero-right w-100 h-100">
                <img src="assets/landingpageman.png" alt="Investor illustration" className="hero-image" />
              </div>
            </div>
          </div>
          {/* ABSOLUTE OVERLAY BOXES */}
          <div className="ga-overlay">
          {/* Row 1: two boxes side-by-side */}
          <div className="ga-row">
            <div className="ga-box">
              <span className="ga-quote-icon" aria-hidden="true">"</span>
              <p className="ga-quote">
                If you aren't willing to own a stock for ten years, don't even think about owning it for ten minutes.
              </p>
              <p className="ga-author">Warren Buffett</p>
            </div>
            <div className="ga-box">
              <span className="ga-quote-icon" aria-hidden="true">"</span>
              <p className="ga-quote">
                Respect the market. Have an open mind. Know what to stake. Know when to take a loss. Be responsible.
              </p>
              <p className="ga-author">Rakesh Jhunjhunwala</p>
            </div>
          </div>
          {/* Row 2: single box centered under the first row */}
          <div className="ga-row ga-row--center">
            <div className="ga-box">
              <span className="ga-quote-icon" aria-hidden="true">"</span>
              <p className="ga-quote">
                Successful investing is about managing risk, not avoiding it.
              </p>
              <p className="ga-author">Benjamin Graham</p>
          </div>
          </div>
        </div>
          </div>
        </div>

        {showBehaviorModal ? (
          <div className="behavior-panel-wrap">
            <div
              className="behavior-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="behaviorPanelTitle"
              aria-describedby="behaviorPanelDesc"
              ref={behaviorPanelRef}
              tabIndex={-1}
            >
              <button
                type="button"
                className="behavior-panel-close"
                aria-label="Close behavior insights"
                onClick={closeBehaviorModal}
              >
                <span aria-hidden="true">×</span>
              </button>
              <h3 id="behaviorPanelTitle" className="behavior-panel-title">
                Why Behaviour Comes First
              </h3>
              <div className="behavior-panel-body" id="behaviorPanelDesc">
                <p>
                  Most investors spend their lives trying to beat the market. But decades of research — and countless failed
                  strategies — prove the truth: the real battle isn’t outside, it’s inside. Fear, greed, impatience, and
                  overconfidence destroy more wealth than any market downturn ever could.
                </p>
                <p>
                  Great investors have known this for decades. Warren Buffett has often said that temperament matters more than
                  intelligence in investing. Nobel Prize winner Henry Markowitz, the father of Modern Portfolio Theory, admitted
                  that when it came to his own money, he made choices based on behaviour — not formulas.
                </p>
                <p>
                  We stand on the shoulders of these giants. Backed by their timeless wisdom, and powered by years of our own
                  research and analysis, we’ve gone deeper — uncovering why behaviour, not markets, decides wealth creation.
                </p>
                <p>
                  Take a simple example: in 1979, the Sensex was at just 100. Today, it’s at over 81,000. A monthly SIP of only 
                  Rs. 1,000/- would have become Rs. 2.25crore. On paper, the opportunity for extraordinary wealth was there for 
                  everyone. Yet very few investors actually captured those returns. The difference wasn’t the market. It was behaviour.
                </p>
                <p>
                  This difference is what we call the behavioural gap: the distance between potential returns and actual returns,
                  caused by emotional anomalies like fear, greed, and impatience.
                </p>
                <p>
                  This isn’t just theory. Data shows that in a popular Mutual Fund, the average investor stays invested for just 2.5
                  years. Most quit before compounding can do its magic. That’s why so many fail to create long-term wealth — not
                  because markets didn’t perform, but because they didn’t.
                </p>
                <p>
                  Our product is designed to close this gap. By bridging the behavioural gap and tackling emotional bias, we help
                  investors stay invested, stay disciplined, and actually capture the wealth creation that markets deliver.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      {/* <BehaviorBlueprint /> */}
      {/* this is who we are page section  */}
     <WhoWeAre/>

    {/* <CareerwithGrowthAvenues/> */}


      {/* Component-scoped styles */}
      <style>{`

:root{
  /* Overlay positioning + sizing */
  --ga-top: clamp(18px, 7vw, 96px);
  --ga-right: clamp(52px, 12vw, 180px);
  --ga-box-w: clamp(230px, 14vw, 188px);
  --ga-box-h: auto;
  --ga-gap: clamp(10px, 1.6vw, 16px);
}


/* Helpers */
.min-vh-95 { min-height: 100vh; }


/* HERO BASE */
.hero-wrapper { width: 100%; height: 100%; position: relative;}
.hero-row { min-height: 100vh; }
@media (min-width: 992px) { .hero-fixed { width: 100%; } }

/* Ensure overlay positions relative to this capped container */
.hero-container { position: relative; z-index: 0; overflow: hidden; }

/* 40/60 split for hero columns on desktop */
@media (min-width: 992px){
  .hero-col-left { flex: 0 0 40%; max-width: 40%; }
  .hero-col-right { flex: 0 0 60%; max-width: 60%; }
}


/* Vertically center the text block from top-to-bottom */
  .hero-left { display: flex; align-items: center; padding: 16px 20px; min-height: 92vh; }
  .hero-content { width: 100%; text-align: center; }

.hero-badge { display: inline-block; font-weight: 700; font-size: 12px; letter-spacing: .4px; text-transform: uppercase; background: rgba(4,75,115,.08); color: #044B73; border: 1px solid rgba(4,75,115,.18); padding: 6px 10px; border-radius: 999px; margin-bottom: 8px; }
.hero-title {
  font-family: var(--font-body);
  font-weight: 700; line-height: 1.15; margin: 0 0 8px 0; padding:2px; font-size: clamp(28px, 3vw, 40px);
  background: linear-gradient(96.91deg, #044B73 13.64%, #0077BA 36.46%, #088ED9 70.39%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.hero-subtitle { font-family: var(--font-body); font-weight: 500; font-size: 25px; line-height: 1.15; margin: 0 0 10px 0; }
.hero-text { font-family: var(--font-body); font-weight: 500; font-size: 17px; line-height: 1.4; margin: 0; color: #1b1b1b; }
.hero-btn { min-width: 132px; min-height: 42px; border-radius: 24px; font-weight: 700; }
.hero-ctas { justify-content: center; }
.hero-btn.btn-primary { background: linear-gradient(96.91deg, #044B73 13.64%, #0077BA 36.46%, #088ED9 70.39%); border: none; }
.hero-btn.btn-outline-primary { border-color: #044B73; color: #044B73; }
.hero-btn.btn-outline-primary:hover { background: #044B73; color: #fff; }

.hero-highlights li { font-size: 14px; color: #374151; background: #fff; border: 1px solid rgba(0,0,0,0.06); padding: 6px 10px; border-radius: 999px; }

.scroll-indicator { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 999px; margin-top: 12px; color: #044B73; border: 1px solid rgba(4,75,115,.25); }
.scroll-indicator:hover { background: rgba(4,75,115,.06); text-decoration: none; }

/* RIGHT IMAGE */
.hero-right { padding: 0; margin-left: 0; }
.hero-image { display: block; width: 100%; height: 92vh; object-fit: cover; object-position: right center; margin: 0; }

/* OVERLAY GROUP */
.ga-overlay{
  display: grid;
  gap: var(--ga-gap);
  width: min(100%, calc(var(--ga-box-w) * 2 + var(--ga-gap)));
  margin: clamp(28px, 6vw, 48px) auto 0;
  justify-items: stretch;
}
@media (max-width: 767.98px){
  .ga-overlay{
    display: none;
  }
}
  
@media (min-width: 768px){
  .ga-overlay{
    margin-inline: auto clamp(16px, 6vw, 40px);
    justify-items: end;
  }
}
@media (min-width: 992px){
  .ga-overlay{
    position: absolute;
    top: var(--ga-top);
    right: 0; /* stay within hero max-width container */
    margin: 0;
    width: calc(var(--ga-box-w) * 2 + var(--ga-gap));
    display: grid;
    justify-items: stretch;
    z-index: 3;
  }
}
.ga-row{
  display: grid;
  gap: var(--ga-gap);
  grid-template-columns: repeat(auto-fit, minmax(min(160px, var(--ga-box-w)), 1fr));
}
.ga-row.ga-row--center{
  justify-items: center;
  grid-template-columns: minmax(auto, var(--ga-box-w));
  margin-inline: auto;
}

/* Dark theme tweaks */
[data-theme="dark"] .hero-subtitle { color: #e5e7eb; }
[data-theme="dark"] .hero-text { color: #cbd5e1; }
[data-theme="dark"] .hero-highlights li { background: rgba(255,255,255,0.04); color: #e5e7eb; border-color: rgba(255,255,255,0.12); }
[data-theme="dark"] .scroll-indicator { color: #dbeafe; border-color: rgba(255,255,255,0.18); }

/* BOX VISUALS */
.ga-box{
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 11.5px;
  line-height: 1.58;
  color: rgba(240, 246, 255, 0.9);
  width: 100%;
  max-width: var(--ga-box-w);
  min-height: var(--ga-box-h);
  padding: 16px 20px 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background:
    linear-gradient(148deg, rgba(255, 255, 255, 0.2) 0%, rgba(24, 104, 166, 0.14) 45%, rgba(6, 44, 82, 0.38) 100%),
    rgba(4, 36, 68, 0.22);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.32),
    0 18px 28px rgba(6, 24, 54, 0.18);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  backdrop-filter: blur(16px) saturate(140%);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.ga-box:hover{
  transform: translateY(-4px);
  box-shadow: 0 24px 42px rgba(6, 24, 54, 0.26);
  border-color: rgba(255, 255, 255, 0.34);
}
.ga-box::before{
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 18px;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.1) 58%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.78;
  pointer-events: none;
  mix-blend-mode: screen;
}
.ga-box::after{
  content: "";
  position: absolute;
  bottom: -36px;
  right: -32px;
  width: 130px;
  height: 130px;
  background: radial-gradient(circle, rgba(18, 120, 192, 0.32) 0%, rgba(18, 120, 192, 0) 70%);
  opacity: 0.42;
  pointer-events: none;
}
.ga-box > *{
  position: relative;
  z-index: 1;
}
.ga-quote{
  margin: 0;
  font-size: 12.5px;
  line-height: 1.55;
  font-weight: 500;
  color: rgba(240, 246, 255, 0.88);
}
.ga-author{
  margin: 0;
  font-size: 10.5px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(240, 246, 255, 0.58);
}
.ga-author::before{
  content: "- ";
  color: rgba(240, 246, 255, 0.42);
}
.ga-quote-icon{
  position: absolute;
  top: 14px;
  right: 18px;
  font-size: 48px;
  font-family: var(--font-heading);
  color: rgba(255, 255, 255, 0.18);
  line-height: 1;
  pointer-events: none;
}

/* Behaviour insights panel */
.behavior-panel-wrap{
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 72px 24px 24px;
  background: rgba(2, 46, 74, 0.45);
  backdrop-filter: blur(6px);
}
.behavior-panel{
  position: relative;
  margin: 0 auto;
  width: min(680px, 92vw);
  max-height: min(85vh, 640px);
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(4, 78, 118, 0.12);
  box-shadow: 0 28px 60px rgba(2, 46, 74, 0.16), 0 10px 28px rgba(2, 46, 74, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  pointer-events: auto;
}
.behavior-panel::before{
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 18px;
  padding: 1px;
  background: linear-gradient(120deg, rgba(4, 75, 115, 0.4), rgba(0, 119, 186, 0.25), rgba(8, 142, 217, 0.35));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.behavior-panel-title{
  margin: 0;
  padding: 32px 36px 16px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(20px, 2.4vw, 30px);
  color: #044B73;
}
.behavior-panel-body{
  padding: 0 36px 32px;
  overflow-y: auto;
  color: #1f2933;
  font-family: var(--font-body);
  font-size: clamp(15px, 1.1vw, 17px);
  line-height: 1.75;
}
.behavior-panel-body p{
  margin-bottom: 16px;
}
.behavior-panel-body p:last-child{
  margin-bottom: 0;
}
.behavior-panel-close{
  position: absolute;
  top: 18px;
  right: 22px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(4, 78, 118, 0.14);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(4, 75, 115, 0.18);
  font-size: 20px;
  font-weight: 700;
  color: #044B73;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.behavior-panel-close:hover{
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(4, 75, 115, 0.24);
}
.behavior-panel-close span{
  line-height: 1;
  transform: translateY(-1px);
}
.behavior-panel-close:focus-visible{
  outline: 3px solid rgba(8, 142, 217, 0.35);
  outline-offset: 2px;
}

@media (max-width: 767.98px){
  .behavior-panel-wrap{
    padding: 48px 16px 16px;
    align-items: flex-start;
  }
  .behavior-panel{
    width: 100%;
    max-height: calc(100vh - 96px);
  }
  .behavior-panel-title{
    padding: 22px 20px 10px;
  }
  .behavior-panel-body{
    padding: 0 20px 24px;
    font-size: 14px;
  }
}

/* RESPONSIVE REFINEMENTS */
@media (max-width: 991.98px){
  .hero-row { min-height: auto; }
  .hero-left { min-height: auto; align-items: flex-start; }
  .hero-image { height: auto; max-height: 70vh; object-fit: contain; object-position: center; }
  .hero-content { text-align: center; }
}

/* Optional: allow slight extra spacing on very wide desktops */
@media (min-width: 1400px){
  .hero-right { margin-left: 60px; }
}



.gwa-wrap {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  background: #f7fbfe; /* subtle section bg, tweak if needed */
}
.gwa-container {
  width: 100%;
  max-width: 1255px;          /* matches your width */
  min-height: 465px;          /* target height; will grow if content wraps */
  display: grid;
  grid-template-columns: 1fr 1fr; /* image | text */
  gap: 28px;
  align-items: center;
}

/* ---- Left image ---- */
.gwa-left { display: flex; justify-content: center; }
.gwa-img-frame {
  padding: 0px;         /* per spec */
  border-radius: 9px;
  background: #f7fbfe;        /* frame background for depth */
  box-shadow: 0 15px 26px rgba(0,0,0,0.03);
  max-width: 573px;           /* target image width container */
}
.gwa-img {
  width: 100%;
  height: auto;
  max-width: 573px;           /* spec width */
  max-height: 422px;          /* spec height */
  border-radius: 9px;
  display: block;
  object-fit: cover;
}

/* ---- Right text ---- */
.gwa-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
.gwa-title {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 600;                           /* SemiBold */
  font-size: clamp(22px, 3.2vw, 40px);        /* up to 40px per spec */
  line-height: 1.47;                          /* 147% */
  letter-spacing: 0;
  background:
    linear-gradient(0deg, #044E76, #044E76),
    linear-gradient(96.91deg, #044B73 13.64%, #0077BA 51.32%, #088ED9 100.68%),
    linear-gradient(0deg, #F2F8FC, #F2F8FC),
    linear-gradient(0deg, #044E76, #044E76);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;                          /* gradient text */
  text-align: left;                            /* right in spec, but left aligns better with LTR; change to right if needed */
}

/* Paragraph */
.gwa-desc {
  margin: 0;
  max-width: 505px;                            /* per spec */
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.63;                           /* 163% */
  letter-spacing: 0;
  color: #444;
  background:#f7fbfe;          /* soft tint from spec's rgba(166,166,166,1) */
  border-radius: 8px;
  padding: 12px;
}

/* CTA button */
.gwa-cta {
  margin-top: 6px;
  height: 52px;                                /* per spec */
  padding: 17px 53px;                          /* per spec */
  background: rgba(21,105,65,1);               /* green */
  color: #fff;
  border: none;
  border-radius: 4px;                           /* per spec */
  font-weight: 600;
  letter-spacing: .2px;
  box-shadow: 0px 15px 26px rgba(0,0,0,0.03);   /* per spec */
  cursor: pointer;
}
.gwa-cta:active { transform: translateY(1px); }

/* ---- Line + Center pill banner under section ---- */
.gwa-line-wrap {
  position: relative;
  padding: 28px 16px 56px;
}
.gwa-line {
  width: 100%;
  max-width: 1628px;                            /* per spec */
  height: 0;
  border-top: 1px solid rgba(0,0,0,0.12);       /* border-width:1 */
  border-radius: 41px;                          /* per spec */
  margin: 0 auto;                               /* center */
}
.gwa-center-pill {
  position: relative;
  max-width: 978px;                             /* per spec */
  height: 57px;                                 /* per spec */
  border-radius: 41px;                          /* per spec */
  border: 1px solid rgba(0,0,0,0.12);           /* per spec */
  margin: -28px auto 0;                         /* overlap line and center */
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gwa-center-text {
  display: inline-block;
  text-align: center;
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: clamp(18px, 2vw, 27px);            /* up to 27px per spec */
  line-height: 1;                                /* 100% */
  color: #0b0b0b;
  padding: 0 16px;
  white-space: nowrap;
}

/* ---- Responsiveness ---- */
@media (max-width: 1200px) {
  .gwa-container {
    gap: 22px;
  }
  .gwa-img-frame { padding: 36px 48px; }
}
@media (max-width: 992px) {
  .gwa-container {
    grid-template-columns: 1fr; /* stack */
    min-height: initial;
  }
  .gwa-left, .gwa-right { justify-content: center; }
  .gwa-right { align-items: center; text-align: center; }
  .gwa-title { text-align: center; }
  .gwa-desc { max-width: 620px; }
  .gwa-center-pill { max-width: 92%; }
}
@media (max-width: 576px) {
  .gwa-img-frame { padding: 22px 20px; }
  .gwa-desc { padding: 10px 12px; }
  .gwa-cta { width: 100%; }
  .gwa-center-text { white-space: normal; line-height: 1.2; }
}

`}</style>
    </>
  );
}

export default Herosection;





