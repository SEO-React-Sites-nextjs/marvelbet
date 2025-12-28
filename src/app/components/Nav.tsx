"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navMenus = [
    { menu: "HOME", path: "/" },
    { menu: "Login", path: "/login" },
    { menu: "Payment", path: "/payment" },
    { menu: "Mobile", path: "/mobile" },
    { menu: "Registration", path: "/registration" },
    { menu: "Bonuses", path: "/bonuses" },
    { menu: "FAQs", path: "/faqs" },
  ];

  return (
    <nav>
      {navMenus.map(({ menu, path }) => (
        <Link
          key={menu}
          href={path}
          className={clsx("nav-item", {
            active: pathname === path,
          })}
        >
          {menu}
        </Link>
      ))}
    </nav>
  );
}
