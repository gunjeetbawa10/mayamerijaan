import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import portraitImage from "@/app/port.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Sandhya Gurung's journey from Nepal to the UK and the luminous spirit behind her poetic, emotionally resonant paintings.",
};

const timeline = [
  {
    year: "Early Years",
    title: "Rooted in Nepal",
    text: "Sandhya was raised among Himalayan stillness, monsoon skies, and drifting mountain light. These early impressions shaped not only her painterly eye, but her deeply tender way of seeing the world.",
  },
  {
    year: "Transition",
    title: "A New Life in the UK",
    text: "Relocating to the UK introduced another rhythm: coastal winds, muted horizons, and estuarine calm. Through transition, her practice matured into a language of resilience, belonging, and quiet grace.",
  },
  {
    year: "Today",
    title: "Painting Emotion Through Nature",
    text: "Today, Sandhya is celebrated for paintings that unite landscape with inner transformation. Her work invites viewers to linger, to feel deeply, and to remember the beauty of being fully human.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6 md:space-y-16 md:px-10 md:py-20">
      <AnimatedSection className="max-w-4xl space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About the Artist</p>
        <h1 className="text-3xl leading-tight sm:text-4xl md:text-6xl">Sandhya Gurung</h1>
        <p className="text-base leading-8 text-muted-foreground md:text-lg">
          Sandhya Gurung is a distinguished contemporary painter based in the UK and originally from Nepal. Revered for
          her emotional depth and refined acrylic technique, she creates landscapes that feel intimate, cinematic, and
          enduring.
        </p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-[1.1fr_1fr] md:p-10">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border/60 bg-background">
          <Image
            src={portraitImage}
            alt="Portrait of Sandhya Gurung"
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl">Artist Statement</h2>
          <p className="text-base leading-8 text-muted-foreground">
            I paint in layers of acrylic to honor the way memory discloses itself slowly, like light at dawn. The
            mountains of Nepal and the coasts of the UK continue to shape my inner world, yet emotional truth remains
            at the center of my practice. Each painting is an offering of stillness, connection, and quiet hope.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">Journey Timeline</h2>
        <div className="space-y-6">
          {timeline.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{item.year}</p>
              <h3 className="mt-2 text-2xl">{item.title}</h3>
              <p className="mt-3 text-base leading-8 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
