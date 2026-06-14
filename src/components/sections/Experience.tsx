import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience, sectionLabels } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedWrapper>
          <SectionHeading
            tag={sectionLabels.experience.tag}
            title={sectionLabels.experience.title}
            className="mb-14"
          />
        </AnimatedWrapper>

        <div className="relative space-y-10 pl-6 md:pl-8">
          <span
            className="absolute bottom-0 left-[5px] top-0 w-0.5 bg-accent md:left-[7px]"
            aria-hidden
          />
          {experience.map((item, i) => (
            <AnimatedWrapper key={item.company + item.period} delay={i * 0.15}>
              <div className="relative">
                <span
                  className="absolute -left-6 top-8 size-3.5 rounded-full border-2 border-accent bg-card md:-left-8"
                  aria-hidden
                />
                <ExperienceCard experience={item} />
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
