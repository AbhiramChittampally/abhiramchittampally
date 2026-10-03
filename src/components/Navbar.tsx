import { useState, useEffect } from "react";
import { Menu, X, Terminal, ExternalLink } from "lucide-react";
import { PixelButton } from "./PixelButton";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "QUESTS", href: "#projects" },
  { label: "EXP", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b-2 border-primary shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          : "bg-background/80 backdrop-blur-sm border-b-2 border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-2.5 h-2.5 bg-primary animate-pulse"></div>
            <span className="font-['Press_Start_2P'] text-[10px] sm:text-xs text-primary bright-text group-hover:text-accent transition-colors">
              ABHIRAM.DEV
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="font-['Press_Start_2P'] text-[10px] px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted/60 transition-colors pixel-border-sm border-transparent hover:border-primary/50 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <PixelButton
              onClick={() => scrollTo("#contact")}
              variant="primary"
              size="sm"
              className="ml-2 text-[10px] py-1.5 px-3"
            >
              HIRE ME
            </PixelButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="pixel-border-sm bg-card p-2 text-primary hover:bg-muted focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/98 border-b-4 border-primary px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="font-['Press_Start_2P'] text-[9px] text-muted-foreground mb-2 px-2 flex items-center gap-2">
            <Terminal className="w-3 h-3 text-primary" />
            <span>NAVIGATION MENU</span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="w-full text-left font-['Press_Start_2P'] text-xs py-2.5 px-3 pixel-border-sm bg-background/60 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>&gt; {item.label}</span>
              <span className="text-[10px] text-muted-foreground group-hover:text-primary-foreground">▶</span>
            </button>
          ))}
          <div className="pt-2">
            <PixelButton
              onClick={() => scrollTo("#contact")}
              variant="accent"
              size="sm"
              className="w-full py-2.5 text-xs"
            >
              ✉ GET IN TOUCH
            </PixelButton>
          </div>
        </div>
      )}
    </nav>
  );
};
