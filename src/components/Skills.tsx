import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Mobile & AI",
    skills: [
      { name: "React Native", level: 80 },
      { name: "AI/ML", level: 75 },
      { name: "Python", level: 80 },
      { name: "C++", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <Card
                key={category.category}
                className="p-6 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center pb-4 border-b border-border">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: "scale-in 0.8s ease-out forwards",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Also exploring: <span className="text-primary font-medium">DSA</span>,{" "}
              <span className="text-primary font-medium">System Design</span>,{" "}
              <span className="text-primary font-medium">DevOps</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
