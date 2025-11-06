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
      <div className="hidden xl:block fixed left-0 top-0 h-screen w-64 pointer-events-none z-10">
        <div className="p-6 space-y-6">
          {/* Game Stats Panel */}
          <div className="pixel-border bg-card/80 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] text-primary mb-3">
              ★ STATS ★
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">PROJECTS</span>
                <span className="text-primary">05</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SKILLS</span>
                <span className="text-primary">20+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">XP</span>
                <span className="text-primary">9999</span>
              </div>
            </div>
          </div>

          {/* Power-ups Display */}
          <div className="pixel-border bg-card/80 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] text-primary mb-3">
              ⚡ POWER-UPS
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["🎯", "🚀", "💡", "⚙️", "🎨", "🔧"].map((emoji, i) => (
                <div
                  key={i}
                  className="pixel-border-sm bg-background/50 aspect-square flex items-center justify-center text-xl hover:scale-110 transition-transform"
                  style={{ animation: `pulse ${2 + i * 0.3}s infinite` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Pixel Character */}
          <div className="pixel-border bg-card/80 backdrop-blur-sm p-4">
            <div className="text-6xl text-center animate-bounce">🎮</div>
            <div className="font-['Press_Start_2P'] text-[8px] text-center mt-2 text-muted-foreground">
              PLAYER 1
            </div>
          </div>
        </div>
      </div>

      {/* Right Decorative Panel - Only on large screens */}
      <div className="hidden xl:block fixed right-0 top-0 h-screen w-64 pointer-events-none z-10">
        <div className="p-6 space-y-6">
          {/* Quest Progress */}
          <div className="pixel-border bg-card/80 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] text-primary mb-3">
              📋 QUESTS
            </div>
            <div className="space-y-3">
              {[
                { name: "HIRE ME", progress: 75 },
                { name: "PORTFOLIO", progress: 100 },
                { name: "NETWORK", progress: 60 },
              ].map((quest, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-muted-foreground">{quest.name}</span>
                    <span className="text-primary">{quest.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted pixel-border-sm overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${quest.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="pixel-border bg-card/80 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] text-primary mb-3">
              🏆 BADGES
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["🥇", "⭐", "💎", "🔥", "🎖️", "👑"].map((badge, i) => (
                <div
                  key={i}
                  className="pixel-border-sm bg-gradient-to-br from-primary/20 to-accent/20 aspect-square flex items-center justify-center text-xl"
                  style={{
                    animation: `pulse ${2.5 + i * 0.2}s infinite`,
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Coin Counter */}
          <div className="pixel-border bg-card/80 backdrop-blur-sm p-4">
            <div className="font-['Press_Start_2P'] text-[10px] text-primary mb-2">
              💰 COINS
            </div>
            <div className="text-center">
              <div className="text-3xl font-['Press_Start_2P'] text-accent neon-text">
                999
              </div>
            </div>
          </div>

          {/* Floating Stars */}
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="text-2xl animate-pulse"
                style={{
                  marginLeft: `${Math.random() * 100}px`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                ✨
              </div>
            ))}
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
      <footer className="py-8 border-t-4 border-primary relative">
        <div className="container mx-auto px-6 text-center">
          <p className="font-['Press_Start_2P'] text-xs text-muted-foreground">
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
