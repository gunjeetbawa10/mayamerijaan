export const JOURNEY_STORAGE_KEY = "maya-journey-unlocked-step";

export const JOURNEY_STEPS = [
  { href: "/", label: "Start" },
  { href: "/questions", label: "Questions" },
  { href: "/memories", label: "Memories" },
  { href: "/letter", label: "Letter" },
  { href: "/music", label: "Music" },
  { href: "/forever", label: "Forever" },
];

export function getStepIndex(pathname: string) {
  const index = JOURNEY_STEPS.findIndex((step) => step.href === pathname);
  return index === -1 ? 0 : index;
}

export function readUnlockedStep() {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(JOURNEY_STORAGE_KEY);
  const parsed = Number(raw);
  if (Number.isNaN(parsed)) return 0;
  return Math.max(0, Math.min(parsed, JOURNEY_STEPS.length - 1));
}

export function writeUnlockedStep(step: number) {
  if (typeof window === "undefined") return;
  const safeStep = Math.max(0, Math.min(step, JOURNEY_STEPS.length - 1));
  window.localStorage.setItem(JOURNEY_STORAGE_KEY, String(safeStep));
}
