import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Placeholder projects - will be replaced with GitHub API integration
const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "Full-stack MERN application with authentication, payment integration, and admin dashboard",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    stars: 24,
    featured: true,
  },
  {
    id: 2,
    name: "AI Task Manager",
    description:
      "Smart task management app with AI-powered categorization and priority suggestions",
    tags: ["Next.js", "TypeScript", "AI/ML", "Tailwind"],
    stars: 18,
    featured: true,
  },
  {
    id: 3,
    name: "Weather App",
    description:
      "Mobile weather application with location-based forecasts and beautiful UI",
    tags: ["React Native", "APIs", "Mobile"],
    stars: 12,
    featured: false,
  },
  {
    id: 4,
    name: "Code Snippet Manager",
    description:
      "Developer tool for organizing and sharing code snippets with syntax highlighting",
    tags: ["React", "Firebase", "TypeScript"],
    stars: 15,
    featured: false,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "ai">("all");
  const { ref, isVisible } = useScrollReveal(0.2);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "web")
      return project.tags.some((tag) =>
        ["React", "Next.js", "Node.js"].includes(tag)
      );
    if (filter === "mobile") return project.tags.includes("React Native");
    if (filter === "ai") return project.tags.includes("AI/ML");
    return true;
  });

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                My Work
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Showcasing my latest work and experiments
            </p>

            {/* Filters */}
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {[
                { label: "All Projects", value: "all" },
                { label: "Web Apps", value: "web" },
                { label: "Mobile Apps", value: "mobile" },
                { label: "AI/ML", value: "ai" },
              ].map((btn, index) => (
                <motion.div
                  key={btn.value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Button
                    variant={filter === btn.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(btn.value as any)}
                    className="transition-all"
                  >
                    {btn.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className={project.featured ? "md:col-span-2" : ""}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        <Badge
                          variant="secondary"
                          className="ml-4 bg-primary/10 text-primary"
                        >
                          Featured
                        </Badge>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: idx * 0.1 + tagIdx * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs hover:bg-primary/10 transition-colors"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">
                        {project.stars}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 hover:text-primary"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-4">
              Want to see more? Check out my GitHub for all projects
            </p>
            <Button variant="outline" size="lg" className="gap-2 hover:shadow-lg">
              <Github className="w-5 h-5" />
              View GitHub Profile
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
