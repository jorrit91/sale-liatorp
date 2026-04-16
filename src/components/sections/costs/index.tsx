import { Wallet } from "lucide-react";

import { costs } from "@/content/nl/costs";

export function Costs() {
  return (
    <section id="kosten" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="bg-secondary/60 ring-border rounded-2xl px-6 py-12 ring-1 md:px-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <span className="bg-primary text-primary-foreground flex size-12 shrink-0 items-center justify-center rounded-full">
            <Wallet className="size-5" />
          </span>
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl leading-tight md:text-4xl">{costs.title}</h2>
            <p className="text-foreground/80 text-base leading-relaxed md:text-lg">{costs.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
