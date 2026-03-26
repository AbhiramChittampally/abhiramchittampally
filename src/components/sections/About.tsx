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
                A results-driven Full Stack Developer with a deep passion for Artificial 
                Intelligence and Machine Learning. Proficient in building robust, end-to-end 
                web applications using the MERN stack. I am particularly interested in exploring 
                Generative AI, Agentic AI systems, and the broader AI ecosystem to create 
                intelligent, adaptive, and user-centric applications.
              </p>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Leveraging my skills in data modeling and predictive analytics with libraries 
                such as TensorFlow and Scikit-learn, I aim to build AI-powered solutions that 
                seamlessly integrate cutting-edge intelligence into practical, real-world products.
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
                  <span className="text-[10px] sm:text-xs text-accent whitespace-nowrap">2022 – Present</span>
                </div>
                <p className="text-xs sm:text-sm">B.E. Computer Science • CGPA: 7.0 • Hyderabad</p>
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
