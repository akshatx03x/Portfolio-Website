import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
"Turning caffeine into clean code and crazy ideas into reality." 🚀
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
