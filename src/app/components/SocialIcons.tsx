"use client";

import Link from "next/link";
import React from "react";

interface SocialItem {
  img: string;
  path: string;
  alt: string;
}

interface FooterSocialIconsProps {
  items?: SocialItem[];
}

const defaultSocial: SocialItem[] = [
  {
    img: "/common/footer-icon.png",
    path: "https://www.facebook.com/six6scricketlive",
    alt: "facebook",
  },
  {
    img: "/common/footer-icon2.png",
    path: "https://x.com/Six6s_casino",
    alt: "twitter",
  },
  {
    img: "/common/footer-icon3.png",
    path: "https://www.instagram.com/six6s_live",
    alt: "instagram",
  },
  {
    img: "/common/footer-icon4.png",
    path: "https://www.youtube.com/@bajibj999",
    alt: "youtube",
  },
];

export default function FooterSocialIcons({
  items = defaultSocial,
}: FooterSocialIconsProps) {
  return (
    <nav className="img-group" aria-label="Social Media Links">
      {items.map(({ img, path, alt }, idx) => (
        <Link href={path} key={idx} className="img-item" target="_blank">
          <img src={img} alt={alt} />
        </Link>
      ))}
    </nav>
  );
}
