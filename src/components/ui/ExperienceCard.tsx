import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/types";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8",
        className
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-fg md:text-xl">
            {experience.role}
          </h3>
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline"
          >
            {experience.company}
          </a>
          <p className="text-sm italic text-muted-foreground">
            {experience.type}
          </p>
        </div>
        <Badge
          variant="secondary"
          className="w-fit shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          {experience.period}
        </Badge>
      </div>
      <ul className="mt-5 space-y-3">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm text-muted-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
