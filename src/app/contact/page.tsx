import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Sandhya Gurung for original works, commissions, and thoughtful collaborations.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <AnimatedSection className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-6xl">Begin a meaningful conversation</h1>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            For originals, commissions, exhibitions, or collaborations, you are warmly invited to write. Sandhya
            responds with generosity, care, and sincere gratitude for every thoughtful inquiry.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="mailto:sandhyagurung.art@gmail.com" className="block transition hover:text-foreground">
              sandhyagurung.art@gmail.com
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-border px-4 py-2 transition hover:bg-card hover:text-foreground"
            >
              WhatsApp
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <ContactForm />
        </AnimatedSection>
      </div>
    </div>
  );
}
