import { JourneyNextButton } from "@/components/journey-actions";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="apple-hero surface overflow-hidden px-6 py-16 text-center sm:px-10 sm:py-24">
        <p className="text-sm uppercase tracking-[0.22em] text-black/45">A private website for Maya</p>
        <h1 className="title-serif mx-auto mt-5 max-w-4xl text-4xl leading-tight sm:text-6xl">
          This website is only for you, Maya ❤️
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-black/65 sm:text-xl">
          Some feelings are too heavy for one message, so I made this small journey to show you what lives in my
          heart every single day.
        </p>
        <div className="mt-8 text-sm text-black/55 sm:text-base">
          <p>I still remember when I first made a website for you and your reaction made me so happy 🥹</p>
          <p className="mt-2">Even this domain is a reminder that you have always been special to me, meri jaan ❤️</p>
        </div>
        <JourneyNextButton
          currentPath="/"
          label="Begin our journey →"
          className="mt-10 rounded-full bg-black px-9 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
        />
      </section>

    </div>
  );
}
