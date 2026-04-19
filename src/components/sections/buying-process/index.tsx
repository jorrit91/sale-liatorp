"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useContent } from "@/components/ContentProvider";
import { RichText } from "@/components/RichText";

export function BuyingProcess() {
  const { buyingProcess } = useContent();
  return (
    <section id="kopen" className="bg-secondary/40">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 md:px-10 md:py-32">
        <h2 className="font-heading text-3xl leading-tight md:text-5xl">{buyingProcess.title}</h2>
        <p className="text-foreground/80 mt-6 text-base leading-relaxed md:text-lg">
          {buyingProcess.intro}
        </p>

        <Accordion
          hiddenUntilFound
          defaultValue={[buyingProcess.steps[0].key]}
          className="divide-border border-border mt-12 divide-y border-y"
        >
          {buyingProcess.steps.map((step) => (
            <AccordionItem key={step.key} value={step.key}>
              <AccordionTrigger className="py-5 text-base font-medium md:text-lg">
                {step.title}
              </AccordionTrigger>
              <AccordionContent>
                <RichText
                  paragraphs={step.paragraphs}
                  className="text-foreground/80 text-base leading-relaxed md:text-lg"
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-card ring-border mt-10 rounded-2xl px-6 py-6 ring-1 md:px-8 md:py-7">
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">TL;DR</p>
          <p className="text-base leading-relaxed md:text-lg">{buyingProcess.tldr}</p>
        </div>
      </div>
    </section>
  );
}
