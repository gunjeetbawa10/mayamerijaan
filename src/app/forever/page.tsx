"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { JourneyRestartButton } from "@/components/journey-actions";

type Choice = "YES" | "TIME";

export default function ForeverPage() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [openLetter, setOpenLetter] = useState(false);

  const message = useMemo(() => {
    if (choice === "YES") {
      return "Please my baby, give me one chance. I promise I will protect your heart with honesty, respect, and love. 🥹❤️";
    }
    if (choice === "TIME") {
      return "Please my baby, give me one chance when your heart is ready. I will wait with patience, respect, and love.";
    }
    return "";
  }, [choice]);

  return (
    <div className="space-y-6">
      <section className="surface px-6 py-14 text-center sm:px-12">
        <p className="text-sm uppercase tracking-[0.22em] text-black/45">My Message</p>
        <h1 className="title-serif mx-auto mt-4 max-w-4xl text-4xl leading-tight sm:text-6xl">
          Maya, I am asking for one chance.
          <br />
          One chance to show you real change.
          <br />
          One chance to make your heart feel safe again.
          <br />
          I believe in us, and I will earn your trust with actions.
          <br />I really love you ❤️
        </h1>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => setChoice("YES")}
            className="rounded-full bg-black px-9 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
          >
            YES
          </button>
          <button
            type="button"
            onClick={() => setChoice("TIME")}
            className="rounded-full border border-black/20 bg-white px-9 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
          >
            TIME
          </button>
        </div>
      </section>

      <section className="surface px-6 py-14 text-center sm:px-12">
        <p className="text-sm uppercase tracking-[0.22em] text-black/45">Envelope</p>
        <h2 className="title-serif mt-3 text-3xl sm:text-4xl">Tap to open</h2>
        <button
          type="button"
          onClick={() => setOpenLetter((prev) => !prev)}
          className="mx-auto mt-10 block w-full max-w-md rounded-3xl border border-black/10 bg-gradient-to-b from-white to-[#f3f3f6] p-6 text-left shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
        >
          <p className="text-sm text-black/45">From my heart</p>
          <p className="mt-3 text-lg text-black/80">{openLetter ? "Letter opened ↓" : "Click to open letter ↑"}</p>
          <AnimatePresence>
            {openLetter && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-5 rounded-2xl border border-black/10 bg-white p-4 leading-7 text-black/75"
              >
                I really love you, my baby.
                <br />
                Please give me a chance to make things right.
                <br />
                I will choose honesty, respect, and care every day.
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        <div className="mt-8">
          <JourneyRestartButton />
        </div>
      </section>

      <AnimatePresence>
        {choice && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setChoice(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              className="surface w-full max-w-md p-8 text-center"
              onClick={(event) => event.stopPropagation()}
            >
              <h3 className="title-serif text-3xl">Please my baby</h3>
              <p className="mt-4 text-black/70">{message}</p>
              <button
                type="button"
                onClick={() => setChoice(null)}
                className="mt-7 rounded-full bg-black px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-black/85"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
