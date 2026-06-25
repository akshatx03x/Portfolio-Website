import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "portfolio" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "border-b border-zinc-900 bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-2"
          aria-label="Home"
        >
          <span className="hidden text-sm font-medium tracking-wide text-zinc-300 group-hover:text-white sm:inline">
            Akshat Gupta
          </span>
        </button>
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white
                after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
        </div>
        {/* CTA + Mobile menu */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-zinc-200 md:inline-flex"
          >
            Let's Connect
          </Button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navigation;