"use client";

import { usePathname, useRouter } from "next/navigation";

import { useLocale } from "@/components/ContentProvider";
import type { Locale } from "@/content";
import { LOCALE_COOKIE } from "@/lib/locale-cookie";
import { cn } from "@/lib/utils";

const LOCALES: { value: Locale; flag: string; label: string }[] = [
  { value: "en", flag: "🇬🇧", label: "English" },
  { value: "nl", flag: "🇳🇱", label: "Nederlands" },
];

function replaceLocaleInPath(pathname: string, next: Locale): string {
  const segments = pathname.split("/");
  if (segments[1] === "en" || segments[1] === "nl") {
    segments[1] = next;
    return segments.join("/") || "/";
  }
  return `/${next}${pathname}`;
}

function persistLocaleCookie(next: Locale): void {
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${oneYear};samesite=lax`;
}

export function LocaleSwitch(): React.ReactNode {
  const { locale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleSelect(next: Locale): void {
    if (next === locale) return;
    persistLocaleCookie(next);
    router.push(replaceLocaleInPath(pathname, next));
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className="fixed top-4 right-4 z-50 flex items-center gap-0.5 rounded-full bg-white/70 p-0.5 shadow-sm ring-1 ring-black/5 backdrop-blur-md md:top-12 md:right-12"
    >
      {LOCALES.map(({ value, flag, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => handleSelect(value)}
          aria-label={label}
          aria-pressed={locale === value}
          className={cn(
            "flex h-7 w-9 cursor-pointer items-center justify-center rounded-full text-base leading-none transition-all",
            locale === value ? "bg-black/5" : "opacity-50 hover:opacity-100",
          )}
        >
          <span aria-hidden>{flag}</span>
        </button>
      ))}
    </div>
  );
}
