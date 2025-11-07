import React, { useEffect } from "react";

const SECTIONS = [
  {
    title: "Refund and Cancellation Policy",
    body: 'We do not have any refund and cancellation policy as we do not take any charge for account opening and account activation process from the clients.',
  },
  {
    title: "Account Funding and Withdrawal Policy",
    body: "Once your Trading and Demat account is opened any payments made thereafter will be credited towards your account. To withdraw any amount from such account, you may place withdrawal request.",
  },
  {
    title: "Account Opening and Cancellation Policy",
    body: "Opening of a Trading and Demat account with us takes approximately 24 hours. You may place the cancellation request with our support team within 12 to 18 hours of the submission of your application with us. On receipt of the cancellation request, the account opening shall not be proceeded with.",
  },
];

export default function Refund() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "Refund and Cancellation Policy | Growth Avenues";
    }
  }, []);

  return (
    <div className="refund-page">
      <main className="refund-page__main">
        <div className="container">
          <section className="refund-card" aria-labelledby="refund-heading">
            <header className="refund-card__header">
              <p className="refund-card__eyebrow">Reviewed regularly for clarity and compliance</p>
              <h1 id="refund-heading" className="refund-card__title">
                Refund and Cancellation Policy
              </h1>
              <p className="refund-card__intro">
                Your confidence matters to us. This policy outlines our approach to refunds, cancellations, and withdrawals at JBV Share Broker And Fintech Pvt. Ltd.
              </p>
            </header>

            <div className="refund-card__body">
              {SECTIONS.map(({ title, body, list }) => (
                <article key={title} className="refund-section">
                  <h2 className="refund-section__title">{title}</h2>
                  {body ? <p className="refund-section__text">{body}</p> : null}
                  {Array.isArray(list) ? (
                    <ul className="refund-section__list">
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <footer className="refund-card__footer" aria-live="polite">
              <p className="refund-card__note">
                This Refund and Cancellation Policy is subject to periodic review and updates in line with SEBI and regulatory guidelines. Please check this page regularly for the latest information.
              </p>
            </footer>
          </section>
        </div>
      </main>

      <style>{`
        .refund-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f2f8fc;
          color: #044b73;
        }

        .refund-page__main {
          flex: 1 0 auto;
          padding: 96px 0 64px;
        }

        .refund-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          box-shadow: 0 32px 60px rgba(4, 75, 115, 0.12);
          padding: clamp(24px, 4vw, 48px);
          max-width: 960px;
          margin: 0 auto;
        }

        .refund-card__header {
          text-align: center;
          margin-bottom: 32px;
        }

        .refund-card__eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font: 600 0.75rem/1 var(--font-heading);
          color: #156941;
          margin-bottom: 10px;
        }

        .refund-card__title {
          font: 700 clamp(1.8rem, 4vw, 2.4rem)/1.2 var(--font-heading);
          margin: 0 0 16px;
        }

        .refund-card__intro {
          max-width: 640px;
          margin: 0 auto;
          font: 400 1rem/1.7 var(--font-body);
          color: #0b2f44;
        }

        .refund-card__body {
          display: grid;
          gap: 28px;
        }

        .refund-section__title {
          font: 600 1.15rem/1.4 var(--font-heading);
          margin-bottom: 10px;
        }

        .refund-section__text {
          margin: 0;
          font: 400 0.98rem/1.8 var(--font-body);
        }

        .refund-section__list {
          margin: 12px 0 0;
          padding-left: 18px;
          font: 400 0.98rem/1.8 var(--font-body);
          color: #0b3f5a;
        }

        .refund-section__list li {
          margin-bottom: 8px;
        }

        .refund-card__footer {
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid rgba(21, 105, 65, 0.2);
          text-align: center;
        }

        .refund-card__note {
          margin: 0;
          font: 500 0.92rem/1.6 var(--font-body);
          color: #0b3f5a;
        }

        @media (max-width: 768px) {
          .refund-page__main {
            padding: 80px 0 48px;
          }

          .refund-card {
            padding: 24px;
            box-shadow: 0 18px 36px rgba(4, 75, 115, 0.12);
          }

          .refund-card__body {
            gap: 22px;
          }
        }

        @media (max-width: 576px) {
          .refund-card {
            padding: 20px 16px;
            border-radius: 16px;
            box-shadow: none;
          }

          .refund-section__list {
            padding-left: 16px;
          }
        }
      `}</style>
    </div>
  );
}


