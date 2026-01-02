import { PixelButton } from "@/components/PixelButton";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profileImage from "@/assets/profile.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden scanlines">
      {/* Pixel Stars Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 xl:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Profile Photo */}
          <div className="inline-block pixel-border bg-card p-4 md:p-5 mb-4">
            <img 
              src={profileImage} 
              alt="Abhiram Chittampally - Full Stack Developer" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover"
            />
          </div>

          {/* Title with typing effect styling */}
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bright-text mb-4 px-4">
              ABHIRAM
              <br />
              CHITTAMPALLY
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <div className="pixel-border-sm inline-block bg-primary px-3 py-2 sm:px-4">
                <p className="text-primary-foreground font-['Press_Start_2P'] text-[10px] sm:text-xs md:text-sm">
                  &gt; FULL STACK DEVELOPER
                </p>
              </div>
              <div className="pixel-border-sm inline-block bg-secondary px-3 py-2 sm:px-4">
                <p className="text-secondary-foreground font-['Press_Start_2P'] text-[10px] sm:text-xs md:text-sm">
                  AI/ML ENTHUSIAST
                </p>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mt-6 md:mt-8 px-4">
            <div className="pixel-border-sm bg-card p-3 sm:p-4">
              <div className="text-[10px] sm:text-xs text-muted-foreground mb-1 bright-text">EXPERIENCE</div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Press_Start_2P'] text-foreground">
                INTERN
              </div>
            </div>
            <div className="pixel-border-sm bg-card p-3 sm:p-4">
              <div className="text-[10px] sm:text-xs text-muted-foreground mb-1 bright-text">PROJECTS</div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Press_Start_2P'] text-foreground">
                3+
              </div>
            </div>
            <div className="pixel-border-sm bg-card p-3 sm:p-4">
              <div className="text-[10px] sm:text-xs text-muted-foreground mb-1 bright-text">TECH STACK</div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Press_Start_2P'] text-foreground">
                MERN+AI
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm px-4">
            <div className="flex items-center gap-2 pixel-border-sm bg-muted px-2 sm:px-3 py-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span>Hyderabad, TG</span>
            </div>
            <div className="flex items-center gap-2 pixel-border-sm bg-muted px-2 sm:px-3 py-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="hidden sm:inline">+91 6301544192</span>
              <span className="sm:hidden">+91 630154...</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4">
            <PixelButton onClick={() => scrollToSection("projects")} variant="primary" size="sm">
              ▶ VIEW QUESTS
            </PixelButton>
            <PixelButton onClick={() => scrollToSection("contact")} variant="accent" size="sm">
              ✉ MESSAGE
            </PixelButton>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 justify-center pt-4">
          <a
              href="https://github.com/AbhiramChittampally"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border-sm bg-card p-2 sm:p-3 hover:-translate-y-1 transition-transform"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/abhiram-chittampally"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border-sm bg-card p-2 sm:p-3 hover:-translate-y-1 transition-transform"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </a>
            <a
              href="mailto:abhiram1.chittampally@gmail.com"
              className="pixel-border-sm bg-card p-2 sm:p-3 hover:-translate-y-1 transition-transform"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
