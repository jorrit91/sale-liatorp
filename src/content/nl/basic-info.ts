export const basicInfo = {
  title: "Basis informatie",
  specs: [
    { label: "90 m²", icon: "home" },
    { label: "800 m² perceeloppervlak", icon: "trees" },
    { label: "3 slaapkamers", icon: "bed" },
    { label: "1 badkamer", icon: "bath" },
    { label: "Gebouwd in 2011", icon: "calendar" },
    { label: "Luchtwarmtepomp", icon: "wind" },
    { label: "Grote klusschuur", icon: "hammer" },
    { label: "Eenvoudig gastenverblijf in tuin", icon: "tent" },
  ],
} as const;

export type BasicInfoIcon = (typeof basicInfo.specs)[number]["icon"];
