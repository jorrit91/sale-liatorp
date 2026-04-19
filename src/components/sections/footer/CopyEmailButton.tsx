"use client";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { nl } from "@/content/nl";

export function CopyEmailButton(): React.ReactNode {
  return (
    <Button size="lg" render={<a href={`mailto:${nl.common.email}`} />} className="gap-2">
      <Mail className="size-4" /> {nl.common.email}
    </Button>
  );
}
