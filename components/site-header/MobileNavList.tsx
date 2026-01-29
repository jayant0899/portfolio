"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavItem } from "./NavItem";
import type { NavItem as NavItemType } from "@/types/site-config";

export function MobileNavList({ 
  items, 
  activeId 
}: { 
  items: NavItemType[]; 
  activeId?: string 
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade and slide the container rows
    gsap.from(".mobile-nav-row", {
      x: -15,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <nav ref={container} className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div key={item.href} className="mobile-nav-row">
          <NavItem
            href={item.href}
            index={index + 1}
            active={activeId === item.href || activeId?.startsWith(item.href)}
          >
            {item.title}
          </NavItem>
        </div>
      ))}
    </nav>
  );
}