import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-black relative overflow-hidden">

      {/* Background glow (only bottom now) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center space-y-3">
          
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            “Turning caffeine into clean code and crazy ideas into reality.” 🚀
          </p>

          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Akshat Gupta
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
