import { assetUrl } from "@/lib/asset-url";
import { toSmallPath } from "@/lib/to-small-path";

/**
 * Image URL arrays.
 * Order matters: each index maps to the matching content entry.
 */

// Hero slideshow (drone photos showing the house in the bosses + nearby road).
export const heroImages: string[] = [
  "aerial-photo-hero_3.jpg",
  "aerial-photo-hero_1.jpg",
  "aerial-photo-hero_2.jpg",
  "aerial-photo-hero_4.jpg",
];

// Basic info: one or more photos showing the house + plot alongside the specs.
export const basicInfoImages: string[] = [assetUrl("images/aerial-photo-hero_3.jpg")];

// Winter easter egg photo shown in the floating modal.
export const winterImage: string = assetUrl("huis-winter.jpg");

// Full-bleed closing photo shown right before the footer.
export const closingImage: string = assetUrl("huis-zomer.jpg");

// Location tabs backgrounds. Index matches `nl.location.tabs`.
export const locationImages: string[] = [
  "mockeln-lake.jpg",
  "vaxjo-centrum.jpg",
  "vuurtje-buiten-avontuur.jpg",
  "copenhagen.jpg",
].map((path) => assetUrl(path));
