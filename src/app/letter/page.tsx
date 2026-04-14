import { JourneyNextButton } from "@/components/journey-actions";

export default function LetterPage() {
  return (
    <div className="space-y-6">
      <section className="surface px-6 py-14 sm:px-12">
        <p className="text-sm uppercase tracking-[0.22em] text-black/45">Things I Never Said Properly</p>
        <h1 className="title-serif mt-4 text-4xl sm:text-5xl">My Letter To You</h1>
        <p className="mt-8 whitespace-pre-line leading-8 text-black/70 sm:text-lg">
          {`You know it was the first time I put this much effort for anyone.
For the first time I slept on the road in winter.
Slept in my car.
But everything was worth it just to see your smile.

You are truly amazing.
The way you cared every time my ferry got cancelled.
The way you cared when I had fever.
Even when you said we were done, you still didn’t let me sleep outside in the living room.

I really love you.`}
        </p>
      </section>

      <section className="surface px-6 py-14 sm:px-12">
        <p className="text-sm uppercase tracking-[0.22em] text-black/45">I&apos;m Truly Sorry</p>
        <h2 className="title-serif mt-4 text-3xl sm:text-4xl">I want to rebuild trust</h2>
        <p className="mt-6 leading-8 text-black/70 sm:text-lg">
          I am truly sorry for lying and for breaking your trust. I am working on myself, my job, my stability, and
          my honesty, because you deserve safety and honesty every single day. I really want both of us to be
          successful together. I always imagine you standing beside me when I become a billionaire, your eyes full of
          pride in me.
        </p>
        <div className="mt-10 text-center sm:text-left">
          <JourneyNextButton
            currentPath="/letter"
            label="Continue to music →"
            className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
          />
        </div>
      </section>
    </div>
  );
}
