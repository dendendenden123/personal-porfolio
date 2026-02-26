import { useState } from "react";
import Section from "../components/Section";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/dendendenden123",
      handle: "@dendendenden123",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/denvir-de-jesus-a628252a9/",
      handle: "in/denvir-de-jesus-a628252a9/",
    },
    {
      name: "Facebook",
      icon: "F",
      url: "https://www.facebook.com/dnvrdjss/",
      handle: "@dnvrdjss",
    },
    {
      name: "Email",
      icon: "✉️",
      url: "mailto:den9100068@gmail.com",
      handle: "den910068@gmail.com",
    },
  ];

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", subject: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <Section>
        <div className="text-center">
          <h1
            className={`text-3xl font-bold tracking-tight ${
              isDark ? "text-zinc-50" : "text-zinc-900"
            }`}
          >
            Let's Connect
          </h1>
          <p
            className={`mt-3 max-w-2xl mx-auto ${
              isDark ? "text-zinc-300" : "text-zinc-600"
            }`}
          >
            I'm always interested in hearing about new opportunities,
            collaborations, or just having a chat about technology and
            development.
          </p>
        </div>

        {/* Availability Badge */}
        <div className="mt-6 flex justify-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
              isDark
                ? "border-green-900 bg-green-900/20"
                : "border-green-200 bg-green-50"
            }`}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span
              className={`text-sm font-medium ${
                isDark ? "text-green-300" : "text-green-700"
              }`}
            >
              Available for opportunities
            </span>
          </div>
        </div>
      </Section>

      {/* Main Contact Section */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Form - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <Section>
            <h2
              className={`text-xl font-semibold ${
                isDark ? "text-zinc-50" : "text-zinc-900"
              }`}
            >
              Send a Message
            </h2>
            <p
              className={`mt-1 text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              {/* Name and Email Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${
                      isDark ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`mt-1 w-full rounded-xl border px-4 py-3 transition ${
                      isDark
                        ? "border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 focus:border-zinc-700"
                        : "border-zinc-200 bg-white/50 text-zinc-900 placeholder-zinc-400 focus:border-zinc-300"
                    } focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${
                      isDark ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`mt-1 w-full rounded-xl border px-4 py-3 transition ${
                      isDark
                        ? "border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 focus:border-zinc-700"
                        : "border-zinc-200 bg-white/50 text-zinc-900 placeholder-zinc-400 focus:border-zinc-300"
                    } focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Line */}
              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium ${
                    isDark ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-xl border px-4 py-3 transition ${
                    isDark
                      ? "border-zinc-800 bg-zinc-900/50 text-zinc-100 focus:border-zinc-700"
                      : "border-zinc-200 bg-white/50 text-zinc-900 focus:border-zinc-300"
                  } focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
                >
                  <option value="">Select a topic</option>
                  <option value="job">Job Opportunity</option>
                  <option value="project">Project Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${
                    isDark ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`mt-1 w-full rounded-xl border px-4 py-3 transition ${
                    isDark
                      ? "border-zinc-800 bg-zinc-900/50 text-zinc-100 placeholder-zinc-500 focus:border-zinc-700"
                      : "border-zinc-200 bg-white/50 text-zinc-900 placeholder-zinc-400 focus:border-zinc-300"
                  } focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
                  placeholder="Tell me about your project, opportunity, or idea..."
                />
              </div>

              {/* Submit Button with Status */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative w-full overflow-hidden rounded-xl px-6 py-4 font-medium transition-all ${
                  isDark
                    ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                    : "bg-zinc-900 text-zinc-50 hover:bg-zinc-800"
                } ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}`}
              >
                <span
                  className={`flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Send Message
                  <span>→</span>
                </span>

                {/* Loading Spinner */}
                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  </span>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div
                  className={`rounded-xl border p-4 ${
                    isDark
                      ? "border-green-900 bg-green-900/20"
                      : "border-green-200 bg-green-50"
                  }`}
                >
                  <p
                    className={`text-sm ${isDark ? "text-green-300" : "text-green-700"}`}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className={`rounded-xl border p-4 ${
                    isDark
                      ? "border-red-900 bg-red-900/20"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <p
                    className={`text-sm ${isDark ? "text-red-300" : "text-red-700"}`}
                  >
                    ❌ Something went wrong. Please try again or email me
                    directly.
                  </p>
                </div>
              )}
            </form>
          </Section>
        </div>

        {/* Sidebar - Contact Info & Social Links */}
        <div className="space-y-6">
          {/* Quick Contact Info */}
          <Section>
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-zinc-50" : "text-zinc-900"
              }`}
            >
              Quick Connect
            </h3>

            <div className="mt-4 space-y-4">
              {/* Response Time */}
              <div className="flex items-start gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-zinc-200" : "text-zinc-700"
                    }`}
                  >
                    Response Time
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    Within 2 hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-zinc-200" : "text-zinc-700"
                    }`}
                  >
                    Location
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    Cebu, Philippines <br/>
                    Available worldwide (Remote) 
                    
                  </p>
                </div>
              </div>

              {/* Timezone */}
              <div className="flex items-start gap-3">
                <span className="text-xl">🕐</span>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-zinc-200" : "text-zinc-700"
                    }`}
                  >
                    Timezone
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    GMT+8 (Flexible)
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Social Links */}
          <Section>
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-zinc-50" : "text-zinc-900"
              }`}
            >
              Connect Elsewhere
            </h3>

            <div className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-3 rounded-xl border p-3 transition-all hover:-translate-y-0.5 ${
                    isDark
                      ? "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50"
                      : "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-zinc-200" : "text-zinc-700"
                      }`}
                    >
                      {link.name}
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      {link.handle}
                    </p>
                  </div>
                  <span
                    className={`text-sm ${
                      isDark ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </Section>

          {/* FAQ or Note */}
          <Section>
            <div
              className={`rounded-xl border p-4 ${
                isDark
                  ? "border-zinc-800 bg-zinc-900/30"
                  : "border-zinc-200 bg-zinc-50/50"
              }`}
            >
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? "text-zinc-300" : "text-zinc-600"
                }`}
              >
                💡 <span className="font-medium">Prefer email?</span> You can
                also reach me directly at{" "}
                <a
                  href="mailto:your.email@example.com"
                  className={`underline underline-offset-2 ${
                    isDark
                      ? "text-zinc-200 hover:text-zinc-50"
                      : "text-zinc-700 hover:text-zinc-900"
                  }`}
                >
                  den910068@gmail.com
                </a>
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
