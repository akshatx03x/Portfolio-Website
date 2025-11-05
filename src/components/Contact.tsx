import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { ref, isVisible } = useScrollReveal(0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:akshatx03x@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Let's Connect
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Let's work together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="transition-all focus:shadow-lg"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="transition-all focus:shadow-lg"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="transition-all focus:shadow-lg resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
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
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: item.delay }}
                >
                  <Card className="p-6 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur transition-all hover:shadow-xl group">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: 5 }}
                      >
                        <item.icon className={`w-6 h-6 text-${item.color}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1 text-lg">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mb-1">
                          {item.info}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-primary text-sm hover:underline font-medium"
                          >
                            {item.linkText}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-xs">
                            {item.linkText}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

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
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all group relative"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
