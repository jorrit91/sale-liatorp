export interface GalleryPhoto {
  alt: string;
  caption: string;
}

export interface GalleryGroup {
  key: string;
  title: string;
  description: string;
  photos: GalleryPhoto[];
}

export const slideshow = {
  title: "Een kijkje rond het huis",
  groups: [
    {
      key: "tuin",
      title: "De tuin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      photos: [
        { alt: "Tuin overzicht", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { alt: "Kweekkas", caption: "Sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { alt: "Grasveld", caption: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
        { alt: "Tuin lager deel", caption: "Duis aute irure dolor in reprehenderit in voluptate velit." },
      ],
    },
    {
      key: "huis",
      title: "Het huis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      photos: [
        { alt: "Woonkamer", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { alt: "Keuken", caption: "Sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { alt: "Slaapkamer 1", caption: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
        { alt: "Slaapkamer 2", caption: "Duis aute irure dolor in reprehenderit in voluptate velit." },
        { alt: "Slaapkamer 3", caption: "Excepteur sint occaecat cupidatat non proident sunt in culpa." },
        { alt: "Badkamer", caption: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur." },
      ],
    },
    {
      key: "gastenverblijf",
      title: "Gastenverblijf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras accumsan elit in dui congue, nec posuere odio vestibulum.",
      photos: [
        { alt: "Gastenverblijf buiten", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { alt: "Gastenverblijf binnen", caption: "Sed do eiusmod tempor incididunt ut labore et dolore magna." },
      ],
    },
    {
      key: "schuur",
      title: "Schuur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
      photos: [
        { alt: "Schuur buiten", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { alt: "Schuur binnen", caption: "Sed do eiusmod tempor incididunt ut labore et dolore magna." },
      ],
    },
  ],
} as const;
