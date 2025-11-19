import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { name: "Portfolio", id: "portfolio" },
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${
          isScrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50"
            : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="relative group">
            <div className="text-4xl font-black tracking-tighter">
              <span
                className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent 
                drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
              >
                A
              </span>
              <span
                className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-gray-300 font-medium text-sm tracking-wide
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                  after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 
                  after:transition-all after:duration-300
                  hover:text-white hover:after:w-full
                  transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 
                text-white font-semibold shadow-lg hover:shadow-cyan-500/25 
                border border-white/20 hover:border-white/40
                transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>

            {/* Mobile Menu Icon */}
            <button className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
