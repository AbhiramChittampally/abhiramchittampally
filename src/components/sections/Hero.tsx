import { PixelButton } from "@/components/PixelButton";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Pixel Avatar */}
          <div className="inline-block pixel-border bg-card p-4 mb-4">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary relative">
              {/* Simplified pixel character */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-[1px] p-2">
                {/* Face pixels */}
                <div className="col-start-3 row-start-2 bg-accent"></div>
                <div className="col-start-6 row-start-2 bg-accent"></div>
                <div className="col-start-3 col-span-4 row-start-5 bg-accent"></div>
              </div>
            </div>
          </div>

          {/* Title with typing effect styling */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl neon-text mb-4">
              ABHIRAM
              <br />
              CHITTAMPALLY
            </h1>
            <div className="pixel-border-sm inline-block bg-primary px-4 py-2">
              <p className="text-primary-foreground font-['Press_Start_2P'] text-xs md:text-sm">
                &gt; FULL STACK DEVELOPER
              </p>
            </div>
            <div className="pixel-border-sm inline-block bg-secondary px-4 py-2 ml-2">
              <p className="text-secondary-foreground font-['Press_Start_2P'] text-xs md:text-sm">
                AI/ML ENTHUSIAST
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
            <div className="pixel-border-sm bg-card p-4">
              <div className="text-xs text-muted-foreground mb-1">EXPERIENCE</div>
              <div className="text-2xl font-['Press_Start_2P'] text-foreground">
                INTERN
              </div>
            </div>
            <div className="pixel-border-sm bg-card p-4">
              <div className="text-xs text-muted-foreground mb-1">PROJECTS</div>
              <div className="text-2xl font-['Press_Start_2P'] text-foreground">
                4+
              </div>
            </div>
            <div className="pixel-border-sm bg-card p-4">
              <div className="text-xs text-muted-foreground mb-1">TECH STACK</div>
              <div className="text-2xl font-['Press_Start_2P'] text-foreground">
                MERN+AI
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 pixel-border-sm bg-muted px-3 py-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Hyderabad, TG</span>
            </div>
            <div className="flex items-center gap-2 pixel-border-sm bg-muted px-3 py-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 6301544192</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <PixelButton onClick={() => scrollToSection("projects")} variant="primary">
              ▶ VIEW QUESTS
            </PixelButton>
            <PixelButton onClick={() => scrollToSection("contact")} variant="accent">
              ✉ MESSAGE
            </PixelButton>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-4">
          <a
              href="https://github.com/AbhiramChittampally"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border-sm bg-card p-3 hover:-translate-y-1 transition-transform"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/abhiram-chittampally"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border-sm bg-card p-3 hover:-translate-y-1 transition-transform"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="mailto:abhiram1.chittampally@gmail.com"
              className="pixel-border-sm bg-card p-3 hover:-translate-y-1 transition-transform"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
