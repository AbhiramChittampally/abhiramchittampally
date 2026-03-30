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
              {/* Completed Position */}
              <div className="relative pl-6 sm:pl-8 border-l-2 sm:border-l-4 border-accent">
                <div className="absolute -left-[6px] sm:-left-[10px] top-0 w-3 h-3 sm:w-4 sm:h-4 bg-accent"></div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-['Press_Start_2P'] text-xs sm:text-sm text-primary">
                      Trainee Software Developer
                    </h3>
                    <span className="pixel-border-sm bg-accent text-accent-foreground px-2 py-1 text-[10px] sm:text-xs whitespace-nowrap">
                      COMPLETED
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span>Bodhtree Consulting Limited</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-[10px] sm:text-sm">Sep 2025 – Dec 2025</span>
                  </div>

                  {/* Achievements */}
                  <div className="pt-4 space-y-3">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">ACHIEVEMENTS UNLOCKED:</div>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">▸</span>
                        <span>Developed a <strong>BI analytics tool</strong> enabling automated insights and visualizations for business datasets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">▸</span>
                        <span>Built a <strong>RAG system</strong> using AWS Bedrock, S3, and IAM, integrated the RAG with the BI tool</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">▸</span>
                        <span>Created <strong>AI solutions</strong> including Resume Analyzer and Voice Assistant using AWS Bedrock APIs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">▸</span>
                        <span>Worked across <strong>full-stack development</strong>, cloud services, API development, and AI/ML integration to deliver scalable, production-ready solutions</span>
                      </li>
                    </ul>
                  </div>

                  {/* Skills Gained */}
                  <div className="pt-4 space-y-2">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">SKILLS GAINED:</div>
                    <div className="flex flex-wrap gap-2">
                      {["Full-Stack Dev", "AWS Bedrock", "RAG Systems", "Cloud Services", "AI/ML Integration"].map(
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
