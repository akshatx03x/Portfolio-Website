import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showOptions, setShowOptions] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.15);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.target.value });
    setShowOptions(e.target.value.trim() !== "");
  };
  const buildBody = () =>
    `From: ${formData.name} (${formData.email})\n\n${formData.message}`;
  const subject = () => `Message from ${formData.name || "Portfolio Visitor"}`;
  const handleSendOutlook = () => {
    window.location.href = `mailto:akshatg.gupta03@gmail.com?subject=${encodeURIComponent(
      subject()
    )}&body=${encodeURIComponent(buildBody())}`;
  };
  const handleSendGmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=akshatg.gupta03@gmail.com&su=${encodeURIComponent(
        subject()
      )}&body=${encodeURIComponent(buildBody())}`,
      "_blank"
    );
  };
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "akshatg.gupta03@gmail.com",
      href: "mailto:akshatg.gupta03@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 88822 18584",
      href: "tel:+918882218584",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India · Remote-friendly",
      href: null,
    },
  ];
  const socials = [
    { icon: Github, href: "https://github.com/akshatx03x", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akshatx03x/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/akshatx03x", label: "Twitter" },
  ];
  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-black py-28 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-zinc-900 pb-10"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Let's Connect
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Get in touch.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Have a project, a role, or just an idea worth talking about? Drop a message.
          </p>
        </motion.div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8 md:p-10"
          >
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-500">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    className="border-zinc-800 bg-black text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-0"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-500">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="border-zinc-800 bg-black text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-0"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project, timeline, or just say hi."
                  rows={6}
                  className="resize-none border-zinc-800 bg-black text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-0"
                  value={formData.message}
                  onChange={handleMessageChange}
                  required
                />
              </div>
              {/* Send options */}
              <motion.div
                initial={false}
                animate={{
                  opacity: showOptions ? 1 : 0.4,
                  pointerEvents: showOptions ? "auto" : "none",
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3 border-t border-zinc-900 pt-5 sm:flex-row"
              >
                <p className="self-center text-xs uppercase tracking-wider text-zinc-500 sm:mr-auto">
                  Send via
                </p>
                <Button
                  onClick={handleSendGmail}
                  className="rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-zinc-200"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Gmail
                </Button>
                <Button
                  onClick={handleSendOutlook}
                  variant="outline"
                  className="rounded-full border-zinc-700 bg-transparent px-5 text-sm font-medium text-white hover:bg-white/5 hover:text-white"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Mail App
                </Button>
              </motion.div>
            </div>
          </motion.div>
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="group flex items-start gap-4 rounded-2xl border border-zinc-900 bg-zinc-950 p-5 transition-colors hover:border-zinc-700">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-black">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-1 truncate text-sm text-white">{item.value}</p>
                  </div>
                  {item.href && (
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-zinc-600 transition-colors group-hover:text-white" />
                  )}
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
            {/* Socials */}
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-500">Elsewhere</p>
              <div className="mt-4 flex gap-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-black text-zinc-400 transition-colors hover:border-white hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
            {/* Availability badge */}
            <div className="flex items-center gap-3 rounded-2xl border border-zinc-900 bg-zinc-950 p-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <p className="text-sm text-zinc-300">
                Building with intention. Shipping with purpose.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;