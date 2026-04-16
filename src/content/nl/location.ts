import type { RichParagraph } from "@/types/rich-text";

interface LocationTab {
  readonly key: string;
  readonly title: string;
  readonly paragraphs: readonly RichParagraph[];
}

export const location: {
  title: string;
  tabs: readonly LocationTab[];
} = {
  title: "Ligging",
  tabs: [
    {
      key: "natuur",
      title: "Ontdek de Smålandse bossen en meren",
      paragraphs: [
        [
          "Vlakbij Möckeln (nog geen 10 auto minuten), een enorm meer van maar liefst 48 vierkante kilometer. Hier vind je prachtige kano-routes, badplaatsen met de mooiste zonsondergangen en honderden eilandjes om te verkennen. In Zweden word je uitgenodigd om te genieten van de natuur, door het bekende ",
          { italic: "allemansrätten" },
          " mag je op de meeste plekken je tent opzetten en je eigen worstjes grillen.",
        ],
      ],
    },
    {
      key: "voorzieningen",
      title: "Voorzieningen in de buurt",
      paragraphs: [
        [
          "In het dorpje vind je een kleine supermarkt voor de dagelijkse basics. In Älmhult (12 auto minuten) kan je terecht voor uitgebreidere boodschappen. Hier vind je ook scholen (waaronder een internationale school) en een huisarts. In Ljungby (30 auto minuten) of Växjö (40 auto minuten) vind je de dichstbijzijnde ziekenhuizen.",
        ],
      ],
    },
    {
      key: "avonturen",
      title: "Eindeloze buitenavonturen",
      paragraphs: [
        [
          "Bij ons in Småland hang je zelf de slingers op. Of je nou houdt van hardlopen, zwemmen, vissen, fietsen, kamperen, hiken, kayakken of alles er tussenin; hier kan je je hart ophalen. Met een beetje geluk spot je zelfs elanden, reeën of ander veelvoorkomend wild.",
        ],
      ],
    },
    {
      key: "bereikbaar",
      title: "Goed bereikbaar vanaf Kopenhagen/Malmö ✈️",
      paragraphs: [
        [
          "Ondanks de ligging in het rustige en sprookjesachtige Småland is de stedelijke omgeving niet ver weg. In 2,5 uur rij je van het vliegveld in Kopenhagen naar je huisje in het bos. Ook heeft het nabijgelegen Älmhult (12 auto minuten) een rechtstreekse treinverbinding met het vliegveld CPH.",
        ],
      ],
    },
    {
      key: "weten",
      title: "Goed om te weten",
      paragraphs: [
        [
          "Het huis ligt vlakbij de doorgaande weg tussen Malmö en Växjö, die weg is hoorbaar in de tuin, maar niet in het huis, en de ligging maakt alles goed wat ons betreft.",
        ],
      ],
    },
  ],
};

export type LocationTabKey = (typeof location.tabs)[number]["key"];
