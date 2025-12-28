"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
        item: "https://www.velki88live.com/",
      },
      ...pathNames.map((segment, index) => {
        const name = decodeURIComponent(segment.replace(/-/g, " "));
        const item = `https://www.velki88live.com/${pathNames
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
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link itemProp="item" href="/">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {pathNames.map((segment, idx) => {
            const href = "/" + pathNames.slice(0, idx + 1).join("/");
            const label = decodeURIComponent(segment.replace(/-/g, " "));
            const position = idx + 2;

            return (
              <React.Fragment key={idx}>
                <span className="breadcrumb-separator">›</span>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <Link itemProp="item" href={href}>
                    <span itemProp="name">{label}</span>
                  </Link>
                  <meta itemProp="position" content={position.toString()} />
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
