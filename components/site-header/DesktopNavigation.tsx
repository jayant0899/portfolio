"use client";

import type { NavItem as NavItemType } from "@/types/site-config";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This creates the sequential entrance
      delayChildren: 0.2,
    },
  },
};

export function DesktopNav({ items }: { items: NavItemType[] }) {
  const pathname = usePathname();
  const priorityItems = items.filter((item) => item.priority);
  console.log(pathname);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex items-center gap-8"
    >
      {priorityItems.map((item, index) => (
        <NavItem
          key={item.href}
          href={item.href}
          index={index + 1}
          active={pathname === item.href}
        >
          {item.title}
        </NavItem>
      ))}
    </motion.nav>
  );
}
