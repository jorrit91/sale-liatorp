import { NextResponse, type NextRequest } from "next/server";

import { LOCALE_COOKIE } from "@/lib/locale-cookie";

const LOCALES = ["en", "nl"] as const;
type Locale = (typeof LOCALES)[number];

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

function hasLocalePrefix(pathname: string): boolean {
  return LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
}

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  if (hasLocalePrefix(pathname)) return NextResponse.next();

  const cookieValue = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale: Locale =
    cookieValue === "nl" || cookieValue === "en"
      ? cookieValue
      : pickFromAcceptLanguage(request.headers.get("accept-language") ?? "");

  const target = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}${request.nextUrl.search}`,
    request.url,
  );
  return NextResponse.redirect(target);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
