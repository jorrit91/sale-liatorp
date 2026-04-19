"use client";

import { AlertTriangle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RichText } from "@/components/RichText";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { amenities } from "@/content/nl/amenities";

export function Amenities(): React.ReactNode {
  return (
    <section id="voorzieningen" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{amenities.title}</h2>

      {/* Mobile: accordion */}
      <Accordion
        hiddenUntilFound
        defaultValue={[amenities.tabs[0].key]}
        className="divide-border border-border mt-12 divide-y border-y md:hidden"
      >
        {amenities.tabs.map((tab) => (
          <AccordionItem key={tab.key} value={tab.key}>
            <AccordionTrigger className="flex items-center py-5 text-base font-medium">
              {tab.warning ? (
                <AlertTriangle className="text-destructive mr-2 inline size-4" />
              ) : null}
              {tab.title}
            </AccordionTrigger>
            <AccordionContent>
              <RichText
                paragraphs={tab.body}
                className="text-foreground/80 text-base leading-relaxed"
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Desktop: vertical tabs */}
      <Tabs
        defaultValue={amenities.tabs[0].key}
        orientation="vertical"
        className="mt-12 hidden md:grid md:grid-cols-[220px_1fr] md:gap-12"
      >
        <TabsList
          variant="line"
          className="flex h-auto w-full flex-col items-stretch gap-1 border-l pb-0"
        >
          {amenities.tabs.map((tab) => (
            <TabsTrigger
              key={tab.key}
              value={tab.key}
              className="h-auto justify-start px-4 py-2 text-left text-lg whitespace-normal"
            >
              {tab.warning ? <AlertTriangle className="text-destructive size-4" /> : null}
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <div>
          {amenities.tabs.map((tab) => (
            <TabsContent key={tab.key} value={tab.key}>
              <div className="flex flex-col gap-4">
                <h3 className="font-heading flex items-center text-2xl md:text-3xl">
                  {tab.warning ? (
                    <AlertTriangle className="text-destructive mr-2 inline size-5" />
                  ) : null}
                  {tab.title}
                </h3>
                <RichText
                  paragraphs={tab.body}
                  className="text-foreground/80 max-w-2xl text-base leading-relaxed md:text-lg"
                />
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
