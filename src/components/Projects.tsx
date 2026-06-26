import { useState } from "react";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
type Project = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  stars: number;
  featured: boolean;
  githubUrl: string;
  demoUrl: string;
};
const projects: Project[] = [
  {
    id: 1,
    name: "Savvy",
    description:
      "Intelligent web platform leveraging AI to simplify complex workflows and deliver actionable insights.",
    tags: ["Next.js", "CRM", "AI", "AWS", "Docker"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/Savvy",
    demoUrl: "https://github.com/akshatx03x/Savvy",
  },
  {
    id: 2,
    name: "ConvoSpace",
    description:
      "Collaboration platform with WebRTC video calls, file sharing, notepads and AI assistance using Gemini + OpenAI.",
    tags: ["MERN", "WebRTC", "Socket.IO", "AI", "OAuth"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/ConvoSpace",
    demoUrl: "https://convospace-mu.vercel.app",
  },
  {
    id: 3,
    name: "Census System",
    description:
      "Secure, privacy-first caste census prototype supporting transparent data collection, blockchain-based verification, and AI-driven analytics.",
    tags: ["React", "Vite", "Supabase", "Blockchain", "Dashboard", "AI"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/Census-System",
    demoUrl: "https://census-system-git-main-akshatx03xs-projects.vercel.app/",
  },
  {
    id: 4,
    name: "CodeCollab",
    description:
      "Real-time collaborative coding platform where multiple developers can write and edit code together seamlessly.",
    tags: ["MERN", "Socket.IO", "Collaboration"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/CodeCollab",
    demoUrl: "https://code-collab-eta-five.vercel.app/",
  },
  {
    id: 5,
    name: "UrbanCart",
    description:
      "Modern e-commerce app with product browsing, cart management, admin dashboard, and sales analytics with graphs.",
    tags: ["Next.Js", "E-Commerce", "Stripe", "PostgreSQL"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/UrbanCart",
    demoUrl: "https://urban-cart-azure.vercel.app/",
  },
  {
    id: 6,
    name: "GemScribe",
    description:
      "AI-powered tool that generates clean, well-structured README files using Gemini 2.0 from minimal project details.",
    tags: ["MERN", "GitHub", "Gemini API", "OAuth"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/GemScribe",
    demoUrl: "https://gemscribe.onrender.com/",
  },
];
// Local project preview mockup images
const previewMap: Record<string, string> = {
  "ConvoSpace": "/Convospace.png",
  "CodeCollab": "/CodeCOllab (2).png",
  "GemScribe": "/Gemscribe.png",
  "UrbanCart": "/UrbanCart.png",
  "Savvy": "/Savyy.png",
  "Census System": "/Census System.png",
};
const previewUrl = (name: string) => previewMap[name] || `/${name}.png`;
const filters = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "AI / ML", value: "ai" },
  { label: "Realtime", value: "realtime" },
];
const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { ref, isVisible } = useScrollReveal(0.15);
  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "web") return p.tags.some((t) => ["MERN", "Next.js", "Dashboard"].includes(t));
    if (filter === "ai") return p.tags.some((t) => ["AI", "Gemini API"].includes(t));
    if (filter === "realtime") return p.tags.includes("Realtime") || p.tags.includes("WebRTC");
    return true;
  });
  return (
    <section
      id="portfolio"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-black py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-8 border-b border-zinc-900 pb-10 md:flex-row md:items-end"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Selected Work · 2024 – 2026
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Things I've built.
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              A mix of full-stack apps, real-time tools, and AI experiments. Each one shipped,
              live, and built end-to-end.
            </p>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                  filter === btn.value
                    ? "border-white bg-white text-black"
                    : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </motion.div>
        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 transition-colors hover:border-zinc-700"
            >
              {/* Live Preview */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-900 bg-zinc-900">
                {/* Browser chrome */}
                <div className="absolute left-0 right-0 top-0 z-10 flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-950/80 px-3 py-2 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="ml-3 truncate text-[10px] text-zinc-500">
                    {project.demoUrl.replace(/^https?:\/\//, "")}
                  </span>
                </div>
                <img
                  src={previewUrl(project.name)}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top pt-7 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* hover veil */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                <div className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-black/80 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              {/* Body */}
              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Star className="h-3 w-3" />
                    {project.stars}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-zinc-900 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-800 px-2 py-0.5 text-[10px] uppercase tracking-wider text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.githubUrl, "_blank");
                    }}
                    className="rounded-md p-1.5 text-zinc-500 hover:text-white"
                    aria-label="View source on GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-20 flex flex-col items-center gap-4 border-t border-zinc-900 pt-12 text-center">
          <p className="text-zinc-400">Want to see everything I'm building?</p>
          <a
            href="https://github.com/akshatx03x"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            <Github className="h-4 w-4" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};
export default Projects;