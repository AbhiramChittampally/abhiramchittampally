import { PixelButton } from "@/components/PixelButton";
import { PixelCard } from "@/components/PixelCard";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [terminalText, setTerminalText] = useState(">");

  return (
    <section className="py-12 md:py-16 lg:py-20 relative" id="contact">
      <div className="container mx-auto px-4 md:px-6 xl:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Press_Start_2P'] text-center mb-4 bright-text px-4">
          &lt; CONTACT TERMINAL /&gt;
        </h2>
        <p className="text-xs sm:text-sm text-center text-muted-foreground mb-8 md:mb-12">
          ★ INITIATE CONNECTION ★
        </p>

        <div className="max-w-4xl mx-auto">
          <PixelCard glow className="bg-card/90">
            {/* Terminal Header */}
            <div className="pixel-border-sm bg-background px-3 sm:px-4 py-2 mb-4 sm:mb-6 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-destructive"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[hsl(var(--health-bar))]"></div>
              </div>
              <span className="text-[10px] sm:text-xs font-['Press_Start_2P'] text-primary ml-2">
                CONTACT.EXE
              </span>
            </div>

            {/* Terminal Content */}
            <div className="bg-background pixel-border-sm p-4 sm:p-6 font-mono text-xs sm:text-sm mb-4 sm:mb-6 min-h-[150px] sm:min-h-[200px]">
              <div className="space-y-2">
                <p className="text-primary">
                  &gt; SYSTEM INITIALIZED...
                </p>
                <p className="text-muted-foreground">
                  &gt; LOADING CONTACT DATA...
                </p>
                <p className="text-accent">
                  &gt; STATUS: READY FOR CONNECTION
                </p>
                <p className="mt-4 text-foreground">
                  &gt; SELECT COMMUNICATION CHANNEL:
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <a
                href="mailto:abhiram1.chittampally@gmail.com"
                className="pixel-border-sm bg-muted p-3 sm:p-4 hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-muted-foreground group-hover:text-primary-foreground/70">
                      EMAIL
                    </div>
                    <div className="text-xs sm:text-sm font-['Press_Start_2P'] break-all">
                      abhiram1.chittampally@gmail.com
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="tel:+916301544192"
                className="pixel-border-sm bg-muted p-3 sm:p-4 hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground flex-shrink-0" />
                  <div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground group-hover:text-primary-foreground/70">
                      PHONE
                    </div>
                    <div className="text-xs sm:text-sm font-['Press_Start_2P']">
                      +91 6301544192
                    </div>
                  </div>
                </div>
              </a>

              <div className="pixel-border-sm bg-muted p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">LOCATION</div>
                    <div className="text-xs sm:text-sm font-['Press_Start_2P']">
                      Hyderabad, TG
                    </div>
                  </div>
                </div>
              </div>

              <div className="pixel-border-sm bg-muted p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[hsl(var(--health-bar))] animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">STATUS</div>
                    <div className="text-xs sm:text-sm font-['Press_Start_2P'] text-[hsl(var(--health-bar))]">
                      AVAILABLE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center pt-4 border-t-2 border-border">
            <a
                href="https://github.com/AbhiramChittampally"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-border-sm bg-card p-2 sm:p-3 hover:bg-primary transition-colors group"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/abhiram-chittampally"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-border-sm bg-card p-2 sm:p-3 hover:bg-primary transition-colors group"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};
