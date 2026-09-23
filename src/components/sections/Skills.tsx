import { PixelCard } from "@/components/PixelCard";

const skillCategories = [
  {
    category: "LANGUAGES",
    color: "primary",
    skills: ["Python", "JavaScript (ES6+)", "Java", "C", "SQL", "HTML", "CSS"],
  },
  {
    category: "FRONTEND",
    color: "secondary",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    category: "BACKEND & APIS",
    color: "accent",
    skills: ["Node.js", "Express.js", "Flask", "REST API Design"],
  },
  {
    category: "DATA & DATABASES",
    color: "primary",
    skills: ["Pandas", "NumPy", "MongoDB", "Snowflake", "Data Modeling", "Data Warehousing"],
  },
  {
    category: "AI / ML",
    color: "secondary",
    skills: ["PyTorch", "Scikit-learn", "RAG", "LLMs", "Generative AI", "Agentic AI"],
  },
  {
    category: "TOOLS & PRACTICES",
    color: "accent",
    skills: ["Git", "GitHub", "CI/CD", "Render", "Postman", "VS Code", "SDLC", "Agile"],
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

        {/* Certifications & Achievements */}
        <div className="max-w-5xl mx-auto mt-12 md:mt-16 space-y-8">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary animate-pulse"></div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-['Press_Start_2P'] text-secondary bright-text">
                CERTIFICATIONS
              </h3>
            </div>

            <PixelCard className="bg-card/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Generative AI, LLM & RAG – GeeksForGeeks",
                  "Agentic AI – GeeksForGeeks",
                  "Git – GeeksForGeeks",
                  "SQL – GeeksForGeeks",
                  "DSA with Java Bootcamp – LetsUpgrade (NSDC & GDG MAD)",
                  "React Bootcamp – LetsUpgrade (NSDC & GDG MAD)",
                  "Complete Web Development Course – Udemy",
                ].map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-secondary text-base">★</span>
                    <span className="text-xs sm:text-sm leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </PixelCard>
          </div>

          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent animate-pulse"></div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-['Press_Start_2P'] text-accent bright-text">
                ACHIEVEMENTS
              </h3>
            </div>

            <PixelCard className="bg-card/50">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-['Press_Start_2P'] text-xs mt-1">▶</span>
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <strong className="text-foreground font-semibold">99.4% Validation Accuracy</strong> on a 4-class brain tumor image classification model using <strong>PyTorch and ResNet18</strong>.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-['Press_Start_2P'] text-xs mt-1">▶</span>
                  <div className="text-xs sm:text-sm leading-relaxed">
                    Undergoing structured training through the <strong className="text-foreground">KMIT Talent Accelerator Program</strong> across Advanced Python, Data Engineering, SQL, Kimball Data Modeling, Snowflake, CI/CD, MLOps, FastAPI, Big Data, Distributed Systems, Docker, and GPU Computing.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-['Press_Start_2P'] text-xs mt-1">▶</span>
                  <div className="text-xs sm:text-sm leading-relaxed">
                    Architected, built, and deployed two full-stack applications and an end-to-end ML application covering frontend, backend, databases, APIs, and cloud deployment workflows.
                  </div>
                </div>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};
