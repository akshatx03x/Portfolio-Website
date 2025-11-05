import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown, Code, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import brushStroke from "@/assets/brush-stroke.png";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12">
      {/* Minimalist background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 left-[15%] w-2 h-2 rounded-full bg-primary"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-1/4 right-[20%] w-3 h-3 rounded-full bg-accent"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[25%] w-2 h-2 rounded-full bg-primary"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Bold Typography */}
            <motion.div
              className="space-y-8 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-[2px] bg-primary" />
                <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                  Hi There, Welcome
                </p>
              </motion.div>

              {/* Main heading with creative styling */}
              <div className="relative">
                <motion.h1
                  className="text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-black leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <span className="block text-foreground">I am</span>
                  <span className="block relative">
                    <span className="text-foreground">Aksh</span>
                    <span className="relative inline-block">
                      <span className="text-foreground">a</span>
                      <motion.span
                        className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </span>
                    <span className="text-primary">t</span>
                  </span>
                </motion.h1>

                {/* Decorative curved text */}
                <motion.div
                  className="absolute -right-8 top-8 text-xs font-medium text-muted-foreground tracking-wider origin-left"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: -90 }}
                  transition={{ delay: 0.8 }}
                >
                  DEVELOPER • INNOVATOR • CREATOR
                </motion.div>
              </div>

              {/* Subheading with creative line breaks */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  I craft <span className="text-primary italic">interactive</span>
                </h2>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  web experiences
                </h2>
                <p className="text-lg text-muted-foreground flex items-center gap-2">
                  <span className="text-accent font-semibold">&</span>
                  <span>build intelligent systems during nights.</span>
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all group"
                >
                  View My Work
                  <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold px-8 border-2 hover:bg-foreground hover:text-background transition-all"
                >
                  Download CV
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>

              {/* Contact info - minimalist style */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div>
                  <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Email</p>
                  <p className="text-xs text-foreground font-medium">akshat@example.com</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Phone</p>
                  <p className="text-xs text-foreground font-medium">+91-XXX-XXX</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-xs text-foreground font-medium">New Delhi, IN</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Creative photo integration with large "A" */}
            <motion.div
              className="relative h-[600px] lg:h-[700px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* Massive "A" letter */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-[25rem] md:text-[30rem] lg:text-[35rem] font-black leading-none select-none text-transparent [-webkit-text-stroke:2px_hsl(var(--border))]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  A
                </motion.div>
              </div>

              {/* Profile photo integrated with the "A" */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[380px] z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={profilePhoto}
                    alt="Akshat Gupta"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-3xl" />
                </div>
              </motion.div>

              {/* Abstract brush stroke decoration */}
              <motion.img
                src={brushStroke}
                alt=""
                className="absolute top-20 right-0 w-64 h-64 opacity-30 mix-blend-multiply"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.3, rotate: -15 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              />

              {/* Floating badge - CS Student */}
              <motion.div
                className="absolute -right-4 top-1/4 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  <div>
                    <p className="text-sm font-bold">CS Student</p>
                    <p className="text-xs opacity-90">Batch 2028</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge - Tech Stack */}
              <motion.div
                className="absolute -left-4 bottom-1/4 bg-accent text-white px-6 py-4 rounded-2xl shadow-xl z-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5" />
                  <div>
                    <p className="text-sm font-bold">Full Stack</p>
                    <p className="text-xs opacity-90">MERN & AI/ML</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative dots pattern */}
              <motion.div
                className="absolute top-12 left-12 grid grid-cols-3 gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>

              {/* Curved decorative line */}
              <motion.svg
                className="absolute bottom-12 right-12 w-24 h-24"
                viewBox="0 0 100 100"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.5, pathLength: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
              >
                <motion.path
                  d="M 10 50 Q 30 10, 50 50 T 90 50"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side social links - vertical */}
      <motion.div
        className="fixed left-6 bottom-8 z-40 hidden lg:flex flex-col gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6 }}
      >
        <div className="flex flex-col items-center gap-4">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:akshat@example.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
        <div className="w-[2px] h-20 bg-border mx-auto" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs font-medium tracking-wider">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
