import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import { Fraunces, Inter } from "next/font/google";

import "../globals.css";

import { ContentProvider } from "@/components/ContentProvider";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { dictionaries, type Locale } from "@/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const METADATA: Record<Locale, Metadata> = {
  nl: {
    title: "Liatorp - Zweeds vakantiehuis te koop",
    description:
      "Klassiek Zweeds vakantiehuis midden in de bossen van Småland. Gebouwd in 2012, goed geïsoleerd, snel internet. €145.000.",
  },
  en: {
    title: "Liatorp - Swedish holiday home for sale",
    description:
      "Classic Swedish holiday home in the forests of Småland. Built in 2012, well insulated, fast internet. €145,000.",
  },
};

export function generateStaticParams(): { locale: Locale }[] {
  return Object.keys(dictionaries).map((locale) => ({ locale: locale as Locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "nl" && locale !== "en") return {};
  return METADATA[locale];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (locale !== "nl" && locale !== "en") notFound();

  return (
    <>
      <html lang={locale} className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
        <body className="flex min-h-full flex-col">
          <ContentProvider initialLocale={locale}>
            <LocaleSwitch />
            {children}
          </ContentProvider>
        </body>
      </html>
      <Analytics />
    </>
  );
}
