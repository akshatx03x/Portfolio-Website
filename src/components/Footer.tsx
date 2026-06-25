const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-3">
          <p className="text-sm text-gray-400 italic">
            "Turning caffeine into clean code and crazy ideas into reality."
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Akshat Gupta · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;