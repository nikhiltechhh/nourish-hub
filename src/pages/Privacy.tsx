import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function Privacy() {
  const [scrolled, setScrolled] = useState(false);

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

        .privacy-hero {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .privacy-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80');
          background-size: cover;
          background-position: center;
          filter: brightness(0.38);
          transform: scale(1.04);
          transition: transform 8s ease;
        }

        .privacy-hero-bg:hover {
          transform: scale(1.0);
        }

        .privacy-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.18) 0%,
            rgba(20,10,5,0.55) 100%
          );
        }

        .privacy-hero h1 {
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

        .leaf-divider img {
          width: 80px;
          height: auto;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.13));
        }

        .leaf-svg {
          width: 78px;
          height: 54px;
        }

        .privacy-content {
          max-width: 860px;
          margin: 0 auto;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.2rem, 5vw, 2.5rem) clamp(3rem, 8vw, 6rem);
        }

        .privacy-content h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.55rem, 3.5vw, 2rem);
          font-weight: 700;
          color: #1a1a1a;
          text-align: center;
          margin-bottom: 2.2rem;
          letter-spacing: 0.01em;
        }

        .privacy-intro {
          font-family: 'Lato', sans-serif;
          font-size: clamp(0.97rem, 2vw, 1.08rem);
          line-height: 1.82;
          color: #222;
          margin-bottom: 2rem;
          position: relative;
          padding-left: 2.2rem;
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

        .section-block {
          margin-bottom: 2rem;
        }

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

        .section-block ul {
          list-style: none;
          padding-left: 0;
          margin-top: 0.35rem;
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
          .privacy-hero { height: 200px; }
          .drop-cap { font-size: 3.2rem; }
          .privacy-intro { padding-left: 0; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: fadeInUp 0.7s ease both;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.22s; }
        .delay-3 { animation-delay: 0.34s; }
        .delay-4 { animation-delay: 0.46s; }
        .delay-5 { animation-delay: 0.58s; }
        .delay-6 { animation-delay: 0.7s; }
        .delay-7 { animation-delay: 0.82s; }
      `}</style>

      {/* Hero */}
      <Header  />
      <div className="privacy-hero mt-20">
        <div className="privacy-hero-bg" />
        <div className="privacy-hero-overlay" />
        <h1>Privacy Policy</h1>
      </div>

      {/* Leaf divider */}
     

      {/* Main content */}
      <div className="privacy-content">
        <h2 className="animate-in delay-1">VeGa Foods Privacy Policy</h2>

        <p className="privacy-intro animate-in delay-2">
          <span className="drop-cap">A</span>
          t VeGa Foods, your privacy is important to us. We are committed to protecting your personal
          information and ensuring that your details remain secure. Any information we collect in relation
          to you is kept strictly secured. We do not pass on, sell, or swap any of your personal details
          with anyone. Cookies sent to your computer from VeGa Foods only last while you are browsing our
          website. We do not store persistent cookies on your computer.
        </p>

        <div className="section-block animate-in delay-3">
          <h3>Collection of Personal Information</h3>
          <p>We may collect personal information from you when you:</p>
          <ul>
            <li>Visit our website</li>
            <li>Place an order</li>
            <li>Contact us through forms or email</li>
            <li>Subscribe to updates or newsletters</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>
            The information we collect may include your name, contact details, delivery address, and other
            relevant information necessary to provide our services.
          </p>
        </div>

        <div className="section-block animate-in delay-4">
          <h3>Use of Your Information</h3>
          <p>VeGa Foods uses your personal information solely for:</p>
          <ul>
            <li>Identifying you as a customer</li>
            <li>Processing and delivering your orders</li>
            <li>Personalising your browsing experience</li>
            <li>Communicating with you regarding your purchases or enquiries</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>
            We do not sell, trade, swap, or share your personal details with third parties. Your
            information is always kept strictly secure.
          </p>
        </div>

        <div className="section-block animate-in delay-5">
          <h3>Cookies</h3>
          <ul>
            <li>Our website may use temporary cookies to enhance your browsing experience.</li>
            <li>Cookies sent to your computer from VeGa Foods only last while you are browsing our website.</li>
            <li>We do not store persistent cookies on your computer.</li>
            <li>Cookies help us improve functionality and personalise your experience, but they do not store sensitive personal information.</li>
          </ul>
        </div>

        <div className="section-block animate-in delay-6">
          <h3>Security</h3>
          <p>
            We take reasonable steps to protect your personal information from misuse, loss, unauthorised
            access, modification, or disclosure.
          </p>
        </div>

        <div className="section-block animate-in delay-7">
          <h3>Changes to This Policy</h3>
          <p>
            VeGa Foods may update this Privacy Policy from time to time. Any changes will be posted on
            this page.
          </p>
        </div>

        <p className="footer-note">
          &copy; {new Date().getFullYear()} VeGa Foods. All rights reserved.
        </p>
      </div>
    </div>
  );
}