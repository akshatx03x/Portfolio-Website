import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
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
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                My Expertise
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur">
                  <motion.div
                    className="mb-6 pb-4 border-b border-border"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {category.category}
                    </h3>
                  </motion.div>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: idx * 0.15 + skillIdx * 0.1,
                          duration: 0.5,
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-foreground">
                            {skill.name}
                          </span>
                          <motion.span
                            className="text-xs font-bold text-primary"
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : {}}
                            transition={{ delay: idx * 0.15 + skillIdx * 0.1 + 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : {}}
                            transition={{
                              delay: idx * 0.15 + skillIdx * 0.1 + 0.2,
                              duration: 1,
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/20"
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-muted-foreground">
              Also exploring:{" "}
              {["DSA", "System Design", "DevOps & Cloud-Computing"].map((item, index) => (
                <motion.span
                  key={item}
                  className="text-primary font-semibold"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {item}
                  {index < 2 && ", "}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
