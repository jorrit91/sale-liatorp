import { AlertTriangle } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { amenities } from "@/content/nl/amenities";

export function Amenities() {
  return (
    <section id="voorzieningen" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{amenities.title}</h2>

      <Tabs
        defaultValue={amenities.tabs[0].key}
        orientation="vertical"
        className="mt-12 md:grid md:grid-cols-[220px_1fr] md:gap-12"
      >
        <TabsList
          variant="line"
          className="border-border md:border-border flex h-auto w-full flex-row flex-wrap gap-2 overflow-x-auto border-b pb-2 md:flex-col md:flex-nowrap md:items-stretch md:gap-1 md:border-b-0 md:border-l md:pb-0"
        >
          {amenities.tabs.map((tab) => (
            <TabsTrigger
              key={tab.key}
              value={tab.key}
              className="h-auto justify-start px-0 py-2 text-left text-base whitespace-normal md:px-4 md:text-lg"
            >
              {tab.warning ? <AlertTriangle className="text-destructive size-4" /> : null}
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-6 md:mt-0">
          {amenities.tabs.map((tab) => (
            <TabsContent key={tab.key} value={tab.key}>
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-2xl md:text-3xl">
                  {tab.warning ? (
                    <AlertTriangle className="text-destructive mr-2 inline size-5" />
                  ) : null}
                  {tab.title}
                </h3>
                <p className="text-foreground/80 max-w-2xl text-base leading-relaxed md:text-lg">
                  {tab.body}
                </p>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
