import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10 animate-gradient" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Text content */}
          <div className="space-y-8">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.p
                className="text-muted-foreground text-lg font-medium tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hi There, 👋
              </motion.p>
              
              <div className="space-y-2">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold leading-tight"
                  variants={itemVariants}
                >
                  I am{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-gradient">
                      Akshat
                    </span>
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                </motion.h1>
              </div>

              <motion.div className="space-y-3" variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
                  I craft{" "}
                  <span className="text-primary font-bold">interactive</span>{" "}
                  web experiences
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  & build{" "}
                  <span className="text-accent font-semibold">intelligent systems</span>{" "}
                  with code
                </p>
              </motion.div>

              <motion.p
                className="text-base text-muted-foreground max-w-xl leading-relaxed"
                variants={itemVariants}
              >
                Computer Science student at MAIT, specializing in full-stack development 
                with MERN, Next.js, React Native, and AI/ML technologies.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group"
              >
                View My Work
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </motion.div>

            {/* Contact info with glass effect */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
              variants={itemVariants}
            >
              <div className="glass-effect rounded-xl p-4 hover:bg-white/10 transition-all">
                <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Email</p>
                <p className="text-sm text-foreground font-medium">akshat.gupta@example.com</p>
              </div>
              <div className="glass-effect rounded-xl p-4 hover:bg-white/10 transition-all">
                <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Phone</p>
                <p className="text-sm text-foreground font-medium">+91-XXX-XXX-XXXX</p>
              </div>
              <div className="glass-effect rounded-xl p-4 hover:bg-white/10 transition-all">
                <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Location</p>
                <p className="text-sm text-foreground font-medium">New Delhi, India</p>
              </div>
            </motion.div>
          </div>

          {/* Right side - Profile photo with creative design */}
          <motion.div
            className="relative"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Large letter A behind photo with gradient */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <span className="text-[22rem] font-bold bg-gradient-to-br from-primary/10 to-accent/10 bg-clip-text text-transparent select-none">
                  A
                </span>
              </motion.div>
              
              {/* Profile photo */}
              <div className="relative z-10">
                <motion.div
                  className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={profilePhoto}
                    alt="Akshat Gupta"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -right-4 top-1/4 bg-card shadow-xl rounded-2xl px-6 py-4 border border-primary/20"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <div>
                      <p className="text-sm font-bold text-foreground">CS Student</p>
                      <p className="text-xs text-muted-foreground">Batch of 2028</p>
                    </div>
                  </div>
                </motion.div>

                {/* Tech stack badge */}
                <motion.div
                  className="absolute -left-4 bottom-1/4 bg-card shadow-xl rounded-2xl px-6 py-4 border border-accent/20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack</p>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Social links - fixed on left side */}
      <motion.div
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        {[
          { icon: Github, href: "https://github.com", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
          { icon: Mail, href: "mailto:akshat.gupta@example.com", label: "Email" },
        ].map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all relative group"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 + index * 0.1 }}
          >
            <social.icon className="w-5 h-5" />
            <span className="absolute left-full ml-4 px-3 py-1 bg-card border border-border rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {social.label}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
