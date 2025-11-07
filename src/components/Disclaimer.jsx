import React, { useEffect } from "react";

const DISCLAIMER_SECTIONS = [
  {
    title: "Internet Trading Services",
    body: "JBV Share Broker And Fintech Pvt. Ltd. offers internet trading services. Eligibility for these services is at the company's discretion.",
  },
  {
    title: "Content and Data",
    body: "The content on this site reflects the personal views of the contributors and is provided for informational purposes only. JBV Share Broker And Fintech Pvt. Ltd. reserves the right to modify or alter the content. Users should independently assess the information before making investment decisions, as recommendations may not suit all investors. The company does not guarantee the accuracy, timeliness, or quality of the information.",
  },
  {
    title: "Intellectual Property",
    body: "Unauthorized reproduction, distribution, or use of the website's content for non-personal purposes is prohibited. Prior written permission from JBV Share Broker And Fintech Pvt. Ltd. is required for such use. Accounts of users violating intellectual property rights may be terminated, and legal action may follow.",
  },
  {
    title: "Liability Disclaimer",
    body: "JBV Share Broker And Fintech Pvt. Ltd. and its affiliates are not liable for damages arising from performance failures, errors, interruptions, or defects in the operation of the website; delays in transmission, computer viruses, unauthorized access, or communication failures; technical malfunctions or delays, including non-receipt of registration details or emails.",
    list: [
      "Performance failures, errors, interruptions, or defects in the operation of the website.",
      "Delays in transmission, computer viruses, unauthorized access, or communication failures.",
      "Technical malfunctions or delays, including non-receipt of registration details or emails.",
    ],
  },
  {
    title: "Password Security",
    body: "Users are responsible for securing their passwords. JBV Share Broker And Fintech Pvt. Ltd. is not liable for any loss or misuse resulting from compromised passwords.",
  },
];

export default function Disclaimer() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "Disclaimer | Growth Avenues";
    }
  }, []);

  return (
    <div className="disclaimer-page">
      <main className="disclaimer-page__main">
        <div className="container">
          <section className="disclaimer-card" aria-labelledby="disclaimer-heading">
            <header className="disclaimer-card__header">
              <p className="disclaimer-card__eyebrow">Please read carefully</p>
              <h1 id="disclaimer-heading" className="disclaimer-card__title">
                Disclaimer
              </h1>
              <p className="disclaimer-card__intro">
                By accessing JBV Share Broker And Fintech Pvt. Ltd., you agree to the terms outlined below. We review this content frequently to keep it aligned with regulations and best practices.
              </p>
            </header>

            <div className="disclaimer-card__body">
              {DISCLAIMER_SECTIONS.map(({ title, body, list }) => (
                <article key={title} className="disclaimer-section">
                  <h2 className="disclaimer-section__title">{title}</h2>
                  {body ? <p className="disclaimer-section__text">{body}</p> : null}
                  {Array.isArray(list) ? (
                    <ul className="disclaimer-section__list">
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <footer className="disclaimer-card__footer" aria-live="polite">
              <p className="disclaimer-card__note">
                Questions? Contact our compliance desk at info.jbvcm@gmail.com. Continued use of this website constitutes acceptance of the latest version of this disclaimer.
              </p>
            </footer>
          </section>
        </div>
      </main>

      <style>{`
        .disclaimer-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f2f8fc;
          color: #044b73;
        }

        .disclaimer-page__main {
          flex: 1 0 auto;
          padding: 96px 0 64px;
        }

        .disclaimer-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          box-shadow: 0 32px 60px rgba(4, 75, 115, 0.12);
          padding: clamp(24px, 4vw, 48px);
          max-width: 960px;
          margin: 0 auto;
        }

        .disclaimer-card__header {
          text-align: center;
          margin-bottom: 32px;
        }

        .disclaimer-card__eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font: 600 0.75rem/1 var(--font-heading);
          color: #156941;
          margin-bottom: 10px;
        }

        .disclaimer-card__title {
          font: 700 clamp(1.8rem, 4vw, 2.4rem)/1.2 var(--font-heading);
          margin: 0 0 16px;
        }

        .disclaimer-card__intro {
          max-width: 640px;
          margin: 0 auto;
          font: 400 1rem/1.7 var(--font-body);
          color: #0b2f44;
        }

        .disclaimer-card__body {
          display: grid;
          gap: 28px;
        }

        .disclaimer-section__title {
          font: 600 1.15rem/1.4 var(--font-heading);
          margin-bottom: 10px;
        }

        .disclaimer-section__text {
          margin: 0;
          font: 400 0.98rem/1.8 var(--font-body);
        }

        .disclaimer-section__list {
          margin: 12px 0 0;
          padding-left: 18px;
          font: 400 0.98rem/1.8 var(--font-body);
          color: #0b3f5a;
        }

        .disclaimer-section__list li {
          margin-bottom: 8px;
        }

        .disclaimer-card__footer {
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid rgba(21, 105, 65, 0.2);
          text-align: center;
        }

        .disclaimer-card__note {
          margin: 0;
          font: 500 0.92rem/1.6 var(--font-body);
          color: #0b3f5a;
        }

        @media (max-width: 768px) {
          .disclaimer-page__main {
            padding: 80px 0 48px;
          }

          .disclaimer-card {
            padding: 24px;
            box-shadow: 0 18px 36px rgba(4, 75, 115, 0.12);
          }

          .disclaimer-card__body {
            gap: 22px;
          }
        }

        @media (max-width: 576px) {
          .disclaimer-card {
            padding: 20px 16px;
            border-radius: 16px;
            box-shadow: none;
          }

          .disclaimer-section__list {
            padding-left: 16px;
          }
        }
      `}</style>
    </div>
  );
}

