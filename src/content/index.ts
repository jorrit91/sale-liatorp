import { en as enRaw } from "./en";
import { nl } from "./nl";

export type Locale = "nl" | "en";
export type Content = typeof nl;

export const dictionaries: Record<Locale, Content> = {
  nl,
  en: enRaw as unknown as Content,
};
