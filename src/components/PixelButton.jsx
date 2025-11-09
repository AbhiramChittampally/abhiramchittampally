import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const PixelButton = forwardRef(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:translate-x-1 hover:translate-y-1",
      secondary: "bg-secondary text-secondary-foreground hover:translate-x-1 hover:translate-y-1",
      accent: "bg-accent text-accent-foreground hover:translate-x-1 hover:translate-y-1",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "pixel-border font-['Press_Start_2P'] uppercase tracking-wide transition-all duration-100",
          "active:translate-x-2 active:translate-y-2 active:shadow-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PixelButton.displayName = "PixelButton";
