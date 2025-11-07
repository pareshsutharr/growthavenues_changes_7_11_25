import React from "react";

const heroHighlights = [
  { label: "Fresh perspectives", value: "03 essays" },
  { label: "Core theme", value: "Behaviour-first investing" },
  { label: "Reading time", value: "~15 mins" },
];

const blogPosts = [
  {
    slug: "psychology-behind-stock-market-success",
    category: "Behavioural Finance",
    readTime: "6 min read",
    kicker: "Mindset before markets",
    title: "The Psychology Behind Stock Market Success",
    summary:
      "Mindset, not market noise, determines how investors survive volatility. Mastering your emotions gives every strategy a fighting chance.",
    summaryPoints: [
      "Markets mirror fear, greed, and hope, amplifying every price swing.",
      "Patience, discipline, emotional balance, and adaptability separate durable traders.",
      "Treat psychology as a skill to earn consistent returns through cycles.",
    ],
    content: (
      <>
        <p>
          Most traders believe success in the stock market depends on strategies, technical charts, and insider tips.
          But in reality, your mindset plays a far bigger role than most people realize. Emotional control and
          discipline often decide who wins and who quits early.
        </p>
        <h3>Understanding Market Psychology</h3>
        <p>
          Stock prices move based on human behavior - fear, greed, and hope. When prices rise, greed takes over,
          leading to overbuying. When markets fall, fear causes panic selling. Successful investors, however, learn to
          act opposite to the crowd - buying when others are fearful and selling when others are greedy.
        </p>
        <h3>Key Psychological Traits of Successful Traders</h3>
        <ul>
          <li>
            <strong>Patience:</strong> Waiting for the right opportunity instead of chasing every move.
          </li>
          <li>
            <strong>Discipline:</strong> Following a plan and sticking to stop-losses.
          </li>
          <li>
            <strong>Emotional Balance:</strong> Not letting short-term losses cloud long-term vision.
          </li>
          <li>
            <strong>Adaptability:</strong> Adjusting strategies based on changing market conditions.
          </li>
        </ul>
        <h3>Conclusion</h3>
        <p>
          In the end, mastering your emotions is as important as mastering technical charts. The real edge in trading
          comes not from information, but from self-control and psychological strength.
        </p>
      </>
    ),
  },
  {
    slug: "top-5-mistakes-new-investors-make",
    category: "Investor Coaching",
    readTime: "5 min read",
    kicker: "Learn from common missteps",
    title: "Top 5 Mistakes New Investors Make in the Stock Market",
    summary:
      "Every investor starts eager to win, yet the same avoidable errors derail progress. Spotting them early protects capital and confidence.",
    summaryPoints: [
      "Impulse buys driven by hot tips rarely align with personal goals.",
      "Diversification and risk management keep compounding intact.",
      "Written rules and patience stop emotional exits.",
    ],
    content: (
      <>
        <p>
          Every investor starts with dreams of making profits - but many beginners fall into traps that could have been
          easily avoided. Learning from these mistakes early can save you money and frustration.
        </p>
        <ol>
          <li>
            <strong>Chasing Hot Tips.</strong> Many new investors buy stocks based on "recommendations" from friends,
            social media, or TV analysts without proper research. This often leads to poor decisions and losses.
          </li>
          <li>
            <strong>Ignoring Risk Management.</strong> Never invest all your money in one stock. Diversification is your
            best defense against volatility.
          </li>
          <li>
            <strong>Trading Without a Plan.</strong> Jumping into trades without entry or exit rules is like sailing
            without a compass. A clear plan prevents impulsive actions.
          </li>
          <li>
            <strong>Overtrading.</strong> Frequent buying and selling can eat away profits due to transaction costs and
            emotional stress.
          </li>
          <li>
            <strong>Lack of Patience.</strong> Building wealth through the stock market takes time. Impatient investors
            often sell too early, missing long-term gains.
          </li>
        </ol>
        <h3>Conclusion</h3>
        <p>
          Avoiding these mistakes will not guarantee profits, but it will set a strong foundation for success.
          Remember - the goal is to stay in the game long enough to win.
        </p>
      </>
    ),
  },
  {
    slug: "why-long-term-investing-always-wins",
    category: "Long-term Investing",
    readTime: "5 min read",
    kicker: "Compounding is the edge",
    title: "Why Long-Term Investing Always Wins",
    summary:
      "Compounding turns time into capital's greatest ally. Stay invested, let returns build on themselves, and markets reward patience.",
    summaryPoints: [
      "Compounding lets returns earn additional returns, accelerating growth.",
      "Long-term investors sidestep noise, stress, and trading costs.",
      "Consistency and patience beat frantic attempts to time markets.",
    ],
    content: (
      <>
        <p>
          In a world of fast trades and instant gratification, long-term investing remains the most reliable way to
          build wealth. The magic ingredient? Compounding.
        </p>
        <h3>The Power of Compounding</h3>
        <p>
          Compounding means earning returns on your returns. For example, investing &#8377;1 lakh at 12% annual returns
          grows to &#8377;3.1 lakh in 10 years - without adding more money. The longer you stay invested, the faster your
          wealth multiplies.
        </p>
        <h3>Short-Term vs. Long-Term</h3>
        <p>
          Short-term trading can bring quick profits but comes with high risks and stress. Long-term investing benefits
          from time, dividend reinvestments, and the natural growth of quality companies.
        </p>
        <h3>Famous Example</h3>
        <p>
          Warren Buffett became one of the richest people in the world not by trading daily, but by holding great
          companies for decades. As he says:
        </p>
        <blockquote cite="https://www.berkshirehathaway.com/">
          &ldquo;The stock market is a device for transferring money from the impatient to the patient.&rdquo;
          <footer>&mdash; Warren Buffett</footer>
        </blockquote>
        <h3>Conclusion</h3>
        <p>
          The best time to start investing was yesterday - the second-best time is today. Start early, stay consistent,
          and let time work for you.
        </p>
      </>
    ),
  },
];

function Insights() {
  return (
    <>
      <style>{`
        /* Insights Page - Exact Match with About Page Design */
        .insights-page {
          font-family: var(--font-body) !important;
          color: var(--gray-700);
          background: #ffffff;
        }
        
        .insights-page a {
          color: inherit;
          text-decoration: none;
        }
        
        /* Hero Section - Identical to About Page */
        .insights-hero {
          padding: clamp(80px, 12vw, 140px) 20px;
          background: linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #3182ce 100%);
          color: #ffffff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .insights-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero-inner {
          width: min(1100px, 92vw);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .hero-copy .eyebrow {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-family: var(--font-body) !important;
          margin-bottom: 24px;
        }
        
        .hero-copy h1 {
          max-width: 900px;
          margin: 0 auto 24px;
          font-size: clamp(1.5rem, 3.5vw, 2rem);
          font-weight: 700;
          line-height: 1.3;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          position: relative;
          z-index: 1;
        }
        
        .hero-copy p {
          max-width: 800px;
          margin: 0 auto;
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
          position: relative;
          z-index: 1;
        }
        
        .hero-actions {
          margin-top: 32px;
        }
        
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-weight: 500;
          font-size: 14px;
          font-family: var(--font-body) !important;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .hero-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }
        
        .highlight-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .highlight-value {
          display: block;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 700;
          margin-bottom: 8px;
          color: #ffffff;
          font-family: var(--font-body) !important;
        }
        
        .highlight-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          font-family: var(--font-body) !important;
        }
        
        /* Container - Identical to About Page */
        .insights-container {
          width: min(1100px, 92vw);
          margin: 0 auto;
          padding: clamp(48px, 7vw, 96px) 0;
          box-sizing: border-box;
        }
        
        /* Section Headings - Exact Copy from About Page */
        .section-heading {
          text-align: center;
          margin-bottom: clamp(48px, 7vw, 96px);
        }
        
        .section-heading span {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(26, 54, 93, 0.1);
          color: var(--primary);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-family: var(--font-body) !important;
          margin-bottom: 12px;
        }
        
        .section-heading h2 {
          margin: 12px 0 8px;
          font-size: clamp(1.75rem, 3.5vw, 2.25rem);
          font-weight: 700;
          line-height: 1.2;
          color: var(--primary);
          font-family: var(--font-body) !important;
        }
        
        .section-heading p {
          margin: 0 0 24px 0;
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.6;
          color: var(--gray-600);
          font-weight: 400;
          font-family: var(--font-body) !important;
        }
        
        /* ===== OPTIMIZED INSIGHTS GRID ===== */
        
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        
        .insights-card {
          background: #ffffff;
          border-radius: 16px;
          padding: clamp(28px, 5vw, 40px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--gray-200);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          font-family: var(--font-body) !important;
        }
        
        .insights-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }
        
        .card-eyebrow {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 12px;
        }
        
        .card-separator {
          height: 1px;
          background: #e9ecef;
          margin-bottom: 12px;
        }
        
        .insights-card h3 {
          font-size: clamp(1rem, 2vw, 1.125rem);
          margin-bottom: 24px;
          margin-top: 0;
          color: var(--primary);
          font-weight: 700;
        }
        
        .card-summary {
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.6;
          color: var(--gray-600);
          margin-bottom: 24px;
        }
        
        .card-points {
          list-style: none;
          padding: 0;
          margin: 0 0 18px 0;
        }
        
        .card-points li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--gray-600);
        }
        
        .card-points li::before {
          content: "•";
          position: absolute;
          left: 0;
          top: 0;
          color: var(--primary);
          font-size: 16px;
          font-weight: bold;
        }
        
        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--primary);
          font-size: 0.9rem;
          transition: gap 0.2s ease;
          margin-top: auto;
          margin-bottom: 24px;
        }
        
        .card-link::after {
          content: "→";
          font-size: 1rem;
          transition: transform 0.2s ease;
        }
        
        .card-link:hover {
          gap: 12px;
        }
        
        .card-link:hover::after {
          transform: translateX(4px);
        }
        
        /* ===== OPTIMIZED ARTICLE STYLING ===== */
        
        /* Common Typography Variables */
        .insights-article,
        .insights-article * {
          font-family: var(--font-body) !important;
        }
        
        /* Container Structure */
        .insights-articles {
          width: min(1100px, 92vw);
          margin: 0 auto;
          padding: 0 0 clamp(48px, 7vw, 96px);
          box-sizing: border-box;
        }
        
        .insights-article {
          background: #ffffff;
          border-radius: 16px;
          padding: clamp(48px, 8vw, 64px) clamp(40px, 6vw, 56px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--gray-200);
          margin-bottom: 48px !important;
        }
        
        .insights-article:last-child {
          margin-bottom: 0;
        }
        
        /* Header Section */
        .article-header {
          margin-top: 32px;
          margin-bottom: 0;
        }
        
        .article-header span {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(26, 54, 93, 0.1);
          color: var(--primary);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .article-header h2 {
          margin: 20px 0 16px;
          font-size: clamp(1.375rem, 3vw, 1.875rem);
          font-weight: 700;
          color: var(--primary);
        }
        
        /* Meta Information */
        .article-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
          font-size: 0.9rem;
          color: var(--gray-600);
        }
        
        .article-meta span::before {
          content: "•";
          margin-right: 8px;
          color: var(--gray-400);
        }
        
        .article-meta span:first-child::before {
          content: "";
          margin: 0;
        }
        
        /* Body Content */
        .article-body {
          line-height: 1.6;
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: var(--gray-700);
          margin-bottom: 32px;
        }
        
        .article-body h3 {
          font-size: clamp(1.125rem, 2.5vw, 1.25rem);
          margin: 32px 0 16px;
          color: var(--primary);
          font-weight: 600;
        }
        
        .article-body p {
          margin-bottom: 20px;
        }
        
        .article-body ul,
        .article-body ol {
          padding-left: 24px;
          margin-bottom: 20px;
        }
        
        .article-body li {
          margin-bottom: 12px;
        }
        
        .article-body li strong {
          color: var(--gray-800);
          font-weight: 600;
        }
        
        .article-body blockquote {
          margin: 32px 0;
          padding: 24px;
          border-left: 4px solid var(--primary);
          background: rgba(26, 54, 93, 0.05);
          border-radius: 8px;
          font-style: italic;
        }
        
        .article-body blockquote footer {
          margin-top: 12px;
          font-style: normal;
          font-weight: 600;
          color: var(--gray-700);
        }
        
        /* Footer Section */
        .article-footer {
          margin-top: 40px;
          margin-bottom: 32px;
          display: flex;
          justify-content: flex-end;
        }
        
        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          color: var(--primary);
          background: rgba(26, 54, 93, 0.1);
          border: 1px solid rgba(26, 54, 93, 0.2);
          transition: all 0.2s ease;
        }
        
        .back-to-top:hover {
          background: rgba(26, 54, 93, 0.15);
          transform: translateY(-1px);
        }
        
        /* Responsive Design - Match About Page */
        @media (max-width: 768px) {
          .hero-inner {
            padding: 0 20px;
          }
          
          .hero-highlights {
            grid-template-columns: 1fr;
          }
          
          .insights-grid {
            grid-template-columns: 1fr;
          }
          
          .article-meta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      <main className="insights-page">
        <section className="insights-hero" aria-labelledby="insights-hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Growth Avenues Insights</p>
              <h1 id="insights-hero-title">Behaviour-first market thinking</h1>
              <p>
                Explore deep dives shaped by behavioural finance, disciplined investing, and long-term wealth creation.
                Each essay is crafted to help you act with clarity when markets turn noisy.
              </p>
              {/* <div className="hero-actions">
                <a className="hero-btn" href="#insights-index">
                  Dive into the articles
                </a>
              </div> */}
            </div>
            {/* <div className="hero-highlights" role="list" aria-label="Insights highlights">
              {heroHighlights.map((item) => (
                <div className="highlight-card" key={item.label} role="listitem">
                  <span className="highlight-value">{item.value}</span>
                  <span className="highlight-label">{item.label}</span>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* <section className="insights-container" id="insights-index" aria-labelledby="insights-index-title">
          <div className="section-heading">
            <span>Latest from the desk</span>
            <h2 id="insights-index-title">Read, reflect, act</h2>
            <p>Three practical perspectives to help you stay disciplined, avoid common pitfalls, and build lasting wealth.</p>
          </div>
          <h3 id="bfi" className="mb-3">Behaviour-First Investing</h3>
          <div className="insights-grid">
            {allPosts
              .filter((post) => post.category !== "Market Research")
              .map((post) => (
                <article className="insights-card" key={post.slug}>
                  <span className="card-eyebrow">{post.category}</span>
                  <div className="card-separator"></div>
                  <h3>{post.title}</h3>
                  <p className="card-summary">{post.summary}</p>
                  <ul className="card-points">
                    {post.summaryPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a className="card-link" href={`#${post.slug}`} aria-label={`Read ${post.title}`}>
                    Read article
                  </a>
                </article>
              ))}
          </div>

          <h3 id="market-research" className="mt-4 mb-3">Market Research</h3>
          <div className="insights-grid">
            {allPosts
              .filter((post) => post.category === "Market Research")
              .map((post) => (
                <article className="insights-card" key={post.slug}>
                  <span className="card-eyebrow">{post.category}</span>
                  <div className="card-separator"></div>
                  <h3>{post.title}</h3>
                  <p className="card-summary">{post.summary}</p>
                  <ul className="card-points">
                    {post.summaryPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a className="card-link" href={`#${post.slug}`} aria-label={`Read ${post.title}`}>
                    Read article
                  </a>
                </article>
              ))}
          </div>
        </section>

        <section className="insights-articles" aria-label="Insights articles">
          {allPosts.map((post) => (
            <article className="insights-article" id={post.slug} key={post.slug}>
              <header className="article-header">
                <span>{post.category}</span>
                <h2>{post.title}</h2>
                <div className="article-meta">
                  <span>{post.kicker}</span>
                  <span>{post.readTime}</span>
                </div>
              </header>
              <div className="article-body">{post.content}</div>
              <footer className="article-footer">
                <a className="back-to-top" href="#insights-hero-title">
                  Back to top
                </a>
              </footer>
            </article>
          ))}
        </section>*/}
      </main>
    </>
  );
} 


// --- Sample Market Research posts (placeholder/demo content) ---
const marketPosts = [
  {
    slug: "weekly-market-snapshot",
    category: "Market Research",
    readTime: "3 min read",
    kicker: "Weekly snapshot",
    title: "Weekly Market Snapshot: Index & Sector Moves",
    summary:
      "A quick sample view of index moves, market breadth, and rotating sectors to practice disciplined review routines.",
    summaryPoints: [
      "Index trend, breadth and leadership at a glance",
      "Sectors showing relative strength vs. broader market",
      "Simple observations to frame next week�s plan",
    ],
    content: (
      <>
        <p>
          This sample snapshot illustrates how you might structure a weekly market review. The goal is to have a
          consistent framework rather than to predict short-term moves.
        </p>
        <h3>Index & Breadth (Illustrative)</h3>
        <ul>
          <li>Primary index holding above a rising short-term trend line.</li>
          <li>Advance/decline mix stable; breadth improving vs. prior week.</li>
          <li>Volatility contained within recent range; no abnormal spikes.</li>
        </ul>
        <h3>Sectors & Leadership</h3>
        <ul>
          <li>Financials and Industrials show improving relative strength.</li>
          <li>IT consolidates after prior outperformance; watch for follow-through.</li>
          <li>Defensives flat; rotation remains selective and data-dependent.</li>
        </ul>
        <h3>Takeaways</h3>
        <p>
          Treat this as a template. Keep notes objective, align with your plan, and avoid impulsive changes based on
          single-week noise.
        </p>
      </>
    ),
  },
  {
    slug: "macro-dashboard-inflation-and-rates",
    category: "Market Research",
    readTime: "4 min read",
    kicker: "Macro dashboard",
    title: "Macro Dashboard: Inflation and Rates Watch",
    summary:
      "A lightweight, example dashboard that tracks inflation prints, interest-rate direction, and what to monitor next.",
    summaryPoints: [
      "Headline vs. core inflation context (illustrative)",
      "Policy-rate stance and liquidity backdrop",
      "What to watch over the next month",
    ],
    content: (
      <>
        <p>
          Macro indicators are inputs, not trading signals. This sample view highlights what a simple, repeatable
          checklist could look like as you track the macro backdrop.
        </p>
        <h3>Inflation (Example Structure)</h3>
        <ul>
          <li>Headline inflation trend: stabilizing within target band.</li>
          <li>Core components mixed; services remain relatively firm.</li>
          <li>Base effects likely to influence prints near term.</li>
        </ul>
        <h3>Rates & Liquidity</h3>
        <ul>
          <li>Policy rate unchanged; guidance data-dependent.</li>
          <li>System liquidity neutral to mildly surplus; watch seasonal effects.</li>
          <li>Curve shape broadly steady; limited transmission to long end.</li>
        </ul>
        <h3>What To Monitor</h3>
        <ul>
          <li>Next inflation release vs. consensus range.</li>
          <li>High-frequency indicators: fuel prices, freight, and demand proxies.</li>
          <li>Global policy cues that could alter domestic rates path.</li>
        </ul>
        <p>
          Use this as a practice checklist. Keep it consistent over time to build intuition without reacting to every
          headline.
        </p>
      </>
    ),
  },
];

const allPosts = [...blogPosts, ...marketPosts];

export default Insights;

