import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { education, sectionLabels } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedWrapper>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <SectionHeading
              title={sectionLabels.education.title}
              centered={false}
              className="mb-8"
            />
            <div className="space-y-4">
              {education.map((item, i) => (
                <AnimatedWrapper key={item.degree} delay={i * 0.1}>
                  <article className="rounded-2xl border border-border p-5 md:p-6">
                    <h3 className="text-lg font-bold text-card-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                    {item.note && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        {item.note}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {item.period}
                      </Badge>
                      {item.gpa && (
                        <Badge className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent hover:bg-accent/15">
                          {item.gpa}
                        </Badge>
                      )}
                    </div>
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
