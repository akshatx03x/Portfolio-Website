import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

// Placeholder projects - will be replaced with GitHub API integration
const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full-stack MERN application with authentication, payment integration, and admin dashboard",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    stars: 24,
    featured: true,
  },
  {
    id: 2,
    name: "AI Task Manager",
    description: "Smart task management app with AI-powered categorization and priority suggestions",
    tags: ["Next.js", "TypeScript", "AI/ML", "Tailwind"],
    stars: 18,
    featured: true,
  },
  {
    id: 3,
    name: "Weather App",
    description: "Mobile weather application with location-based forecasts and beautiful UI",
    tags: ["React Native", "APIs", "Mobile"],
    stars: 12,
    featured: false,
  },
  {
    id: 4,
    name: "Code Snippet Manager",
    description: "Developer tool for organizing and sharing code snippets with syntax highlighting",
    tags: ["React", "Firebase", "TypeScript"],
    stars: 15,
    featured: false,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "ai">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "web") return project.tags.some(tag => ["React", "Next.js", "Node.js"].includes(tag));
    if (filter === "mobile") return project.tags.includes("React Native");
    if (filter === "ai") return project.tags.includes("AI/ML");
    return true;
  });

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Showcasing my latest work and experiments
            </p>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
              >
                All Projects
              </Button>
              <Button
                variant={filter === "web" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("web")}
              >
                Web Apps
              </Button>
              <Button
                variant={filter === "mobile" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("mobile")}
              >
                Mobile Apps
              </Button>
              <Button
                variant={filter === "ai" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("ai")}
              >
                AI/ML
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <Card
                key={project.id}
                className={`p-6 hover:shadow-xl transition-all animate-scale-in ${
                  project.featured ? "md:col-span-2" : ""
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="ml-4">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more? Check out my GitHub for all projects
            </p>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-5 h-5" />
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
