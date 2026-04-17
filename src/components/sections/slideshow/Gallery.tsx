"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

interface Group {
  key: string;
  title: string;
  description: string;
  photos: Photo[];
}

interface GalleryProps {
  groups: Group[];
}

export function Gallery({ groups }: GalleryProps): React.ReactNode {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const thumbRefs = React.useRef<Map<number, HTMLButtonElement>>(new Map());

  // Flat list of all photos across groups for prev/next navigation
  const allPhotos = React.useMemo(
    () => groups.flatMap((g) => g.photos),
    [groups],
  );

  const open = openIndex !== null;
  const current = open ? allPhotos[openIndex] : null;

  function handleOpenChange(nextOpen: boolean): void {
    if (!nextOpen && openIndex !== null) {
      const thumb = thumbRefs.current.get(openIndex);
      requestAnimationFrame(() => {
        if (!thumb) return;
        const rect = thumb.getBoundingClientRect();
        const inViewport =
          rect.top >= 0 &&
          rect.bottom <= window.innerHeight;
        if (!inViewport) {
          thumb.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
      setOpenIndex(null);
    }
  }

  function prev(): void {
    setOpenIndex((i) =>
      i === null ? null : i === 0 ? allPhotos.length - 1 : i - 1,
    );
  }

  function next(): void {
    setOpenIndex((i) =>
      i === null ? null : i === allPhotos.length - 1 ? 0 : i + 1,
    );
  }

  function handleKeyDown(e: React.KeyboardEvent): void {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  }

  // Pre-compute the flat-list offset per group so each click maps to the right index
  const groupOffsets = React.useMemo(() => {
    const offsets: number[] = [];
    let total = 0;
    for (const group of groups) {
      offsets.push(total);
      total += group.photos.length;
    }
    return offsets;
  }, [groups]);

  return (
    <>
      <div className="flex flex-col gap-24 md:gap-0">
        {groups.map((group, groupIndex) => {
          const groupOffset = groupOffsets[groupIndex];

          return (
            <div
              key={group.key}
              className="flex flex-col gap-6 md:flex-row md:gap-12 md:pb-24"
            >
              {/* Sticky label column */}
              <div className="shrink-0 md:sticky md:top-24 md:w-56 md:self-start lg:w-64">
                <h3 className="font-heading text-2xl md:text-3xl">
                  {group.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Photo grid */}
              <div className="grid flex-1 grid-cols-2 gap-3 md:gap-4">
                {group.photos.map((photo, i) => {
                  const flatIndex = groupOffset + i;
                  return (
                  <button
                    key={`${photo.alt}-${i}`}
                    ref={(el) => {
                      if (el) thumbRefs.current.set(flatIndex, el);
                      else thumbRefs.current.delete(flatIndex);
                    }}
                    type="button"
                    className="bg-secondary ring-border group focus-visible:ring-ring relative aspect-square overflow-hidden rounded-xl ring-1 focus-visible:ring-2"
                    onClick={() => setOpenIndex(flatIndex)}
                  >
                    {photo.src ? (
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-muted-foreground absolute inset-0 flex items-center justify-center text-xs">
                        {photo.alt}
                      </span>
                    )}
                  </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Single shared lightbox */}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className="max-w-4xl gap-0 overflow-hidden rounded-2xl p-0 sm:max-w-4xl"
          showCloseButton
          onKeyDown={handleKeyDown}
        >
          {current && (
            <>
              <div className="bg-secondary relative aspect-4/3 w-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 768px) 80vw, 100vw"
                  className="object-contain"
                  priority
                />

                {allPhotos.length > 1 && (
                  <div className="absolute inset-0 flex w-full items-center justify-between px-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black/40 text-white hover:bg-black/60"
                      onClick={prev}
                    >
                      <ChevronLeft className="size-5" />
                      <span className="sr-only">Vorige</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black/40 text-white hover:bg-black/60"
                      onClick={next}
                    >
                      <ChevronRight className="size-5" />
                      <span className="sr-only">Volgende</span>
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1 px-6 py-4">
                <DialogTitle>{current.alt}</DialogTitle>
                <DialogDescription>{current.caption}</DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
