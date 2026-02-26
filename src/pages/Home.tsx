import Section from "../components/Section";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DownloadButton } from "../components/DownloadButton";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    "PHP Developer",
    "Laravel Developer",
    "JavaScript Developer",
    "React Developer",
    "TypeScript Enthusiast",
    "UI/UX Focused",
    "Problem Solver",
  ];

  // Simple typing effect
  useEffect(() => {
    if (currentIndex >= roles.length) {
      setCurrentIndex(0);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(roles[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentIndex, roles]);

  const achievements = [
    { icon: "🚀", text: "2 years experience of System Monitoring" },
    { icon: "💼", text: "Built a website for a cooperative client" },
    { icon: "🏆", text: "Independently planned and completed 16 website." },
    { icon: "📱", text: "Designed high-fidelity prototypes using Figma." },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section with Typing Effect */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="relative">
            <div
              className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${
                isDark
                  ? "from-sky-500 to-purple-500"
                  : "from-sky-400 to-purple-400"
              } opacity-75 blur`}
            ></div>
            <img
              src="/profile_pic.jpg"
              alt="Den Ver - Software Engineer"
              className="relative h-28 w-28 rounded-2xl object-cover ring-4 ring-white dark:ring-zinc-800"
            />
          </div>

          <div className="flex-1">
            <h1
              className={`text-3xl font-bold tracking-tight ${
                isDark ? "text-zinc-50" : "text-zinc-900"
              }`}
            >
              Denvir De Jesus
            </h1>

            <div className="mt-2 h-8">
              <span
                className={`text-xl ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                {displayText}
              </span>
              <span className="ml-1 animate-pulse"></span>
            </div>

            <p
              className={`mt-4 max-w-2xl leading-relaxed ${
                isDark ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              A versatile Full-Stack Developer with a proven ability to master
              any language and a track record of architecting complex web
              solutions both solo and in team environments. I combine deep
              technical adaptability with professional client management to
              deliver high-performance, end-to-end applications
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/Projects">
                <button
                  className={`rounded-lg px-5 py-2.5 font-medium transition-all ${
                    isDark
                      ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                      : "bg-zinc-900 text-zinc-50 hover:bg-zinc-800"
                  }`}
                >
                  View My Work →
                </button>
              </Link>

              {/* download button*/}
              <DownloadButton />
            </div>
          </div>
        </div>
      </Section>

      {/* Achievement Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl border p-4 text-center backdrop-blur-sm ${
              isDark
                ? "border-zinc-800 bg-zinc-900/50"
                : "border-zinc-200 bg-white/50"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <p
              className={`mt-2 text-sm font-medium ${
                isDark ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Featured Tech Stack with Icons */}
      <Section>
        <h2
          className={`text-xl font-semibold ${
            isDark ? "text-zinc-50" : "text-zinc-900"
          }`}
        >
          Core Technologies
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { name: "REST APIs", icon: "🌐", color: "from-sky-500 to-blue-500" },
            { name: "React", icon: "⚛️", color: "from-sky-500 to-blue-500" },
            {
              name: "TypeScript",
              icon: "📘",
              color: "from-blue-600 to-blue-700",
            },
            {
              name: "Tailwind",
              icon: "🎨",
              color: "from-cyan-500 to-teal-500",
            },
            {
              name: "Node.js",
              icon: "🟢",
              color: "from-green-500 to-emerald-500",
            },
            { name: "Next.js", icon: "▲", color: "from-zinc-700 to-zinc-900" },
            {
              name: "JavaScript",
              icon: "📜",
              color: "from-zinc-700 to-zinc-900",
            },
            { name: "PHP", icon: "🐘", color: "from-zinc-700 to-zinc-900" },
            { name: "C#", icon: "#️⃣", color: "from-zinc-700 to-zinc-900" },
            {
              name: "MySQL",
              icon: "🐬",
              color: "from-indigo-500 to-blue-600",
            },
            { name: "Docker", icon: "🐳", color: "from-blue-400 to-sky-600" },
            { name: "HTML5", icon: "🏗️", color: "from-sky-500 to-blue-500" },
            { name: "CSS3", icon: "🎨", color: "from-sky-500 to-blue-500" },
          ].map((tech) => (
            <div
              key={tech.name}
              className={`group relative overflow-hidden rounded-xl border p-4 transition-all hover:scale-105 ${
                isDark
                  ? "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                  : "border-zinc-200 bg-white/50 hover:border-zinc-300 hover:shadow-md"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 transition-opacity group-hover:opacity-10`}
              ></div>
              <div className="relative">
                <span className="text-2xl">{tech.icon}</span>
                <p
                  className={`mt-2 font-medium ${
                    isDark ? "text-zinc-200" : "text-zinc-700"
                  }`}
                >
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What I'm Working On */}
      <Section>
        <h2
          className={`text-xl font-semibold ${
            isDark ? "text-zinc-50" : "text-zinc-900"
          }`}
        >
          🚀 Currently Building
        </h2>
        <div
          className={`mt-4 rounded-xl border p-5 ${
            isDark
              ? "border-zinc-800 bg-zinc-900/30"
              : "border-zinc-200 bg-zinc-50/50"
          }`}
        >
          <p
            className={`leading-relaxed ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            I am currently mastering modern frameworks to build faster and more
            scalable applications. I am focusing on cutting-edge tools to
            enhance my development efficiency and code quality. My goal is to
            use these skills to build and deploy world-class technology.
          </p>
          <div className="mt-4 flex gap-2">
            <span
              className={`text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              #buildinpublic
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
}
