import { cookies, headers } from "next/headers";

import type { Locale } from "@/content";
import { LOCALE_COOKIE } from "@/lib/locale-cookie";

function pickFromAcceptLanguage(header: string): Locale {
  const parts = header
    .split(",")
    .map((part) => part.trim().split(";")[0].toLowerCase())
    .filter(Boolean);
  for (const lang of parts) {
    if (lang.startsWith("nl")) return "nl";
    if (lang.startsWith("en")) return "en";
  }
  return "en";
}

export async function resolveLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const override = cookieStore.get(LOCALE_COOKIE)?.value;
  if (override === "nl" || override === "en") return override;

  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") ?? "";

  return pickFromAcceptLanguage(acceptLanguage);
}
