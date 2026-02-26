import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle} // 3. Just one click handler
      className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-3 py-2 text-sm
                 dark:border-zinc-800 "
      aria-label="Toggle dark mode"
    >
      {/* 4. Use the global theme state to decide which icon to show */}
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}

      <span className="hidden sm:inline">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
