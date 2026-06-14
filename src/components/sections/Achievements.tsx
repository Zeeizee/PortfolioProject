"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements, sectionLabels } from "@/data/portfolio";

function CountUpValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;

    hasAnimated.current = true;
    const target = parseInt(match[1], 10);
    const suffix = match[2];

    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(`${Math.round(latest)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="block text-4xl font-bold tabular-nums text-accent md:text-5xl"
    >
      {display}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedWrapper>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <SectionHeading
              title={sectionLabels.achievements.title}
              centered={false}
              className="mb-8"
            />
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <AnimatedWrapper key={item.description} delay={i * 0.1}>
                  <article className="rounded-2xl bg-accent/10 p-6 md:p-8">
                    <CountUpValue value={item.value} />
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-card-foreground md:text-base">
                      {item.description}
                    </p>
                  </article>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
