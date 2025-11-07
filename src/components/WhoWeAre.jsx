import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { ContentContext } from "../context/ContentContext";

function WhoWeAre() {
  const { content } = useContext(ContentContext);
  const navigate = useNavigate();
  return (



    <>
    <style>
      {
        `
        .gwa-wrap {
  padding: 40px 16px;
  display: flex;
  justify-content: center;
  background: #f7fbfe; /* subtle section bg, tweak if needed */
}
.gwa-container {
  width: 100%;
  max-width: 1255px;          /* matches your width */
  min-height: 465px;          /* target height; will grow if content wraps */
  display: grid;
  grid-template-columns: 1fr 1fr; /* image | text */
  gap: 28px;
  align-items: center;
}

/* ---- Left image ---- */
.gwa-left { display: flex; justify-content: center; }
.gwa-img-frame {
  padding: 0px;         /* per spec */
  border-radius: 9px;
  background: #f7fbfe;        /* frame background for depth */
  box-shadow: 0 15px 26px rgba(0,0,0,0.03);
  max-width: 573px;           /* target image width container */
}
.gwa-img {
  width: 100%;
  height: auto;
  max-width: 573px;           /* spec width */
  max-height: 422px;          /* spec height */
  border-radius: 9px;
  display: block;
  object-fit: cover;
}

/* ---- Right text ---- */
.gwa-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
.gwa-title {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 600;                           /* SemiBold */
  font-size: clamp(22px, 3.2vw, 40px);        /* up to 40px per spec */
  line-height: 1.47;                          /* 147% */
  letter-spacing: 0;
  background:
    linear-gradient(0deg, #044E76, #044E76),
    linear-gradient(96.91deg, #044B73 13.64%, #0077BA 51.32%, #088ED9 100.68%),
    linear-gradient(0deg, #F2F8FC, #F2F8FC),
    linear-gradient(0deg, #044E76, #044E76);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;                          /* gradient text */
  text-align: left;                            /* right in spec, but left aligns better with LTR; change to right if needed */
}

/* Paragraph */
.gwa-desc {
  margin: 0;
  max-width: 505px;                            /* per spec */
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.63;                           /* 163% */
  letter-spacing: 0;
  color: #444;
  background:#f7fbfe;          /* soft tint from spec's rgba(166,166,166,1) */
  border-radius: 8px;
  padding: 12px;
}

/* CTA button */
.gwa-cta {
  margin-top: 6px;
  height: 52px;                                /* per spec */
  padding: 17px 53px;                          /* per spec */
  background: rgba(21,105,65,1);               /* green */
  color: #fff;
  border: none;
  border-radius: 4px;                           /* per spec */
  font-weight: 600;
  letter-spacing: .2px;
  box-shadow: 0px 15px 26px rgba(0,0,0,0.03);   /* per spec */
  cursor: pointer;
}
.gwa-cta:active { transform: translateY(1px); }

/* ---- Line + Center pill banner under section ---- */
.gwa-line-wrap {
  position: relative;
  padding: 28px 16px 56px;
}
.gwa-line {
  width: 100%;
  max-width: 1628px;                            /* per spec */
  height: 0;
  border-top: 1px solid rgba(0,0,0,0.12);       /* border-width:1 */
  border-radius: 41px;                          /* per spec */
  margin: 0 auto;                               /* center */
}
.gwa-center-pill {
  position: relative;
  max-width: 978px;                             /* per spec */
  height: 57px;                                 /* per spec */
  border-radius: 41px;                          /* per spec */
  border: 1px solid rgba(0,0,0,0.12);           /* per spec */
  margin: -28px auto 0;                         /* overlap line and center */
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gwa-center-text {
  display: inline-block;
  text-align: center;
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: clamp(18px, 2vw, 27px);            /* up to 27px per spec */
  line-height: 1;                                /* 100% */
  color: #0b0b0b;
  padding: 0 16px;
  white-space: nowrap;
}

/* ---- Responsiveness ---- */
@media (max-width: 1200px) {
  .gwa-container {
    gap: 22px;
  }
  .gwa-img-frame { padding: 36px 48px; }
}
@media (max-width: 992px) {
  .gwa-container {
    grid-template-columns: 1fr; /* stack */
    min-height: initial;
  }
  .gwa-left, .gwa-right { justify-content: center; }
  .gwa-right { align-items: center; text-align: center; }
  .gwa-title { text-align: center; }
  .gwa-desc { max-width: 620px; }
  .gwa-center-pill { max-width: 92%; }
}
@media (max-width: 576px) {
  .gwa-img-frame { padding: 22px 20px; }
  .gwa-desc { padding: 10px 12px; }
  .gwa-cta { width: 100%; }
  .gwa-center-text { white-space: normal; line-height: 1.2; }
}
        `
      }
    </style>
  
    <div>
         <section className="gwa-wrap">
        <div className="gwa-container">
          {/* Left: Image */}
          <div className="gwa-left">
           
              <img
                src="assets/whoweare.png"
                alt="Who We Are"
                className="gwa-img"
              />
       
          </div>

          {/* Right: Text */}
          <div className="gwa-right">
            <h2 className="gwa-title">{content?.whoWeAre?.title || 'Who We Are'}</h2>
              <hr></hr>
            <p className="gwa-desc">
              At Growth Avenues, we build behaviour-first mutual fund plans through constant
              discovery, validate them with rigorous data analysis, and execute
              with unwavering discipline. This rare blend of curiosity,
              scientific precision, and behavioral control defines who we are—and
              powers strategies that deliver not just on paper, but under
              pressure of real market.
            </p>

            <button
              type="button"
              className="gwa-cta"
              onClick={() => {
                try {
                  navigate("/about");
                } catch {
                  window.location.href = "/about";
                }
              }}
            >
              About Us
            </button>
          </div>
        </div>
      </section>

    </div>
      </>
  )
}



export default WhoWeAre
