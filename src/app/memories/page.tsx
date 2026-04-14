import Image from "next/image";
import { JourneyNextButton } from "@/components/journey-actions";

const photos = [
  { src: "/images/1.jpeg", alt: "Us photo 1" },
  { src: "/images/2.jpeg", alt: "Us photo 2" },
  { src: "/images/3.jpeg", alt: "Us photo 3" },
  { src: "/images/4.jpeg", alt: "Us photo 4" },
  { src: "/images/5.jpeg", alt: "Us photo 5" },
  { src: "/images/6.jpeg", alt: "Us photo 6" },
  { src: "/images/7.jpeg", alt: "Us photo 7" },
];

export default function MemoriesPage() {
  return (
    <div className="space-y-6">
      <section className="surface px-6 py-14 text-center sm:px-12">
        <p className="text-sm uppercase tracking-[0.22em] text-black/45">Memories & Appreciation</p>
        <h1 className="title-serif mt-4 text-4xl sm:text-5xl">The reason this exists ❤️</h1>
        <p className="mx-auto mt-5 max-w-3xl text-black/65 sm:text-lg">
          Her smile when we first met. The birthday champagne moment. Dancing while cooking. Long video calls.
          Everything felt warmer with you. You are amazing, and I am deeply grateful for you.
        </p>
      </section>

      <section className="surface p-4 sm:p-6">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-black/45">Our Pictures</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1000}
                height={1200}
                className="h-[280px] w-full object-cover sm:h-[320px]"
                unoptimized
              />
            </div>
          ))}
        </div>
        <p className="py-6 text-center text-lg text-black/70">I love you so much.</p>
        <div className="pb-4 text-center">
          <JourneyNextButton
            currentPath="/memories"
            label="Continue to letter →"
            className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
          />
        </div>
      </section>
    </div>
  );
}
