import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import { fetchRepos, type GithubRepo } from "../lib/github";
import { useTheme } from "../context/ThemeContext";

type ProjectCard = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
};

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const featured: ProjectCard[] = useMemo(
    () => [
      {
        title: "Gatherly",
        description:
          "A smart attendance and event tracking system for organizations. Features real-time attendance logging, role-based access, event management, and user analytics. Built with Laravel.",
        tech: ["Laravel", "MySQL", "JavaScript", "AWS Rekogniton API", "HTML & CSS"],
        link: "https://github.com/dendendenden123/Gatherly",
        image: "📊",
        featured: true,
      },
      {
        title: "Alumni Tracer System",
        description:
          "Alumni Tracer System – A web-based platform to track graduates' career paths, employment status, and academic progress. Includes alumni registration, profile updates, and admin analytics.",
         tech: ["Laravel", "Blade", "MySQL", "JavaScript", "HTML & CSS"],
        link: "https://github.com/dendendenden123/Alumni_Tracer_System",
        image: "📈",
        featured: true,
      },
      {
        title: "Geolocator",
        description:
          "A Laravel + React + Vite application for geolocation mapping with interactive features.",
        tech: ["React", "Laravel", "Blade","HTML & CSS"],
        link: "https://github.com/dendendenden123/geolocator",
        image: "✅",
      },
      {
        title: "Eiffel Tower VR",
        description:
          "This interactive A-Frame VR scene showcases an Eiffel Tower with a functional elevator system, allowing users to ascend and descend through smooth key-triggered animations. It also features a speed-tracking component that calculates and displays movement speed using GPS data for added realism.",
        tech: ["JavaScript", "Aframe Library", "GPS Trackig"],
        link: "https://github.com/dendendenden123/VR3",
        image: "🤖",
      },
    ],
    [],
  );

  const [repos, setRepos] = useState<GithubRepo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const githubUsername = "dendendenden123";

  useEffect(() => {
    let alive = true;
    fetchRepos(githubUsername)
      .then((r) => alive && setRepos(r))
      .catch((e: Error) => alive && setError(e.message));
    return () => {
      alive = false;
    };
  }, []);

  // Filter featured projects based on search
  const filteredFeatured = featured.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );


  // Filter repos based on language and search
  const filteredRepos = useMemo(() => {
    if (!repos) return [];
    return repos
      .filter((r) => filter === "all" || r.language === filter)
      .filter(
        (r) =>
          r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (r.description?.toLowerCase() || "").includes(
            searchTerm.toLowerCase(),
          ),
      )
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 8);
  }, [repos, filter, searchTerm]);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1
              className={`text-3xl font-bold tracking-tight ${
                isDark ? "text-zinc-50" : "text-zinc-900"
              }`}
            >
              Projects & Work
            </h1>
            <p className={`mt-2 ${isDark ? "text-zinc-300" : "text-zinc-600"}`}>
              A selection of my work and side projects.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-4">
            <div className="text-center">
              <div
                className={`text-2xl font-bold ${
                  isDark ? "text-zinc-50" : "text-zinc-900"
                }`}
              >
                {featured.length + (repos?.length || 0)}
              </div>
              <div
                className={`text-xs ${
                  isDark ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Total Projects
              </div>
            </div>
        
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects by name, tech, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full rounded-xl border px-4 py-3 pl-11 transition ${
                isDark
                  ? "border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 focus:border-zinc-700"
                  : "border-zinc-200 bg-white/50 text-zinc-900 placeholder-zinc-400 focus:border-zinc-300"
              } focus:outline-none`}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
              🔍
            </span>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="flex items-center justify-between">
          <h2
            className={`text-xl font-semibold ${
              isDark ? "text-zinc-50" : "text-zinc-900"
            }`}
          >
            Featured Projects
          </h2>
          <span
            className={`text-sm ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
          >
            {filteredFeatured.length} projects
          </span>
        </div>

        {filteredFeatured.length === 0 ? (
          <div
            className={`mt-6 rounded-xl border p-8 text-center ${
              isDark ? "border-zinc-800" : "border-zinc-200"
            }`}
          >
            <p className={isDark ? "text-zinc-300" : "text-zinc-600"}>
              No projects match your search.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {filteredFeatured.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  isDark
                    ? "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                    : "border-zinc-200 bg-white/50 hover:border-zinc-300"
                }`}
              >
                {p.featured && (
                  <div
                    className={`absolute right-0 top-0 px-3 py-1 text-xs font-medium ${
                      isDark
                        ? "bg-zinc-800 text-zinc-200"
                        : "bg-zinc-200 text-zinc-700"
                    }`}
                  >
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <span className="text-4xl">{p.image}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div
                        className={`text-lg font-semibold ${
                          isDark ? "text-zinc-50" : "text-zinc-900"
                        }`}
                      >
                        {p.title}
                      </div>
                    </div>

                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        isDark ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className={`rounded-full border px-3 py-1 text-xs ${
                            isDark
                              ? "border-zinc-700 bg-zinc-800/50 text-zinc-200"
                              : "border-zinc-200 bg-zinc-100 text-zinc-700"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {(p.stars || p.forks) && (
                      <div className="mt-4 flex items-center gap-4 text-xs">
                        {p.stars && (
                          <span
                            className={`flex items-center gap-1 ${
                              isDark ? "text-zinc-400" : "text-zinc-500"
                            }`}
                          >
                            ⭐ {p.stars}
                          </span>
                        )}
                        {p.forks && (
                          <span
                            className={`flex items-center gap-1 ${
                              isDark ? "text-zinc-400" : "text-zinc-500"
                            }`}
                          >
                            🔱 {p.forks}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-purple-500 transition-all group-hover:w-full`}
                ></div>
              </a>
            ))}
          </div>
        )}
      </Section>

      {/* GitHub Repos Section */}
      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              className={`text-xl font-semibold ${
                isDark ? "text-zinc-50" : "text-zinc-900"
              }`}
            >
              GitHub Activity
            </h2>
            <p
              className={`text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              @{githubUsername} • Latest repositories
            </p>
          </div>

         
        </div>

        {error && (
          <div
            className={`mt-4 rounded-lg border p-4 ${
              isDark
                ? "border-red-900 bg-red-900/20"
                : "border-red-200 bg-red-50"
            }`}
          >
            <p
              className={`text-sm ${isDark ? "text-red-200" : "text-red-600"}`}
            >
              ⚠️ Error loading repos: {error}
            </p>
          </div>
        )}

        {!repos && !error && (
          <div className="mt-8 flex justify-center">
            <div
              className={`animate-pulse text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Loading repositories...
            </div>
          </div>
        )}

        {repos && (
          <>
            {filteredRepos.length === 0 ? (
              <div
                className={`mt-6 rounded-xl border p-8 text-center ${
                  isDark ? "border-zinc-800" : "border-zinc-200"
                }`}
              >
                <p className={isDark ? "text-zinc-300" : "text-zinc-600"}>
                  No repositories match your filters.
                </p>
              </div>
            ) : (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {filteredRepos.map((r) => (
                  <a
                    key={r.id}
                    href={r.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group rounded-2xl border p-5 transition-all hover:-translate-y-0.5 ${
                      isDark
                        ? "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50"
                        : "border-zinc-200 bg-white/50 hover:border-zinc-300 hover:bg-zinc-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`font-semibold ${
                          isDark ? "text-zinc-50" : "text-zinc-900"
                        }`}
                      >
                        {r.name}
                      </div>
                      <div
                        className={`flex items-center gap-3 text-xs ${
                          isDark ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          ⭐ {r.stargazers_count}
                        </span>
                        {r.language && (
                          <span className="flex items-center gap-1">
                            ● {r.language}
                          </span>
                        )}
                      </div>
                    </div>

                    <p
                      className={`mt-3 line-clamp-2 text-sm ${
                        isDark ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      {r.description || "No description provided."}
                    </p>

                    <div
                      className={`mt-4 text-xs ${
                        isDark ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    >
                      Updated{" "}
                      {new Date(r.updated_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>

                    {/* Hover effect indicator */}
                    <div
                      className={`mt-3 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 ${
                        isDark ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      View on GitHub →
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* View all repos link */}
            <div className="mt-6 text-center">
              <a
                href={`https://github.com/${githubUsername}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 text-sm transition ${
                  isDark
                    ? "text-zinc-300 hover:text-zinc-50"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                View all repositories on GitHub
                <span>→</span>
              </a>
            </div>
          </>
        )}
      </Section>

    </div>
  );
}
