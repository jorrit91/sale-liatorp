"use client";

import { useContent } from "@/components/ContentProvider";
import { assetUrl } from "@/lib/asset-url";
import { toSmallPath } from "@/lib/to-small-path";

import { Gallery } from "./Gallery";

export function Slideshow(): React.ReactNode {
  const { slideshow } = useContent();

  const groups = slideshow.groups.map((group) => ({
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

  return (
    <section
      id="rondleiding"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{slideshow.title}</h2>

      <div className="mt-12">
        <Gallery groups={groups} />
      </div>
    </section>
  );
}
