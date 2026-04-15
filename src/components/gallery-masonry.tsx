"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Artwork } from "@/types/artwork";

type GalleryMasonryProps = {
  artworks: Artwork[];
};

export function GalleryMasonry({ artworks }: GalleryMasonryProps) {
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {artworks.map((artwork) => (
          <button
            key={artwork.slug}
            type="button"
            onClick={() => setActiveArtwork(artwork)}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card text-left"
          >
            <div className="relative overflow-hidden">
              <Image
                src={artwork.image}
                alt={artwork.title}
                width={900}
                height={1200}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 px-4 py-4">
              <h3 className="font-serif text-xl">{artwork.title}</h3>
              <p className="text-sm text-muted-foreground">{artwork.size}</p>
              <p className="text-sm text-muted-foreground">{artwork.medium}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeArtwork && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArtwork(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-background"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveArtwork(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/50 px-3 py-1 text-sm text-white transition hover:bg-black/70 sm:right-4 sm:top-4"
              >
                Close
              </button>
              <div className="grid gap-0 md:grid-cols-[1.3fr_1fr]">
                <div className="relative min-h-[280px]">
                  <Image
                    src={activeArtwork.image}
                    alt={activeArtwork.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 70vw"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="font-serif text-3xl">{activeArtwork.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {activeArtwork.medium} · {activeArtwork.size}
                  </p>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {activeArtwork.description}
                  </p>
                  <Link
                    href={`/gallery/${activeArtwork.slug}`}
                    className="inline-flex rounded-full bg-foreground px-5 py-3 text-sm text-background transition hover:opacity-90"
                  >
                    View Artwork Detail
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
