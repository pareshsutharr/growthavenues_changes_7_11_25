import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../constants";
function ContactUs() {
  const supportEmail = (CONTACT_EMAIL || "info.jbvcm@gmail.com").trim();
  const supportPhone = (CONTACT_PHONE || "+91 62010 88241").replace(/\s+/g, "");
  const displayPhone = (CONTACT_PHONE || "+91 62010 88241").trim();
  const mailSubject = encodeURIComponent("Enquiry from Growth Avenues website");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", captcha: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [captchaQ, setCaptchaQ] = useState({ a: 10, b: 10 });

  const regenCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 5; // 5..14
    const b = Math.floor(Math.random() * 10) + 5; // 5..14
    setCaptchaQ({ a, b });
    setForm((f) => ({ ...f, captcha: "" }));
  };

  useEffect(() => {
    regenCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");
    const { name, email, subject, message, captcha } = form;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("Please fill all required fields.");
      return;
    }
    if (Number(String(captcha).trim()) !== (Number(captchaQ.a) + Number(captchaQ.b))) {
      setError("Verification failed. Please solve the sum correctly.");
      return;
    }
    try {
      setSubmitting(true);
      await submitContact({ ...form, a: captchaQ.a, b: captchaQ.b });
      setStatus("Thank you! Your message has been sent.");
      setForm({ name: "", email: "", subject: "", message: "", captcha: "" });
      regenCaptcha();
    } catch (err) {
      setError("Failed to send. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main id="contact" className="contactus-page" style={{ background: "#F2F8FC" , paddingTop:"100px" }}>
      <style>{`
        /* ---------- Layout wrappers ---------- */
        .cu-wrap { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding-left: clamp(16px, 5vw, 48px); 
          padding-right: clamp(16px, 5vw, 48px); 
        }
        .cu-card { 
          background: #fff; 
          border-radius: 16px; 
        }
        @media (min-width: 992px){
          .cu-card{ padding: 56px 48px; }
        }

        /* ---------- Top title ---------- */
        .cu-title{ 
          font-family: var(--font-accent); 
          font-weight: 500; 
          font-size: 50px; 
          line-height: 1.47; 
          text-align: center; 
          background: linear-gradient(94.39deg,#044B73 30.16%, #088ED9 104.21%);
          -webkit-background-clip: text; 
          background-clip: text; 
          color: transparent; 
          margin: 0; 
        }
        .cu-hr{ 
          width: 410px; 
          max-width: 80%; 
          margin: 8px auto 32px; 
          border: 0; 
          border-top: .5px solid #044E76; 
          opacity: 1; 
        }

        /* ---------- Section: Left column ---------- */
        .cu-subtitle{ 
          font-family: var(--font-heading); 
          font-weight: 700; 
          font-size: 32px; 
          line-height: 1; 
          color: #044C74; 
          margin-bottom: 12px;
        }
        .cu-lead{ 
          font-family: var(--font-body); 
          font-weight: 500; 
          font-size: 18px; 
          line-height: 24px; 
          letter-spacing: 0.01em; 
          color: #8E8E8E; 
          margin-bottom: 28px; 
        }
        .cu-label-strong{ 
          font-family: var(--font-body); 
          font-weight: 600; 
          font-size: 16px; 
          line-height: 1; 
          color: #156941; 
          margin-bottom: 8px; 
        }
        .cu-address{ 
          font-family: var(--font-body); 
          font-weight: 400; 
          font-size: 14px; 
          line-height: 1.2; 
          color: #044C74; 
          margin-bottom: 14px; 
        }
        .cu-address.alt { color: #044B73; }

        /* ---------- Quick action buttons ---------- */
        .cu-inline-actions{
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 28px;
        }
        .cu-inline-btn{
          flex: 1 1 220px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(4, 75, 115, 0.12);
          color: #044b73;
          text-decoration: none;
          box-shadow: 0 12px 24px rgba(4, 49, 82, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .cu-inline-btn:hover{
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(4, 49, 82, 0.12);
          border-color: rgba(4, 75, 115, 0.24);
        }
        .cu-inline-btn-icon{
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(8, 142, 217, 0.12);
          color: #088ed9;
          flex: 0 0 42px;
        }
        .cu-inline-btn strong{
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.02em;
          color: #04344f;
          display: block;
        }
        .cu-inline-btn span{
          display: flex;
          flex-direction: column;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 13px;
          line-height: 1.35;
          color: rgba(4, 52, 79, 0.78);
        }
        .cu-inline-btn span small{
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(4, 52, 79, 0.6);
        }
        @media (max-width: 576px){
          .cu-inline-actions{
            flex-direction: column;
          }
          .cu-inline-btn{
            width: 100%;
          }
        }
        /* ---------- Map side ---------- */
        .cu-map-wrap{ position: relative; width:100%; height: 100%; }
        .cu-map-backdrop{ 
          position:absolute; 
          right:-28px; 
          top:-46px; 
          width: 330px; 
          
          height: 559px; 
          background:#156941; 
          border-radius: 0px 30px 30px 0px; 
          z-index: 0; 
        }
        .cu-map{ 
          position: relative; 
          margin: auto;
          z-index: 1; 
          width: 100%; 
          max-width: 355px; 
          height: 467px; 
          border: 0; 
          border-radius: 3px; 
        }
        @media (max-width: 991.98px){
          .cu-map{ max-width: 100%; height: 360px; }
          .cu-map-backdrop{ display:none; }
        }

        /* ---------- IGR Section ---------- */
.cu-igr-title{
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 34px;
  line-height: 1;
  color: #044C74;
  text-align: center;
}
.cu-igr-sub{
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 29px;
  line-height: 1;
  color: #044C74;
  text-align: center;
  margin-bottom: 24px;
}

/* TABLE WRAPPER = light blue card like the photo */
.cu-table{
  background: #F2F8FC;
  border-radius: 6px;
  overflow: hidden;
  padding: 0;
}

/* make the header a single gradient bar with rounded top corners */
.cu-table table{
  margin: 0;
  border-collapse: separate;
  border-spacing: 0;
  background: transparent;
}

.myhead{
  background:linear-gradient(96.91deg, #044B73 13.64%, #0077BA 51.32%, #088ED9 100.68%);
  box-shadow: 0px 4px 4px 0px rgba(2, 54, 82, 0.25);
  color: #fff; 
}

.cu-table thead th{
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #F4F4F4;
  border: 0;
  padding: 24px 16px;
  text-align: center;
  background: transparent; /* let the row gradient show through */
}
.cu-table thead th:first-child{ border-top-left-radius: 6px; }
.cu-table thead th:last-child{  border-top-right-radius: 6px; }

/* rows = white with green dividers, centered text */
.cu-table tbody td{
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: center;
  padding: 16px;
  background: #F2F8FC;
}
.cu-table tbody tr + tr td{
  border-top: 1px solid #156941;
}


        /* ---------- Address & Hours box ---------- */
        .cu-info-box{ 
          border: .5px solid transparent; 
          border-radius: 6px; 
          padding: 16px 18px; 
          margin-top: 50px;
          margin-bottom: 50px;
          border-image: linear-gradient(89.8deg,#156941 0.2%, rgba(255,255,255,0) 45.8%) 1; 
        }
        .cu-info-ttl { 
          font-family: var(--font-body); 
          font-weight: 700; 
          font-size: 16px; 
          color: #044B73; 
          margin: 0 0 4px; 
        }
        .cu-info-ttl span{ color: #156941; font-weight: 400; }
        .cu-hours{ 
          font-family: var(--font-body); 
          font-weight: 700; 
          font-size: 16px; 
          color: #044B73; 
          margin: 4px 0 0; 
        }
        .cu-hours span{ font-weight: 400; color: #156941; }

        /* ---------- Complaints helper ---------- */
        .cu-help{ 
          font-family: var(--font-body); 
          font-weight: 500; 
          font-size: 18px; 
          color: #044B73; 
        }
        .cu-bullets{ list-style: none; padding: 10px 10px 10px 10px; margin: 10px 0 18px; }
        .cu-bullets li{ 
          display:flex; align-items: flex-start; gap:10px; 
          font-family: var(--font-body); 
          font-size: 19px; 
          max-width:100vh;
          width:100%;
          overflow: hidden;
          padding: 10px 10px 10px 10px;
          line-height: 24px; 
        }
        .cu-dot{ width:15px; height:15px; background:#044B73; border-radius:50%; margin-top:4px; flex:0 0 15px; }
        .cu-linklead{ color:#156941; }
        .cu-bullets a{ color: #3877D5; text-decoration: underline; }

        .cu-note{ 
          font-family: var(--font-body); 
          font-weight: 500; 
          font-size: 18px; 
          color: #04517A; 
        }
      `}</style>

      {/* Main wrapper with side paddings */}
      <section className="cu-wrap py-5 py-lg-5">
        <h1 className="cu-title" style={{marginTop:"70px"}}>Contact Us</h1>
        <hr className="cu-hr" />
        <div>
          <h2 className="cu-subtitle">Get in Touch</h2>
          <p className="cu-lead">We'd love to answer questions about our product, partnerships or any feedback you may have.</p>
       
        
        </div>
        <div className="cu-card" style={{ background: "#F2F8FC", padding: "40px 0px" }}>
          <div className="row g-5 align-items-start" style={{ background: "#F2F8FC", padding: "-20px 0px" }}>
            {/* Left column */}
           <div className="col-12 col-lg-7" style={{ background: "#F2F8FC", padding: "-20px 0px" }}>
              {/* Contact Form */}
              

             
              {/* Phone & Email */}
               <div className="mb-2">
                <div className="cu-label-strong">Registered Office:</div>
                <div className="cu-address">
                  <a
                    href="https://maps.app.goo.gl/7Ej3ZXha8eY3bS3V6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "rgba(4, 76, 116, 1)"
                    }}
                  >
                    1018, Millennium Business Hub,<br />
                    Sarthana, Varachha Road, Surat- 395006
                  </a>
                </div>
              </div>
               <div className="mb-3">
                <div className="cu-label-strong">Corporate Office:</div>
                <div className="cu-address alt">
                  <a
                    href="https://maps.app.goo.gl/JEmX4GhNvB3QM2ok6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "rgba(4, 76, 116, 1)"
                    }}
                  >
                    2001, The Junomoneta Tower, Opp. Pal RTO,<br />
                    Nr. Rajhans Cinema, Pal - Adajan, Surat-395009
                  </a>
                </div>
              </div>
              <div className="cu-inline-actions">
                <a className="cu-inline-btn" href={`tel:${supportPhone}`}>
                  <span className="cu-inline-btn-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 11.09 19 19.5 19.5 0 0 1 3 10.09 19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.6a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.37 6.37l1.27-1.27a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.6.59A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <small>Call Us</small>
                    <strong>{displayPhone}</strong>
                  </span>
                </a>
                <a className="cu-inline-btn" href={`mailto:${supportEmail}?subject=${mailSubject}`}>
                  <span className="cu-inline-btn-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
                      <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                  <span>
                    <small>Email</small>
                    <strong>{supportEmail}</strong>
                  </span>
                </a>
              </div>
            </div>

            {/* Right column (Map) */}
            <div className="col-12 col-lg-5">
              <div className="cu-map-wrap">
                <div className="cu-map-backdrop" />
                <iframe
                  className="cu-map"
                  title="Map location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14880.92667348986!2d72.78193873223819!3d21.18295400681984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d0cb0bde995%3A0xee9cf11c1d9b7834!2sThe%20Junomoneta%20Tower!5e0!3m2!1sen!2sin!4v1756979813054!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Investor Grievance Redressal */}
        <div className="mt-5 pt-3">
          <h3 className="cu-igr-title">Investor Grievance Redressal</h3>
          <div className="cu-igr-sub">Escalation Matrix</div>

          <div className="cu-table">
            <div className="table-responsive">
              <table className="table table-borderless mb-0">
                <thead className="myhead">
                  <tr>
                    <th>Details</th>
                    <th>Contact Person</th>
                    <th>Contact No.</th>
                    <th>Email id</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer Care</td>
                    <td>Shilpa Jadav</td>
                    <td>+91 62010 88241</td>
                    <td>info@growthavenues.co.in</td>
                  </tr>
                  <tr>
                    <td>Head of<br />Customer Care</td>
                    <td>Nikunj Patel</td>
                    <td>+91 99244 84112</td>
                    <td>info.jbvcm@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Compliance Officer &amp;<br />Designated Director</td>
                    <td>Asit Mistry</td>
                    <td>+91 98251 45217</td>
                    <td>asit@growthavenues.co.in</td>
                  </tr>
                  <tr>
                    <td>Designated Director</td>
                    <td>Hirenkumar Sakarvya</td>
                    <td>+91 90335 84585</td>
                    <td>hirenkumar@growthavenues.co.in</td>
                  </tr>
                  <tr>
                    <td>Company Secretary</td>
                    <td>Bhavini Gandhi</td>
                    <td>+91 97730 71625</td>
                    <td>compliance@growthavenues.co.in</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Address + Hours */}
          <div className="cu-info-box">
            <p className="cu-info-ttl">Address: <span>1018, Millennium Business Hub, Sarthana, Varachha Road, Surat- 395006</span></p>
            <p className="cu-hours">Working Hours: <span>9:30 a.m. to 6:00 p.m. (Monday to Friday)</span></p>
          </div>

          {/* Complaint guidance */}
          <p className="cu-help mb-2">If your concern remains unresolved, you may lodge a complaint with the regulator.</p>
          <ul className="cu-bullets">
            <li>
              <span className="cu-dot" />
              <div>
                <span className="cu-linklead">SEBI at&nbsp;</span>
                <a href="https://scores.gov.in/scores/Welcome.html" target="_blank" rel="noreferrer">https://scores.gov.in/scores/Welcome.html</a>
              </div>
            </li>
            <li>
              <span className="cu-dot" />
              <div>
                <span className="cu-linklead">NSE at&nbsp;</span>
                <a href="https://investorhelpline.nseindia.com/NICEPLUS" target="_blank" rel="noreferrer">https://investorhelpline.nseindia.com/NICEPLUS</a>
              </div>
            </li>
            <li>
              <span className="cu-dot" />
              <div>
                <span className="cu-linklead">MCX at&nbsp;</span>
                <a href="https://www.mcxindia.com/Investor-Services" target="_blank" rel="noreferrer">https://www.mcxindia.com/Investor-Services</a>
              </div>
            </li>
            <li>
              <span className="cu-dot" />
              <div>
                <span className="cu-linklead">CDSL at&nbsp;</span>
                <a href="https://www.cdslindia.com/Footer/grievances.aspx" target="_blank" rel="noreferrer">https://www.cdslindia.com/Footer/grievances.aspx</a>
              </div>
            </li>
            <li>
              <span className="cu-dot" />
              <div>
                <span className="cu-linklead">AMFI at&nbsp;</span>
                <a href="https://www.amfiindia.com/investor-corner/investor-grievance-redressal" target="_blank" rel="noreferrer">amfiindia.com/investor-grievance-redressal</a>
              </div>
            </li>
          </ul>
          <p className="cu-note">Please quote your complaint reference number while raising a complaint on SEBI SCORES.</p>
        </div>
      </section>
    </main>
  );
}


export default ContactUs;

