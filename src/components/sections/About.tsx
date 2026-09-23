import { PixelCard } from "@/components/PixelCard";

export const About = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative" id="about">
      <div className="container mx-auto px-4 md:px-6 xl:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Press_Start_2P'] text-center mb-8 sm:mb-12 bright-text px-4">
          &lt; PLAYER STATS /&gt;
        </h2>

        <div className="max-w-4xl mx-auto">
          <PixelCard glow className="mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent animate-pulse"></div>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-['Press_Start_2P'] text-primary bright-text">
                  MISSION STATEMENT
                </h3>
              </div>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Computer Science graduate (June 2026) with hands-on experience building 
                <strong> full-stack web applications</strong>, <strong>AI/ML systems</strong>, and <strong>data engineering solutions</strong>. 
                Proficient in Python, JavaScript, Java, React.js, Node.js, Express.js, MongoDB, SQL, and Snowflake.
              </p>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Demonstrated track record developing production-grade web applications, engineering AI/ML architectures 
                with PyTorch, Scikit-learn, and RAG pipelines, and completing a software development internship at Bodhtree Consulting. 
                Currently undergoing structured advanced training in Advanced Python, Pandas/NumPy, SQL, and Kimball Data Modeling 
                through the <strong>KMIT Talent Accelerator Program</strong>.
              </p>
            </div>
          </PixelCard>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary animate-pulse"></div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-['Press_Start_2P'] text-secondary bright-text">
                EDUCATION LOG
              </h3>
            </div>

            <PixelCard className="bg-card/50">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-['Press_Start_2P'] text-xs sm:text-sm text-primary">
                    Keshav Memorial Engineering College
                  </h4>
                  <span className="text-[10px] sm:text-xs text-accent whitespace-nowrap">2022 – 2026</span>
                </div>
                <p className="text-xs sm:text-sm">B.E. Computer Science • Graduated: June 2026 • Hyderabad, India</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">
                  Coursework: Data Structures & Algorithms, DBMS, SQL, Computer Networks, Operating Systems, OOP
                </p>
              </div>
            </PixelCard>

            <PixelCard className="bg-card/50">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-['Press_Start_2P'] text-xs sm:text-sm text-primary">
                    Sarath Junior College
                  </h4>
                  <span className="text-[10px] sm:text-xs text-accent whitespace-nowrap">2020 – 2022</span>
                </div>
                <p className="text-xs sm:text-sm">Intermediate • 92.2% • Hyderabad</p>
              </div>
            </PixelCard>

            <PixelCard className="bg-card/50">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-['Press_Start_2P'] text-xs sm:text-sm text-primary">
                    Hyderabad Public School
                  </h4>
                   <span className="text-[10px] sm:text-xs text-accent whitespace-nowrap">2017 – 2020</span>
                </div>
                <p className="text-xs sm:text-sm">High School • CGPA: 8.05 • Ramanthapur</p>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};
