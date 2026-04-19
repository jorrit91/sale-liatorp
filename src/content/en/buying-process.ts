import type { RichParagraph } from "@/types/rich-text";

interface Step {
  readonly key: string;
  readonly title: string;
  readonly paragraphs: readonly RichParagraph[];
}

export const buyingProcess: {
  title: string;
  intro: string;
  steps: readonly Step[];
  tldr: string;
} = {
  title: "How do you buy a house in Sweden?",
  intro:
    "Buying a holiday home in Sweden is very doable as an EU citizen, especially if you don't need a mortgage. In Sweden, the real estate agent also acts as a notary, so everything during the process is handled by the agent, nice and straightforward.",
  steps: [
    {
      key: "bezichtigen",
      title: "1. Viewing and agreement",
      paragraphs: [
        [
          "Read through the website carefully, check out the photos, and book a viewing or give us a nudge for a video tour. Make an offer, and hopefully we'll come to an agreement quickly.",
        ],
      ],
    },
    {
      key: "koopcontract",
      title: "2. Purchase contract (Köpekontrakt)",
      paragraphs: [
        [
          "We'll head to real estate agent Stjernfeldt in Älmhult to have them draw up the purchase contract. A purchase contract has to meet the Swedish formal requirements: it includes the designation of the property, the purchase price, and a transfer declaration, signed by both parties.",
        ],
      ],
    },
    {
      key: "betaling",
      title: "3. Payment",
      paragraphs: [
        [
          "Do you have a Swedish personal number? Then it's really simple: the money is deposited into the agent's escrow account and is released the moment the keys are handed over.",
        ],
        [
          "No Swedish personal number? Although this can sometimes cause issues (since banks occasionally refuse to open accounts for EU citizens without a personal number), agent Stjernfeldt has fortunately confirmed that a Swedish bank account isn't required. To make the sale easier, the money can be transferred to ",
          { bold: "our" },
          " ",
          { bold: "Dutch" },
          " account, and from there we can move on to the key handover.",
        ],
      ],
    },
    {
      key: "eigendom",
      title: "4. Title registration (Lagfart)",
      paragraphs: [
        [
          "You send the purchase contract to Lantmäteriet (the Swedish land registry) to be registered as the owner. A copy of your passport is enough to prove you're of legal age.",
        ],
        [
          "This process can be sped up by applying for a ",
          { italic: "samordningsnummer" },
          " (a kind of light version of a personal number), but it's not necessary.",
        ],
      ],
    },
    {
      key: "overdrachtsbelasting",
      title: "5. Transfer tax (Stämpelskatt)",
      paragraphs: [
        [
          "The buyer pays 1.5% stämpelskatt on the purchase price, plus an administrative fee of 825 SEK to Lantmäteriet. At 1,600,000 SEK that comes to 24,000 SEK + 825 SEK, or about €2,250 total. That's it. No further transfer tax or notary fees like in the Netherlands.",
        ],
      ],
    },
  ],
  tldr: "No Swedish passport needed, no personal number needed, transfer costs of ~€2,250, the agent also acts as a notary and handles all the paperwork.",
};

export type StepKey = (typeof buyingProcess.steps)[number]["key"];
