"use client";

import { motion } from "framer-motion";

export function ProjectTechGraph({ count }: { count: number }) {
  return (
    <div className="h-12 flex items-end gap-1 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity duration-500">
      {Array.from({ length: Math.max(count, 8) }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          whileInView={{ 
            height: [4, 16, 8, 24, 4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5 + Math.random(),
            delay: i * 0.1,
          }}
          className="w-1.5 bg-secondary group-hover:bg-primary transition-colors"
        />
      ))}
    </div>
  );
}