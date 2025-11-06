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
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "GenAI", "Agentic AI"],
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
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-['Press_Start_2P'] text-center mb-4 neon-text">
          &lt; INVENTORY /&gt;
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ★ COLLECTED POWER-UPS ★
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <PixelCard key={idx} glow className="bg-card/80">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 bg-${category.color} animate-pulse`}></div>
                  <h3 className={`font-['Press_Start_2P'] text-sm text-${category.color}`}>
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="pixel-border-sm bg-muted px-3 py-1 text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
        <div className="max-w-4xl mx-auto mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent animate-pulse"></div>
            <h3 className="text-2xl font-['Press_Start_2P'] text-accent">
              ACHIEVEMENTS
            </h3>
          </div>

          <PixelCard className="bg-card/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Complete Web Development Course",
                "Java Bootcamp Certificate",
                "React.js Bootcamp Certificate",
                "DSA with Java Bootcamp",
                "JavaScript Bootcamp",
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-accent text-xl">★</span>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};
