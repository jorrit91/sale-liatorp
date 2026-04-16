export type InlineNode =
  | string
  | { readonly bold: string }
  | { readonly italic: string }
  | { readonly br: true };

export type RichParagraph = readonly InlineNode[];
