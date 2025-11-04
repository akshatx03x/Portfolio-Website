import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroShapes from "@/assets/hero-shapes.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <img
        src={heroShapes}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 opacity-20 animate-float"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">Hi There,</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I am <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Akshat</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
                I craft interactive web experiences
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl">
                & build intelligent systems with code during nights.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                <p className="text-sm text-foreground">akshat.gupta@example.com</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                <p className="text-sm text-foreground">+91-XXX-XXX-XXXX</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Location</p>
                <p className="text-sm text-foreground">New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Right side - Profile photo with creative design */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full max-w-md mx-auto">
              {/* Large letter A behind photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[20rem] font-bold text-foreground/5 select-none">A</span>
              </div>
              
              {/* Profile photo */}
              <div className="relative z-10">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Akshat Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -right-4 top-1/4 bg-card shadow-lg rounded-full px-6 py-3 border border-border animate-float">
                  <p className="text-sm font-semibold">CS Student</p>
                  <p className="text-xs text-muted-foreground">Batch of 2028</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social links - fixed on left side */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:akshat.gupta@example.com"
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:scale-110"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
