import { Fragment } from "react";

import type { InlineNode, RichParagraph } from "@/types/rich-text";
import { cn } from "@/lib/utils";

interface RichTextProps {
  paragraphs: readonly RichParagraph[];
  className?: string;
}

function renderNode(node: InlineNode, key: number) {
  if (typeof node === "string") {
    return <Fragment key={key}>{node}</Fragment>;
  }
  if ("bold" in node) {
    return (
      <strong key={key} className="text-foreground font-medium">
        {node.bold}
      </strong>
    );
  }
  if ("italic" in node) {
    return <em key={key}>{node.italic}</em>;
  }
  return <br key={key} />;
}

export function RichText({ paragraphs, className }: RichTextProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph.map(renderNode)}</p>
      ))}
    </div>
  );
}
