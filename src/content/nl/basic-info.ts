export const basicInfo = {
  title: "Basis informatie",
  specs: [
    { label: "Gezellige houtkachel", icon: "flame" },
    { label: "3 slaapkamers", icon: "bed" },
    { label: "90 m²", icon: "home" },
    { label: "800 m² perceeloppervlak", icon: "trees" },
    { label: "Gebouwd in 2011", icon: "calendar" },
    { label: "Luchtwarmtepomp", icon: "wind" },
    { label: "Grote klusschuur", icon: "hammer" },
    { label: "Gastenverblijf in tuin", icon: "tent" },
  ],
} as const;

export type BasicInfoIcon = (typeof basicInfo.specs)[number]["icon"];
