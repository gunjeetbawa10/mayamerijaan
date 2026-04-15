"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-10 w-10 rounded-full border border-border bg-card text-sm transition hover:scale-[1.04] hover:shadow-md"
      aria-label="Toggle theme"
    >
      {resolvedTheme ? (isDark ? "☼" : "☾") : "○"}
    </button>
  );
}
