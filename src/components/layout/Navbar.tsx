"use client";

import {
  Briefcase,
  Code,
  Home,
  Mail,
  Menu,
  User,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, navbarLabels, personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navIcons: Record<string, LucideIcon> = {
  home: Home,
  user: User,
  zap: Zap,
  briefcase: Briefcase,
  code: Code,
  mail: Mail,
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-[var(--navbar-bg)] backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-fg text-xs font-bold text-bg">
            {personalInfo.avatarInitials}
          </span>
          <span className="text-base font-bold text-fg">{personalInfo.name}</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const Icon = navIcons[link.icon];
            const isActive = activeSection === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative flex items-center gap-1.5 pb-1 text-sm transition-colors",
                    isActive
                      ? "font-medium text-fg"
                      : "text-muted-foreground hover:text-fg"
                  )}
                >
                  {Icon && <Icon className="size-4" />}
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-fg" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-accent sm:flex">
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            {navbarLabels.openToWork}
          </span>
        

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex lg:hidden"
              aria-label="Open menu"
            >
              <Button variant="ghost" size="icon" tabIndex={-1}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <SheetHeader>
                <SheetTitle className="text-fg">{personalInfo.name}</SheetTitle>
              </SheetHeader>
              <ul className="mt-2 px-3 flex flex-col  gap-4">
                {navLinks.map((link) => {
                  const Icon = navIcons[link.icon];
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 text-base text-muted-foreground hover:text-fg"
                      >
                        {Icon && <Icon className="size-4" />}
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
