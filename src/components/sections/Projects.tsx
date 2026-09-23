import { PixelCard } from "@/components/PixelCard";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FitGuide – AI-Powered Full-Stack App",
    date: "2026",
    difficulty: "EXPERT",
    description:
      "Built and deployed a full-stack fitness application with personalized calorie and macro calculations, workout and meal tracking, authentication, and an AI chatbot using RAG with a custom knowledge base.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "RAG", "REST APIs"],
    xp: "+850 XP",
    link: "https://fitguidess.onrender.com/",
  },
  {
    title: "VivekaVidhignya Legal Associates",
    date: "Feb 2026",
    difficulty: "HARD",
    description:
      "Built and deployed a full-stack web application for a real law firm client; developed the React.js frontend, REST API backend, MongoDB data layer, and application deployment workflow.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    xp: "+700 XP",
    link: "https://www.vivekavidhignya.com/",
  },
  {
    title: "Brain Tumor Classification",
    date: "Jul 2025",
    difficulty: "EXPERT",
    description:
      "Developed an image classification system using PyTorch and ResNet18 to classify MRI scans into four categories, achieving 99.4% validation accuracy; deployed model inference through a Flask REST API.",
    skills: ["Python", "PyTorch", "Scikit-learn", "Flask", "ResNet18"],
    xp: "+800 XP",
    link: "https://github.com/AbhiramChittampally/Brain-Tumor-Detection-using-CNN",
  },
  {
    title: "PassManager",
    date: "Oct 2025",
    difficulty: "HARD",
    description:
      "A full-stack password manager web application that allows users to securely store, view, edit, and delete their website credentials with a clean, responsive interface powered by React with MongoDB backend.",
    skills: [
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
    ],
    xp: "+500 XP",
    link: "https://github.com/AbhiramChittampally/PassManager",
  },
  {
    title: "Personal Portfolio Website",
    date: "Nov 2025",
    difficulty: "MEDIUM",
    description:
      "A retro pixel-art themed personal portfolio website showcasing projects, skills, and experience with responsive design and modern web technologies.",
    skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
    xp: "+400 XP",
    link: "https://abhiramchittampally.vercel.app",
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
