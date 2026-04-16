import Image from "next/image";
import {
  Bath,
  Bed,
  CalendarDays,
  Hammer,
  Home,
  TentTree,
  Trees,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { basicInfoImages } from "@/content/images";
import { basicInfo, type BasicInfoIcon } from "@/content/nl/basic-info";

const iconMap: Record<BasicInfoIcon, LucideIcon> = {
  home: Home,
  trees: Trees,
  bed: Bed,
  bath: Bath,
  calendar: CalendarDays,
  wind: Wind,
  hammer: Hammer,
  tent: TentTree,
};

export function BasicInfo() {
  return (
    <section
      id="basis-informatie"
      className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{basicInfo.title}</h2>

      <div className="mt-12 grid gap-10 md:grid-cols-5 md:gap-12">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-3">
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

        <div className="grid grid-cols-1 gap-4 md:col-span-2">
          {basicInfoImages.length === 0 ? (
            <div aria-hidden className="bg-secondary ring-border aspect-[4/5] rounded-2xl ring-1" />
          ) : (
            basicInfoImages.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="ring-border relative aspect-[4/5] overflow-hidden rounded-2xl ring-1"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
