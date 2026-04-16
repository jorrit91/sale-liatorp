"use client";

import Image from "next/image";
import { useState } from "react";

import { RichText } from "@/components/RichText";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { locationImages } from "@/content/images";
import { location } from "@/content/nl/location";

export function Location() {
  const [active, setActive] = useState<string>(location.tabs[0].key);
  const activeIndex = location.tabs.findIndex((t) => t.key === active);

  return (
    <section
      id="ligging"
      className="relative isolate w-full overflow-hidden bg-[#1c2a22] py-24 md:py-32"
    >
      {location.tabs.map((tab, i) => {
        const image = locationImages[i];
        if (!image) return null;
        return (
          <div
            key={tab.key}
            aria-hidden
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
          </div>
        );
      })}
      <div aria-hidden className="absolute inset-0 bg-[#1c2a22]/78" />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-[#0f1814]/40 via-transparent to-[#0f1814]/50"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-[#faf8f4] md:px-10">
        <h2 className="font-heading text-3xl leading-tight [text-shadow:0_1px_12px_rgba(0,0,0,0.45)] md:text-5xl">
          {location.title}
        </h2>

        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as string)}
          orientation="vertical"
          className="mt-12 md:grid md:grid-cols-[280px_1fr] md:gap-12"
        >
          <TabsList
            variant="line"
            className="flex h-auto w-full flex-row flex-wrap gap-2 overflow-x-auto border-b border-[#faf8f4]/25 pb-2 md:flex-col md:flex-nowrap md:items-stretch md:gap-1 md:border-b-0 md:border-l md:border-[#faf8f4]/25 md:pb-0"
          >
            {location.tabs.map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="data-active:text-muted! text-muted/50! hover:text-muted! h-auto justify-start px-0 py-2 text-left text-base whitespace-normal [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] after:bg-[#faf8f4] md:px-4 md:text-lg"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-6 min-h-55 md:mt-0">
            {location.tabs.map((tab) => (
              <TabsContent key={tab.key} value={tab.key}>
                <article className="flex flex-col gap-4 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]">
                  <RichText
                    paragraphs={tab.paragraphs}
                    className="max-w-2xl text-base text-[#faf8f4]/95 md:text-lg"
                  />
                </article>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
