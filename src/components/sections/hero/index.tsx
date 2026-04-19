"use client";

import { BlurImage } from "@/components/BlurImage";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { MapPin } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";

import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/content/images";
import { nl } from "@/content/nl";
import { assetUrl } from "@/lib/asset-url";
import { toSmallPath } from "@/lib/to-small-path";
import { cn } from "@/lib/utils";

const DESKTOP_QUERY = "(min-width: 768px)";

function subscribeDesktop(callback: () => void): () => void {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getDesktopSnapshot(): boolean {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

function getDesktopServerSnapshot(): boolean {
  return false;
}

function HeroSlide({ src, priority }: { src: string; priority: boolean }): React.ReactNode {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot,
  );
  const [fullLoaded, setFullLoaded] = useState(false);

  return (
    <>
      <BlurImage
        src={assetUrl(toSmallPath(src))}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        unoptimized
      />
      {isDesktop && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={assetUrl(src)}
          alt=""
          aria-hidden
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setFullLoaded(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            fullLoaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </>
  );
}

export function Hero(): React.ReactNode {
  const [index, setIndex] = useState(0);
  const slideCount = heroImages.length;

  useEffect(() => {
    if (slideCount <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), 6000);
    return () => clearInterval(id);
  }, [slideCount]);

  return (
    <section className="relative flex h-svh w-full items-end overflow-hidden bg-[#1c2a22]">
      {/* Slideshow images — fill entire hero */}
      {heroImages.map((src, i) => (
        <div
          key={`${src}-${i}`}
          aria-hidden
          className={`duration-1500ms absolute inset-0 transition-opacity ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <HeroSlide src={src} priority={i === 0} />
        </div>
      ))}

      {/* Heavy bottom gradient — image stays clean at top, solid dark at bottom */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-transparent via-[#1c2a22]/40 via-45% to-[#1c2a22]"
      />

      {/* Text content — anchored to bottom */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6 pb-16 text-[#faf8f4] md:px-10 md:pb-24">
        <h1 className="font-heading text-4xl leading-[1.05] font-normal md:text-6xl">
          {nl.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#faf8f4]/80 md:text-lg">
          {nl.hero.description}
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <CopyEmailButton />
          <Button
            size="lg"
            variant="outline"
            render={<a href={nl.common.instagramUrl} target="_blank" rel="noreferrer" />}
            className="gap-2 border-[#faf8f4]/30 bg-transparent text-[#faf8f4] hover:bg-[#faf8f4]/10 hover:text-[#faf8f4]"
          >
            <InstagramIcon className="size-4" /> {nl.common.instagramHandle}
          </Button>
          <a
            href={nl.common.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#faf8f4]/70 underline-offset-4 hover:text-[#faf8f4] hover:underline sm:ml-2"
          >
            <MapPin className="size-3.5" /> {nl.hero.ctas.maps}
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      {slideCount > 1 && (
        <div className="absolute right-6 bottom-16 z-10 flex items-center gap-2 md:right-10 md:bottom-24">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ga naar slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-[#faf8f4]" : "w-1.5 bg-[#faf8f4]/40 hover:bg-[#faf8f4]/60"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
