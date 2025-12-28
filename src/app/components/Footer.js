"use client";

import { useEffect } from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  useEffect(() => {
    const scriptId = "software-application-jsonld";
    const oldScript = document.getElementById(scriptId);
    if (oldScript) oldScript.remove();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Velki Live Exchange",
      operatingSystem: "Android, iOS",
      applicationCategory: "GameApplication",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "40000",
      },
      offers: [
        {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BDT,PKR,INR",
        },
      ],
      datePublished: "2025-12-25",
    };

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-item logo-wrap">
            <a href="/">
              <img src="/common/footer-logo.png" alt="logo" className="logo" />
            </a>
            <div className="logo-title">Marvelbet Online Cricket Exchange</div>
            <div className="score-item">
              <span className="star">4.7</span>
              <span>45,000+ downloads</span>
            </div>
          </div>
          <div className="footer-item link">
            <div className="link-title">Friendly links</div>
            <nav className="link-wrap" aria-label="Social Media Links">
              <a href="https://www.baji999.net">BAJI999</a>
              <a href="https://www.six6s6.com">SIX6S</a>
              <a href="https://www.citinow99.com/">CITINOW</a>
              <a href="https://www.jeetbuzz888-live.com/">JEETBUZZ</a>
              <a href="https://www.borajogar999.com/">BORA JOGAR</a>
            </nav>
          </div>
          <div className="footer-item">
            <div className="link-title">SITEMAP</div>
            <div className="link-title">Social Media Links</div>
            <SocialIcons />
          </div>
          <div className="footer-item">
            <div className="link-title">Download APP</div>
            <a className="android-item" href="https://jeetbuzz999.com/">
              <img
                src="/common/android-icon.png"
                alt="android"
                className="android"
              />
              <div className="item-info">
                Download for
                <br />
                <span>Android</span>
              </div>
              <img
                src="/common/down-icon.png"
                alt="download"
                className="down"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © 2025 <a href="">Marvelbet</a> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
