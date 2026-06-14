import type { SkillCategory } from "@/types";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  variant?: SkillCategory;
  className?: string;
}

const variantStyles: Record<SkillCategory, string> = {
  frontend:
    "border-accent/40 text-accent hover:border-accent hover:bg-accent/10",
  backend:
    "border-sky-400/40 text-sky-600 hover:border-sky-400 hover:bg-sky-50 dark:text-sky-400 dark:hover:bg-sky-950/30",
  tools:
    "border-border text-muted-foreground hover:border-muted-foreground hover:bg-muted",
  default:
    "border-accent/30 text-fg hover:border-accent hover:bg-accent/10",
};

export function SkillBadge({
  name,
  variant = "default",
  className,
}: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-card px-3 py-1 text-sm font-medium transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {name}
    </span>
  );
}
