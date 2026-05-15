"use client";

import { BlurImage } from "@/components/BlurImage";
import { useContent } from "@/components/ContentProvider";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { MapPin } from "lucide-react";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/content/images";
import { assetUrl } from "@/lib/asset-url";
import { toSmallPath } from "@/lib/to-small-path";
import { cn } from "@/lib/utils";

const DESKTOP_QUERY = "(min-width: 768px)";
const SWIPE_THRESHOLD_PX = 50;
const SWIPE_AXIS_RATIO = 1.2;

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
  const content = useContent();
  const [index, setIndex] = useState(0);
  const [navigationVersion, setNavigationVersion] = useState(0);
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);
  const slideCount = heroImages.length;
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot,
  );

  useEffect(() => {
    if (slideCount <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), 6000);
    return () => clearInterval(id);
  }, [slideCount, navigationVersion]);

  const navigateToSlide = useCallback((nextIndex: number) => {
    setIndex(nextIndex);
    setNavigationVersion((version) => version + 1);
  }, []);

  const navigateBySlideOffset = useCallback(
    (offset: number) => {
      setIndex((current) => (current + offset + slideCount) % slideCount);
      setNavigationVersion((version) => version + 1);
    },
    [slideCount],
  );

  return (
    <section
      className="relative flex h-svh w-full touch-pan-y items-end overflow-hidden bg-[#1c2a22]"
      onTouchStart={(event) => {
        if (isDesktop || slideCount <= 1) return;
        const touch = event.touches[0];
        swipeStartRef.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={(event) => {
        if (isDesktop || slideCount <= 1 || !swipeStartRef.current) return;

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - swipeStartRef.current.x;
        const deltaY = touch.clientY - swipeStartRef.current.y;
        swipeStartRef.current = null;

        if (
          Math.abs(deltaX) < SWIPE_THRESHOLD_PX ||
          Math.abs(deltaX) < Math.abs(deltaY) * SWIPE_AXIS_RATIO
        ) {
          return;
        }

        navigateBySlideOffset(deltaX < 0 ? 1 : -1);
      }}
      onTouchCancel={() => {
        swipeStartRef.current = null;
      }}
    >
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
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6 pb-8 text-[#faf8f4] md:px-10 md:pb-24">
        <h1 className="font-heading text-3xl leading-[1.05] font-normal md:text-6xl">
          {content.hero.title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#faf8f4]/80 md:mt-6 md:text-lg">
          {content.hero.description}
        </p>
        <div className="mt-4 flex items-center gap-2 md:mt-8">
          <CopyEmailButton
            iconOnly
            className="border-[#faf8f4]/30 bg-transparent text-[#faf8f4] hover:bg-[#faf8f4]/10 hover:text-[#faf8f4]"
          />
          <Button
            size="icon-sm"
            variant="outline"
            render={<a href={content.common.instagramUrl} target="_blank" rel="noreferrer" />}
            aria-label={content.common.instagramHandle}
            title={content.common.instagramHandle}
            className="border-[#faf8f4]/30 bg-transparent text-[#faf8f4] hover:bg-[#faf8f4]/10 hover:text-[#faf8f4]"
          >
            <InstagramIcon className="size-4" />
          </Button>
          <Button
            size="icon-sm"
            variant="outline"
            render={<a href={content.common.mapsUrl} target="_blank" rel="noreferrer" />}
            aria-label={content.hero.ctas.maps}
            title={content.hero.ctas.maps}
            className="border-[#faf8f4]/30 bg-transparent text-[#faf8f4] hover:bg-[#faf8f4]/10 hover:text-[#faf8f4]"
          >
            <MapPin className="size-4" />
          </Button>
        </div>
      </div>

      {/* Slide indicators */}
      {slideCount > 1 && (
        <div className="absolute right-6 bottom-8 z-10 flex items-center gap-2 md:right-10 md:bottom-24">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ga naar slide ${i + 1}`}
              onClick={() => navigateToSlide(i)}
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
