"use client";

import { useRef, useState } from "react";
import { JourneyNextButton } from "@/components/journey-actions";

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = async () => {
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
    <section className="surface px-6 py-14 text-center sm:px-12">
      <p className="text-sm uppercase tracking-[0.22em] text-black/45">Music</p>
      <h1 className="title-serif mt-4 text-4xl sm:text-5xl">This song is for you</h1>
      <p className="mx-auto mt-6 max-w-3xl text-black/65 sm:text-lg">
        I made this music for you with a full heart. I hope when you listen, you feel the love, regret, and hope I
        could never explain properly in words. Please play this song ❤️ It reminds me of us.
      </p>

      <audio ref={audioRef} src="/music/song.mp3" preload="none" onPause={() => setIsPlaying(false)} />

      <button
        type="button"
        onClick={toggle}
        className="mt-10 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
      >
        {isPlaying ? "Pause Song" : "Play Song"}
      </button>

      <div className="mt-8">
        <JourneyNextButton
          currentPath="/music"
          label="Continue to my message →"
          className="rounded-full border border-black/20 bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
        />
      </div>
    </section>
  );
}
