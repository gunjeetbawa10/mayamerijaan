import { JourneyNextButton } from "@/components/journey-actions";

export default function LetterPage() {
  return (
    <div className="space-y-6">
      <section className="surface px-6 py-14 sm:px-12">
        <p className="text-sm uppercase tracking-[0.22em] text-black/45">Things I Never Said Properly</p>
        <h1 className="title-serif mt-4 text-4xl sm:text-5xl">My Letter To You</h1>
        <p className="mt-8 whitespace-pre-line leading-8 text-black/70 sm:text-lg">
          {`You know this was the first time in my life I gave my whole heart without holding anything back.
For you, I stood in the cold on winter nights.
I slept on the road.
I slept in my car.
And not once did it feel too much, because one smile from you made every pain feel small.

You are truly amazing.
I can never forget the way you cared every time my ferry got cancelled.
I can never forget the way you stayed worried when I had fever.
Even when you were hurt, even when you said we were done, your heart still chose kindness.
That love... that care... I felt all of it.

I really love you.
Deeply. Truly. Completely.`}
        </p>
      </section>

      <section className="surface px-6 py-14 sm:px-12">
        <p className="text-sm uppercase tracking-[0.22em] text-black/45">I&apos;m Truly Sorry</p>
        <h2 className="title-serif mt-4 text-3xl sm:text-4xl">I want to rebuild trust</h2>
        <p className="mt-6 leading-8 text-black/70 sm:text-lg">
          I am truly sorry for lying and for breaking your trust. I know that pain is real, and I take full
          responsibility for it. I am working on myself, my job, my stability, and my honesty, because you deserve to
          feel safe, respected, and loved with truth every day. I dream of both of us being successful together. I
          always imagine you standing beside me when I become a billionaire, with proud eyes and a peaceful heart,
          because this time I did things the right way.
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
