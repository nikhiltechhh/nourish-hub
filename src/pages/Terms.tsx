import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function Terms() {
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#1a1a1a", background: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .terms-hero {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .terms-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://i.pinimg.com/1200x/cc/db/24/ccdb24e0271d0cd3b6614fa104d929d1.jpg');
          background-size: cover;
          background-position: center;
          filter: brightness(0.36);
          transform: scale(1.04);
          transition: transform 8s ease;
        }

        .terms-hero-bg:hover { transform: scale(1.0); }

        .terms-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(20,10,5,0.58) 100%
          );
        }

        .terms-hero h1 {
          position: relative;
          z-index: 2;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.04em;
          text-shadow: 0 2px 24px rgba(0,0,0,0.45);
          text-align: center;
          padding: 0 1rem;
        }

        .leaf-divider {
          display: flex;
          justify-content: center;
          margin: -22px 0 0 0;
          position: relative;
          z-index: 3;
        }

        .leaf-svg { width: 78px; height: 54px; }

        .terms-content {
          max-width: 860px;
          margin: 0 auto;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.2rem, 5vw, 2.5rem) clamp(3rem, 8vw, 6rem);
        }

        .terms-content h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.55rem, 3.5vw, 2rem);
          font-weight: 700;
          color: #1a1a1a;
          text-align: center;
          margin-bottom: 2.2rem;
          letter-spacing: 0.01em;
        }

        .terms-intro {
          font-family: 'Lato', sans-serif;
          font-size: clamp(0.97rem, 2vw, 1.08rem);
          line-height: 1.82;
          color: #222;
          margin-bottom: 2rem;
        }

        .drop-cap {
          float: left;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4.2rem;
          font-weight: 700;
          line-height: 0.78;
          color: #1a1a1a;
          margin-right: 0.1rem;
          margin-top: 0.18rem;
          padding-right: 0.08rem;
        }

        .section-block { margin-bottom: 2.2rem; }

        .section-block h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.08rem, 2.5vw, 1.22rem);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          letter-spacing: 0.01em;
        }

        .section-block p,
        .section-block ul {
          font-family: 'Lato', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          line-height: 1.82;
          color: #333;
        }

        .section-block p + p { margin-top: 0.85rem; }

        .section-block ul {
          list-style: none;
          padding-left: 0;
          margin-top: 0.5rem;
        }

        .section-block ul li {
          padding: 0.22rem 0 0.22rem 1.5rem;
          position: relative;
        }

        .section-block ul li::before {
          content: "•";
          position: absolute;
          left: 0.3rem;
          color: #8B1A1A;
          font-size: 1.1em;
        }

        .section-divider {
          border: none;
          border-top: 1px solid #e5e5e5;
          margin: 2.4rem 0;
        }

        .highlight-box {
          background: #faf8f5;
          border-left: 3px solid #8B1A1A;
          padding: 1rem 1.4rem;
          margin: 1rem 0;
          border-radius: 0 4px 4px 0;
        }

        .highlight-box p {
          font-family: 'Lato', sans-serif;
          font-size: clamp(0.93rem, 2vw, 1.02rem);
          line-height: 1.78;
          color: #333;
        }

        .footer-note {
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          color: #888;
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e8e8e8;
        }

        @media (max-width: 600px) {
          .terms-hero { height: 200px; }
          .drop-cap { font-size: 3.2rem; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .animate-in { animation: fadeInUp 0.7s ease both; }
        .delay-1 { animation-delay: 0.08s; }
        .delay-2 { animation-delay: 0.18s; }
        .delay-3 { animation-delay: 0.28s; }
        .delay-4 { animation-delay: 0.38s; }
        .delay-5 { animation-delay: 0.48s; }
        .delay-6 { animation-delay: 0.58s; }
        .delay-7 { animation-delay: 0.68s; }
        .delay-8 { animation-delay: 0.78s; }
        .delay-9 { animation-delay: 0.88s; }
      `}</style>

      {/* Hero */}
      <Header />
      <div className="terms-hero mt-20">
        <div className="terms-hero-bg" />
        <div className="terms-hero-overlay" />
        <h1>Terms &amp; Conditions</h1>
      </div>

     

      {/* Main content */}
      <div className="terms-content">
        <h2 className="animate-in delay-1">VeGa Foods Terms &amp; Conditions</h2>

        {/* Product Information Disclaimer */}
        <div className="section-block animate-in delay-2">
          <h3>Product Information Disclaimer</h3>
          <p className="terms-intro">
            <span className="drop-cap">V</span>
            eGa Foods strives to provide informative and accurate information regarding our complete
            product range at the time of publishing. The information presented on this website is
            intended for general informational and educational purposes only. While we endeavour to
            ensure accuracy, VeGa Foods cannot be held liable for any adverse effects resulting from
            the consumption or use of any products shown or sold through this website.
          </p>
          <p>The information provided has been gathered from a variety of sources, including:</p>
          <ul>
            <li>Our suppliers</li>
            <li>Customer feedback</li>
            <li>Anecdotal evidence</li>
            <li>Traditional or historical use</li>
            <li>Scientific studies</li>
            <li>Publicly available resources</li>
          </ul>
          <p style={{ marginTop: "0.85rem" }}>
            Unless explicitly stated otherwise, any reference to potential health or wellness benefits
            is based on traditional use and anecdotal evidence of individual and/or combined ingredients,
            and not necessarily on scientific evidence.
          </p>
          <p>
            The information provided on this website is not intended to provide medical advice, nor is
            it a substitute for professional medical advice, diagnosis, or treatment from a qualified
            medical practitioner.
          </p>
          <div className="highlight-box">
            <p>
              If you are unsure about the benefits or risks associated with consuming any of our
              products, or if you have a pre-existing medical condition, are pregnant, breastfeeding,
              or taking medication, we strongly recommend consulting your doctor or qualified healthcare
              professional prior to use.
            </p>
          </div>
          <p>
            We also encourage customers to seek independent information regarding any product in our range.
          </p>
          <p>
            While all reasonable care has been taken in preparing the information on this website,
            neither VeGa Foods nor any party involved in creating, producing, or delivering this
            website assumes liability or responsibility for the accuracy, completeness, or usefulness
            of any information provided.
          </p>
          <p>
            VeGa Foods shall not be held liable for any direct, indirect, incidental, special,
            consequential, or punitive damages arising from your use of, or inability to use, this
            website or any of our products.
          </p>
        </div>

        <hr className="section-divider animate-in delay-3" />

        {/* Delivery Details */}
        <div className="section-block animate-in delay-4">
          <h3>Delivery Details</h3>
          <p>
            Where possible, all orders are delivered via a courier service and require a signature
            upon delivery.
          </p>
          <ul>
            <li>Delivery to PO Boxes is generally not available via courier.</li>
            <li>
              If a PO Box is entered as a delivery address, this may cause delays and, in some cases,
              may require redelivery at the customer's expense.
            </li>
            <li>
              If courier delivery is not available, an appropriate Australia Post service will be used.
            </li>
          </ul>
          <div className="highlight-box" style={{ marginTop: "1rem" }}>
            <p>
              <strong>Processing times:</strong> 1–5 business days after cleared payment is received.{" "}
              <strong>Estimated delivery times:</strong> 1–3 business days for most areas within Australia.
            </p>
          </div>
          <p style={{ marginTop: "0.85rem" }}>
            VeGa Foods does not accept responsibility or liability for delays, loss, or damage caused
            during transit once the order has been dispatched.
          </p>
        </div>

        <hr className="section-divider animate-in delay-5" />

        {/* Refund Policy */}
        <div className="section-block animate-in delay-6">
          <h3>Refund Policy</h3>
          <p>
            VeGa Foods maintains a strict no-refunds policy for all payments made via PayID.
          </p>
          <p>
            Refunds will only be considered in the event of an error made directly by VeGa Foods.
            Any approved refund will be assessed and processed solely at the discretion of VeGa Foods.
            If a refund is approved, the funds will be returned to the original PayID or an agreed account.
          </p>
        </div>

        <hr className="section-divider animate-in delay-7" />

        {/* Pricing Accuracy */}
        <div className="section-block animate-in delay-8">
          <h3>Pricing Accuracy</h3>
          <p>
            VeGa Foods makes every effort to ensure that pricing information displayed on our website
            and charged at checkout is accurate. However, we reserve the right to correct any errors
            in product descriptions, pricing, or quantities prior to dispatch.
          </p>
          <p>
            If an incorrect price or quantity has been processed and the corrected price is higher
            than originally charged, we will contact the customer and provide the option to:
          </p>
          <ul>
            <li>Accept the corrected price, or</li>
            <li>Cancel the order for a full refund prior to shipment</li>
          </ul>
        </div>

        <hr className="section-divider animate-in delay-9" />

        {/* Pricing Adjustments */}
        <div className="section-block animate-in delay-9">
          <h3>Pricing Adjustments</h3>
          <p>
            Due to supplier cost increases, VeGa Foods may occasionally adjust product pricing. We
            strive to keep any increases minimal and appreciate your continued support and
            understanding as a valued customer.
          </p>
        </div>

        <p className="footer-note">
          &copy; {new Date().getFullYear()} VeGa Foods. All rights reserved.
        </p>
      </div>
    </div>
  );
}