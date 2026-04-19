export const basicInfo = {
  title: "Basis informatie",
  specs: [
    { label: "Gezellige houtkachel", icon: "flame" },
    { label: "3 slaapkamers", icon: "bed" },
    { label: "80 m²", icon: "home" },
    { label: "2 390 m² perceeloppervlak", icon: "trees" },
    { label: "Gebouwd in 2012", icon: "calendar" },
    { label: "Luchtwarmtepomp", icon: "wind" },
    { label: "Grote klusschuur", icon: "hammer" },
    { label: "Gastenverblijf in tuin", icon: "tent" },
  ],
} as const;

export type BasicInfoIcon = (typeof basicInfo.specs)[number]["icon"];
