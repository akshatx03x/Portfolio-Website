import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="min-h-[200px] bg-black" />}>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
