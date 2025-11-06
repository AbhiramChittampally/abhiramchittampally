import { PixelCard } from "@/components/PixelCard";

export const About = () => {
  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-['Press_Start_2P'] text-center mb-12 neon-text">
          &lt; PLAYER STATS /&gt;
        </h2>

        <div className="max-w-4xl mx-auto">
          <PixelCard glow className="mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent animate-pulse"></div>
                <h3 className="text-xl font-['Press_Start_2P'] text-primary">
                  MISSION STATEMENT
                </h3>
              </div>
              <p className="text-foreground leading-relaxed">
                A results-driven Full Stack Developer with a deep passion for Artificial 
                Intelligence and Machine Learning. Proficient in building robust, end-to-end 
                web applications using the MERN stack. I am particularly interested in exploring 
                Generative AI, Agentic AI systems, and the broader AI ecosystem to create 
                intelligent, adaptive, and user-centric applications.
              </p>
              <p className="text-foreground leading-relaxed">
                Leveraging my skills in data modeling and predictive analytics with libraries 
                such as TensorFlow and Scikit-learn, I aim to build AI-powered solutions that 
                seamlessly integrate cutting-edge intelligence into practical, real-world products.
              </p>
            </div>
          </PixelCard>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-secondary animate-pulse"></div>
              <h3 className="text-2xl font-['Press_Start_2P'] text-secondary">
                EDUCATION LOG
              </h3>
            </div>

            <PixelCard className="bg-card/50">
              <div className="space-y-3">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-['Press_Start_2P'] text-sm text-primary">
                    Keshav Memorial Engineering College
                  </h4>
                  <span className="text-xs text-accent">2022 – Present</span>
                </div>
                <p className="text-sm">B.E. Computer Science • Hyderabad</p>
              </div>
            </PixelCard>

            <PixelCard className="bg-card/50">
              <div className="space-y-3">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-['Press_Start_2P'] text-sm text-primary">
                    Sarath Junior College
                  </h4>
                  <span className="text-xs text-accent">2020 – 2022</span>
                </div>
                <p className="text-sm">Senior Secondary Education • Hyderabad</p>
              </div>
            </PixelCard>

            <PixelCard className="bg-card/50">
              <div className="space-y-3">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-['Press_Start_2P'] text-sm text-primary">
                    Hyderabad Public School
                  </h4>
                  <span className="text-xs text-accent">2018 – 2020</span>
                </div>
                <p className="text-sm">High School • Ramanthapur</p>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};
