"use client";

import { useContent } from "@/components/ContentProvider";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/button";

export function Footer(): React.ReactNode {
  const content = useContent();

  return (
    <footer id="contact" className="bg-[#1c2a22] text-[#faf8f4]">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-24 text-center md:px-10 md:py-32">
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#faf8f4]/85 md:text-xl">
          {content.footer.closing}
        </p>

        <div>
          <p className="font-heading text-5xl leading-none tracking-tight md:text-7xl lg:text-8xl">
            {content.common.priceEur}
          </p>
          <p className="mt-3 text-base text-[#faf8f4]/50 md:text-lg">
            {content.common.priceSek}
          </p>
        </div>

        <p className="mx-auto max-w-xl text-base text-[#faf8f4]/75 md:text-lg">
          {content.footer.contact}
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CopyEmailButton />
          <Button
            size="lg"
            variant="outline"
            render={<a href={content.common.instagramUrl} target="_blank" rel="noreferrer" />}
            className="gap-2 border-[#faf8f4]/30 bg-transparent text-[#faf8f4] hover:bg-[#faf8f4]/10 hover:text-[#faf8f4]"
          >
            <InstagramIcon className="size-4" /> {content.common.instagramHandle}
          </Button>
        </div>

        <p className="text-sm text-[#faf8f4]/50">{content.common.location}</p>
      </div>
    </footer>
  );
}
