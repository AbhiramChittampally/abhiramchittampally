import { PixelCard } from "@/components/PixelCard";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Law Firm Website",
    date: "Feb 2026",
    difficulty: "HARD",
    description:
      "A full-stack law firm website built with the MERN stack, featuring dynamic content management, client intake forms, and a responsive professional design.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    xp: "+600 XP",
    link: "https://github.com/AbhiramChittampally",
  },
  {
    title: "Personal Portfolio Website",
    date: "Nov 2025",
    difficulty: "MEDIUM",
    description:
      "A retro pixel-art themed personal portfolio website showcasing projects, skills, and experience with responsive design and modern web technologies.",
    skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
    xp: "+400 XP",
    link: "#",
  },
  {
    title: "PassManager",
    date: "Oct 2025",
    difficulty: "HARD",
    description:
      "A full-stack password manager web application that allows users to securely store, view, edit, and delete their website credentials. Features a simple, responsive interface powered by React with MongoDB backend.",
    skills: [
      "React.js",
      "TailwindCSS",
      "React Toastify",
      "UUID",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    xp: "+500 XP",
    link: "https://github.com/AbhiramChittampally/PassManager",
  },
  {
    title: "Brain Tumor Classification",
    date: "Jul 2025",
    difficulty: "EXPERT",
    description:
      "CNN-based brain tumor classification system using ResNet18 architecture. Built with PyTorch and Flask backend for real-time predictions.",
    skills: ["PyTorch", "Flask", "ResNet18", "HTML", "CSS", "JavaScript"],
    xp: "+750 XP",
    link: "https://github.com/AbhiramChittampally",
  },
  {
    title: "Spotify Dynamic WebPage",
    date: "Mar 2025",
    difficulty: "MEDIUM",
    description:
      "Interactive Spotify-inspired web page with dynamic content loading and responsive design.",
    skills: ["HTML", "CSS", "JavaScript"],
    xp: "+300 XP",
    link: "https://spotifyclone-abhiram.vercel.app/",
  },
];

const difficultyColors: Record<string, string> = {
  EASY: "text-[hsl(var(--health-bar))]",
  MEDIUM: "text-accent",
  HARD: "text-secondary",
  EXPERT: "text-destructive",
};

export const Projects = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative" id="projects">
      <div className="container mx-auto px-4 md:px-6 xl:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Press_Start_2P'] text-center mb-4 bright-text px-4">
          &lt; QUEST LOG /&gt;
        </h2>
        <p className="text-xs sm:text-sm text-center text-muted-foreground mb-8 md:mb-12">
          ★ COMPLETED MISSIONS ★
        </p>

        <div className="max-w-5xl mx-auto space-y-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <PixelCard glow className="bg-card/80 hover:bg-card transition-colors group-hover:border-primary">
                <div className="space-y-3 sm:space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-start flex-wrap gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary animate-pulse"></div>
                      <h3 className="font-['Press_Start_2P'] text-sm sm:text-base md:text-lg text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                      <span
                        className={`pixel-border-sm px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-['Press_Start_2P'] ${
                          difficultyColors[project.difficulty]
                        }`}
                      >
                        {project.difficulty}
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">{project.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">{project.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="pixel-border-sm bg-muted px-2 sm:px-3 py-1 text-[10px] sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-2 border-t-2 border-border">
                    <span className="font-['Press_Start_2P'] text-xs sm:text-sm text-accent">
                      {project.xp}
                    </span>
                    <div className="pixel-border-sm bg-primary px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-primary-foreground">
                      ✓ COMPLETE
                    </div>
                  </div>
                </div>
              </PixelCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
