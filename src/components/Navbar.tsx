import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../context/ThemeContext";

const linkBase = "rounded-xl px-3 py-2 text-sm transition";

export default function Navbar() {
  const { theme } = useTheme();

  // Define theme-specific classes
  const isDark = theme === "dark";

  // Base classes that depend on theme
  const linkBaseWithTheme = `${linkBase} ${
    isDark
      ? "hover:bg-zinc-100 text-zinc-200"
      : "hover:bg-zinc-100 text-zinc-800"
  }`;

  const headerClasses = `sticky top-0 z-50 border-b backdrop-blur ${
    isDark ? "border-zinc-800 bg-zinc-950/80" : "border-zinc-200 bg-white/80"
  }`;

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div
          className={`font-semibold tracking-tight ${
            isDark ? "text-white" : "text-zinc-900"
          }`}
        >
          Portfolio
        </div>

        <nav className="flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) => {
              const activeClass = isActive
                ? isDark
                  ? "bg-zinc-900"
                  : "bg-zinc-300"
                : "";
              return `${linkBaseWithTheme} ${activeClass}`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => {
              const activeClass = isActive
                ? isDark
                  ? "bg-zinc-900"
                  : "bg-zinc-300"
                : "";
              return `${linkBaseWithTheme} ${activeClass}`;
            }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              const activeClass = isActive
                ? isDark
                  ? "bg-zinc-900"
                  : "bg-zinc-300"
                : "";
              return `${linkBaseWithTheme} ${activeClass}`;
            }}
          >
            Contact
          </NavLink>

          <div className="ml-2">
            <DarkModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
