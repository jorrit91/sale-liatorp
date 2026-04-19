"use client";

import { Snowflake } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { BlurImage } from "@/components/BlurImage";
import { Snowfall } from "@/components/Snowfall";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { winterImage } from "@/content/images";
import { nl } from "@/content/nl";

type Phase = "hidden" | "visible" | "tucked" | "dismissed";

export function WinterTeaser(): React.ReactNode {
  const [phase, setPhase] = useState<Phase>("hidden");
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("visible");
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!winterImage) return null;

  function handleBadgeClick(): void {
    setModalOpen(true);
  }

  function handleModalClose(open: boolean): void {
    if (!open) {
      setModalOpen(false);
      setPhase("tucked");
    }
  }

  return (
    <>
      {/* Sentinel + badge container */}
      <div
        ref={ref}
        className="absolute top-1/2 z-20 -translate-y-1/2"
        style={{ right: "calc(-50vw + 50%)" }}
      >
        {phase !== "dismissed" && (
          <button
            type="button"
            onClick={handleBadgeClick}
            className={`group flex cursor-pointer items-center gap-2.5 rounded-l-full border border-r-0 border-sky-200/30 bg-linear-to-l from-sky-50 to-white py-3 pr-4 pl-5 shadow-lg transition-all duration-500 ease-out hover:shadow-xl ${
              phase === "hidden"
                ? "translate-x-full opacity-0"
                : phase === "visible"
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[calc(100%-3rem)] opacity-90 hover:translate-x-0 hover:opacity-100"
            }`}
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-transform duration-300 group-hover:rotate-90">
              <Snowflake className="size-4" />
            </span>
            <span className="text-sm font-medium whitespace-nowrap text-sky-900">
              {nl.common.winterTeaser}
            </span>
          </button>
        )}
      </div>

      {/* Snowfall — only while modal is open */}
      {modalOpen && <Snowfall />}

      {/* Winter modal */}
      <Dialog open={modalOpen} onOpenChange={handleModalClose}>
        <DialogContent
          className="max-w-2xl gap-0 overflow-hidden rounded-2xl border-sky-200/40 bg-linear-to-b from-sky-50 to-white p-0 sm:max-w-7xl"
          overlayClassName="bg-slate-900/60"
          showCloseButton
        >
          <div className="relative aspect-3/2 w-full">
            <BlurImage
              src={winterImage}
              alt="Het huis in de winter"
              fill
              sizes="(min-width: 768px) 42rem, 100vw"
              className="object-cover"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
