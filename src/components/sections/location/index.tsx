import Image from "next/image";

import { RichText } from "@/components/RichText";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { locationImages } from "@/content/images";
import { location } from "@/content/nl/location";

export function Location() {
  return (
    <section id="ligging" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{location.title}</h2>

      <Tabs defaultValue={location.tabs[0].key} className="mt-12 gap-6 md:gap-10">
        <TabsList
          variant="line"
          className="border-border flex h-auto w-full flex-wrap justify-start gap-x-6 gap-y-2 overflow-x-auto border-b pb-2"
        >
          {location.tabs.map((tab) => (
            <TabsTrigger
              key={tab.key}
              value={tab.key}
              className="h-auto flex-none px-0 py-2 text-left text-base whitespace-normal md:text-lg"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {location.tabs.map((tab, i) => {
          const image = locationImages[i];
          return (
            <TabsContent key={tab.key} value={tab.key}>
              <article className="ring-border relative overflow-hidden rounded-2xl bg-[#1c2a22] ring-1">
                {image ? (
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className="absolute inset-0 object-cover opacity-40"
                  />
                ) : null}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#1c2a22] via-[#1c2a22]/70 to-[#1c2a22]/40"
                />
                <div className="relative z-10 flex flex-col gap-4 px-6 py-12 text-[#faf8f4] md:px-12 md:py-20">
                  <h3 className="font-heading text-2xl md:text-4xl">{tab.title}</h3>
                  <RichText
                    paragraphs={tab.paragraphs}
                    className="max-w-2xl text-base text-[#faf8f4]/85 md:text-lg"
                  />
                </div>
              </article>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}
