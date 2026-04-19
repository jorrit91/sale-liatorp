export const basicInfo = {
  title: "Basic Information",
  specs: [
    { label: "Cozy wood stove", icon: "flame" },
    { label: "3 bedrooms", icon: "bed" },
    { label: "80 m²", icon: "home" },
    { label: "2,390 m² plot size", icon: "trees" },
    { label: "Built in 2012", icon: "calendar" },
    { label: "Air source heat pump", icon: "wind" },
    { label: "Large workshop shed", icon: "hammer" },
    { label: "Guest cabin in the garden", icon: "tent" },
  ],
} as const;

export type BasicInfoIcon = (typeof basicInfo.specs)[number]["icon"];
