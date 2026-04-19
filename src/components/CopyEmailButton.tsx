"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useRef, useState } from "react";

import { useContent } from "@/components/ContentProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CopyEmailButton(): React.ReactNode {
  const content = useContent();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  function handleCopy(): void {
    navigator.clipboard
      .writeText(content.common.email)
      .then(() => {
        setCopied(true);
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        // clipboard may be unavailable in insecure contexts — silently ignore
      });
  }

  return (
    <div className="group relative inline-flex">
      {/* Copy affordance — hidden behind the main button, slides up on hover */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? content.common.emailCopiedLabel : content.common.copyEmailLabel}
        className={cn(
          "text-background absolute top-0 left-1/2 z-0 flex h-9 -translate-x-1/2 cursor-pointer items-center justify-center rounded-md rounded-b-none bg-transparent transition-all duration-300 ease-out",
          "before:absolute before:top-full before:left-0 before:h-2 before:w-full before:content-['']",
          copied
            ? "pointer-events-auto w-auto translate-y-[90%] gap-1.5 px-3 text-xs font-medium opacity-100"
            : "pointer-events-none w-9 opacity-0 group-hover:pointer-events-auto group-hover:translate-y-[90%] group-hover:opacity-100",
        )}
      >
        {copied ? (
          <>
            <Check className="size-3.5" /> {content.common.copiedSuccess}
          </>
        ) : (
          <Copy className="size-4" />
        )}
      </button>

      <Button
        size="lg"
        render={<a href={`mailto:${content.common.email}`} />}
        className="relative z-10 gap-2"
      >
        <Mail className="size-4" /> {content.common.email}
      </Button>
    </div>
  );
}
