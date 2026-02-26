import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    // <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-zinc-950 text-zinc-50"
          : "bg-white text-slate-900"
      }`}
    >
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <footer className="mt-10 pb-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Denvir De Jesus • Built with React + TS +
          Tailwind
        </footer>
      </main>
    </div>
  );
}
