import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, sectionLabels } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedWrapper>
          <SectionHeading
            tag={sectionLabels.projects.tag}
            title={sectionLabels.projects.title}
            className="mb-12"
          />
        </AnimatedWrapper>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <AnimatedWrapper key={project.title} delay={i * 0.15}>
              <ProjectCard project={project} />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
