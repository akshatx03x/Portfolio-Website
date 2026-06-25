import { GitHubCalendar } from 'react-github-calendar';

const icon = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

type Tech = { name: string; src: string; invert?: boolean };

// Four orbital rings, inner → outer
// radiusPct is the fraction of half the stage width/height (1.0 touches the boundary)
const rings: { radiusPct: number; duration: number; reverse?: boolean; items: Tech[] }[] = [
  {
    radiusPct: 0.18,
    duration: 28,
    items: [
      { name: "TypeScript", src: icon("typescript") },
      { name: "JavaScript", src: icon("javascript") },
      { name: "Python", src: icon("python") },
      { name: "C++", src: icon("cplusplus") },
      { name: "C", src: icon("c") },
      { name: "HTML5", src: icon("html5") },
      { name: "CSS3", src: icon("css3") },
    ],
  },
  {
    radiusPct: 0.30,
    duration: 45,
    reverse: true,
    items: [
      { name: "React", src: icon("react") },
      { name: "React Native", src: icon("react") },
      { name: "Next.js", src: icon("nextjs", "original"), invert: true },
      { name: "Tailwind CSS", src: icon("tailwindcss", "original") },
      { name: "Express", src: icon("express", "original"), invert: true },
      { name: "Node.js", src: icon("nodejs") },
    ],
  },
  {
    radiusPct: 0.41,
    duration: 60,
    items: [
      { name: "TensorFlow", src: icon("tensorflow") },
      { name: "PyTorch", src: icon("pytorch") },
      { name: "NumPy", src: icon("numpy") },
      { name: "OpenCV", src: icon("opencv") },
    ],
  },
  {
    radiusPct: 0.52,
    duration: 75,
    reverse: true,
    items: [
      { name: "MongoDB", src: icon("mongodb") },
      { name: "MySQL", src: icon("mysql") },
      { name: "Firebase", src: icon("firebase", "plain") },
      { name: "AWS", src: icon("amazonwebservices", "original-wordmark"), invert: true },
      { name: "Docker", src: icon("docker") },
      { name: "Kubernetes", src: icon("kubernetes") },
      { name: "Git", src: icon("git") },
      { name: "GitHub", src: icon("github", "original"), invert: true },
    ],
  },
];

const alsoExploring = ["DSA", "System Design", "DevOps", "Cloud Computing", "AI/ML", "MERN Stack"];

const Skills = () => {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden border-t border-white/10" id="skills">
      {/* Local keyframes (scoped inline so it works without tailwind config edits) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit-spin { to { transform: rotate(360deg); } }
        @keyframes orbit-spin-reverse { to { transform: rotate(-360deg); } }
        @keyframes node-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.5; }
        }
      `}} />
      
      {/* Dotted backdrop */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-3">
            My Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical Skills<span className="text-gray-500">.</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm max-w-md mx-auto">
            A living orbit of the tools, languages, and frameworks I build with.
          </p>
        </div>

        {/* Orbit stage */}
        <div className="mx-auto relative aspect-square w-full max-w-[720px] flex items-center justify-center">
          
          {/* Center node */}
          <div
            className="absolute top-1/2 left-1/2 z-20"
            style={{ animation: "node-float 4s ease-in-out infinite" }}
          >
            <div className="relative h-28 w-28 md:h-32 md:w-32 rounded-full border border-white/20 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.08)]">
              <span className="text-xl md:text-2xl font-bold tracking-tight">My Tech</span>
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-gray-300 mt-1">
                STACK
              </span>
              <span className="absolute inset-[-6px] rounded-full border border-white/5" />
            </div>
          </div>

          {/* Guide Rings */}
          {rings.map((r) => {
            const sizePct = r.radiusPct * 2 * 100;
            return (
              <div
                key={`ring-${r.radiusPct}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 pointer-events-none"
                style={{
                  width: `${sizePct}%`,
                  height: `${sizePct}%`,
                  animation: "pulse-ring 6s ease-in-out infinite",
                }}
              />
            );
          })}

          {/* Rotating Orbits */}
          {rings.map((ring) => {
            return (
              <div
                key={`orbit-${ring.radiusPct}`}
                className="absolute inset-0 pointer-events-none"
                style={{
                  animation: `${
                    ring.reverse ? "orbit-spin-reverse" : "orbit-spin"
                  } ${ring.duration}s linear infinite`,
                }}
              >
                {ring.items.map((tech, i) => {
                  const angle = (2 * Math.PI * i) / ring.items.length - Math.PI / 2;
                  // Center offset percentages relative to the stage itself
                  const x = 50 + Math.cos(angle) * ring.radiusPct * 100;
                  const y = 50 + Math.sin(angle) * ring.radiusPct * 100;
                  return (
                    <div
                      key={tech.name}
                      className="absolute pointer-events-auto"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Counter-rotation to keep the icons upright */}
                      <div
                        style={{
                          animation: `${
                            ring.reverse ? "orbit-spin" : "orbit-spin-reverse"
                          } ${ring.duration}s linear infinite`,
                        }}
                      >
                        <div className="group relative">
                          <div className="h-14 w-14 md:h-16 md:w-16 rounded-full border border-white/15 bg-black hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-110 cursor-pointer">
                            <img
                              src={tech.src}
                              alt={tech.name}
                              loading="lazy"
                              className="h-7 w-7 md:h-9 md:w-9 object-contain"
                              style={
                                tech.invert
                                  ? { filter: "invert(1) brightness(2)" }
                                  : undefined
                              }
                            />
                          </div>
                          {/* Tooltip */}
                          <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/90 px-2 py-1 text-[9px] md:text-[10px] uppercase tracking-widest text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        
        {/* Footnote */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Also Exploring
          </span>
          <div className="flex flex-wrap gap-3">
            {alsoExploring.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300 hover:border-white/30 hover:text-white transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Contributions Graph */}
        <div className="mt-32 pt-16 border-t border-white/10 mx-auto max-w-5xl flex flex-col items-center">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              GitHub Contributions<span className="text-gray-500">.</span>
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              My GitHub contribution activity over the last year.
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-[#09090b]/80 backdrop-blur-sm w-full overflow-x-auto flex justify-center">
            <div className="min-w-fit">
              <GitHubCalendar
                username="akshatx03x"
                colorScheme="dark"
                theme={{
                  dark: ['#161b22', '#3f3f46', '#71717a', '#d4d4d8', '#ffffff'],
                }}
                fontSize={12}
                blockSize={12}
                blockMargin={5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;