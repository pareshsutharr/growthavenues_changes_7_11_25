import React from "react";

const behaviourPrinciples = [
  {
    title: "Idea-Rich",
    copy: "Constantly innovating to challenge conventional wisdom.",
  },
  {
    title: "Data-Driven",
    copy: "Grounding every solution in research and analysis.",
  },
  {
    title: "Deadly Discipline",
    copy: "Ensuring consistency, clarity, and control in every decision.",
  },
];

function About() {
  return (
    <>
      <main id="about" className="about-wrapper">
        <section className="about-hero">
          <div className="about-hero__inner">
            <span className="about-tag">Growth Avenues</span>
            <h1>
              We are here with a clear purpose: to show investors a new and better way of creating wealth. Not by following the
              old rules, but by rewriting them.
            </h1>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section__inner about-section__inner--team">
            <header className="section-heading">
              <span className="section-pill">Team</span>
              <h2>Our strength lies in the diversity and depth of our team.</h2>
              <p>
                With a Chartered Accountant, a PhD in Psychology, an Engineer, experienced traders, and MBAs, we bring together
                financial expertise, behavioral insight, and real-world market experience. This unique blend allows us to bridge the
                gap between knowledge and action, creating solutions that directly address the behavioral challenges investors face.
              </p>
            </header>
          </div>
        </section>

        <section className="about-section about-section--blend">
          <div className="about-section__inner blend-grid">
            <article className="blend-panel">
              <h3>What we do every day</h3>
              <p>
                At our core, we are client advisors, software developers, researchers, and proprietary traders in derivative
                markets. What truly sets us apart is our commitment to Behaviour-First Investing - a principle that drives our advisory
                products and defines our USP.
              </p>
              <p>
                We are the first to bring this approach into practice, developing data-backed strategies and intelligent tools that
                eliminate behavioral bias and help investors stay rational.
              </p>
            </article>
            <article className="story-panel">
              <h3>Behaviour-First Investing isn't just an idea for us</h3>
              <p>
                It's the result of two decades of relentless hard work, countless experiments, and unshakable discipline. We have
                lived through sleepless nights, moments that nearly broke us, and times we stood on the edge of bankruptcy, yet we
                never abandoned our principles.
              </p>
              <p>
                This journey, built on resilience and conviction, is what gives our approach its strength and credibility - because
                we have tested it on ourselves long before bringing it to the world.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section__inner">
            <header className="section-heading">
              <span className="section-pill">Principles</span>
              <h2>We are</h2>
              <p>
                Through this, we are not just advisors or developers. We are builders of rational investors - unlocking the true
                potential of long-term wealth creation by bridging the behavioral gap.
              </p>
            </header>

            <div className="card-grid">
              {behaviourPrinciples.map((principle) => (
                <article className="principle-card" key={principle.title}>
                  <h4>{principle.title}</h4>
                  <p>{principle.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section__inner vision-grid">
            <article className="vision-card" aria-label="Vision statement">
              <h3>Vision</h3>
              <p>
                Our vision is to redefine wealth creation by shifting power away from the markets and back to the investor.
                We envision a future where behavior becomes the foundation of investing, enabling ordinary people to achieve extraordinary wealth.
              </p>
            </article>
            <article className="vision-card" aria-label="Mission statement">
              <h3>Mission</h3>
              <p>
                At Growth Avenues, we are building India's most trusted behaviour-first financial ecosystem - combining idea rich,
                data driven, deadly disciplined investment products that helps investors stay longer on the compounding journey and
                create meaningful wealth.
              </p>
            </article>
          </div>
        </section>
      </main>

      <style>{`
        .about-wrapper{
          background:#F2F8FC;
          color:#102A3A;
          font-family:var(--font-body);
        }
        .about-hero{
          padding:clamp(80px,16vw,140px) 0 clamp(52px,10vw,100px);
          background:linear-gradient(135deg,#012E4A 0%,#035780 52%,#0585B8 100%);
          color:#fff;
          text-align:center;
        }
        .about-hero__inner{
          max-width:940px;
          margin:0 auto;
          padding:0 20px;
          display:grid;
          gap:18px;
          justify-items:center;
        }
        .about-tag{
          display:inline-flex;
          align-items:center;
          width:max-content;
          justify-content:center;
          padding:6px 18px;
          border-radius:999px;
          background:rgba(255,255,255,0.18);
          color:#D9F0FF;
          font-size:clamp(14px,1.4vw,18px);
          font-weight:700;
          letter-spacing:0.18em;
          text-transform:uppercase;
        }
        .about-hero h1{
          margin:0;
          font-size:clamp(30px,4.6vw,54px);
          line-height:1.15;
          letter-spacing:-0.6px;
        }

        .about-section{
          padding:clamp(48px,7vw,88px) 0;
        }
        .about-section__inner{
          width:100%;
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          display:grid;
          gap:clamp(24px,4vw,42px);
        }
        .about-section__inner--team{
          justify-items:center;
          text-align:center;
        }
        .about-section__inner--team .section-heading{
          align-items:center;
          text-align:center;
        }

        .section-heading{
          max-width:760px;
          display:grid;
          gap:18px;
        }
        .section-pill{
          display:inline-flex;
          width:max-content;
          padding:6px 14px;
          border-radius:999px;
          background:rgba(5,133,184,0.12);
          color:#046191;
          font-weight:600;
          font-size:13px;
          letter-spacing:0.16em;
          text-transform:uppercase;
        }
        .section-heading h2{
          margin:0;
          font-size:clamp(28px,3.2vw,40px);
          line-height:1.18;
        }
        .section-heading p{
          margin:0;
          font-size:16px;
          line-height:1.72;
          color:rgba(16,42,58,0.78);
        }

        .about-section--blend{
          background:linear-gradient(180deg,rgba(4,75,115,0.04) 0%,rgba(4,75,115,0) 100%);
        }
        .blend-grid{
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:clamp(24px,5vw,40px);
        }
        .blend-panel,
        .story-panel{
          background:#fff;
          border:1px solid rgba(4,75,115,0.12);
          border-radius:24px;
          padding:clamp(28px,4vw,40px);
          box-shadow:0 18px 32px rgba(4,75,115,0.08);
          display:grid;
          gap:18px;
        }
        .blend-panel h3,
        .story-panel h3{
          margin:0;
          font-size:22px;
          color:#044B73;
        }
        .blend-panel p,
        .story-panel p{
          margin:0;
          font-size:15px;
          line-height:1.7;
          color:rgba(16,42,58,0.8);
        }

        .card-grid{
          display:grid;
          gap:clamp(18px,3vw,28px);
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
        }
        .principle-card{
          background:#fff;
          border:1px solid rgba(4,75,115,0.1);
          border-radius:20px;
          padding:24px;
          box-shadow:0 16px 26px rgba(4,75,115,0.08);
          display:grid;
          gap:12px;
        }
        .principle-card h4{
          margin:0;
          font-size:18px;
          color:#044B73;
        }
        .principle-card p{
          margin:0;
          font-size:15px;
          line-height:1.66;
          color:rgba(16,42,58,0.78);
        }

        .vision-grid{
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:clamp(18px,3vw,32px);
        }
        .vision-card{
          background:linear-gradient(155deg,rgba(4,75,115,0.06) 0%,rgba(255,255,255,0.96) 100%);
          border:1px solid rgba(4,75,115,0.12);
          border-radius:22px;
          padding:clamp(28px,4vw,40px);
          display:grid;
          gap:16px;
          box-shadow:0 18px 30px rgba(4,75,115,0.08);
        }
        .vision-card h3{
          margin:0;
          font-size:20px;
          color:#044B73;
          letter-spacing:0.04em;
          text-transform:uppercase;
        }
        .vision-card p{
          margin:0;
          font-size:15px;
          line-height:1.7;
          color:rgba(16,42,58,0.78);
        }

        @media (max-width: 768px){
          .about-hero h1{
            font-size:clamp(28px,6vw,44px);
          }
          .blend-panel,
          .story-panel,
          .vision-card{
            padding:24px;
          }
        }
        @media (max-width: 576px){
          .about-section{
            padding:40px 0;
          }
          .about-hero{
            padding:88px 0 64px;
          }
          .principle-card,
          .blend-panel,
          .story-panel{
            padding:22px;
          }
          .vision-card{
            text-align:center;
          }
        }
      `}</style>
    </>
  );
}

export default About;









