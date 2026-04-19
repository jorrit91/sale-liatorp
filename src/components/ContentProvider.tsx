"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

import { dictionaries, type Content, type Locale } from "@/content";
import { LOCALE_COOKIE } from "@/lib/locale-cookie";

interface ContentContextValue {
  content: Content;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const ContentContext = createContext<ContentContextValue>({
  content: dictionaries.en,
  locale: "en",
  setLocale: () => {},
});

export function ContentProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}): React.ReactNode {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale): void => {
    setLocaleState(next);
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${oneYear};samesite=lax`;
  }, []);

  return (
    <ContentContext.Provider value={{ content: dictionaries[locale], locale, setLocale }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): Content {
  return useContext(ContentContext).content;
}

export function useLocale(): { locale: Locale; setLocale: (l: Locale) => void } {
  const { locale, setLocale } = useContext(ContentContext);
  return { locale, setLocale };
}
