import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// FIX: Tailwind color map
const colorClasses: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/30",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/30",
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref, isVisible } = useScrollReveal(0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact: ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoLink = `mailto:akshatx03x@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-black relative overflow-hidden text-white"
    >
      {/* 🔥 Neon Gradient Background Blobs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-purple-600/30 to-pink-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-500/30 to-blue-500/20 blur-[140px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 backdrop-blur">
              Let's Connect
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="text-gray-300 text-lg">
              Have a project in mind? Let’s build something amazing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* ---------- FORM ---------- */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      className="bg-white/10 border-white/20 text-white focus:border-primary"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/10 border-white/20 text-white focus:border-primary"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">
                      Message
                    </label>
                    <Textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="bg-white/10 border-white/20 text-white focus:border-primary resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* ---------- CONTACT INFO ---------- */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "akshatx03x@gmail.com",
                  link: "mailto:akshatx03x@gmail.com",
                  linkText: "Send an email",
                  color: "primary",
                  delay: 0.2,
                },
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+91-88822 18584",
                  link: "tel:+918882218584",
                  linkText: "Give me a call",
                  color: "accent",
                  delay: 0.3,
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "New Delhi, India",
                  linkText: "Available for remote work",
                  color: "primary",
                  delay: 0.4,
                },
              ].map((item) => {
                const c = colorClasses[item.color];

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: item.delay }}
                  >
                    <Card className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-2xl">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <item.icon className={`w-6 h-6 ${c.text}`} />
                        </motion.div>

                        <div>
                          <h3 className="font-bold text-lg text-slate-300">{item.title}</h3>
                          <p className="text-gray-300 text-sm mb-1">
                            {item.info}
                          </p>

                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-primary text-sm hover:underline"
                            >
                              {item.linkText}
                            </a>
                          ) : (
                            <p className="text-gray-400 text-xs">
                              {item.linkText}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Social Icons */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <h3 className="font-bold mb-4 text-center text-lg">
                  Connect with me
                </h3>

                <div className="flex justify-center gap-4">
                  {[
                    { icon: Github, href: "https://github.com/akshatx03x", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/akshatx03x/", label: "LinkedIn" },
                    { icon: Twitter, href: "https://x.com/akshatx03x", label: "Twitter" },
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white/5 border border-white/20 backdrop-blur-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all group relative"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isVisible ? { opacity: 1, scale: 1 } : {}
                      }
                      transition={{
                        delay: 0.7 + i * 0.1,
                        type: "spring",
                      }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
