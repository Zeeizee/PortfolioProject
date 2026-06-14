import {
  Bot,
  Database,
  FlaskConical,
  LayoutGrid,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import {
  sectionLabels,
  skillCategoryLabels,
  skillCategoryVariants,
  skills,
} from "@/data/portfolio";
import type { SkillCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: LayoutGrid,
  stateManagement: LayoutGrid,
  backend: Server,
  databases: Database,
  testing: FlaskConical,
  devops: Wrench,
  aiIntegration: Bot,
  other: Wrench,
};

const categoryStyles: Record<
  SkillCategory,
  { iconBg: string; iconColor: string }
> = {
  frontend: { iconBg: "bg-accent/10", iconColor: "text-accent" },
  backend: {
    iconBg: "bg-sky-100 dark:bg-sky-950/40",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  tools: { iconBg: "bg-muted", iconColor: "text-muted-foreground" },
  default: { iconBg: "bg-muted", iconColor: "text-muted-foreground" },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedWrapper>
          <SectionHeading
            tag={sectionLabels.skills.tag}
            title={sectionLabels.skills.title}
            className="mb-12"
          />
        </AnimatedWrapper>

        <div className="space-y-4">
          {skills.categories.map((category, i) => {
            const Icon = categoryIcons[category.key] ?? LayoutGrid;
            const variant = skillCategoryVariants[category.key] ?? "tools";
            const styles = categoryStyles[variant];

            return (
              <AnimatedWrapper key={category.key} delay={i * 0.05}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-start sm:gap-6 md:p-6">
                  <div className="flex items-center gap-3 sm:w-44 sm:shrink-0">
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-full",
                        styles.iconBg
                      )}
                    >
                      <Icon className={cn("size-5", styles.iconColor)} />
                    </span>
                    <span className="text-base font-bold text-card-foreground">
                      {category.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <SkillBadge
                        key={skill}
                        name={skill}
                        variant={variant}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>
            );
          })}
        </div>

        <AnimatedWrapper delay={0.3} className="mt-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="mb-6 text-lg font-bold text-card-foreground">
              {skillCategoryLabels.proficiency}
            </h3>
            <div className="space-y-5">
              {skills.proficiency.map((item) => (
                <ProgressBar
                  key={item.name}
                  label={item.name}
                  percent={item.percent}
                />
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
