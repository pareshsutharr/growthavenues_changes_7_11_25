import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


function CareerwithGrowthAvenues() {
  return (
    <>
      {/* Google Fonts */}
\n{/* Page Styles (same file) */}
      <style>{`
        :root{
          --brand-primary: #044E76; /* rgba(4,78,118,1) */
          --brand-accent: #156941;  /* rgba(21,105,65,1) */
          --glass-grad: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.58) 0.01%);
        }
        body{ margin:0; }
        .career-hero{
          background: var(--brand-primary);
          color: #fff;
          padding: clamp(48px, 8vw, 96px) 0; /* responsive vertical space */
        }
        .career-title{
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(22px, 2.2vw, 32px); /* target ~24px on laptop */
          line-height: 1.47; /* 147% */
          letter-spacing: 0;
          margin-bottom: 10px;
        }
        .career-subtext{
          font-family: var(--font-body);
          font-weight: 500;
          font-size: clamp(13px, 1.2vw, 16px); /* target ~14px */
          line-height: 1.47; /* 147% */
          letter-spacing: 0;
          text-align: center;
          background: var(--brand-accent);
          color: #E9F7EF;
          border-radius: 10px;
          padding: 14px 18px;
          max-width: 720px;
          margin: 0 auto;
        }

        /* Card Grid */
        .career-grid{
          padding: clamp(28px, 6vw, 64px) 0;
          background: #f6fbff;
        }

        .career-card{
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          transition: transform 260ms ease, box-shadow 260ms ease;
          background: #fff;
        }
        .career-card:hover{
          transform: translateY(-10%); /* lift card by 10% */
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }
        .career-img{
          display:block;
          width:100%;
          height: clamp(220px, 28vw, 360px); /* responsive height; target ~343px */
          object-fit: cover;
          object-position: center;
        }
        .glass-bottom{
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 12px;
          height: auto;
          border-radius: 15px;
          padding: clamp(10px, 2.6vw, 20px) clamp(18px, 4.5vw, 28px);
          background: var(--glass-grad);
          backdrop-filter: blur(17.4px);
          -webkit-backdrop-filter: blur(17.4px);
          box-shadow: 0 0 12px rgba(255,255,255,0.37), 0 -3px 4.3px rgba(242,248,252,0.16);
          transition: transform 260ms ease;
          pointer-events: none; /* ensure the anchor underneath gets clicks */
        }
        .career-card:hover .glass-bottom{ transform: translateY(-10%); }

        .glass-title{
          margin:0;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: clamp(16px, 1.6vw, 22px);
          color: #073B4C;
          text-transform: capitalize;
        }

        /* Clickable layer */
        .card-link{
          position:absolute; inset:0; z-index:1; display:block;
        }

        /* Utility refinements */
        .section-cap{ max-width: 980px; }
        .divider{ height: 1px; background: rgba(0,0,0,0.06); margin-top: 20px; }

        /* Improve tap targets on mobile */
        @media (max-width: 575.98px){
          .glass-bottom{ bottom: 10px; left: 10px; right: 10px; }
        }
      `}</style>

      {/* HERO */}
      <section className="career-hero">
        <div className="container section-cap">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10">
              <h1 className="career-title mb-3">Career with Growth Avenues</h1>
              <p className="career-subtext">
                At Growth Avenue, we believe in building more than just careers — we build experiences. Our
                culture, learning initiatives, and opportunities shape every individual into a future leader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="career-grid">
        <div className="container section-cap">
          <div className="row g-4">
            {/* Card 1: Culture */}
            <div className="col-12 col-lg-6">
              <article className="career-card">
                <a className="card-link" href="/careers/culture" aria-label="Explore our culture" />
                <img
                  className="career-img"
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaborating in a bright modern workspace"
                />
                <div className="glass-bottom">
                  <h3 className="glass-title">culture</h3>
                </div>
              </article>
            </div>

            {/* Card 2: Education */}
            <div className="col-12 col-lg-6">
              <article className="career-card">
                <a className="card-link" href="/careers/education" aria-label="Explore learning & education" />
                <img
                  className="career-img"
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2071&auto=format&fit=crop"
                  alt="Person learning online with notes and laptop"
                />
                <div className="glass-bottom">
                  <h3 className="glass-title">education</h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle divider (optional) */}
      <div className="divider" />
    </>
  );
}


export default CareerwithGrowthAvenues


