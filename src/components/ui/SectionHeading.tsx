import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {tag && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2",
            centered && "justify-center"
          )}
        >
          <span className="h-4 w-0.5 rounded-full bg-accent" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {tag}
          </p>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-muted",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
