"use client";

import { Download, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { StatCard } from "@/components/ui/StatCard";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { buttonVariants } from "@/components/ui/button";
import {
  heroLabels,
  navbarLabels,
  personalInfo,
  skills,
  stats,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const floatingPositions = [
  "top-2 left-0 md:top-4",
  "top-12 right-0 md:top-8",
  "bottom-16 left-2 md:bottom-12 md:left-4",
  "bottom-2 right-4 md:bottom-4 md:right-8",
];

export function Hero() {
  return (
    <section id="home" className="px-4 pt-24 pb-12 md:px-6 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-hero-card p-6 md:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 60%, var(--hero-gradient), transparent 65%)",
            }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <AnimatedWrapper>
              <div id="about">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-card px-3 py-1.5 text-xs font-medium text-accent">
                  <span className="size-2 animate-pulse rounded-full bg-accent" />
                  {navbarLabels.openToWork}
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-fg md:text-5xl lg:text-6xl">
                  {personalInfo.name}
                </h1>
                <p className="mt-2 text-xl font-semibold text-accent md:text-2xl">
                  / {personalInfo.title}
                </p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {personalInfo.bio}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#projects"
                    className={buttonVariants({
                      className:
                        "h-10 rounded-full bg-accent px-5 text-accent-foreground hover:bg-accent/90",
                    })}
                  >
                    <FolderOpen className="size-4" />
                    {heroLabels.viewProjects}
                  </Link>
                  <a
                    href={personalInfo.cvLink}
                    download
                    className={buttonVariants({
                      variant: "outline",
                      className:
                        "h-10 rounded-full border-accent px-5 text-accent hover:bg-accent/10",
                    })}
                  >
                    <Download className="size-4" />
                    {heroLabels.downloadCv}
                  </a>
                </div>
                <div className=" mt-8 grid gap-3 sm:grid-cols-3">
                  {stats.map((stat, i) => (
                    <AnimatedWrapper key={stat.label} delay={i * 0.1}>
                      <StatCard value={stat.value} label={stat.label} />
                    </AnimatedWrapper>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              delay={0.2}
              direction="right"
              className="flex justify-center lg:justify-end"
            >
              <div className="relative size-64 md:size-72 lg:size-80">
                <div
                  className="absolute inset-4 rounded-full opacity-40 blur-2xl"
                  style={{ background: "var(--accent)" }}
                />
                <div className="relative flex size-full items-center justify-center rounded-full bg-accent shadow-xl">
                  <span className="text-5xl font-bold text-accent-foreground md:text-6xl">
                    {personalInfo.avatarInitials}
                  </span>
                </div>
                {skills.floating.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className={cn("absolute", floatingPositions[i])}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  >
                    <SkillBadge
                      name={skill}
                      className="bg-card text-fg shadow-md"
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
