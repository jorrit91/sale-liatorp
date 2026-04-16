import Image from "next/image";

import { slideshowImages } from "@/content/images";
import { slideshow } from "@/content/nl/slideshow";

export function Slideshow() {
  return (
    <section id="rondleiding" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{slideshow.title}</h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:gap-8">
        {slideshow.slides.map((slide, i) => {
          const src = slideshowImages[i];
          return (
            <figure
              key={slide.title}
              className="bg-card ring-border overflow-hidden rounded-2xl ring-1"
            >
              <div className="bg-secondary relative aspect-[4/3]">
                {src ? (
                  <Image
                    src={src}
                    alt={slide.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <figcaption className="flex flex-col gap-2 px-6 py-6 md:px-8 md:py-8">
                <span className="font-heading text-xl md:text-2xl">{slide.title}</span>
                <p className="text-muted-foreground leading-relaxed">{slide.description}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
