"use client";

import { JOURNEY_STEPS, getStepIndex, readUnlockedStep, writeUnlockedStep } from "@/lib/journey";
import { useRouter } from "next/navigation";

export function JourneyNextButton({
  currentPath,
  label,
  className,
}: {
  currentPath: string;
  label: string;
  className?: string;
}) {
  const router = useRouter();
  const currentStep = getStepIndex(currentPath);
  const nextStep = JOURNEY_STEPS[currentStep + 1];

  if (!nextStep) return null;

  return (
    <button
      type="button"
      onClick={() => {
        const unlocked = readUnlockedStep();
        writeUnlockedStep(Math.max(unlocked, currentStep + 1));
        router.push(nextStep.href);
      }}
      className={
        className ??
        "rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
      }
    >
      {label}
    </button>
  );
}

export function JourneyRestartButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        writeUnlockedStep(0);
        router.push("/");
      }}
      className={
        className ??
        "rounded-full border border-black/20 bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
      }
    >
      Replay Journey
    </button>
  );
}
