"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.58, 1] },
  },
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

      // ⭐ DELAY SPLINE LOAD ON MOBILE (actual performance fix)
      setTimeout(() => {
        setShowSpline(true);
      }, 1000); // 1 second delay
    } else {
      setShowSpline(true); // desktop loads immediately
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const heading = "Akshat";

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden px-6 pt-20 bg-black">

      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">

        {/* 👉 MOBILE INITIAL PLACEHOLDER (fixes freezing/lags) */}
        {!showSpline && (
          <div className="w-full h-full bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
            <p className="text-gray-400 text-sm tracking-widest">
              Loading 3D Scene...
            </p>
          </div>
        )}

        {/* 👉 REAL SPLINE SCENE (loads after delay on mobile) */}
        {showSpline && (
          <Spline
            scene={
              isMobile
                ? "https://prod.spline.design/LHYkVvonZ-djY-TM/scene.splinecode?quality=low"
                : "https://prod.spline.design/LHYkVvonZ-djY-TM/scene.splinecode"
            }
            className={`w-full h-full transition-all duration-700 ${
              isMobile ? "scale-[0.8] opacity-85" : "scale-100 opacity-100"
            }`}
            showWatermark={false}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl space-y-10 pointer-events-none">
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="show"
          className="text-sm uppercase tracking-[0.3em] text-gray-400"
        >
          Welcome to my world
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className={`font-black leading-tight flex gap-4 text-white ${
            isMobile ? "text-[2.8rem]" : "text-[4rem] md:text-[5rem]"
          }`}
        >
          <motion.span initial="hidden" animate="show" className="flex">
            I'm
          </motion.span>

          <motion.span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-slate-800 bg-clip-text text-transparent flex">
            {heading.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariant}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-300 max-w-xl leading-relaxed"
        >
          I craft <span className="text-gray-400">interactive</span> web experiences
          and build intelligent AI systems that come alive on your screen.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 pt-2 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            size="lg"
            className="px-8 font-semibold shadow-xl hover:scale-[1.03] transition-transform
            bg-gradient-to-r from-cyan-500 to-purple-600 text-white border border-white/20
            hover:from-cyan-400 hover:to-purple-500"
            onClick={() => scrollToSection("portfolio")}
          >
            View My Work
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="px-8 font-semibold border-2
            bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent
            border-cyan-500/40 hover:bg-white hover:text-white transition"
            onClick={() =>
              window.open("https://app.enhancv.com/share/75a20562", "_blank")
            }
          >
            Download CV
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-xs tracking-wider">SCROLL</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
