"use client";

import { motion } from "framer-motion";

interface TerminalBootProps {
  children: React.ReactNode;
  delay?: number;
}

export function TerminalBoot({ children, delay = 0 }: TerminalBootProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // 'once: true' ensures it doesn't animate every time you scroll past it
      viewport={{ once: true, margin: "-50px" }} 
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.19, 1, 0.22, 1], // Sharp, industrial easing
      }}
    >
      {children}
    </motion.div>
  );
}