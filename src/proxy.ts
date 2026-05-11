import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["en", "nl"] as const;

function hasLocalePrefix(pathname: string): boolean {
  return LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
}

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  if (hasLocalePrefix(pathname)) return NextResponse.next();

  const target = new URL(
    `/nl${pathname === "/" ? "" : pathname}${request.nextUrl.search}`,
    request.url,
  );
  return NextResponse.redirect(target);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
