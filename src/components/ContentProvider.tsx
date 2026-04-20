"use client";

import { createContext, useContext, type ReactNode } from "react";

import { dictionaries, type Content, type Locale } from "@/content";

interface ContentContextValue {
  content: Content;
  locale: Locale;
}

const ContentContext = createContext<ContentContextValue>({
  content: dictionaries.en,
  locale: "en",
});

export function ContentProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}): React.ReactNode {
  return (
    <ContentContext.Provider
      value={{ content: dictionaries[initialLocale], locale: initialLocale }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): Content {
  return useContext(ContentContext).content;
}

export function useLocale(): { locale: Locale } {
  return { locale: useContext(ContentContext).locale };
}
