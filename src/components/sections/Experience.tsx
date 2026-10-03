import { PixelCard } from "@/components/PixelCard";

export const Experience = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative scroll-mt-16 sm:scroll-mt-20" id="experience">
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
              <div className="relative pl-4 sm:pl-6 md:pl-8 border-l-2 sm:border-l-4 border-accent">
                <div className="absolute -left-[5px] sm:-left-[7px] md:-left-[10px] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-accent"></div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-['Press_Start_2P'] text-xs sm:text-sm text-primary">
                      Trainee Software Developer
                    </h3>
                    <span className="pixel-border-sm bg-accent text-accent-foreground px-2 py-0.5 sm:py-1 text-[9px] sm:text-xs whitespace-nowrap">
                      COMPLETED
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground/90">Bodhtree Consulting Limited</span>
                    <span>•</span>
                    <span>Sep 2025 – Dec 2025</span>
                    <span>•</span>
                    <span>Hyderabad, India</span>
                  </div>

                  {/* Achievements */}
                  <div className="pt-3 sm:pt-4 space-y-2.5 sm:space-y-3">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">ACHIEVEMENTS UNLOCKED:</div>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent flex-shrink-0 mt-0.5">▸</span>
                        <span className="leading-relaxed">Built a <strong>RAG pipeline</strong> using <strong>AWS Bedrock, S3, and IAM</strong> with data ingestion and semantic search; integrated it into a <strong>Business Intelligence analytics platform</strong> for AI-driven insight generation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent flex-shrink-0 mt-0.5">▸</span>
                        <span className="leading-relaxed">Developed a <strong>Resume Analyzer</strong> and <strong>Voice Assistant</strong> using <strong>AWS Bedrock LLM APIs</strong>; worked across backend, application integration, and user-facing components.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent flex-shrink-0 mt-0.5">▸</span>
                        <span className="leading-relaxed">Applied <strong>Python, Generative AI, SDLC, and Agile practices</strong> throughout development; maintained technical documentation and collaborated with cross-functional teams.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Skills Gained */}
                  <div className="pt-3 sm:pt-4 space-y-2">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">SKILLS GAINED:</div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {["AWS Bedrock", "RAG Pipeline", "S3 & IAM", "Generative AI", "Semantic Search", "Python", "SDLC & Agile"].map(
                        (skill, idx) => (
                          <span
                            key={idx}
                            className="pixel-border-sm bg-muted px-2 py-0.5 sm:py-1 text-[9px] sm:text-xs"
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
                RELEVANT COURSEWORK
              </h3>
            </div>

            <PixelCard className="bg-card/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  "Data Structures & Algorithms",
                  "DBMS (Database Management Systems)",
                  "SQL & Query Optimization",
                  "Computer Networks",
                  "Operating Systems",
                  "Object-Oriented Programming (OOP)",
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
