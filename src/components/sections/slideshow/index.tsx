import { slideshow } from "@/content/nl/slideshow";
import { assetUrl } from "@/lib/asset-url";
import { toSmallPath } from "@/lib/to-small-path";

import { Gallery } from "./Gallery";

/** Resolve content paths to full R2 URLs, with small/full variants per photo. */
function buildGroups(): {
  key: string;
  title: string;
  description: string;
  photos: { src: string; fullSrc: string; alt: string; caption: string }[];
}[] {
  return slideshow.groups.map((group) => ({
    key: group.key,
    title: group.title,
    description: group.description,
    photos: group.photos.map((p) => ({
      src: assetUrl(toSmallPath(p.url)),
      fullSrc: assetUrl(p.url),
      alt: p.alt,
      caption: p.caption,
    })),
  }));
}

export function Slideshow(): React.ReactNode {
  return (
    <section
      id="rondleiding"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{slideshow.title}</h2>

      <div className="mt-12">
        <Gallery groups={buildGroups()} />
      </div>
    </section>
  );
}
