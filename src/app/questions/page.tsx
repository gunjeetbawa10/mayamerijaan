"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { JourneyNextButton } from "@/components/journey-actions";

const questions = [
  "Do you remember the first time we met and your smile?",
  "Do you remember your birthday dance to Baby Doll?",
  "Do you remember our long video calls and laughing for hours?",
  "Do you remember our Liverpool trip and bowling together?",
  "Do you know how much those moments mean to me?",
];

export default function QuestionsPage() {
  const [index, setIndex] = useState(0);
  const done = index >= questions.length;

  return (
    <section className="surface px-6 py-14 text-center sm:px-12">
      <p className="text-sm uppercase tracking-[0.22em] text-black/45">Questions</p>
      <h1 className="title-serif mt-4 text-4xl sm:text-5xl">Can I ask you something?</h1>

      <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-black/5 bg-white p-8">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="text-xl text-black/75 sm:text-3xl"
            >
              {questions[index]}
            </motion.p>
          ) : (
            <motion.p
              key="done"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-black/75 sm:text-3xl"
            >
              Because every moment with you is magical to me.
            </motion.p>
          )}
        </AnimatePresence>

        {!done && (
          <button
            type="button"
            onClick={() => setIndex((prev) => prev + 1)}
            className="mt-10 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
          >
            Next
          </button>
        )}

        {done && (
          <JourneyNextButton
            currentPath="/questions"
            label="Continue to memories →"
            className="mt-10 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
          />
        )}
      </div>
    </section>
  );
}
