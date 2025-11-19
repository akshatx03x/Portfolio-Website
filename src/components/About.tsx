// Dark mode version of the About component

import { GraduationCap, Code2, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                Get to know me
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Turning ideas into interactive digital experiences
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                I'm <span className="font-semibold text-primary">Akshat Gupta</span>, a passionate Computer Science and Engineering student at MAIT (Batch 2k24-28). I love turning ideas into interactive experiences and intelligent systems — blending creativity with code.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                My journey in tech is driven by curiosity and innovation. Whether it's building full-stack web applications with the MERN stack or Next.js, creating mobile experiences with React Native, or exploring AI/ML — I'm always eager to learn and push boundaries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 text-slate-300 gap-6 pt-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  subtitle: "B.Tech in Computer Science",
                  detail: "MAIT • 2024-2028",
                  color: "primary",
                },
                {
                  icon: Code2,
                  title: "Focus Areas",
                  subtitle: "Full-Stack Development",
                  detail: "AI/ML & Mobile Apps",
                  color: "accent",
                },
                {
                  icon: Lightbulb,
                  title: "Mission",
                  subtitle: "Create impactful products",
                  detail: "Balance creativity & logic",
                  color: "primary",
                },
              ].map((item, index) => (
                <motion.div key={item.title} variants={cardVariants} custom={index}>
                  <Card className="p-6 h-full bg-zinc-900 border-zinc-700 hover:border-primary/40 hover:shadow-xl transition-all group rounded-xl">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-${item.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className={`w-7 h-7 text-${item.color}`} />
                    </motion.div>
                    <h3 className="font-bold text-slate-300 text-lg mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-1">{item.subtitle}</p>
                    <p className="text-sm text-gray-400">{item.detail}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;