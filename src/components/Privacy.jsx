import React, { useEffect } from "react";

const SECTIONS = [
  {
    title: "Our Commitment to Your Privacy",
    body: `At JBV Share Broker And Fintech Pvt. Ltd. we are strongly committed to protecting the personal and financial information that you submit to us. This information is provided when you register to receive certain JBV Share Broker And Fintech Pvt. Ltd. services or products, such as online share trading. The personal information we get from you will help us provide you with improved services and products that match your needs as closely as possible. We shall not sell your personal information to any third party. However under certain conditions we would share this information:`,
  },
  {
    title: "When We Share Information",
    list: [
      "We share information as part of normal business operations, such as providing you with any services to which you subscribe, and any activity related to these services such as collecting fees for those services, and informing you about these services.",
      "We share information as part of normal legal/regulatory purposes required by the Securities and Exchange Board of India and other regulatory and government entities.",
      "We may occasionally invite selected third parties to participate in offers we feel would be attractive to customers of JBV Share Broker And Fintech Pvt. Ltd. customers.",
      "It may become necessary for JBV Share Broker And Fintech Pvt. Ltd. to disclose your personal information to our agents and contractors, or to their subcontractors. However these parties would be required to use the information obtained from JBV Share Broker And Fintech Pvt. Ltd. for such use exclusively.",
    ],
  },
  {
    title: "Account Security",
    body: "Your account information is protected by placing it in the secure portion of our Web site, which is why you need to enter your unique login username and password each time you want to access your account information.",
  },
  {
    title: "How You Can Help",
    body: "Do help us protect your privacy by maintaining the secrecy of the username and password you use for any of our services. Please note that this privacy policy does not create any contractual or other legal rights in or on behalf of any party, nor is it intended to do so.",
  },
];

export default function Privacy() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "Privacy Policy | Growth Avenues";
    }
  }, []);

  return (
    <div className="privacy-page">
      <main className="privacy-page__main">
        <div className="container">
          <section className="privacy-card" aria-labelledby="privacy-heading">
            <header className="privacy-card__header">
              <p className="privacy-card__eyebrow">Updated regularly for transparency</p>
              <h1 id="privacy-heading" className="privacy-card__title">
                Privacy Policy
              </h1>
              <p className="privacy-card__intro">
                Your trust is central to what we do. This policy explains how we protect the information you share with JBV Share Broker And Fintech Pvt. Ltd.
              </p>
            </header>

            <div className="privacy-card__body">
              {SECTIONS.map(({ title, body, list }) => (
                <article key={title} className="privacy-section">
                  <h2 className="privacy-section__title">{title}</h2>
                  {body ? <p className="privacy-section__text">{body}</p> : null}
                  {Array.isArray(list) ? (
                    <ul className="privacy-section__list">
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <footer className="privacy-card__footer" aria-live="polite">
              <p className="privacy-card__note">
                We continuously review and update this policy to reflect evolving regulations and best practices. Please revisit it periodically to stay informed.
              </p>
            </footer>
          </section>
        </div>
      </main>

      <style>{`
        .privacy-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f2f8fc;
          color: #044b73;
        }

        .privacy-page__main {
          flex: 1 0 auto;
          padding: 96px 0 64px;
        }

        .privacy-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          box-shadow: 0 32px 60px rgba(4, 75, 115, 0.12);
          padding: clamp(24px, 4vw, 48px);
          max-width: 960px;
          margin: 0 auto;
        }

        .privacy-card__header {
          text-align: center;
          margin-bottom: 32px;
        }

        .privacy-card__eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font: 600 0.75rem/1 var(--font-heading);
          color: #156941;
          margin-bottom: 10px;
        }

        .privacy-card__title {
          font: 700 clamp(1.8rem, 4vw, 2.4rem)/1.2 var(--font-heading);
          margin: 0 0 16px;
        }

        .privacy-card__intro {
          max-width: 640px;
          margin: 0 auto;
          font: 400 1rem/1.7 var(--font-body);
          color: #0b2f44;
        }

        .privacy-card__body {
          display: grid;
          gap: 28px;
        }

        .privacy-section__title {
          font: 600 1.15rem/1.4 var(--font-heading);
          margin-bottom: 10px;
        }

        .privacy-section__text {
          margin: 0;
          font: 400 0.98rem/1.8 var(--font-body);
        }

        .privacy-section__list {
          margin: 12px 0 0;
          padding-left: 18px;
          font: 400 0.98rem/1.8 var(--font-body);
          color: #0b3f5a;
        }

        .privacy-section__list li {
          margin-bottom: 8px;
        }

        .privacy-card__footer {
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid rgba(21, 105, 65, 0.2);
          text-align: center;
        }

        .privacy-card__note {
          margin: 0;
          font: 500 0.92rem/1.6 var(--font-body);
          color: #0b3f5a;
        }

        @media (max-width: 768px) {
          .privacy-page__main {
            padding: 80px 0 48px;
          }

          .privacy-card {
            padding: 24px;
            box-shadow: 0 18px 36px rgba(4, 75, 115, 0.12);
          }

          .privacy-card__body {
            gap: 22px;
          }
        }

        @media (max-width: 576px) {
          .privacy-card {
            padding: 20px 16px;
            border-radius: 16px;
            box-shadow: none;
          }

          .privacy-section__list {
            padding-left: 16px;
          }
        }
      `}</style>
    </div>
  );
}


