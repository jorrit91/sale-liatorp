/**
 * Image URL arrays — fill with URLs (paths into /public or absolute URLs).
 * Order matters: each index maps to the matching content entry.
 */

// Hero slideshow (drone photos showing the house in the bosses + nearby road).
export const heroImages: string[] = [
  "/images/aerial-photo-hero_3.jpeg",
  "/images/aerial-photo-hero_1.jpeg",
  "/images/aerial-photo-hero_2.jpeg",
  "/images/aerial-photo-hero_4.jpeg",
];

// Basic info: one or more photos showing the house + plot alongside the specs.
export const basicInfoImages: string[] = ["/images/aerial-photo-hero_3.jpeg"];

// Gallery (section 3). Keys match `nl.slideshow.groups[].key`.
// Each array entry maps by index to the group's `photos` array.
export const galleryImages: Record<string, string[]> = {
  tuin: [
    // [0] Tuin overzicht
    // [1] Kweekkas
    // [2] Grasveld
    // [3] Tuin lager deel
  ],
  huis: [
    // [0] Woonkamer
    // [1] Keuken
    // [2] Slaapkamer 1
    // [3] Slaapkamer 2
    // [4] Slaapkamer 3
    // [5] Badkamer
  ],
  gastenverblijf: [
    // [0] Gastenverblijf buiten
    // [1] Gastenverblijf binnen
  ],
  schuur: [
    // [0] Schuur buiten
    // [1] Schuur binnen
  ],
};

// Full-bleed closing photo shown right before the footer.
export const closingImage: string = "/images/huis-zomer.jpg";

// Location tabs backgrounds. Index matches `nl.location.tabs`.
export const locationImages: string[] = [
  "/images/mockeln-lake.webp",
  "/images/vaxjo-centrum.jpg",
  "/images/vuurtje-buiten-avontuur.jpg",
  "/images/copenhagen.webp",
];
