/**
 * Image URL arrays — fill with URLs (paths into /public or absolute URLs).
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
export const basicInfoImages: string[] = ["/images/aerial-photo-hero_3.jpeg"];

// Winter easter egg photo shown in the floating modal.
export const winterImage: string = "/images/huis-winter.jpg";

// Full-bleed closing photo shown right before the footer.
export const closingImage: string = "/images/huis-zomer.jpg";

// Location tabs backgrounds. Index matches `nl.location.tabs`.
export const locationImages: string[] = [
  "/images/mockeln-lake.webp",
  "/images/vaxjo-centrum.jpg",
  "/images/vuurtje-buiten-avontuur.jpg",
  "/images/copenhagen.webp",
];
