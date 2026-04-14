"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { JOURNEY_STEPS, getStepIndex, readUnlockedStep } from "@/lib/journey";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const unlockedStep = readUnlockedStep();
  const currentStep = getStepIndex(pathname);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (currentStep > unlockedStep) {
      router.replace(JOURNEY_STEPS[unlockedStep].href);
    }
  }, [currentStep, unlockedStep, router]);

  const toggleAudio = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen">
      <audio
        ref={audioRef}
        src="/music/song.mp3"
        preload="none"
        loop
        onPause={() => setIsPlaying(false)}
      />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-sm font-semibold tracking-wide text-black/75">
            For Maya
          </Link>
          <nav className="absolute inset-x-0 top-16 overflow-x-auto border-t border-black/5 bg-white/90 px-3 py-2 md:static md:border-0 md:bg-transparent md:px-0 md:py-0">
            <div className="mx-auto flex w-max items-center gap-1 md:w-auto">
            {JOURNEY_STEPS.map((item, index) => {
              const isActive = pathname === item.href;
              const isUnlocked = index <= unlockedStep;

              if (!isUnlocked) {
                return (
                  <span
                    key={item.href}
                    className="cursor-not-allowed rounded-full px-3 py-2 text-sm text-black/30"
                  >
                    {item.label}
                  </span>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3 py-2 text-sm transition ${
                    isActive ? "text-black" : "text-black/55 hover:text-black/80"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-black/75"
                    />
                  )}
                </Link>
              );
            })}
            </div>
          </nav>
          <button
            type="button"
            onClick={toggleAudio}
            className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black/70 transition hover:bg-black hover:text-white"
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
        </div>
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-between px-4 text-xs text-black/45 sm:px-6">
          <p>
            Journey step {currentStep + 1} of {JOURNEY_STEPS.length}
          </p>
          <div className="h-1.5 w-36 overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-black/65 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / JOURNEY_STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-44 sm:px-6 md:pt-36">{children}</main>
      <footer className="border-t border-black/5 py-8 text-center text-sm text-black/45">
        This website is made to show the love and care Gunjeet holds for Sandhya. I love you, always.
      </footer>
    </div>
  );
}
