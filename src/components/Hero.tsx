import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const letterVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5 },
  }),
};
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSpline, setShowSpline] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setTimeout(() => setShowSpline(true), 1000);
    } else {
      setShowSpline(true);
    }
  }, []);
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const lastName = "Gupta";
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {!showSpline && (
          <div className="flex h-full w-full items-center justify-center bg-black">
            <p className="text-sm tracking-widest text-zinc-500">LOADING 3D SCENE…</p>
          </div>
        )}
        {showSpline && (
          <Spline
            scene={
              isMobile
                ? "https://prod.spline.design/LHYkVvonZ-djY-TM/scene.splinecode?quality=low"
                : "https://prod.spline.design/LHYkVvonZ-djY-TM/scene.splinecode"
            }
            className="h-full w-full"
          />
        )}
        {/* Soft vignette so text stays readable — flat, not gradient brand color */}
        <div className="pointer-events-none absolute inset-0 bg-black/40 md:bg-black/20" />
      </div>
      {/* Content */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 md:px-12">
        <motion.span
          variants={textVariant}
          initial="hidden"
          animate="show"
          className="mb-6 inline-block w-fit border-l-2 border-white/60 pl-3 text-xs uppercase tracking-[0.3em] text-zinc-400"
        >
          Engineer · Designer · Builder
        </motion.span>
        {/* Main Heading — flat white, no gradient */}
        <div className="flex flex-wrap items-baseline gap-x-4">
          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate="show"
            className="text-6xl font-bold tracking-tight text-white md:text-8xl"
          >
            Akshat
          </motion.h1>
          <h1 className="text-6xl font-bold tracking-tight text-zinc-500 md:text-8xl">
            {lastName.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i + 3}
                variants={letterVariant}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
        {/* Subheading — new content */}
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          I design and ship products at the intersection of code, motion, and machine
          intelligence — focused, fast, and built to feel inevitable.
        </motion.p>
        {/* Buttons — solid, no gradient */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button
            onClick={() => scrollToSection("portfolio")}
            className="rounded-full bg-white px-7 py-6 text-sm font-medium text-black hover:bg-zinc-200"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Akshat Resume.pdf";
              link.download = "Akshat Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="rounded-full border-zinc-700 bg-transparent px-7 py-6 text-sm font-medium text-white hover:bg-white/5 hover:text-white"
          >
            Download Resume
          </Button>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500 hover:text-white"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};
export default Hero;