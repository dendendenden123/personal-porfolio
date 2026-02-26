import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "theme";

type Theme = "light" | "dark";

export function useDarkMode() {
  const systemPrefersDark = useMemo(() => {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  }, []);

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === "light" || saved === "dark") return saved;
    return systemPrefersDark ? "light" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return {
    theme,
    toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
  };
}
