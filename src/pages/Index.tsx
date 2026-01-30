import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Pixel Grid Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Left Decorative Panel - Only on large screens */}
      <div className="hidden xl:block fixed left-0 top-0 h-screen w-48 xl:w-56 2xl:w-64 pointer-events-none z-10">
        <div className="p-6 space-y-6">
          {/* Profile Summary */}
          <div className="pixel-border bg-card/60 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] mb-3 bright-text">
              ★ PROFILE ★
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">ROLE</span>
                <span className="text-foreground">INTERN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">STACK</span>
                <span className="text-foreground">MERN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">FOCUS</span>
                <span className="text-foreground">AI/ML</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">LOCATION</span>
                <span className="text-foreground">HYD</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pixel-border bg-card/60 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] mb-3 bright-text">
              ⚙️ TECH STACK
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "React", icon: "⚛️" },
                { label: "Node", icon: "🟢" },
                { label: "Python", icon: "🐍" },
                { label: "Mongo", icon: "🍃" },
                { label: "AI/ML", icon: "🤖" },
                { label: "Git", icon: "📦" }
              ].map((tech, i) => (
                <div
                  key={i}
                  className="pixel-border-sm bg-background/50 aspect-square flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors"
                  title={tech.label}
                >
                  <div className="text-lg">{tech.icon}</div>
                  <div className="text-[6px] text-muted-foreground mt-1">{tech.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Status */}
          <div className="pixel-border bg-card/60 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] mb-3 bright-text">
              📍 STATUS
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-accent animate-pulse"></div>
                  <span className="text-[8px] text-muted-foreground">CURRENT</span>
                </div>
                <div className="text-[9px] leading-relaxed">SDE @ Bodhtree ✓</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-foreground/40"></div>
                  <span className="text-[8px] text-muted-foreground">EDUCATION</span>
                </div>
                <div className="text-[9px] leading-relaxed">CS @ KMEC</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Decorative Panel - Only on large screens */}
      <div className="hidden xl:block fixed right-0 top-0 h-screen w-48 xl:w-56 2xl:w-64 pointer-events-none z-10">
        <div className="p-6 space-y-6">
          {/* Projects Stats */}
          <div className="pixel-border bg-card/60 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] mb-3 bright-text">
              📊 PROJECTS
            </div>
            <div className="space-y-3">
              {[
                { name: "PassManager", tech: "MERN" },
                { name: "Brain Tumor AI", tech: "PyTorch" },
                { name: "Spotify Clone", tech: "Web" },
                { name: "Netflix Clone", tech: "HTML/CSS" },
              ].map((project, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-foreground">{project.name}</span>
                    <span className="text-[7px] text-muted-foreground">{project.tech}</span>
                  </div>
                  <div className="h-1 bg-muted pixel-border-sm overflow-hidden">
                    <div className="h-full bg-foreground/40 w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Overview */}
          <div className="pixel-border bg-card/60 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] mb-3 bright-text">
              🎯 SKILLS
            </div>
            <div className="space-y-3">
              {[
                { category: "Frontend", level: 85 },
                { category: "Backend", level: 75 },
                { category: "AI/ML", level: 70 },
                { category: "Database", level: 65 },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-muted-foreground">{skill.category}</span>
                    <span className="text-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted pixel-border-sm overflow-hidden">
                    <div
                      className="h-full bg-foreground/40 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pixel-border bg-card/60 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] mb-3 bright-text">
              🏆 CERTS
            </div>
            <div className="space-y-2">
              {[
                "Web Dev",
                "React.js",
                "Java",
                "DSA",
                "JavaScript"
              ].map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[9px]"
                >
                  <span className="text-foreground/60">✓</span>
                  <span className="text-foreground/80">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Quick Access */}
          <div className="pixel-border bg-card/60 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] mb-3 bright-text">
              📧 CONTACT
            </div>
            <div className="space-y-2 text-[8px]">
              <div className="flex items-start gap-2">
                <span className="text-foreground/60">@</span>
                <span className="text-foreground/80 break-all">abhiram1.chittampally@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground/60">📱</span>
                <span className="text-foreground/80">+91 6301544192</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t-4 border-primary relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="font-['Press_Start_2P'] text-[10px] sm:text-xs text-muted-foreground">
            © 2025 ABHIRAM CHITTAMPALLY
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            CRAFTED WITH ❤️ IN PIXEL STYLE
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
