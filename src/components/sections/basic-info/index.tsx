"use client";

import {
  Bed,
  CalendarDays,
  Flame,
  Hammer,
  Home,
  TentTree,
  Trees,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { useContent } from "@/components/ContentProvider";
import { type BasicInfoIcon } from "@/content/nl/basic-info";

const iconMap: Record<BasicInfoIcon, LucideIcon> = {
  home: Home,
  trees: Trees,
  bed: Bed,
  flame: Flame,
  calendar: CalendarDays,
  wind: Wind,
  hammer: Hammer,
  tent: TentTree,
};

export function BasicInfo() {
  const { basicInfo } = useContent();

  return (
    <section
      id="basis-informatie"
      className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-24 sm:gap-8 md:gap-12 md:px-10 md:py-32"
    >
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{basicInfo.title}</h2>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {basicInfo.specs.map((spec) => {
          const Icon = iconMap[spec.icon];
          return (
            <li
              key={spec.label}
              className="bg-card ring-border flex items-center gap-3 rounded-2xl px-4 py-4 ring-1"
            >
              <span className="bg-secondary text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                <Icon className="size-4" />
              </span>
              <span className="text-sm md:text-base">{spec.label}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
