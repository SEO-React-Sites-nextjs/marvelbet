"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Nav from "./Nav";

export default function Header() {
  useEffect(() => {
    const scriptId = "profile-page-jsonld";

    const oldScript = document.getElementById(scriptId);
    if (oldScript) oldScript.remove();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      dateCreated: "2025-12-25T12:00:00+06:00",
      dateModified: "2025-12-25T18:30:00+06:00",
      mainEntity: {
        "@type": "Organization",
        name: "Velki Live Exchange",
      },
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
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={menuOpen ? "menu-open" : ""}>
      <div className="container">
        <div className="header-left">
          <a href="/">
            <img src="/common/logo.png" alt="logo" />
          </a>
        </div>
        <div className="header-right">
          <div className="menu" onClick={toggleMenu}>
            <img src="/common/menu-icon.png" alt="menu" />
          </div>
          <Nav />
          <a className="sign-btn" href="http://jeetbuzz999.com/">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
