import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
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
