import { useTheme } from "../context/ThemeContext";

export const DownloadButton = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <a href="/Dejesus_resume_V3.pdf" download="Dejesus_resume_V3.pdf">
      <button
        className={`rounded-lg border px-5 py-2.5 font-medium transition-all ${
          isDark
            ? "border-zinc-700 text-zinc-200 hover:bg-zinc-800" 
            : "border-zinc-300 text-zinc-700 hover:bg-zinc-100"
        }`}
      >
        Download Resume
      </button>
    </a>
  );
};
