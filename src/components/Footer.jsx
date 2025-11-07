// Footer.jsx
import React, { useMemo } from "react";
import { ARN_NUMBER, SEBI_REG, NISM_CERTS, BSE, NSE, SEBI, CDSL} from "../constants";
import "bootstrap/dist/css/bootstrap.min.css";

const ORG = {
  legalName: "JBV Share Broker And Fintech Pvt. Ltd.",
  brand: "Growth Avenues",
  addressLine:
    "2001, The Junomoneta Tower,  Opp. Pal RTO, Nr. Rajhans Cinema, Pal - Adajan, Surat- 395009",
  cin: "U66120GJ2024PTC152671",
  sebi: "INZ000319830", 
  nse: "90409", 
  bse: "6900", 
  cdsl: "XXXXXXXXXX",

  registries: [
    ...(ARN_NUMBER ? [{ label: "ARN", value: ARN_NUMBER }] : []),
    ...(SEBI_REG ? [{ label: "SEBI (MF Reg.)", value: SEBI_REG }] : []),
    ...(NISM_CERTS ? [{ label: "NISM", value: NISM_CERTS }] : []),
    ...(BSE ? [{ label: "BSE", value: BSE }] : []),
    ...(NSE ? [{ label: "NSE", value: NSE }] : []),
    ...(SEBI ? [{ label: "SEBI", value: SEBI }] : []),
    ...(CDSL ? [{ label: "CDSL", value: CDSL }] : []),
  ],
  linksCol1: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Mutual Funds", href: "/sip" },
    { label: "Insights", href: "/insights" },
    { label: "Calculators", href: "/calculator" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contact Us", href: "/contact" },
    // { label: "Why Mutual Funds", href: "/why-mf" },
    // { label: "Solutions", href: "/solutions" },
    
  ],
  linksCol2: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
    // { label: "Disclosures", href: "/disclosures" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Refund and Cancellation Policy", href: "/refund" },
    { label: "Risk Disclosure", href: "" },
    { label: "Disclosure of Proprietary Trading", href: "" },
    { label: "GTT Orders Policy", href: "" },
  ],
  linksCol3: [
    { label: "JBV Adminssion letter", href: "https://jbvshares.com/doc/ADMISSION%20LETTER-JBV%20SHARE%20BROKER%20AND%20FINTECH%20PRIVATE%20LIMITED.pdf" },
    { label: "BSE Adminssion letter", href: "https://jbvshares.com/doc/BSE_Admission%20Letter_JBV.pdf" },
    { label: "TM Cod letter", href: "https://jbvshares.com/doc/TM%20CODE%20LETTER-JBV%20SHARE%20BROKER%20AND%20FINTECH%20PRIVATE%20LIMITED.pdf" },
  ],
  linksCol4Title: "More",
  linksCol4: [
    { label: "Account Opening Process", href: "" },
    { label: "Directory of Authorised Persons", href: "" },
    { label: "Complaint Filing Procedure", href: "" },
    { label: "Investor Grievance Escalation Matrix", href: "" },
    { label: "KMP Details", href: "" },
    { label: "Voluntary Freezing of Trading Account", href: "" },
    { label: "Smart ODR Portal", href: "" },
    { label: "Client Bank Details", href: "" },
    { label: "Investor Charter", href: "" },
  ],
  officerContacts: [
    {
      title: "Compliance Officer",
      name: "Asit Mistry",
      emailLabel: "Email",
      email: "asit@growthavenues.co.in",
      contactLabel: "Contact No.",
      contact: "+91 98251 45217",
    },
    {
      title: "FIU Principal Officer",
      name: "Hirenkumar Sakarvya",
      emailLabel: "Email",
      email: "hirenkumar@growthavenues.co.in",
      contactLabel: "Contact No.",
      contact: "+91 90335 84585",
    },
    {
      title: "Principal Officer IA",
      name: "Asit Mistry",
      emailLabel: "Email",
      email: "asit@growthavenues.co.in",
      contactLabel: "Contact No.",
      contact: "+91 97730 71625",
    },
  ],
  usefulLinks: [
    { label: "NSE", href: "https://www.nseindia.com" },
    { label: "BSE", href: "https://www.bseindia.com" },
    { label: "SEBI", href: "https://www.sebi.gov.in" },
    { label: "CDSL", href: "https://www.cdslindia.com" },
    { label: "CDSL E-Voting", href: "https://evoting.cdslindia.com/Evoting/EvotingLogin" },
    { label: "SCORES", href: "https://scores.sebi.gov.in" },
  ],
  additionalLinks: [
    { label: "Broker Norms", href: "https://www.sebi.gov.in/legal/regulations", external: true },
    { label: "Investor Protection (NSE)", href: "https://www.nseindia.com/invest/investor-protection", external: true },
    { label: "Investor Grievances", href: "https://scores.sebi.gov.in", external: true },
    { label: "BSE Investor Grievances", href: "https://www.bseindia.com/investors/grievances.aspx", external: true },
    { label: "Advisory for Investors", href: "https://www.sebi.gov.in/sebiweb/investor", external: true },
    { label: "MCA Requirements", href: "https://www.mca.gov.in/", external: true },
  ],
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/growth-avenues1/", icon: "/assets/linkedin.png", width: 21, height: 21 },
    { name: "Instagram", href: "https://www.instagram.com/growth.avenues?igsh=MTIybWxueGI3aDU2dQ==", icon: "/assets/instagram.png", width: 19, height: 19 },
  ],
  logo: { src: "/assets/companylogo.png", width: 150, height: 37, alt: "Growth Avenues" },
};

const toMailtoHref = (value) => {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  return /^mailto:/i.test(trimmed) ? trimmed : `mailto:${trimmed}`;
};

const toTelHref = (value) => {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  if (/^tel:/i.test(trimmed)) {
    return trimmed;
  }
  const digits = trimmed.replace(/[^+\d]/g, "");
  if (!digits) {
    return null;
  }
  return `tel:${digits}`;
};

const Footer = ({ org = ORG }) => {
  const year = useMemo(() => new Date().getFullYear(), []);
  const regulatorEntries = useMemo(() => {
    const entries = [];
    if (org.bse) entries.push({ label: "BSE", value: org.bse });
    if (org.nse) entries.push({ label: "NSE", value: org.nse });
    if (org.sebi) entries.push({ label: "SEBI", value: org.sebi });
    if (org.cdsl) entries.push({ label: "CDSL", value: org.cdsl });
    return entries;
  }, [org.bse, org.nse, org.sebi, org.cdsl]);
  const hasRegulatorEntries = regulatorEntries.length > 0;
  const addressColumnClasses = "col-12 col-lg-5 col-xl-4";
  const linksColumnClasses = "col-12 col-lg-7 col-xl-8";
  const linkColumns = useMemo(() => {
    const columns = [
      { key: "linksCol1", title: "Explore", items: org.linksCol1 },
      { key: "linksCol2", title: "Legal", items: org.linksCol2 },
      { key: "linksCol3", title: "Documents", items: org.linksCol3 },
    ];
    if (org.linksCol4?.length) {
      columns.push({
        key: "linksCol4",
        title: org.linksCol4Title || "More",
        items: org.linksCol4,
      });
    }
    return columns;
  }, [org]);
  const linksGridClasses =
    linkColumns.length >= 4 ? "ga-links-grid ga-links-grid--four" : "ga-links-grid";
  const officerContacts = useMemo(() => {
    if (Array.isArray(org.officerContacts) && org.officerContacts.length) {
      return org.officerContacts;
    }
    if (org.complianceOfficer) {
      return [org.complianceOfficer];
    }
    return [];
  }, [org]);
  const usefulLinks = useMemo(
    () => (Array.isArray(org.usefulLinks) ? org.usefulLinks : []),
    [org.usefulLinks]
  );
  const additionalLinks = useMemo(
    () => (Array.isArray(org.additionalLinks) ? org.additionalLinks : []),
    [org.additionalLinks]
  );

  return (
    <footer className="ga-footer w-100 pt-5 pb-4">
      <div className="container px-3 px-lg-4">
        <div className="row g-4 align-items-start">
          {/* LEFT */}
          <div className={addressColumnClasses}>
            <a href="/" className="d-inline-flex align-items-center gap-2 text-decoration-none">
              <img
                src={org.logo.src}
                alt={org.logo.alt}
                className="ga-logo"
                width={org.logo.width}
                height={org.logo.height}
                loading="lazy"
                decoding="async"
              />
              <span className="visually-hidden">{org.brand}</span>
            </a>

            <p className="ga-text mt-4 mb-2">{org.addressLine}</p>
            {org.cin && <p className="ga-cin mb-3">CIN: {org.cin}</p>}

            <p className="ga-text mb-2">Connect with us on:</p>
            <nav aria-label="Social links" className="d-flex gap-3 align-items-center">
              {org.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="d-inline-block ga-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={s.icon}
                    alt={s.name}
                    className={`ga-social ${s.name.toLowerCase()}`}
                    width={s.width}
                    height={s.height}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT */}
          <div className={linksColumnClasses}>
            <nav className={linksGridClasses} aria-label="Footer navigation">
              {linkColumns.map(({ key, title, items }) => (
                <FooterLinks key={key} title={title} items={items} />
              ))}
            </nav>
          </div>
        </div>

        {/* Registry line + disclaimer */}
        {hasRegulatorEntries && (
          <div className="mt-4">
            <p className="ga-reg-line m-0">
              {regulatorEntries.map(({ label, value }, index) => (
                <React.Fragment key={label}>
                  <span className="ga-reg-entry">{label}: {value}</span>
                  {index < regulatorEntries.length - 1 && (
                    <span className="ga-reg-separator" aria-hidden="true">|</span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        )}

        

        <hr className="ga-divider-line my-4" />

        <section
          className="ga-investor-alert mt-4 mb-4"
          aria-labelledby="ga-investor-alert-heading"
        >
          <h2 id="ga-investor-alert-heading" className="ga-investor-heading text-center">
            Attention Investors
          </h2>
          <ul className="ga-alert-list">
            <li>Stock brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.</li>
            <li>Update your mobile number and email ID with your stock broker or depository participant and receive OTP directly from the depository on your email or mobile number to create a pledge.</li>
            <li>Pay 20% upfront margin of the transaction value to trade in the cash market segment.</li>
            <li>Refer to exchange FAQs issued via circulars NSE/INSP/45191 (July 31, 2020) and NSE/INSP/45534 (August 31, 2020) and other guidelines issued from time to time.</li>
            <li>Check your securities, mutual funds, and bonds in the consolidated account statement issued by NSDL/CDSL every month.</li>
            <li>Voluntary freezing or blocking of online trading account access is allowed as per exchange circular NSE/INSP/61529.</li>
            <li>
              Admission Letter:&nbsp;
              <a
                href="https://jbvshares.com/doc/ADMISSION%20LETTER-JBV%20SHARE%20BROKER%20AND%20FINTECH%20PRIVATE%20LIMITED.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ga-link-inline"
              >
                View document
              </a>
              &nbsp;| Email:&nbsp;
              <a href="mailto:info.jbvcm@gmail.com" className="ga-link-inline">
                info.jbvcm@gmail.com
              </a>
            </li>
          </ul>
        </section>

        {officerContacts.length > 0 && (
          <div
            className="ga-officer-inline text-center mt-4 mb-4"
            role="group"
            aria-label="Key compliance contacts"
          >
            {officerContacts.map((officer, index) => {
              const {
                title,
                name,
                email,
                emailLabel,
                contact,
                contactLabel,
              } = officer || {};
              const telHref = toTelHref(contact);
              const emailHref = toMailtoHref(email);

              return (
                <div className="ga-officer-group" key={`${title}-${name}-${index}`}>
                <div className="ga-officer-group" key={`${title}-${name}-${index}`}>
                <div className="ga-officer-group" key={`${title}-${name}-${index}`}>
                  {title && name ? (
                    <span className="ga-officer-pair">
                      <span className="ga-officer-label">{title}</span>
                      <span className="ga-officer-value">{name}</span>
                    </span>
                  ) : null}
                  {emailLabel && email ? (
                    <span className="ga-officer-pair">
                      <span className="ga-officer-label">{emailLabel}</span>
                      {emailHref ? (
                        <a
                          className="ga-officer-value"
                          href={emailHref}
                        >
                          {email}
                        </a>
                      ) : (
                        <span className="ga-officer-value">{email}</span>
                      )}
                    </span>
                  ) : null}
                  {contactLabel && contact ? (
                    <span className="ga-officer-pair">
                      <span className="ga-officer-label">{contactLabel}</span>
                      {telHref ? (
                        <a className="ga-officer-value" href={telHref}>
                          {contact}
                        </a>
                      ) : (
                        <span className="ga-officer-value">{contact}</span>
                      )}
                    </span>
                  ) : null}
                </div>
                </div>
                </div>
              );
            })}
          </div>
        )}

        <InlineLinksRow
          heading="Useful Links"
          items={usefulLinks}
          ariaLabel="Useful links"
        />

        <InlineLinksRow
          items={additionalLinks}
          ariaLabel="Additional useful links"
          className="ga-more-links"
        />

        <hr className="ga-divider-line my-4" />

        <p className="ga-risk-note text-center mt-3 mb-3">
          Mutual fund investments are subject to market risks. Read all scheme related documents carefully. Past performance does not guarantee future results. Tax treatment may change and depends on individual circumstances.
        </p>

        <p className="text-center ga-copy m-0">
          &copy; {year} {org.legalName}
        </p>
      </div>

      <style>{`
        .ga-footer{ background:#e8f6ff; }
        .ga-logo{ width:150px; height:37px; object-fit:contain; transform:rotate(0deg); opacity:1; }
        .ga-text{ color:#044B73; font:500 16px/1 var(--font-body); }
        .ga-cin{ color:#044B73; font:600 16px var(--font-body); }
        .ga-links-grid{
          display:grid;
          gap:1.75rem;
          grid-template-columns:repeat(auto-fit, minmax(170px, 1fr));
          align-items:start;
        }
        @media (min-width: 992px){
          .ga-links-grid--four{
            grid-template-columns:repeat(4, minmax(170px, 1fr));
          }
        }
        .ga-links-col{
          display:flex;
          flex-direction:column;
          gap:0.75rem;
        }
        .ga-links-heading{
          margin:0;
          font:600 14px var(--font-heading);
          letter-spacing:.18em;
          text-transform:uppercase;
          color:#156941;
        }
        .ga-links-list{
          list-style:none;
          margin:0;
          padding:0;
          display:flex;
          flex-direction:column;
          gap:.45rem;
        }
        .ga-links-item{ margin:0; }
        .ga-link{
          color:#044B73;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          gap:.4rem;
          font:500 15px var(--font-body);
        }
        .ga-link:hover{ text-decoration:underline; }
        .ga-link-inline{
          color:#044B73;
          font-weight:600;
          text-decoration:underline;
        }
        .ga-link-inline:hover{ color:#022d4a; }
        .ga-social{ transition:transform .2s ease; }
        .ga-social-link:hover .ga-social{ transform:translateY(-2px) scale(1.05); }
        .ga-reg-line{
          color:#156941;
          text-align:center;
          font:600 16px var(--font-heading);
          letter-spacing:.12em;
        }
        .ga-reg-entry{
          display:inline-block;
          color:inherit;
          font-weight:600;
        }
        .ga-reg-separator{
          display:inline-block;
          margin:0 1rem;
          color:#156941;
          font-weight:600;
        }
        .ga-officer-inline{
          margin:1.75rem 0;
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap:.6rem 1.4rem;
          font:500 15px var(--font-body);
        }
        .ga-officer-group{
          display:flex;
          align-items:center;
          flex-wrap:wrap;
          justify-content:center;
          gap:.45rem .9rem;
        }
        .ga-officer-pair{
          display:inline-flex;
          align-items:center;
          gap:.4rem;
        }
        .ga-officer-label{
          color:#156941;
          font-weight:600;
          letter-spacing:.06em;
        }
        .ga-officer-value{
          color:#044B73;
          font-weight:600;
        }
        .ga-officer-link{
          color:inherit;
          text-decoration:none;
        }
        .ga-officer-link:hover{
          text-decoration:underline;
        }
        .ga-useful-links{
          margin:1.75rem 0;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:.65rem;
        }
        .ga-useful-heading{
          font:600 14px var(--font-heading);
          letter-spacing:.14em;
          text-transform:uppercase;
          color:#156941;
        }
        .ga-useful-list{
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          align-items:center;
          column-gap:.75rem;
          row-gap:.45rem;
        }
        .ga-useful-item{
          display:inline-flex;
          align-items:center;
        }
        .ga-useful-divider{
          display:inline-flex;
          align-items:center;
          color:#156941;
          font:600 14px var(--font-heading);
          opacity:.7;
        }
        .ga-useful-link{
          color:#044B73;
          font:600 15px var(--font-body);
          text-decoration:none;
          transition:color .2s ease;
        }
        .ga-useful-link:hover{
          text-decoration:underline;
          color:#022d4a;
        }
        .ga-investor-alert{
          background:rgba(255,255,255,0.55);
          border:1px solid rgba(4,75,115,0.12);
          border-radius:18px;
          padding:1.75rem 1.5rem;
        }
        .ga-investor-heading{
          margin:0 0 1.2rem 0;
          font:600 18px var(--font-heading);
          letter-spacing:.16em;
          text-transform:uppercase;
          color:#156941;
;
        }
        .ga-alert-list{
          margin:0;
          padding-left:1.35rem;
          display:grid;
          gap:.55rem;
          color:#044B73;
          font:500 15px var(--font-body);
        }
        .ga-copy{ color:#156941; font:400 16px var(--font-body); }
        .ga-risk-note{
          color:#044B73;
          font:500 14px/1.7 var(--font-body);
        }
        .ga-divider-line{ border:0; border-top:.5px solid #156941; opacity:.8; }

        /* MOBILE: render link groups inline for better space use */
        @media (max-width: 576px){
          .ga-links-grid{
            display:flex;
            flex-direction:column;
            gap:1.25rem;
            text-align:center;
          }
          .ga-links-col{
            align-items:center;
          }
          .ga-links-heading{
            letter-spacing:.16em;
          }
          .ga-links-list{
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:center;
            gap:.35rem;
          }
          .ga-links-item{
            display:inline-flex;
            align-items:center;
            position:relative;
            padding:0 .6rem;
          }
          .ga-links-item::after{
            content:\"\";
            display:block;
            width:1px;
            height:18px;
            background:#156941;
            opacity:.55;
            margin-left:.6rem;
          }
          .ga-links-item:last-child::after{
            display:none;
          }
          .ga-investor-alert{
            padding:1.25rem 1rem;
            text-align:left;
          }
          .ga-officer-inline{
            margin:1.25rem 0;
            flex-direction:column;
            font-size:14px;
            gap:.5rem;
          }
          .ga-officer-group{
            flex-direction:column;
            gap:.4rem;
          }
          .ga-officer-pair{
            gap:.3rem;
          }
          .ga-useful-links{
            margin:1.25rem 0;
            gap:.5rem;
          }
          .ga-useful-heading{
            font-size:13px;
            letter-spacing:.12em;
          }
          .ga-useful-list{
            column-gap:.55rem;
            row-gap:.35rem;
          }
          .ga-useful-link{
            font-size:14px;
          }
          .ga-useful-divider{
            font-size:13px;
          }
          .ga-investor-heading{
            font-size:16px;
            letter-spacing:.12em;
          }
          .ga-alert-list{
            padding-left:1rem;
            font-size:14px;
            gap:.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

const FooterLinks = ({ title, items = [] }) => (
  <section className="ga-links-col">
    {title ? <h3 className="ga-links-heading">{title}</h3> : null}
    <ul className="ga-links-list">
      {items.map(({ label, href, external }, i) => (
        <li key={i} className="ga-links-item">
          <a
            href={href}
            className="ga-link"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const InlineLinksRow = ({
  heading,
  items = [],
  ariaLabel,
  className = "",
}) => {
  const filteredItems = Array.isArray(items)
    ? items.filter((item) => item && item.label && item.href)
    : [];

  if (filteredItems.length === 0) {
    return null;
  }
  const containerClasses = [
    "ga-useful-links",
    "text-center",
    "mt-4",
    "mb-4",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const navLabel = ariaLabel || heading || "Helpful links";

  return (
    <div className={containerClasses}>
      {heading ? <span className="ga-useful-heading">{heading}</span> : null}
      <nav aria-label={navLabel} className="ga-useful-list">
        {filteredItems.map(({ label, href, external = true }, index) => (
          <React.Fragment key={`${label}-${index}`}>
            <span className="ga-useful-item">
              <a
                href={href}
                className="ga-useful-link"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {label}
              </a>
            </span>
            {index < filteredItems.length - 1 ? (
              <span className="ga-useful-divider" aria-hidden="true">
                |
              </span>
            ) : null}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Footer;
