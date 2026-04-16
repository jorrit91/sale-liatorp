"use client";

import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/content/images";
import { nl } from "@/content/nl";

export function Hero() {
  const [index, setIndex] = useState(0);
  const slideCount = heroImages.length;

  useEffect(() => {
    if (slideCount <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), 6000);
    return () => clearInterval(id);
  }, [slideCount]);

  return (
    <section className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden bg-[#1c2a22]">
      {heroImages.map((src, i) => (
        <div
          key={`${src}-${i}`}
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
        </div>
      ))}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#1c2a22]/45 via-[#1c2a22]/30 to-[#1c2a22]/65"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-[#faf8f4] [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
        <h1 className="font-heading text-5xl leading-[1.05] font-normal md:text-7xl">
          {nl.hero.title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#faf8f4]/80 md:text-lg">
          {nl.hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
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
        </div>
        <a
          href={nl.common.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm text-[#faf8f4]/70 underline-offset-4 hover:text-[#faf8f4] hover:underline"
        >
          <MapPin className="size-3.5" /> {nl.hero.ctas.maps}
        </a>
      </div>

      {slideCount > 1 && (
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
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
