"use client";

import { Code2, Globe, Link2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";

import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormLabels,
  personalInfo,
  sectionLabels,
  socialLinks,
} from "@/data/portfolio";
import { useContactForm } from "@/hooks/use-contact-form";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: Phone,
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  { icon: MapPin, value: personalInfo.location, href: undefined },
];

const socialIcons = {
  LinkedIn: Link2,
  GitHub: Code2,
  Portfolio: Globe,
} as const;

export function Contact() {
  const { formRef, formData, isLoading, status, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section id="contact" className="px-4 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-contact-bg p-6 md:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedWrapper>
              <SectionHeading
                tag={sectionLabels.contact.tag}
                title={sectionLabels.contact.title}
                centered={false}
              />
              <p className="mt-4 text-muted-foreground">
                {sectionLabels.contact.tagline}
              </p>
              <ul className="mt-8 space-y-5">
                {contactItems.map(({ icon: Icon, value, href }) => (
                  <li key={value} className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                      <Icon className="size-5 text-accent" />
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-fg hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-fg">
                        {value}
                      </span>
                    )}
                  </li>
                ))}
                {socialLinks.map((link) => {
                  const Icon =
                    socialIcons[link.label as keyof typeof socialIcons] ??
                    Globe;
                  return (
                    <li key={link.url} className="flex items-center gap-4">
                      <span className="flex size-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                        <Icon className="size-5 text-accent" />
                      </span>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-fg hover:text-accent"
                      >
                        {link.display}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-bold text-card-foreground">
                  {contactFormLabels.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {sectionLabels.contact.formSubtitle}
                </p>
                <form
                  ref={formRef}
                  className="mt-6 space-y-4"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <Input
                     name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={contactFormLabels.name}
                    required
                    disabled={isLoading}
                    autoComplete="name"
                  />
                  <Input
                  name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={contactFormLabels.email}
                    required
                    disabled={isLoading}
                    autoComplete="email"
                  />
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={contactFormLabels.subject}
                    disabled={isLoading}
                    autoComplete="off"
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactFormLabels.message}
                    rows={5}
                    required
                    disabled={isLoading}
                  />
                  {status.message && (
                    <p
                      role="alert"
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm",
                        status.type === "success" &&
                          "bg-accent/10 text-accent",
                        status.type === "error" &&
                          "bg-red-500/10 text-red-600 dark:text-red-400"
                      )}
                    >
                      {status.message}
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-11 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                    {isLoading
                      ? contactFormLabels.submitting
                      : contactFormLabels.submit}
                  </Button>
                </form>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
