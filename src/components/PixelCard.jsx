import { cn } from "@/lib/utils";

export const PixelCard = ({ children, className, glow, ...props }) => {
  return (
    <div
      className={cn(
        "pixel-border bg-card text-card-foreground p-6 transition-all duration-200",
        "hover:-translate-y-1",
        glow && "hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
