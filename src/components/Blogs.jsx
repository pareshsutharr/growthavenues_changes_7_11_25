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

function Blogs() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <style>{`
        .blogs-page {
          font-family: var(--font-body);
          background: linear-gradient(180deg, #f7fbff 0%, #eef5f9 48%, #ffffff 100%);
          color: #0f2436;
        }
        .blogs-page a {
          color: inherit;
          text-decoration: none;
        }
        .blogs-hero {
          background: linear-gradient(120deg, #012c45 10%, #035a88 50%, #0e94c1 92%);
          color: #ffffff;
          padding: clamp(72px, 8vw, 140px) 0;
        }
        .hero-inner {
          width: min(1120px, 92vw);
          margin: 0 auto;
          display: grid;
          gap: clamp(32px, 6vw, 72px);
          grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
          align-items: end;
        }
        .hero-copy .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-weight: 600;
          font-size: 0.78rem;
          opacity: 0.7;
          margin-bottom: 14px;
        }
        .hero-copy h1 {
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
          margin-bottom: 18px;
        }
        .hero-copy p {
          font-size: clamp(16px, 1.35vw, 18px);
          line-height: 1.68;
          max-width: 560px;
          margin-bottom: clamp(20px, 3vw, 32px);
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #ffffff;
          font-weight: 600;
          transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        .hero-btn:hover {
          background: #ffffff;
          color: #045b8b;
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(1, 44, 69, 0.28);
        }
        .hero-highlights {
          display: grid;
          gap: 16px;
        }
        .highlight-card {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          padding: 20px 24px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(6px);
        }
        .highlight-value {
          display: block;
          font-size: clamp(22px, 2.6vw, 30px);
          font-weight: 700;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }
        .highlight-label {
          font-size: 0.95rem;
          opacity: 0.72;
        }
        .blogs-container,
        .blogs-articles {
          width: 100%;
          max-width: var(--site-max);
          margin: 0 auto;
          padding-left: 16px;
          padding-right: 16px;
        }
        .blogs-container {
          padding: clamp(56px, 8vw, 88px) 16px clamp(36px, 5vw, 60px);
        }
        .section-heading {
          text-align: center;
          margin-bottom: clamp(28px, 6vw, 48px);
        }
        .section-heading span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.78rem;
          color: #045b8b;
        }
        .section-heading h2 {
          font-size: clamp(30px, 3.4vw, 44px);
          margin-top: 14px;
          margin-bottom: 12px;
          color: #0f2436;
        }
        .section-heading p {
          max-width: 640px;
          margin: 0 auto;
          font-size: clamp(16px, 1.3vw, 18px);
          line-height: 1.7;
          color: rgba(15, 36, 54, 0.84);
        }
        .blogs-grid {
          display: grid;
          gap: clamp(20px, 3vw, 32px);
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }
        .blogs-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          padding: clamp(24px, 3vw, 32px);
          box-shadow: 0 20px 40px rgba(7, 41, 70, 0.08);
          border: 1px solid rgba(3, 90, 136, 0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        .blogs-card::after {
          content: "";
          position: absolute;
          inset: auto -40px -40px auto;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle at center, rgba(4, 91, 136, 0.2), transparent 70%);
          transform: rotate(25deg);
          pointer-events: none;
        }
        .blogs-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 50px rgba(7, 41, 70, 0.12);
        }
        .card-eyebrow {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 600;
          color: rgba(4, 91, 136, 0.9);
          margin-bottom: 12px;
        }
        .blogs-card h3 {
          font-size: clamp(20px, 2.2vw, 26px);
          margin-bottom: 12px;
          color: #0f2436;
        }
        .card-summary {
          font-size: 0.98rem;
          line-height: 1.6;
          color: rgba(15, 36, 54, 0.82);
          margin-bottom: 16px;
        }
        .card-points {
          list-style: none;
          padding: 0;
          margin: 0 0 18px 0;
        }
        .card-points li {
          position: relative;
          padding-left: 22px;
          margin-bottom: 10px;
          font-size: 0.95rem;
          line-height: 1.55;
          color: rgba(15, 36, 54, 0.78);
        }
        .card-points li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 9px;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: linear-gradient(135deg, #0585b8, #0fb8c3);
        }
        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #045b8b;
          transition: gap 0.25s ease;
        }
        .card-link::after {
          content: "\\2192";
          font-size: 1rem;
          transition: transform 0.25s ease;
        }
        .card-link:hover {
          gap: 12px;
        }
        .card-link:hover::after {
          transform: translateX(4px);
        }
        .blogs-articles {
          padding: 0 0 clamp(80px, 12vw, 120px);
        }
        .blog-article {
          background: #ffffff;
          border-radius: 24px;
          padding: clamp(28px, 4vw, 48px);
          box-shadow: 0 24px 48px rgba(7, 41, 70, 0.08);
          border: 1px solid rgba(4, 91, 136, 0.08);
          scroll-margin-top: 120px;
        }
        .blog-article + .blog-article {
          margin-top: clamp(36px, 6vw, 72px);
        }
        .article-header span {
          display: inline-block;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
          color: #045b8b;
        }
        .article-header h2 {
          margin-top: 12px;
          font-size: clamp(26px, 3vw, 36px);
          color: #0f2436;
        }
        .article-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 16px;
          font-size: 0.95rem;
          color: rgba(15, 36, 54, 0.7);
        }
        .article-meta span::before {
          content: "\\2022";
          margin-right: 8px;
          color: rgba(15, 36, 54, 0.4);
        }
        .article-meta span:first-child::before {
          content: "";
          margin: 0;
        }
        .article-body {
          margin-top: clamp(20px, 3vw, 32px);
          line-height: 1.8;
          font-size: 1rem;
          color: rgba(15, 36, 54, 0.9);
        }
        .article-body h3 {
          font-size: clamp(20px, 2.4vw, 26px);
          margin: clamp(24px, 4vw, 32px) 0 14px;
          color: #043a56;
        }
        .article-body ul,
        .article-body ol {
          padding-left: clamp(20px, 4vw, 32px);
          margin-bottom: clamp(18px, 3vw, 26px);
        }
        .article-body li {
          margin-bottom: 12px;
        }
        .article-body li strong {
          color: #0f2436;
        }
        .article-body blockquote {
          margin: clamp(20px, 4vw, 32px) 0;
          padding: clamp(16px, 3vw, 22px);
          border-left: 4px solid #0585b8;
          background: rgba(5, 133, 184, 0.08);
          font-style: italic;
          border-radius: 12px;
        }
        .article-body blockquote footer {
          margin-top: 12px;
          font-style: normal;
          font-weight: 600;
          color: rgba(5, 58, 86, 0.9);
        }
        .article-footer {
          margin-top: clamp(24px, 4vw, 36px);
          display: flex;
          justify-content: flex-end;
        }
        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          font-weight: 600;
          color: #045b8b;
          background: rgba(4, 91, 136, 0.08);
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .back-to-top:hover {
          background: rgba(4, 91, 136, 0.16);
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            align-items: start;
          }
          .hero-highlights {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          }
        }
        @media (max-width: 768px) {
          .blogs-card {
            padding: 24px;
          }
          .article-meta {
            flex-direction: column;
            align-items: flex-start;
          }
          .article-body {
            font-size: 0.98rem;
          }
        }
        @media (max-width: 540px) {
          .hero-copy h1 {
            font-size: 30px;
          }
          .hero-highlights {
            grid-template-columns: 1fr;
          }
          .blogs-card {
            padding: 22px;
          }
          .blog-article {
            padding: 24px;
          }
          .back-to-top {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
      <main className="blogs-page">
        <section className="blogs-hero" aria-labelledby="blogs-hero-title" id="behavior-first-investing">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Growth Avenues Insights</p>
              <h1 id="blogs-hero-title">Behaviour-first market thinking</h1>
              <p>
                Explore deep dives shaped by behavioural finance, disciplined investing, and long-term wealth creation.
                Each essay is crafted to help you act with clarity when markets turn noisy.
              </p>
              <div className="hero-actions">
                <a className="hero-btn" href="#blog-index">
                  Dive into the articles
                </a>
              </div>
            </div>
            <div className="hero-highlights" role="list" aria-label="Blog highlights">
              {heroHighlights.map((item) => (
                <div className="highlight-card" key={item.label} role="listitem">
                  <span className="highlight-value">{item.value}</span>
                  <span className="highlight-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="blogs-container" id="blog-index" aria-labelledby="blog-index-title">
          <div className="section-heading">
            <span>Latest from the desk</span>
            <h2 id="blog-index-title">Read, reflect, act</h2>
            <p>Three practical perspectives to help you stay disciplined, avoid common pitfalls, and build lasting wealth.</p>
          </div>
          <div className="blogs-grid">
            {blogPosts.map((post) => (
              <article className="blogs-card" key={post.slug}>
                <span className="card-eyebrow">{post.category}</span>
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

        <section className="blogs-articles" aria-label="Blog articles">
          {blogPosts.map((post) => (
            <article className="blog-article" id={post.slug} key={post.slug}>
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
                <a className="back-to-top" href="#blogs-hero-title">
                  Back to top
                </a>
              </footer>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default Blogs;
