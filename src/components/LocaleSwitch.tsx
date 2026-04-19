"use client";

import { useLocale } from "@/components/ContentProvider";
import { cn } from "@/lib/utils";

export function LocaleSwitch(): React.ReactNode {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className="fixed top-4 right-4 z-50 flex items-center gap-0.5 rounded-full bg-white/70 p-0.5 shadow-sm ring-1 ring-black/5 backdrop-blur-md md:top-12 md:right-12"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-label="English"
        aria-pressed={locale === "en"}
        className={cn(
          "flex h-7 w-9 cursor-pointer items-center justify-center rounded-full text-base leading-none transition-all",
          locale === "en" ? "bg-black/5" : "opacity-50 hover:opacity-100",
        )}
      >
        <span aria-hidden>🇬🇧</span>
      </button>
      <button
        type="button"
        onClick={() => setLocale("nl")}
        aria-label="Nederlands"
        aria-pressed={locale === "nl"}
        className={cn(
          "flex h-7 w-9 cursor-pointer items-center justify-center rounded-full text-base leading-none transition-all",
          locale === "nl" ? "bg-black/5" : "opacity-50 hover:opacity-100",
        )}
      >
        <span aria-hidden>🇳🇱</span>
      </button>
    </div>
  );
}
