import React, { useMemo, useState } from "react";

const BLUEPRINTS = {
  growth: {
    label: "Compounding trailblazer",
    headline: "You thrive on long-term conviction",
    description:
      "You welcome calculated volatility in exchange for the compounding edge. We anchor behaviour with milestone alerts so emotion never overrides strategy.",
    expectedReturn: 12.5,
    resilienceScore: 74,
    guardrails: [
      "Rule based profit booking when euphoria spikes",
      "Downside buffers through dynamic hedges",
      "Quarterly narrative reset with our research desk",
    ],
    signal: "Market pulse stitched from 27 data feeds",
  },
  legacy: {
    label: "Generational steward",
    headline: "You optimise for harmony across decades",
    description:
      "Capital must serve every generation fairly. We layer governance councils, liquidity ladders, and education cadences to keep families aligned.",
    expectedReturn: 9.1,
    resilienceScore: 88,
    guardrails: [
      "Capital buckets mapped to family charters",
      "Structured liquidity windows every 18 months",
      "Heir readiness labs and documentation sprints",
    ],
    signal: "Relationship intelligence refreshed after every touchpoint",
  },
  liquidity: {
    label: "Strategic deal maker",
    headline: "You balance bold bets with dry powder",
    description:
      "Liquidity fuels your ventures. We choreograph exits, bridge financing, and treasury allocation without diluting upside.",
    expectedReturn: 10.3,
    resilienceScore: 81,
    guardrails: [
      "Scenario tested exit timelines",
      "Treasury ladders synced with cash burn",
      "Risk-off triggers linked to macro regimes",
    ],
    signal: "Deal desk eyes 140 plus private opportunities",
  },
};

function formatMultiple(rate, years) {
  const growthRate = rate / 100;
  const multiple = Math.pow(1 + growthRate, years);
  return multiple.toFixed(2);
}

function BehaviorBlueprint() {
  const [activeKey, setActiveKey] = useState("growth");
  const [horizon, setHorizon] = useState(7);
  const blueprint = BLUEPRINTS[activeKey];

  const projection = useMemo(() => {
    const multiple = formatMultiple(blueprint.expectedReturn, horizon);
    const confidence = Math.min(98, Math.round(blueprint.resilienceScore + horizon * 2));
    const discipline = Math.min(100, Math.round(blueprint.resilienceScore + horizon * 1.5));
    return { multiple, confidence, discipline };
  }, [blueprint, horizon]);

  return (
    <>
      <section className="behavior-lab" id="unique-edge">
        <div className="behavior-shell">
          <header className="behavior-head">
            <span className="behavior-tag">Growth Avenues differentiator</span>
            <h2>Behavior Lab - design your wealth play in real time</h2>
            <p>
              Toggle the priorities that define you. We quantify the behavior-led safeguards and momentum moves your plan would include - no generic templates, only tailored guardrails.
            </p>
          </header>

          <div className="behavior-grid">
            <aside className="behavior-menu" role="tablist" aria-label="Blueprint selector">
              {Object.entries(BLUEPRINTS).map(([key, config]) => {
                const isActive = key === activeKey;
                return (
                  <button
                    key={key}
                    type="button"
                    className={`behavior-chip${isActive ? " behavior-chip--active" : ""}`}
                    onClick={() => setActiveKey(key)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <span className="chip-label">{config.label}</span>
                    <span className="chip-rate">{config.expectedReturn.toFixed(1)}% target CAGR</span>
                  </button>
                );
              })}
            </aside>

            <article className="behavior-body" role="tabpanel">
              <div className="behavior-body__copy">
                <h3>{blueprint.headline}</h3>
                <p>{blueprint.description}</p>
              </div>

              <div className="behavior-slider">
                <label htmlFor="horizon-range">Time horizon: {horizon} years</label>
                <input
                  id="horizon-range"
                  type="range"
                  min="3"
                  max="15"
                  value={horizon}
                  onChange={(event) => setHorizon(Number(event.target.value))}
                />
                <div className="slider-scale" aria-hidden="true">
                  <span>3</span>
                  <span>9</span>
                  <span>15</span>
                </div>
              </div>

              <div className="behavior-insights">
                <div className="insight-card">
                  <h4>Projected wealth multiple</h4>
                  <strong>
                    x{projection.multiple}
                    <span>over {horizon} yrs</span>
                  </strong>
                  <p>{blueprint.signal}</p>
                </div>

                <div className="insight-radials">
                  <div className="radial" data-score={projection.confidence}>
                    <div
                      className="radial-ring"
                      style={{
                        background: `conic-gradient(#0a82b8 ${projection.confidence * 3.6}deg, rgba(10,130,184,0.18) 0)`,
                      }}
                    />
                    <div className="radial-inner">
                      <span>{projection.confidence}%</span>
                      <small>confidence index</small>
                    </div>
                  </div>
                  <div className="radial" data-score={projection.discipline}>
                    <div
                      className="radial-ring"
                      style={{
                        background: `conic-gradient(#156941 ${projection.discipline * 3.6}deg, rgba(21,105,65,0.18) 0)`,
                      }}
                    />
                    <div className="radial-inner">
                      <span>{projection.discipline}%</span>
                      <small>discipline guardrail</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="behavior-guardrails">
                <h4>Signature guardrails we deploy</h4>
                <ul>
                  {blueprint.guardrails.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="behavior-cta">
                <div>
                  <h4>Your personalised blueprint in 48 hours</h4>
                  <p>
                    Share your brief - our desk will translate this configuration into a bespoke action memo with portfolio moves, communication cadence, and success markers.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => window?.open(`mailto:hello@growthavenues.in?subject=${encodeURIComponent("My Behavior Lab blueprint")}`)}
                >
                  Email my blueprint
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .behavior-lab {
          padding: clamp(56px, 8vw, 96px) 0;
          background: #f4f9fc;
        }
        .behavior-shell {
          width: min(1160px, 94vw);
          margin: 0 auto;
          display: grid;
          gap: clamp(32px, 5vw, 48px);
        }
        .behavior-head {
          text-align: center;
          display: grid;
          gap: 16px;
          color: #133042;
        }
        .behavior-tag {
          display: inline-flex;
          align-self: center;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(4, 75, 115, 0.1);
          color: #044b73;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 12px;
        }
        .behavior-head h2 {
          margin: 0;
          font-size: clamp(28px, 3.3vw, 42px);
          font-weight: 700;
          letter-spacing: -0.2px;
        }
        .behavior-head p {
          margin: 0;
          max-width: 720px;
          justify-self: center;
          line-height: 1.6;
        }
        .behavior-grid {
          display: grid;
          grid-template-columns: minmax(200px, 260px) 1fr;
          gap: clamp(24px, 4vw, 36px);
        }
        .behavior-menu {
          display: grid;
          gap: 16px;
          align-content: start;
        }
        .behavior-chip {
          border: 1px solid rgba(4, 75, 115, 0.12);
          background: #fff;
          border-radius: 18px;
          padding: 18px;
          text-align: left;
          display: grid;
          gap: 6px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          cursor: pointer;
        }
        .behavior-chip:hover {
          transform: translateX(4px);
          box-shadow: 0 16px 32px rgba(4, 60, 90, 0.12);
        }
        .behavior-chip--active {
          border-color: rgba(4, 75, 115, 0.4);
          box-shadow: 0 18px 40px rgba(4, 60, 90, 0.14);
        }
        .chip-label {
          font-weight: 600;
          color: #033457;
          font-size: 16px;
        }
        .chip-rate {
          font-size: 13px;
          color: #0a82b8;
          font-weight: 500;
        }
        .behavior-body {
          background: #fff;
          border-radius: 26px;
          border: 1px solid rgba(4, 75, 115, 0.1);
          padding: clamp(28px, 4vw, 38px);
          display: grid;
          gap: clamp(20px, 3vw, 30px);
          box-shadow: 0 24px 48px rgba(5, 45, 70, 0.14);
        }
        .behavior-body__copy h3 {
          margin: 0 0 8px 0;
          font-size: clamp(22px, 2.4vw, 30px);
          color: #022b40;
        }
        .behavior-body__copy p {
          margin: 0;
          color: #3c4b59;
          line-height: 1.6;
        }
        .behavior-slider {
          display: grid;
          gap: 12px;
        }
        .behavior-slider label {
          font-weight: 600;
          color: #033457;
        }
        .behavior-slider input[type="range"] {
          accent-color: #0a82b8;
        }
        .slider-scale {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #6b7a88;
        }
        .behavior-insights {
          display: grid;
          grid-template-columns: minmax(220px, 1fr) minmax(220px, 1fr);
          gap: clamp(18px, 3vw, 28px);
          align-items: stretch;
        }
        .insight-card {
          background: linear-gradient(130deg, rgba(4, 75, 115, 0.92), rgba(10, 130, 184, 0.88));
          color: #fff;
          border-radius: 22px;
          padding: clamp(22px, 3vw, 28px);
          display: grid;
          gap: 12px;
        }
        .insight-card h4 {
          margin: 0;
          font-size: 16px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .insight-card strong {
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 700;
        }
        .insight-card strong span {
          display: block;
          font-size: 14px;
          font-weight: 500;
          margin-top: 4px;
        }
        .insight-card p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
        }
        .insight-radials {
          display: flex;
          gap: clamp(18px, 3vw, 28px);
          justify-content: center;
          align-items: center;
        }
        .radial {
          position: relative;
          width: clamp(130px, 18vw, 160px);
          height: clamp(130px, 18vw, 160px);
          display: grid;
          place-items: center;
        }
        .radial-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transition: background 0.3s ease;
        }
        .radial-inner {
          position: absolute;
          width: 70%;
          height: 70%;
          border-radius: 50%;
          background: #fff;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 12px;
          gap: 4px;
          box-shadow: inset 0 0 0 1px rgba(4, 75, 115, 0.08);
        }
        .radial-inner span {
          font-weight: 700;
          font-size: 20px;
          color: #022b40;
        }
        .radial-inner small {
          font-size: 11px;
          color: #4e5d6b;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .behavior-guardrails h4 {
          margin: 0 0 10px 0;
          font-size: 16px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0a82b8;
        }
        .behavior-guardrails ul {
          margin: 0;
          padding-left: 18px;
          display: grid;
          gap: 6px;
          color: #2c3d49;
        }
        .behavior-cta {
          background: linear-gradient(110deg, rgba(4, 75, 115, 0.94), rgba(21, 105, 65, 0.92));
          border-radius: 22px;
          padding: clamp(22px, 3.6vw, 32px);
          display: grid;
          gap: 14px;
          color: #fff;
        }
        .behavior-cta h4 {
          margin: 0;
          font-size: 20px;
        }
        .behavior-cta p {
          margin: 0;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.86);
        }
        .behavior-cta button {
          justify-self: start;
          padding: 12px 24px;
          border-radius: 999px;
          border: none;
          background: #fff;
          color: #044b73;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .behavior-cta button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(4, 60, 90, 0.18);
        }
        @media (max-width: 992px) {
          .behavior-grid {
            grid-template-columns: 1fr;
          }
          .behavior-menu {
            grid-auto-flow: column;
            grid-auto-columns: minmax(180px, 1fr);
            overflow-x: auto;
            padding-bottom: 8px;
          }
          .behavior-chip {
            min-width: 200px;
          }
          .behavior-insights {
            grid-template-columns: 1fr;
          }
          .insight-radials {
            justify-content: space-evenly;
          }
          .behavior-cta button {
            justify-self: center;
          }
        }
        @media (max-width: 576px) {
          .behavior-head p {
            max-width: none;
          }
          .behavior-chip {
            padding: 16px;
          }
          .insight-radials {
            flex-direction: column;
          }
          .radial {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </>
  );
}

export default BehaviorBlueprint;
