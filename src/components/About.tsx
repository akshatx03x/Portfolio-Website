import { Terminal, BrainCircuit, Cloud } from "lucide-react";
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  const items = [
    {
      icon: Terminal,
      title: "Software Engineering",
      subtitle: "Designing and building scalable full-stack applications with clean architecture, maintainable APIs, and production-ready code.",
      detail: "Next.js • MERN • TypeScript",
    },
    {
      icon: BrainCircuit,
      title: "AI Applications",
      subtitle: "Developing intelligent software using OCR, computer vision, real-time event pipelines, and modern AI integrations.",
      detail: "OCR • Computer Vision • AI",
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      subtitle: "Deploying, monitoring, and debugging production applications using Docker, AWS ECS, CI/CD pipelines, and cloud infrastructure.",
      detail: "AWS ECS • Docker • CI/CD",
    },
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-black py-24 text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="mx-auto max-w-6xl px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <span className="inline-block rounded-full border border-zinc-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
            Get to know me
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Bio */}
          <motion.div variants={itemVariants} className="space-y-7">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-semibold text-white">Akshat Gupta</h3>
              <p className="mt-2 text-[15px] text-zinc-300">B.Tech Computer Science & Engineering <span className="mx-1.5 text-zinc-600">•</span> MAIT (2024–2028)</p>
              <p className="mt-1 text-[15px] text-zinc-400">Software Development Intern at AarogyaLinQ</p>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">Experience</h4>
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4 transition-colors hover:border-zinc-700/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="font-medium text-zinc-200">Software Development Intern</h5>
                  <span className="text-xs text-zinc-500 font-medium">AarogyaLinQ</span>
                </div>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  During my internship, I contributed to two production-grade platforms serving real-world use cases.
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">Projects</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {/* DigiMitra Healthcare */}
                <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4 transition-colors hover:border-zinc-700/60">
                  <h5 className="text-sm font-medium text-zinc-200 flex items-center gap-2">
                    <span></span> DigiMitra Healthcare
                  </h5>
                  <ul className="mt-3 space-y-2 text-xs text-zinc-400">
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> OCR-based patient data extraction</li>
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> Patient monitoring workflows</li>
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> Backend API development</li>
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> Production debugging</li>
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> AWS deployment support</li>
                  </ul>
                </div>

                {/* DigiMitra AI Surveillance */}
                <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4 transition-colors hover:border-zinc-700/60">
                  <h5 className="text-sm font-medium text-zinc-200 flex items-center gap-2">
                    <span></span> DigiMitra AI Surveillance
                  </h5>
                  <ul className="mt-3 space-y-2 text-xs text-zinc-400">
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> Real-time AI surveillance features</li>
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> Event detection workflows</li>
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> Live alert systems</li>
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> Semantic video search</li>
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> Recording timeline improvements</li>
                    <li className="flex items-start gap-2"><span className="text-zinc-600 mt-0.5">•</span> Production debugging & deployments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <p className="text-sm leading-relaxed text-zinc-400 border-l-2 border-zinc-800 pl-4 pt-1 pb-1">
              Building software beyond CRUD applications—exposing me to production systems, cloud deployments, debugging complex issues, and delivering features used in real-world environments.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div variants={containerVariants} className="space-y-5">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-6 backdrop-blur-md transition-all hover:border-zinc-700/60 hover:bg-zinc-800/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex items-start gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-950 shadow-inner transition-colors group-hover:border-zinc-600/80 group-hover:bg-zinc-900">
                      <Icon className="h-6 w-6 text-zinc-400 transition-colors group-hover:text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[17px] font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">{item.subtitle}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.detail.split(' • ').map((tag, i) => (
                          <span key={i} className="inline-flex items-center rounded-full border border-zinc-800/80 bg-zinc-950/50 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-zinc-400 transition-colors group-hover:border-zinc-700/80 group-hover:text-zinc-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

