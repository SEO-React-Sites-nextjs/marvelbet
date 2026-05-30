"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { config } from "@/config";

type Props = {
  className?: string;
  type?: "static" | "dynamic" | "";
};

export default function BreadCrumbs({ className = "", type }: Props) {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter(Boolean);

  useEffect(() => {
    const breadcrumbList = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: config.baseUrl,
      },
      ...pathNames.map((segment, index) => {
        const name = decodeURIComponent(segment.replace(/-/g, " "));
        const item = `${config.baseUrl}/${pathNames
          .slice(0, index + 1)
          .join("/")}`;
        return {
          "@type": "ListItem",
          position: index + 2,
          name,
          item,
        };
      }),
    ];

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbList,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "breadcrumbs-jsonld"; // optional: prevent duplicate
    script.innerHTML = JSON.stringify(breadcrumbJsonLd);
    document.head.appendChild(script);

    return () => {
      document.getElementById("breadcrumbs-jsonld")?.remove();
    };
  }, [pathNames]);

  return (
    <section
      className={`breadcrumbs-wrapper ${className}`}
      aria-label="Breadcrumb"
    >
      <div className="container">
        <ol>
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>

          {pathNames.map((segment, idx) => {
            const href = "/" + pathNames.slice(0, idx + 1).join("/");
            const label = decodeURIComponent(segment.replace(/-/g, " "));
            const position = idx + 2;

            return (
              <React.Fragment key={idx}>
                <span className="breadcrumb-separator">›</span>
                <li>
                  <Link href={href}>
                    <span>{label}</span>
                  </Link>
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
