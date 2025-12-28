"use client";
import { useEffect, useState } from "react";

const FloatBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const scrollElement = document.scrollingElement || document.documentElement;

    scrollElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleContactClick = () => {
    window.location.href = "https://jeetbuzz999.com/";
  };

  return (
    <div className="float-bar">
      {isVisible && (
        <button onClick={scrollToTop} className="top-btn">
          <img src="/common/float-top.png" alt="arrow top" />
        </button>
      )}
      <button onClick={handleContactClick} className="join-btn">
        <img src="/common/float-promo.png" alt="join us" />
      </button>
    </div>
  );
};

export default FloatBar;
