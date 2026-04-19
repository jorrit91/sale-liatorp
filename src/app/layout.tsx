import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

import { ContentProvider } from "@/components/ContentProvider";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { resolveLocale } from "@/lib/resolve-locale";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Liatorp - Zweeds vakantiehuis te koop",
  description:
    "Klassiek Zweeds vakantiehuis midden in de bossen van Småland. Gebouwd in 2012, goed geïsoleerd, snel internet. €145.000.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await resolveLocale();

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ContentProvider initialLocale={locale}>
          <LocaleSwitch />
          {children}
        </ContentProvider>
      </body>
    </html>
  );
}
