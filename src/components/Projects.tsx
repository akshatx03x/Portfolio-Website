import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
    {
    id: 1,
    name: "ConvoSpace",
    description:
      "Collaboration platform with WebRTC video calls, file sharing, notepads and AI assistance using Gemini + OpenAI.",
    tags: ["JavaScript"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/ConvoSpace",
    demoUrl: "https://convospace-mu.vercel.app",
  },
    {
    id: 2,
    name: "CodeCollab",
    description:
      "CodeCollab is a real-time collaborative coding platform that allows multiple developers to write and edit code together seamlessly. Built with modern web technologies, it focuses on speed, simplicity, and efficient teamwork",
    tags: ["JavaScript"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/CodeCollab",
    demoUrl: "https://code-collab-eta-five.vercel.app/",
  },


  {
    id: 3,
    name: "GemScribe",
    description:
      "GemScribe is an AI-powered tool designed to generate clean, well-structured README files using Gemini 2.0. It helps developers quickly create professional documentation by transforming project details into clear and consistent README content..",
    tags: ["JavaScript"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/GemScribe",
    demoUrl: "https://gem-scribe.vercel.app/",
  },
  {
    id: 4,
    name: "UrbanCart",
    description: "UrbanCart is a modern e-commerce web application with product browsing, cart management, an admin dashboard, and sales analytics with graphs. Built using modern web technologies, it focuses on performance and scalability.",
    tags: ["JavaScript"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/UrbanCart",
    demoUrl: "https://urban-cart-azure.vercel.app/",
  },
  {
    id: 5,
    name: "NextImgKit",
    description: "NextImgkit is a Next.js media management project built with ImageKit, enabling AI-powered image and video editing, optimization, and high-performance delivery.",
    tags: ["JavaScript"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/NextImgkit",
    demoUrl: "https://imagekit.vercel.app/",
  },
  {
    id: 6,
    name: "Chatlify",
    description: "Chat application with real-time messaging features",
    tags: ["JavaScript"],
    stars: 1,
    featured: true,
    githubUrl: "https://github.com/akshatx03x/Chatlify",
    demoUrl: "https://chatlify-dosw.onrender.com/",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { ref, isVisible } = useScrollReveal(0.2);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "web") return project.tags.some((t) => ["React", "Next.js", "MERN"].includes(t));
    if (filter === "mobile") return project.tags.includes("React Native");
    if (filter === "ai") return project.tags.includes("AI") || project.tags.includes("Gemini API");
    return true;
  });

  return (
    <section id="portfolio" className="py-3 bg-black text-white relative overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-[450px] h-[450px] bg-cyan-600/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-purple-600/20 blur-[170px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            ref={ref}
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <span className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-cyan-400 rounded-full text-sm font-bold shadow-lg">
                My Work
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured <span className="text-white drop-shadow-[0_0_10px_#00eaff]">Projects</span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Designed with passion. Built with precision.
            </p>

            {/* Filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {[
                { label: "All Projects", value: "all" },
                { label: "Web Apps", value: "web" },
                { label: "Mobile Apps", value: "mobile" },
                { label: "AI/ML", value: "ai" },
              ].map((btn) => (
                <motion.button
                  key={btn.value}
                  onClick={() => setFilter(btn.value)}
                  className={`px-7 py-2.5 rounded-full font-medium transition-all duration-300 backdrop-blur-md border
                    ${
                      filter === btn.value
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/50 border-transparent"
                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-cyan-500/40"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {btn.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
            {filteredProjects.map((project, idx) => (
              <motion.a
                key={project.id}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-96 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 shadow-xl transition-all duration-500 hover:bg-white/10 hover:border-cyan-500/40 hover:shadow-cyan-500/30 overflow-hidden relative">
                  
                  {/* Glow Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-purple-600 opacity-60" />

                  <div className="flex flex-col h-full">
                    {/* Title */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>

                      {project.featured && (
                        <Badge className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                          <Star className="w-3 h-3 fill-cyan-400 mr-1" /> Featured
                        </Badge>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-white/5 border-white/20 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-bold">{project.stars}</span>
                      </div>

                      <div className="flex gap-2">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 transition-all"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Github className="w-5 h-5 text-gray-300" />
                        </motion.a>

                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg hover:shadow-cyan-500/50 transition-all"
                            whileHover={{ scale: 1.1 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-400 text-lg mb-6">
              Want to explore more? Check out my GitHub for all projects.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://github.com/akshatx03x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="w-6 h-6" />
                View Full GitHub Profile
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
