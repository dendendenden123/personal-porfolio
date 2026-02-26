import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext"

export default function Section({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  const isDark : boolean = theme === "dark"

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className={`
        "rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm" 
        ${isDark ? " dark:border-zinc-800 dark:bg-zinc-950" : ''} 
    `}>
      {children}
    </motion.section>
  );
}