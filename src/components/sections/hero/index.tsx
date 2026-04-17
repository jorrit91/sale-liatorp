"use client";

import { BlurImage } from "@/components/BlurImage";
import { Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/content/images";
import { nl } from "@/content/nl";

export function Hero(): React.ReactNode {
  const [index, setIndex] = useState(0);
  const slideCount = heroImages.length;

  useEffect(() => {
    if (slideCount <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), 6000);
    return () => clearInterval(id);
  }, [slideCount]);

  return (
    <section className="relative flex h-dvh w-full items-end overflow-hidden bg-[#1c2a22]">
      {/* Slideshow images — fill entire hero */}
      {heroImages.map((src, i) => (
        <div
          key={`${src}-${i}`}
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <BlurImage
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
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
          <Button size="lg" render={<a href={`mailto:${nl.common.email}`} />} className="gap-2">
            <Mail className="size-4" /> {nl.hero.ctas.mail}
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href={nl.common.instagramUrl} target="_blank" rel="noreferrer" />}
            className="gap-2 border-[#faf8f4]/30 bg-transparent text-[#faf8f4] hover:bg-[#faf8f4]/10 hover:text-[#faf8f4]"
          >
            <InstagramIcon className="size-4" /> {nl.hero.ctas.instagram}
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
