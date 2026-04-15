import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { artworks } from "@/data/artworks";

type ArtworkPageProps = {
  params: Promise<{ slug: string }>;
};

function getArtworkBySlug(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata(
  props: ArtworkPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    return {
      title: "Artwork Not Found",
    };
  }

  return {
    title: artwork.title,
    description: `${artwork.title} by Sandhya Gurung, a distinguished contemporary painter. ${artwork.medium}, ${artwork.size}.`,
    openGraph: {
      title: `${artwork.title} | Sandhya Gurung`,
      description: artwork.description,
      images: [artwork.image],
    },
  };
}

export default async function ArtworkDetailPage(props: ArtworkPageProps) {
  const { slug } = await props.params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-20">
      <AnimatedSection className="mb-10">
        <Link href="/gallery" className="text-sm text-muted-foreground transition hover:text-foreground">
          ← Back to Gallery
        </Link>
      </AnimatedSection>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <AnimatedSection className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={1400}
            height={1700}
            priority
            className="h-full w-full object-cover"
          />
        </AnimatedSection>

        <AnimatedSection className="space-y-8 rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{artwork.year}</p>
            <h1 className="text-3xl md:text-5xl">{artwork.title}</h1>
            <p className="text-base leading-8 text-muted-foreground">{artwork.description}</p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="text-foreground">Medium:</span> {artwork.medium}
            </p>
            <p>
              <span className="text-foreground">Size:</span> {artwork.size}
            </p>
            <p>
              <span className="text-foreground">Price:</span> {artwork.price}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Story Behind the Painting</p>
            <p className="text-base leading-8 text-muted-foreground">{artwork.story}</p>
          </div>

          <p className="text-sm italic leading-7 text-muted-foreground">
            To collect a Sandhya Gurung original is to welcome not only a painting, but a finely felt story composed by
            an exceptional artist.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:sandhyagurung.art@gmail.com?subject=Inquiry about ${encodeURIComponent(artwork.title)}`}
              className="rounded-full bg-foreground px-6 py-3 text-center text-sm text-background transition hover:opacity-90"
            >
              Inquire to Buy
            </a>
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-center text-sm transition hover:bg-background"
            >
              WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
