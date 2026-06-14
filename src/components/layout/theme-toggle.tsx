"use client";

import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { themes } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themeIcons = {
  light: Sun,
  dark: Moon,
  purple: Palette,
} as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="size-9" aria-label="Toggle theme" />
    );
  }

  const currentIndex = themes.indexOf(
    (theme as (typeof themes)[number]) ?? "light"
  );
  const nextTheme = themes[(currentIndex + 1) % themes.length];
  const Icon = themeIcons[(theme as keyof typeof themeIcons) ?? "light"] ?? Sun;

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-9 text-fg hover:bg-muted-bg")}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
    >
      <Icon className="size-4" />
    </Button>
  );
}
