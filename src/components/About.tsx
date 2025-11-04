import { GraduationCap, Code2, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Turning ideas into interactive digital experiences
            </p>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-in">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                I'm <span className="font-semibold text-primary">Akshat Gupta</span>, a passionate Computer Science and Engineering student 
                at Maharaja Agrasen Institute of Technology (Batch of 2028). I love turning ideas into 
                interactive web experiences and intelligent systems — blending creativity with code.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                My journey in tech is driven by curiosity and innovation. Whether it's building full-stack 
                web applications with the MERN stack, creating mobile experiences with React Native, or 
                experimenting with AI/ML, I'm always eager to learn and push boundaries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="p-6 hover:shadow-lg transition-all animate-scale-in">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-sm text-muted-foreground mb-1">B.Tech in Computer Science</p>
                <p className="text-sm text-muted-foreground">MAIT • 2024-2028</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Focus Areas</h3>
                <p className="text-sm text-muted-foreground mb-1">Full-Stack Development</p>
                <p className="text-sm text-muted-foreground">AI/ML & Mobile Apps</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mission</h3>
                <p className="text-sm text-muted-foreground mb-1">Create impactful products</p>
                <p className="text-sm text-muted-foreground">Balance creativity & logic</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
