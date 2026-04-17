"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function BlurImage({ className, onLoad, alt, ...props }: ImageProps): React.ReactNode {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      alt={alt}
      {...props}
      className={cn(
        "transition-[filter,transform] duration-700 ease-out",
        loaded ? "scale-100 blur-0" : "scale-105 blur-lg",
        className,
      )}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}
