import type { RichParagraph } from "@/types/rich-text";

interface AmenityTab {
  readonly key: string;
  readonly title: string;
  readonly body: readonly RichParagraph[];
  readonly warning?: boolean;
}

export const amenities: {
  title: string;
  tabs: readonly AmenityTab[];
} = {
  title: "Voorzieningen",
  tabs: [
    {
      key: "isolatie",
      title: "Isolatie",
      body: [
        [
          "Het huis is gebouwd in 2012, hierdoor is het goed geïsoleerd en heb je moderne verwarmingsopties. Dit drukt de kosten in de tijd dat je niet in het huis bent.",
        ],
      ],
    },
    {
      key: "internet",
      title: "Internet",
      body: [
        [
          "In de afgelopen jaren is het huis voorzien van een bliksemsnelle glasvezelverbinding.",
          { br: true },
          { br: true },
          "Je kan zelf eenvoudig een abonnement kiezen dat bij je behoeften past (tot wel 1000 Mbit/s up en down), in Zweden kan je zelfs makkelijk een abonnement afsluiten voor maar 1 of 2 weken, handig als je alleen internet nodig hebt als je er even bent!",
        ],
      ],
    },
    {
      key: "verwarming",
      title: "Verwarming",
      body: [
        [
          "Hoofdverwarming is de luchtwarmtepomp in de woonkamer. Gezelliger is de houtkachel in de woonkamer die uitstekend het grootste deel van het huis verwarmd.",
          { br: true },
          { br: true },
          "Daarnaast kan je ruimtes bijverwarmen met de electrische radiatoren die overal geïnstalleerd zijn.",
        ],
      ],
    },
    {
      key: "water",
      title: "Water",
      warning: true,
      body: [
        [
          "Huizen op het Zweedse platteland hebben een eigen waterbron. Een gegraven put van enkele meters of een geboorde put die tientallen meters de grond in gaat.",
          { br: true },
          { br: true },
          "De wateroplossing van deze woning moet gemoderniseerd worden (reken op een investering van €5.000 tot €10.000), omdat de gegraven put 's zomers leeg kan komen te staan wanneer het te lang droog is.",
        ],
      ],
    },
    {
      key: "riolering",
      title: "Riolering",
      body: [
        [
          "Ook riolering wordt afgehandeld op het erf zelf. Alles wordt opgevangen in een driekamerput die eens per jaar geleegd wordt door het bedrijf SSAM (kosten ± €150).",
          { br: true },
          { br: true },
          "WC, kranen, wasmachine en douche werken allemaal precies zoals je het gewend bent, eens per jaar komt er een vrachtwagen die de put komt legen.",
        ],
      ],
    },
  ],
};

export type AmenityKey = (typeof amenities.tabs)[number]["key"];
