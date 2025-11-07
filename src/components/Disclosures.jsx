import React from "react";
import { ARN_NUMBER, SEBI_REG, NISM_CERTS, BSE, NSE, SEBI, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_PHONE } from "../constants";

export default function Disclosures() {
  return (
    <div className="container py-4">
      <h1 className="h3 fw-bold mb-3">Disclosures & Compliance</h1>
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h2 className="h6 fw-bold">Regulatory Details</h2>
          <ul className="m-0">
            {NSE ? <li>NSE: {NSE}</li> : null}
            {BSE ? <li>BSE: {BSE}</li> : null}
            {SEBI ? <li>SEBI: {SEBI}</li> : null}
          </ul>
        </div>
      </div>

      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h2 className="h6 fw-bold">Standard Disclaimer</h2>
          <p className="text-secondary m-0">
            Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. Past performance does not indicate future results. Tax treatment is subject to change and depends on individual circumstances.
          </p>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h6 fw-bold">Contact</h2>
          <ul className="m-0">
            {CONTACT_EMAIL ? <li>Email: {CONTACT_EMAIL}</li> : null}
            {CONTACT_PHONE ? <li>Phone: {CONTACT_PHONE}</li> : null}
            {CONTACT_ADDRESS ? <li>Address: {CONTACT_ADDRESS}</li> : null}
          </ul>
        </div>
      </div>
    </div>
  );
}
