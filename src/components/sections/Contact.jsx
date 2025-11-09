import { PixelButton } from "@/components/PixelButton";
import { PixelCard } from "@/components/PixelCard";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [terminalText, setTerminalText] = useState(">");

  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Press_Start_2P'] text-center mb-4 bright-text px-4">
          &lt; CONTACT TERMINAL /&gt;
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ★ INITIATE CONNECTION ★
        </p>

        <div className="max-w-4xl mx-auto">
          <PixelCard glow className="bg-card/90">
            {/* Terminal Header */}
            <div className="pixel-border-sm bg-background px-4 py-2 mb-6 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-destructive"></div>
                <div className="w-3 h-3 bg-accent"></div>
                <div className="w-3 h-3 bg-[hsl(var(--health-bar))]"></div>
              </div>
              <span className="text-xs font-['Press_Start_2P'] text-primary ml-2">
                CONTACT.EXE
              </span>
            </div>

            {/* Terminal Content */}
            <div className="bg-background pixel-border-sm p-6 font-mono text-sm mb-6 min-h-[200px]">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <a
                href="mailto:abhiram1.chittampally@gmail.com"
                className="pixel-border-sm bg-muted p-4 hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground group-hover:text-primary-foreground/70">
                      EMAIL
                    </div>
                    <div className="text-sm font-['Press_Start_2P'] break-all">
                      abhiram1.chittampally@gmail.com
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="tel:+916301544192"
                className="pixel-border-sm bg-muted p-4 hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground group-hover:text-primary-foreground/70">
                      PHONE
                    </div>
                    <div className="text-sm font-['Press_Start_2P']">
                      +91 6301544192
                    </div>
                  </div>
                </div>
              </a>

              <div className="pixel-border-sm bg-muted p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">LOCATION</div>
                    <div className="text-sm font-['Press_Start_2P']">
                      Hyderabad, TG
                    </div>
                  </div>
                </div>
              </div>

              <div className="pixel-border-sm bg-muted p-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-3 h-3 bg-[hsl(var(--health-bar))] animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">STATUS</div>
                    <div className="text-sm font-['Press_Start_2P'] text-[hsl(var(--health-bar))]">
                      AVAILABLE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center pt-4 border-t-2 border-border">
            <a
                href="https://github.com/AbhiramChittampally"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-border-sm bg-card p-3 hover:bg-primary transition-colors group"
              >
                <Github className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/abhiram-chittampally"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-border-sm bg-card p-3 hover:bg-primary transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};
