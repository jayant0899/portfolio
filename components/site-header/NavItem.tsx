"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

interface NavItemProps extends React.ComponentProps<typeof Link> {
  active?: boolean;
  index: number;
}

// Animation variants for the individual item
const itemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
} as const;

export const NavItem = ({ active, index, children, className, ...props }: NavItemProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Link
        className={cn(
          "group relative flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 text-muted-foreground/60",
          className
        )}
        {...props}
      >
        <span className="text-[10px] text-muted-foreground tabular-nums shrink-0">
          {index.toString().padStart(2, "0")}.
        </span>
        <span
          className={cn(
            "transition-colors duration-200",
            active ? "text-primary" : "group-hover:text-primary/80"
          )}
        >
          {children}
        </span>
      </Link>
    </motion.div>
  );
};