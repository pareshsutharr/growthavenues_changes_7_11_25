import React from "react";
import { LOGIN_URL, NSE, BSE } from "../constants";

const servicePackages = [
  {
    title: "Wealth Advisory",
    description: "Build a resilient portfolio tailored to your life goals across equity, debt, and alternative assets.",
    features: [
      "Personalized asset allocation",
      "Goal driven plans with regular reviews",
      "Risk managed portfolios backed by research",
    ],
  },
  {
    title: "Portfolio Review Clinic",
    description: "Diagnose underperforming investments and receive a clear action roadmap within 72 hours.",
    features: [
      "Deep dive portfolio analytics",
      "Stress test across market scenarios",
      "Actionable rebalance recommendations",
    ],
  },
  {
    title: "Retirement Readiness",
    description: "Create inflation proof income streams and secure your retirement lifestyle with confidence.",
    features: [
      "Cash flow mapping and budgeting",
      "Tax smart withdrawal strategies",
      "Succession and estate checklist",
    ],
  },
  {
    title: "Family Office Services",
    description: "360 degree support for high net worth families across investments, governance, and reporting.",
    features: [
      "Consolidated reporting",
      "Dedicated advisory pod",
      "Access to curated opportunities",
    ],
  },
  {
    title: "Entrepreneur Liquidity",
    description: "Translate business success into personal wealth with structured liquidity and diversification plans.",
    features: [
      "ESOP and promoter monetisation",
      "Treasury management playbooks",
      "Protection through insurance and trusts",
    ],
  },
  {
    title: "Responsible Investing",
    description: "Align capital with values through ESG, impact, and sustainable investment mandates.",
    features: [
      "ESG scoring and screening",
      "Impact measurement framework",
      "Partner network diligence",
    ],
  },
];

const solutionHighlights = [
  {
    title: "Holistic Planning",
    body: "Integrated advisory across investments, risk cover, tax, estate, and philanthropy ensures every decision works together.",
  },
  {
    title: "Execution Excellence",
    body: "Institutional grade research, proprietary screeners, and disciplined rebalancing power consistent outcomes.",
  },
  {
    title: "Ongoing Partnership",
    body: "Quarterly strategy rooms, transparent reporting, and proactive alerts keep you ahead of change.",
  },
];

const advisorySteps = [
  {
    label: "Discover",
    details: "We map aspirations, responsibilities, and risk appetite to define the mission for your money.",
  },
  {
    label: "Design",
    details: "Our advisory desk drafts multiple scenarios, aligns tax outcomes, and agrees on measurable KPIs.",
  },
  {
    label: "Deliver",
    details: "Dedicated execution specialists onboard portfolios, automate funding, and document every action.",
  },
  {
    label: "Delight",
    details: "We keep score with intuitive reports, bite sized insights, and rapid responses from our team.",
  },
];

function Services() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <style>{`
        .services-page {
          font-family: var(--font-body);
          color: #10212b;
          background: #f4f8fb;
          min-height: 100vh;
        }
        .services-hero {
          background: linear-gradient(112deg, #022f49 8%, #065b88 48%, #0a83be 90%);
          color: #fff;
          padding: clamp(60px, 8vw, 140px) 0;
          text-align: center;
        }
        .services-hero h1 {
          font-weight: 700;
          letter-spacing: -0.5px;
          font-size: clamp(32px, 4vw, 52px);
          margin-bottom: 16px;
        }
        .services-hero p {
          max-width: 720px;
          margin: 0 auto 28px auto;
          font-size: clamp(16px, 1.4vw, 18px);
          line-height: 1.6;
        }
        .membership-row { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
        .chip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 999px; background: rgba(255,255,255,.14); color: #fff; border: 1px solid rgba(255,255,255,.35); font-weight: 600; font-size: 13px; }
        .chip .dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; opacity: .9; }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 600;
          background: #f7fbff;
          color: #022f49;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(15, 53, 79, 0.25);
        }
        .services-container {
          width: 100%;
          max-width: var(--site-max);
          margin: 0 auto;
          padding: clamp(40px, 6vw, 80px) 16px;
        }
        .section-heading {
          text-align: center;
          margin-bottom: clamp(32px, 4vw, 48px);
        }
        .section-heading span {
          color: #0a83be;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 12px;
          display: block;
          margin-bottom: 10px;
        }
        .section-heading h2 {
          font-size: clamp(28px, 3vw, 40px);
          margin-bottom: 12px;
        }
        .section-heading p {
          max-width: 720px;
          margin: 0 auto;
          color: #3e4e59;
          line-height: 1.6;
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: clamp(18px, 3vw, 28px);
        }
        .service-card {
          background: #fff;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 18px 45px rgba(11, 45, 66, 0.08);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(11, 45, 66, 0.12);
        }
        .service-card h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #043a58;
        }
        .service-card p {
          margin: 0;
          color: #4b5c68;
          line-height: 1.6;
        }
        .service-card ul {
          margin: 0;
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: #2f4858;
          font-size: 14px;
        }
        .solution-panels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        .solution-item {
          background: linear-gradient(135deg, rgba(3, 73, 110, 0.1), rgba(10, 131, 190, 0.18));
          border: 1px solid rgba(3, 61, 91, 0.14);
          border-radius: 22px;
          padding: 26px;
        }
        .solution-item h4 {
          font-size: 18px;
          margin-bottom: 12px;
          font-weight: 600;
          color: #043a58;
        }
        .solution-item p {
          margin: 0;
          color: #2f3d47;
          line-height: 1.6;
          font-size: 15px;
        }
        .process-lane {
          display: grid;
          gap: 16px;
          margin-top: 32px;
        }
        .process-card {
          display: grid;
          gap: 12px;
          grid-template-columns: 64px 1fr;
          background: #fff;
          border-radius: 18px;
          padding: 20px 24px;
          align-items: center;
          border: 1px solid rgba(11, 45, 66, 0.08);
        }
        .process-index {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: linear-gradient(135deg, #044b73, #088ed9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 16px;
        }
        .process-copy h5 {
          margin: 0 0 8px 0;
          font-size: 18px;
          color: #043a58;
        }
        .process-copy p {
          margin: 0;
          color: #425463;
          line-height: 1.6;
          font-size: 15px;
        }
        .cta-panel {
          margin-top: clamp(48px, 8vw, 80px);
          background: linear-gradient(98deg, #044b73, #0a83be 58%, #1cb2d9);
          color: #fff;
          border-radius: 28px;
          padding: clamp(32px, 5vw, 56px);
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: flex-start;
        }
        .cta-panel h3 {
          margin: 0;
          font-size: clamp(26px, 3vw, 36px);
        }
        .cta-panel p {
          margin: 0;
          max-width: 520px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
        }
        .cta-panel .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .cta-panel a,
        .cta-panel button {
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .cta-panel a {
          background: #fff;
          color: #044b73;
        }
        .cta-panel button {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
        .cta-panel a:hover,
        .cta-panel button:hover {
          transform: translateY(-2px);
        }
        @media (max-width: 720px) {
          .process-card {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .process-index {
            margin: 0 auto;
          }
          .cta-panel {
            align-items: center;
            text-align: center;
          }
          .cta-panel p {
            max-width: none;
          }
        }
      `}</style>
      <main className="services-page">
        <section className="services-hero">
          <h1>Mutual Fund Solutions for Every Goal</h1>
          <p>
            Behaviour-first SIP planning, diversified categories, and transparent guidance—all executed via our secure investing portal.
          </p>
          <a className="hero-cta ga-cta ga-cta--live" href={LOGIN_URL} target="_blank" rel="noopener noreferrer">Start SIP</a>
          {(NSE || BSE) && (
            <div className="membership-row" aria-label="Exchange Memberships">
              {NSE ? (
                <span className="chip" title={`NSE: ${NSE}`}>
                  <span className="dot" aria-hidden="true" /> NSE {NSE}
                </span>
              ) : null}
              {BSE ? (
                <span className="chip" title={`BSE: ${BSE}`}>
                  <span className="dot" aria-hidden="true" /> BSE {BSE}
                </span>
              ) : null}
            </div>
          )}
        </section>

        <section className="services-container" id="offerings">
          <div className="section-heading">
            <span>What we deliver</span>
            <h2>Signature service suites</h2>
            <p>
              Modular yet connected offerings let you start where you are and scale with confidence as priorities evolve.
            </p>
          </div>
          <div className="service-grid">
            {servicePackages.map((svc) => (
              <article className="service-card ga-card ga-tilt" key={svc.title}>
                <div>
                  <h3 className="ga-title">{svc.title}</h3>
                  <p className="ga-sub">{svc.description}</p>
                </div>
                <ul>
                  {svc.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Why Mutual Funds + MF Categories */}
        <section className="services-container" id="why-mf">
          <div className="section-heading">
            <span>Why Mutual Funds</span>
            <h2>Benefits</h2>
            <p>Diversification, professional management, SIP discipline, and goal-based planning—made accessible.</p>
          </div>
          <div className="service-grid">
            {[
              { t: 'Equity', d: 'Growth-oriented funds for long-term wealth creation.' },
              { t: 'Debt', d: 'Stable income through high-quality fixed income.' },
              { t: 'Hybrid', d: 'Balanced allocation for smoother journeys.' },
              { t: 'Index / ETF', d: 'Low-cost exposures tracking indices.' },
              { t: 'Solution-oriented', d: 'Retirement and Children’s funds aligned to goals.' },
              { t: 'Liquid', d: 'Parking surplus with quick liquidity.' },
            ].map((c) => (
              <article className="service-card ga-card ga-tilt" key={c.t}>
                <h3 className="ga-title">{c.t}</h3>
                <p className="ga-sub">{c.d}</p>
                <a className="btn btn-sm btn-outline-primary mt-1 ga-btn ga-cta ga-cta--live" href={LOGIN_URL} target="_blank" rel="noopener noreferrer">Explore & Start SIP</a>
              </article>
            ))}
          </div>
        </section>

        <section className="services-container" id="solutions">
          <div className="section-heading">
            <span>How we think</span>
            <h2>A framework built for clarity</h2>
            <p>
              We combine institutional processes with boutique attention to craft strategies that respond to changing markets and personal milestones alike.
            </p>
          </div>
          <div className="solution-panels">
            {solutionHighlights.map((item) => (
              <article className="solution-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="process-lane">
            {advisorySteps.map((step, index) => (
              <div className="process-card" key={step.label}>
                <div className="process-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="process-copy">
                  <h5>{step.label}</h5>
                  <p>{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

export default Services;
