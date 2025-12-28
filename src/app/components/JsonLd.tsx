"use client";

import { useEffect } from "react";

type Props = {
  jsonLd: Record<string, any>;
};

export default function StructuredData({ jsonLd }: Props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [jsonLd]);
  return null;
}
