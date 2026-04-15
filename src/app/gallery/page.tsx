import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { GalleryMasonry } from "@/components/gallery-masonry";
import { artworks } from "@/data/artworks";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Experience the poetic world of Sandhya Gurung through original acrylic paintings of exceptional depth, grace, and atmosphere.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-20">
      <AnimatedSection className="mb-12 max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Gallery</p>
        <h1 className="text-3xl md:text-6xl">A gallery of poetic originals</h1>
        <p className="text-base leading-8 text-muted-foreground md:text-lg">
          This collection reflects Sandhya&apos;s rare ability to turn memory into atmosphere and emotion into color.
          Every canvas carries quiet luxury, emotional resonance, and the unmistakable signature of a remarkable painter.
        </p>
      </AnimatedSection>

      <GalleryMasonry artworks={artworks} />
    </div>
  );
}
