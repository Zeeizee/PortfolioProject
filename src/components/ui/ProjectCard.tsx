"use client";

import {
  Ambulance,
  BarChart3,
  BookOpen,
  ExternalLink,
  Folder,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { SkillBadge } from "@/components/ui/SkillBadge";
import type { Project, ProjectHeaderColor } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const projectIcons: Record<string, LucideIcon> = {
  ambulance: Ambulance,
  "bar-chart-3": BarChart3,
  "book-open": BookOpen,
  globe: Globe,
};

const headerColorClasses: Record<ProjectHeaderColor, string> = {
  accent: "bg-accent",
  teal: "bg-teal-600",
  emerald: "bg-emerald-600",
  indigo: "bg-indigo-600",
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const IconComponent = projectIcons[project.icon] ?? Folder;

  return (
    <motion.article
      className={cn(
        "overflow-hidden rounded-3xl border border-border bg-card shadow-sm",
        className
      )}
      whileHover={{ scale: 1.01, boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.25 }}
    >
      <div
        className={cn(
          "flex min-h-[120px] items-center gap-4 px-6 py-8 text-white md:px-8 md:py-10",
          headerColorClasses[project.headerColor]
        )}
      >
        <IconComponent className="size-8 shrink-0 md:size-10" strokeWidth={1.75} />
        <div>
          <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
          <p className="mt-1 text-sm text-white/90">{project.subtitle}</p>
        </div>
      </div>
      <div className="space-y-4 bg-card p-6 md:p-8">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          {project.displayUrl}
          <ExternalLink className="size-3.5" />
        </a>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <SkillBadge
              key={tech}
              name={tech}
              className="border-accent/50 bg-accent/10 font-medium text-accent"
            />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-card-foreground/80">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-accent transition-opacity hover:opacity-80"
          aria-label={`View ${project.title}`}
        >
          <span className="flex size-8 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
            <ExternalLink className="size-4" />
          </span>
        </a>
      </div>
    </motion.article>
  );
}
