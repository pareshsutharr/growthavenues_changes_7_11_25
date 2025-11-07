import React from "react";

const stats = [
  { label: "Average client tenure", value: "7.5 years" },
  { label: "Team growth in FY24", value: "38 percent" },
  { label: "Learning hours per advisor", value: "120 plus" },
];

const openRoles = [
  {
    title: "Senior Wealth Manager",
    location: "Mumbai",
    type: "Full time",
    summary: "Own a book of UHNI relationships and craft multi asset strategies that deliver measurable progress.",
    responsibilities: [
      "Lead quarterly strategy reviews with client family offices",
      "Collaborate with research to source differentiated opportunities",
      "Mentor two junior associates on planning and execution",
    ],
  },
  {
    title: "Investment Research Analyst",
    location: "Pune",
    type: "Hybrid",
    summary: "Power decision making with deep analytics across mutual funds, PMS, AIF, and fixed income products.",
    responsibilities: [
      "Build screeners that evaluate risk reward metrics",
      "Author monthly outlook notes for priority segments",
      "Maintain investment committee documentation",
    ],
  },
  {
    title: "Client Experience Lead",
    location: "Remote first",
    type: "Full time",
    summary: "Design and deliver concierge grade touchpoints across onboarding, reporting, and support journeys.",
    responsibilities: [
      "Coordinate with product teams to improve reports",
      "Run NPS surveys and translate insights into action",
      "Create playbooks for events and portfolio briefings",
    ],
  },
];

const culturePillars = [
  {
    title: "Ownership mindset",
    copy: "We trust teams with decisions, provide clarity on outcomes, and celebrate accountable execution.",
  },
  {
    title: "Learning obsession",
    copy: "Weekly teach backs, research huddles, and sponsored certifications keep curiosity alive.",
  },
  {
    title: "Client before self",
    copy: "Every improvement is measured by the value it creates for the families that rely on us.",
  },
];

const benefits = [
  "Health cover for you and your dependents",
  "ESOP pathway after 18 months of stellar performance",
  "Annual learning wallet to fund courses and conferences",
  "Flexi leave policy with true downtime support",
  "Wellness stipend for mental and physical fitness",
  "Workspace of choice with collaboration travel budget",
];

const processSteps = [
  {
    title: "Apply",
    detail: "Share your profile, work samples, or anything that shows why you will be great at the role.",
  },
  {
    title: "Conversation",
    detail: "Meet the hiring manager to discuss goals, expectations, and the real challenges we solve daily.",
  },
  {
    title: "Case study",
    detail: "Solve a practical brief with our team so both sides experience what working together feels like.",
  },
  {
    title: "Bar raiser",
    detail: "Final discussion with leadership on growth path, culture contribution, and compensation.",
  },
];

function Career() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <style>{`
        .career-page {
          font-family: var(--font-body);
          background: #f6f8fb;
          color: #0f1f2c;
          min-height: 100vh;
        }
        .career-hero {
          background: linear-gradient(115deg, #033457 10%, #065782 45%, #0a82b8 85%);
          color: #fff;
          padding: clamp(60px, 9vw, 150px) 0;
          text-align: center;
        }
        .career-hero h1 {
          font-size: clamp(34px, 4vw, 56px);
          margin-bottom: 16px;
          font-weight: 700;
          letter-spacing: -0.4px;
        }
        .career-hero p {
          max-width: 680px;
          margin: 0 auto 30px auto;
          font-size: clamp(16px, 1.6vw, 19px);
          line-height: 1.6;
        }
        .career-hero .cta-group {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }
        .career-hero a,
        .career-hero button {
          padding: 12px 26px;
          border-radius: 999px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .career-hero a {
          background: #fefefe;
          color: #033457;
        }
        .career-hero button {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
        .career-hero a:hover,
        .career-hero button:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(5, 32, 51, 0.3);
        }
        .career-container {
          width: 100%;
          max-width: var(--site-max);
          margin: 0 auto;
          padding: clamp(40px, 6vw, 80px) 16px;
        }
        .stat-banner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 18px;
          margin-top: -60px;
        }
        .stat-card {
          background: #fff;
          border-radius: 18px;
          padding: 26px;
          text-align: center;
          box-shadow: 0 22px 45px rgba(7, 36, 56, 0.12);
        }
        .stat-card strong {
          display: block;
          font-size: 26px;
          color: #033457;
          margin-bottom: 6px;
        }
        .section-heading {
          text-align: center;
          margin-bottom: clamp(32px, 4vw, 48px);
        }
        .section-heading span {
          color: #0a82b8;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 12px;
          display: block;
          margin-bottom: 10px;
        }
        .section-heading h2 {
          margin: 0 0 12px 0;
          font-size: clamp(28px, 3vw, 40px);
        }
        .section-heading p {
          max-width: 720px;
          margin: 0 auto;
          color: #3b4a55;
          line-height: 1.6;
        }
        .role-list {
          display: grid;
          gap: 22px;
        }
        .role-card {
          background: #fff;
          border-radius: 22px;
          padding: clamp(24px, 3vw, 32px);
          border: 1px solid rgba(6, 63, 94, 0.12);
          box-shadow: 0 12px 32px rgba(3, 31, 49, 0.08);
          display: grid;
          gap: 18px;
        }
        .role-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          color: #0a82b8;
          font-weight: 600;
          font-size: 14px;
        }
        .role-card h3 {
          margin: 0;
          font-size: 22px;
          color: #053550;
        }
        .role-card p {
          margin: 0;
          color: #41515d;
          line-height: 1.6;
        }
        .role-card ul {
          margin: 0;
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: #2f4150;
          font-size: 14px;
        }
        .role-card .role-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }
        .role-card a {
          padding: 10px 20px;
          background: linear-gradient(110deg, #044b73, #0a82b8);
          color: #fff;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
        }
        .role-card button {
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid rgba(4, 75, 115, 0.4);
          background: transparent;
          color: #044b73;
          font-weight: 600;
          cursor: pointer;
        }
        .pillars-grid {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .pillar-card {
          background: #fff;
          border-radius: 20px;
          padding: 24px;
          border: 1px solid rgba(6, 63, 94, 0.12);
          min-height: 180px;
        }
        .pillar-card h4 {
          margin: 0 0 10px 0;
          color: #053550;
          font-size: 18px;
        }
        .pillar-card p {
          margin: 0;
          color: #3d4a56;
          line-height: 1.55;
          font-size: 15px;
        }
        .benefit-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px 18px;
          margin-top: 24px;
        }
        .benefit-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: #22323f;
        }
        .benefit-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(110deg, #044b73, #0a82b8);
          margin-top: 6px;
        }
        .process-flow {
          display: grid;
          gap: 18px;
          margin-top: 30px;
        }
        .process-step {
          display: grid;
          gap: 14px;
          grid-template-columns: 70px 1fr;
          background: #fff;
          border-radius: 20px;
          padding: 20px 24px;
          border: 1px solid rgba(8, 80, 118, 0.1);
        }
        .process-step strong {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(140deg, #033457, #0a82b8);
          color: #fff;
          font-size: 16px;
        }
        .process-step h5 {
          margin: 0 0 8px 0;
          font-size: 18px;
          color: #053550;
        }
        .process-step p {
          margin: 0;
          color: #3c4b57;
          line-height: 1.55;
          font-size: 15px;
        }
        .career-cta {
          margin-top: clamp(48px, 8vw, 80px);
          background: linear-gradient(100deg, #013151, #044b73 48%, #0a82b8 90%);
          color: #fff;
          border-radius: 26px;
          padding: clamp(32px, 5vw, 54px);
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: flex-start;
        }
        .career-cta h3 {
          margin: 0;
          font-size: clamp(26px, 3vw, 36px);
        }
        .career-cta p {
          margin: 0;
          max-width: 520px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
        }
        .career-cta a {
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 600;
          background: #fff;
          color: #033457;
          text-decoration: none;
        }
        @media (max-width: 720px) {
          .stat-banner {
            margin-top: -40px;
          }
          .process-step {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .process-step strong {
            margin: 0 auto;
          }
          .career-cta {
            align-items: center;
            text-align: center;
          }
          .career-cta p {
            max-width: none;
          }
        }
      `}</style>
      <main className="career-page">
        <section className="career-hero">
          <h1>Do the most meaningful work of your career</h1>
          <p>
            We are a team of strategists, researchers, technologists, and client champions helping ambitious families stay ahead. If you thrive on responsibility and love solving complex financial puzzles, you belong here.
          </p>
          <div className="cta-group">
            <a href="mailto:careers@growthavenues.in?subject=Career%20at%20Growth%20Avenues">Send your profile</a>
            <button type="button" onClick={() => window?.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
              Explore open roles
            </button>
          </div>
        </section>

        <section className="career-container">
          <div className="stat-banner">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="career-container" id="roles">
          <div className="section-heading">
            <span>Open roles</span>
            <h2>Help us build the future of wealth management</h2>
            <p>
              We hire for potential, collaborative energy, and a commitment to solving for the client. Roles are listed with core expectations, but we value unique strengths.
            </p>
          </div>
          <div className="role-list">
            {openRoles.map((role) => (
              <article className="role-card" key={role.title}>
                <div>
                  <div className="role-meta">
                    <span>{role.location}</span>
                    <span>{role.type}</span>
                  </div>
                  <h3>{role.title}</h3>
                  <p>{role.summary}</p>
                </div>
                <ul>
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="role-actions">
                  <a href={`mailto:careers@growthavenues.in?subject=${encodeURIComponent(role.title + " Application")}`}>
                    Apply now
                  </a>
                  <button type="button" onClick={() => window?.open('https://www.linkedin.com/company/growth-avenues/', '_blank')}>
                    View on LinkedIn
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="career-container" id="culture">
          <div className="section-heading">
            <span>Life at Growth Avenues</span>
            <h2>The culture that powers our promise</h2>
            <p>
              We keep teams small, empower them with context, and ensure every voice is heard. Progress is transparent, feedback is continuous, and support is always available.
            </p>
          </div>
          <div className="pillars-grid">
            {culturePillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <h4>{pillar.title}</h4>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <span className="benefit-bullet" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="career-container" id="process">
          <div className="section-heading">
            <span>Our hiring flow</span>
            <h2>Clear, conversational, and respectful of time</h2>
            <p>
              We move with intent while making sure you always know where things stand. Expect timely feedback at each step and flexibility around your schedule.
            </p>
          </div>
          <div className="process-flow">
            {processSteps.map((step, index) => (
              <div className="process-step" key={step.title}>
                <strong>{`0${index + 1}`}</strong>
                <div>
                  <h5>{step.title}</h5>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="career-container">
          <div className="career-cta">
            <h3>Not seeing the right role yet?</h3>
            <p>
              We are always excited to meet builders, storytellers, and analysts who want to pioneer the next chapter of wealth advisory. Send us your story and we will reach out when the match appears.
            </p>
            <a href="mailto:careers@growthavenues.in?subject=General%20Application">Share your story</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Career;
