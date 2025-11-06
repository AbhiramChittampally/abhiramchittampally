import { PixelCard } from "@/components/PixelCard";

export const Experience = () => {
  return (
    <section className="py-20 relative" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-['Press_Start_2P'] text-center mb-4 neon-text">
          &lt; EXP TIMELINE /&gt;
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ★ CHARACTER PROGRESSION ★
        </p>

        <div className="max-w-3xl mx-auto">
          <PixelCard glow className="bg-card/80">
            <div className="space-y-6">
              {/* Current Position */}
              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-[10px] top-0 w-4 h-4 bg-primary animate-pulse"></div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-['Press_Start_2P'] text-sm text-primary">
                      Software Engineer Intern
                    </h3>
                    <span className="pixel-border-sm bg-primary text-primary-foreground px-2 py-1 text-xs">
                      ACTIVE
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Bodhtree Consulting</span>
                    <span>•</span>
                    <span>Sep 2025 – Present</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">LEVEL PROGRESS</span>
                      <span className="text-accent font-['Press_Start_2P']">IN PROGRESS</span>
                    </div>
                    <div className="pixel-border-sm bg-muted h-4 overflow-hidden">
                      <div className="bg-primary h-full w-[45%] animate-pulse"></div>
                    </div>
                  </div>

                  {/* Skills Gained */}
                  <div className="pt-4 space-y-2">
                    <div className="text-xs text-muted-foreground">SKILLS TRAINING:</div>
                    <div className="flex flex-wrap gap-2">
                      {["Full Stack Development", "Team Collaboration", "Real-world Projects"].map(
                        (skill, idx) => (
                          <span
                            key={idx}
                            className="pixel-border-sm bg-muted px-2 py-1 text-xs"
                          >
                            +{skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PixelCard>

          {/* Coursework Section */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-secondary animate-pulse"></div>
              <h3 className="text-2xl font-['Press_Start_2P'] text-secondary">
                COURSEWORK
              </h3>
            </div>

            <PixelCard className="bg-card/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Computer Networks",
                  "Computer Architecture",
                  "Design & Analysis of Algorithms",
                  "Operating Systems",
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                ].map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-secondary text-xl">▸</span>
                    <span className="text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};
