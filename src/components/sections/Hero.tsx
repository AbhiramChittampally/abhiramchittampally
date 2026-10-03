import { PixelButton } from "@/components/PixelButton";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profileImage from "@/assets/profile.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden scanlines pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20">
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
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6 md:space-y-8">
          {/* Profile Photo */}
          <div className="inline-block pixel-border bg-card p-3 sm:p-4 md:p-5 mb-2 sm:mb-4">
            <img 
              src={profileImage} 
              alt="Abhiram Chittampally - Full Stack Developer" 
              className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover"
            />
          </div>

          {/* Title with typing effect styling */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl bright-text mb-3 sm:mb-4 px-2 sm:px-4 break-words tracking-tight">
              ABHIRAM
              <br />
              CHITTAMPALLY
            </h1>
            <div className="flex flex-wrap gap-2 justify-center items-center px-2">
              <div className="pixel-border-sm inline-block bg-primary px-2.5 py-1.5 sm:px-4 sm:py-2">
                <p className="text-primary-foreground font-['Press_Start_2P'] text-[9px] sm:text-xs md:text-sm">
                  &gt; FULL STACK DEVELOPER
                </p>
              </div>
              <div className="pixel-border-sm inline-block bg-secondary px-2.5 py-1.5 sm:px-4 sm:py-2">
                <p className="text-secondary-foreground font-['Press_Start_2P'] text-[9px] sm:text-xs md:text-sm">
                  AI/ML SYSTEMS
                </p>
              </div>
              <div className="pixel-border-sm inline-block bg-accent px-2.5 py-1.5 sm:px-4 sm:py-2">
                <p className="text-accent-foreground font-['Press_Start_2P'] text-[9px] sm:text-xs md:text-sm">
                  DATA SOLUTIONS
                </p>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mt-6 md:mt-8 px-2 sm:px-4">
            <div className="pixel-border-sm bg-card p-3 sm:p-4 flex flex-col justify-center items-center text-center min-h-[75px] sm:min-h-[85px]">
              <div className="text-[9px] sm:text-xs text-muted-foreground mb-1.5 bright-text uppercase tracking-wider">EXPERIENCE</div>
              <div className="text-xs sm:text-sm md:text-base font-['Press_Start_2P'] text-foreground whitespace-nowrap">
                SDE INTERN
              </div>
            </div>
            <div className="pixel-border-sm bg-card p-3 sm:p-4 flex flex-col justify-center items-center text-center min-h-[75px] sm:min-h-[85px]">
              <div className="text-[9px] sm:text-xs text-muted-foreground mb-1.5 bright-text uppercase tracking-wider">PROJECTS</div>
              <div className="text-xs sm:text-sm md:text-base font-['Press_Start_2P'] text-foreground whitespace-nowrap">
                5+
              </div>
            </div>
            <div className="pixel-border-sm bg-card p-3 sm:p-4 flex flex-col justify-center items-center text-center min-h-[75px] sm:min-h-[85px]">
              <div className="text-[9px] sm:text-xs text-muted-foreground mb-1.5 bright-text uppercase tracking-wider">TECH STACK</div>
              <div className="text-[9px] sm:text-[11px] md:text-xs font-['Press_Start_2P'] text-foreground leading-snug">
                <div>FULLSTACK(MERN)</div>
                <div className="text-primary mt-1">+AI/ML</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm px-2 sm:px-4">
            <div className="flex items-center gap-2 pixel-border-sm bg-muted px-2.5 sm:px-3 py-1.5 sm:py-2">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span>Hyderabad, TG</span>
            </div>
            <div className="flex items-center gap-2 pixel-border-sm bg-muted px-2.5 sm:px-3 py-1.5 sm:py-2">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span>+91 6301544192</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4 w-full max-w-xs sm:max-w-none mx-auto">
            <PixelButton onClick={() => scrollToSection("projects")} variant="primary" size="sm" className="w-full sm:w-auto text-[11px] sm:text-xs py-2.5 sm:py-3">
              ▶ VIEW QUESTS
            </PixelButton>
            <PixelButton onClick={() => scrollToSection("contact")} variant="accent" size="sm" className="w-full sm:w-auto text-[11px] sm:text-xs py-2.5 sm:py-3">
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
