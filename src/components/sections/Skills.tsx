import { PixelCard } from "@/components/PixelCard";

const skillCategories = [
  {
    category: "WEB TECH",
    color: "primary",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Express.js"],
  },
  {
    category: "STYLING",
    color: "secondary",
    skills: ["Tailwind CSS", "Bootstrap"],
  },
  {
    category: "AI/ML",
    color: "accent",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Generative AI", "Agentic AI", "RAG", "LLM"],
  },
  {
    category: "DATABASE",
    color: "primary",
    skills: ["MongoDB", "REST API"],
  },
  {
    category: "TOOLS",
    color: "secondary",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "LANGUAGES",
    color: "accent",
    skills: ["Python", "Java", "JavaScript"],
  },
];

export const Skills = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative" id="skills">
      <div className="container mx-auto px-4 md:px-6 xl:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Press_Start_2P'] text-center mb-4 bright-text px-4">
          &lt; INVENTORY /&gt;
        </h2>
        <p className="text-xs sm:text-sm text-center text-muted-foreground mb-8 md:mb-12">
          ★ COLLECTED POWER-UPS ★
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <PixelCard key={idx} glow className="bg-card/80">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-${category.color} animate-pulse`}></div>
                  <h3 className={`font-['Press_Start_2P'] text-xs sm:text-sm text-${category.color}`}>
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="pixel-border-sm bg-muted px-2 sm:px-3 py-1 text-[10px] sm:text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </PixelCard>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-6">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent animate-pulse"></div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-['Press_Start_2P'] text-accent bright-text">
              ACHIEVEMENTS
            </h3>
          </div>

          <PixelCard className="bg-card/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Complete Web Development Course",
                "Agentic AI – GeeksforGeeks",
                "Generative AI – GeeksforGeeks",
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-accent text-base sm:text-lg md:text-xl">★</span>
                  <span className="text-xs sm:text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};
