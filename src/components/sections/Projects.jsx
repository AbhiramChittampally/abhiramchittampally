import { PixelCard } from "@/components/PixelCard";

const projects = [
  {
    title: "PassManager",
    date: "Oct 2025",
    difficulty: "HARD",
    description:
      "A full-stack password manager web application that allows users to securely store, view, edit, and delete their website credentials. Features a simple, responsive interface powered by React with MongoDB backend.",
    skills: [
      "React 19",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    xp: "+500 XP",
  },
  {
    title: "Brain Tumor Classification",
    date: "Jul 2025",
    difficulty: "EXPERT",
    description:
      "CNN-based brain tumor classification system using ResNet18 architecture. Built with PyTorch and Flask backend for real-time predictions.",
    skills: ["PyTorch", "Flask", "ResNet18", "HTML", "CSS", "JavaScript"],
    xp: "+750 XP",
  },
  {
    title: "Spotify Dynamic WebPage",
    date: "Mar 2025",
    difficulty: "MEDIUM",
    description:
      "Interactive Spotify-inspired web page with dynamic content loading and responsive design.",
    skills: ["HTML", "CSS", "JavaScript"],
    xp: "+300 XP",
  },
  {
    title: "Static Netflix Homepage",
    date: "Nov 2025",
    difficulty: "EASY",
    description:
      "Pixel-perfect recreation of Netflix homepage with responsive design and modern CSS techniques.",
    skills: ["HTML", "CSS"],
    xp: "+200 XP",
  },
];

const difficultyColors = {
  EASY: "text-[hsl(var(--health-bar))]",
  MEDIUM: "text-accent",
  HARD: "text-secondary",
  EXPERT: "text-destructive",
};

export const Projects = () => {
  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Press_Start_2P'] text-center mb-4 bright-text px-4">
          &lt; QUEST LOG /&gt;
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ★ COMPLETED MISSIONS ★
        </p>

        <div className="max-w-5xl mx-auto space-y-6">
          {projects.map((project, idx) => (
            <PixelCard key={idx} glow className="bg-card/80 hover:bg-card transition-colors">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary animate-pulse"></div>
                    <h3 className="font-['Press_Start_2P'] text-lg text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span
                      className={`pixel-border-sm px-3 py-1 text-xs font-['Press_Start_2P'] ${
                        difficultyColors[project.difficulty]
                      }`}
                    >
                      {project.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground leading-relaxed">{project.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="pixel-border-sm bg-muted px-3 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-2 border-t-2 border-border">
                  <span className="font-['Press_Start_2P'] text-sm text-accent">
                    {project.xp}
                  </span>
                  <div className="pixel-border-sm bg-primary px-3 py-1 text-xs text-primary-foreground">
                    ✓ COMPLETE
                  </div>
                </div>
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};
