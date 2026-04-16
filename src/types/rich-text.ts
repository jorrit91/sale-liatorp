export type InlineNode = string | { readonly bold: string } | { readonly italic: string };

export type RichParagraph = readonly InlineNode[];
