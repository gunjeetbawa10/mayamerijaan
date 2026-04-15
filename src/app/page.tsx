import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { featuredArtworks } from "@/data/artworks";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Sandhya Gurung is a distinguished contemporary painter whose acrylic landscapes render memory, emotion, and nature with poetic elegance.",
};

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=80"
          alt="Cinematic landscape backdrop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 md:px-10 md:pb-24">
          <AnimatedSection className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/80">Contemporary Artist Portfolio</p>
            <h1 className="text-3xl leading-tight sm:text-4xl md:text-6xl">
              Sandhya Gurung — Contemporary Painter
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg md:mt-6 md:text-xl">
              A rare artistic voice and a gracious spirit, composing emotion, nature, and transformation into luminous acrylic landscapes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/gallery"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:scale-[1.02] sm:w-auto"
              >
                View Gallery
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/60 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                About the Artist
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="hero-gradient">
        <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 md:space-y-24 md:px-10 md:py-28">
          <AnimatedSection className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Featured Works</p>
            <h2 className="max-w-3xl text-3xl md:text-5xl">
              A curated collection of works where atmosphere, feeling, and refinement meet
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArtworks.map((artwork) => (
              <AnimatedSection
                key={artwork.slug}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <Link href={`/gallery/${artwork.slug}`}>
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="space-y-1 p-5">
                    <h3 className="text-2xl">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground">{artwork.medium}</p>
                    <p className="text-sm text-muted-foreground">{artwork.size}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="grid gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Journey</p>
              <h2 className="text-3xl md:text-5xl">From Nepal to the UK</h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              Sandhya&apos;s journey is a graceful passage between worlds. Guided by the Himalayan memory of Nepal and the
              coastal quiet of the UK, she paints with tenderness and precision, creating works that feel intimate,
              timeless, and profoundly alive.
            </p>
          </AnimatedSection>

          <AnimatedSection className="rounded-3xl border border-border bg-background/80 p-8 text-center md:p-14">
            <p className="mx-auto max-w-4xl text-xl italic leading-relaxed text-foreground sm:text-2xl md:text-4xl">
              “Each painting is an invitation to pause, to feel, and to return to the quiet truths of the heart.”
            </p>
          </AnimatedSection>

          <AnimatedSection className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Originality</p>
            <p className="mt-4 max-w-4xl text-xl leading-relaxed sm:text-2xl md:text-3xl">
              Each piece is an original acrylic painting inspired by emotion, nature, and personal transformation,
              created by an artist whose elegance, empathy, and vision are present in every brushstroke.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
