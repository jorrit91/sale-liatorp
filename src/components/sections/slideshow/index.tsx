import { galleryImages } from "@/content/images";
import { slideshow } from "@/content/nl/slideshow";

import { Gallery } from "./Gallery";

/** Merge content + image URLs into the shape the client component expects. */
function buildGroups(): {
  key: string;
  title: string;
  description: string;
  photos: { src: string; alt: string; caption: string }[];
}[] {
  return slideshow.groups.map((group) => {
    const srcs = galleryImages[group.key] ?? [];
    return {
      key: group.key,
      title: group.title,
      description: group.description,
      photos: group.photos.map((p, i) => ({
        src: srcs[i] ?? "",
        alt: p.alt,
        caption: p.caption,
      })),
    };
  });
}

export function Slideshow(): React.ReactNode {
  return (
    <section id="rondleiding" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{slideshow.title}</h2>

      <div className="mt-12">
        <Gallery groups={buildGroups()} />
      </div>
    </section>
  );
}
