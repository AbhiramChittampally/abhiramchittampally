import { PixelCard } from "@/components/PixelCard";

export const Experience = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative" id="experience">
      <div className="container mx-auto px-4 md:px-6 xl:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Press_Start_2P'] text-center mb-4 bright-text px-4">
          &lt; EXP TIMELINE /&gt;
        </h2>
        <p className="text-xs sm:text-sm text-center text-muted-foreground mb-8 md:mb-12">
          ★ CHARACTER PROGRESSION ★
        </p>

        <div className="max-w-3xl mx-auto">
          <PixelCard glow className="bg-card/80">
            <div className="space-y-6">
              {/* Current Position */}
              <div className="relative pl-6 sm:pl-8 border-l-2 sm:border-l-4 border-primary">
                <div className="absolute -left-[6px] sm:-left-[10px] top-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary animate-pulse"></div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-['Press_Start_2P'] text-xs sm:text-sm text-primary">
                      Software Engineer Intern
                    </h3>
                    <span className="pixel-border-sm bg-primary text-primary-foreground px-2 py-1 text-[10px] sm:text-xs whitespace-nowrap">
                      ACTIVE
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span>Bodhtree Consulting</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-[10px] sm:text-sm">Sep 2025 – Present</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between text-[10px] sm:text-xs">
                      <span className="text-muted-foreground">LEVEL PROGRESS</span>
                      <span className="text-accent font-['Press_Start_2P']">IN PROGRESS</span>
                    </div>
                    <div className="pixel-border-sm bg-muted h-3 sm:h-4 overflow-hidden">
                      <div className="bg-primary h-full w-[45%] animate-pulse"></div>
                    </div>
                  </div>

                  {/* Key Contributions */}
                  <div className="pt-4 space-y-2">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">KEY CONTRIBUTIONS:</div>
                    <ul className="space-y-2 text-xs sm:text-sm text-foreground">
                      <li>• Built BI analytics tool similar to Power BI for automated insights</li>
                      <li>• Developed RAG system using AWS Bedrock, S3, and IAM</li>
                      <li>• Created Resume Analyzer and Voice Assistant with AWS Bedrock APIs</li>
                      <li>• Built client website with FastAPI, implementing RBAC</li>
                    </ul>
                  </div>

                  {/* Skills Gained */}
                  <div className="pt-4 space-y-2">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">SKILLS TRAINING:</div>
                    <div className="flex flex-wrap gap-2">
                      {["Full Stack", "AWS Cloud", "RAG Systems", "AI/ML Integration", "API Development"].map(
                        (skill, idx) => (
                          <span
                            key={idx}
                            className="pixel-border-sm bg-muted px-2 py-1 text-[10px] sm:text-xs"
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
          <div className="mt-8 md:mt-12">
            <div className="flex items-center gap-2 sm:gap-3 mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary animate-pulse"></div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-['Press_Start_2P'] text-secondary bright-text">
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
                    <span className="text-secondary text-base sm:text-lg md:text-xl">▸</span>
                    <span className="text-xs sm:text-sm">{course}</span>
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
