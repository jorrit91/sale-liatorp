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
  title: "Hoe koop je een huis in Zweden?",
  intro:
    "Het kopen van een vakantiewoning in Zweden is zeer goed te doen als EU-burger, zeker als je geen hypotheek nodig hebt. In Zweden heeft de makelaar ook direct een notariële functie, dus tijdens de afhandeling wordt alles door de makelaar geregeld, wel zo overzichtelijk.",
  steps: [
    {
      key: "bezichtigen",
      title: "1. Bezichtigen en akkoord",
      paragraphs: [
        [
          "Lees de website goed door, check de foto's en boek een bezichtiging of trek ons eventueel aan de mouw voor een videotour. Doe een bod, en hopelijk komen we er samen snel uit.",
        ],
      ],
    },
    {
      key: "koopcontract",
      title: "2. Koopcontract (Köpekontrakt)",
      paragraphs: [
        [
          "We gaan naar makelaar Stjernfeldt in Älmhult om het koopcontract door hen op te laten stellen. Een koopcontract moet voldoen aan de Zweedse formele eisen: het bevat de aanduiding van het perceel, de koopprijs, en een overdrachtsverklaring, ondertekend door beide partijen.",
        ],
      ],
    },
    {
      key: "betaling",
      title: "3. Betaling",
      paragraphs: [
        [
          "Hebben jullie een Zweeds persoonsnummer? Dan is het heel eenvoudig, het geld wordt op de derdenrekening van de makelaar gestort en wordt vrijgegeven op het moment dat de sleuteloverdracht plaatsvindt.",
        ],
        [
          "Geen Zweeds persoonsnummer? Hoewel dit soms problemen kan geven (omdat banken soms weigeren om rekeningen te openen voor EU-burgers zonder persoonsnummer), heeft makelaar Stjernfeldt gelukkig aangegeven dat een Zweedse bankrekening geen vereiste is. Om de verkoop te vergemakkelijken kan het geld overgemaakt worden naar ",
          { bold: "onze" },
          " ",
          { bold: "Nederlandse" },
          " rekening, van daaruit kunnen we door naar de sleuteloverdracht.",
        ],
      ],
    },
    {
      key: "eigendom",
      title: "4. Eigendomsregistratie (Lagfart)",
      paragraphs: [
        [
          "Jullie sturen het koopcontract naar Lantmäteriet (het Zweedse kadaster) om geregistreerd te worden als eigenaar. Een kopie van het paspoort volstaat om de meerderjarigheid aan te tonen.",
        ],
        [
          "Dit proces kan versneld worden door een ",
          { italic: "samordningsnummer" },
          " aan te vragen (een soort light-versie van een persoonsnummer), maar dit is niet noodzakelijk.",
        ],
      ],
    },
    {
      key: "overdrachtsbelasting",
      title: "5. Overdrachtsbelasting (Stämpelskatt)",
      paragraphs: [
        [
          "De koper betaalt 1,5% stämpelskatt over de koopprijs, plus een administratieve vergoeding van 825 SEK. Lantmäteriet Bij 1.600.000 SEK is dat 24.000 SEK + 825 SEK, ofwel zo'n €2.250 totaal. Dat is alles. Geen verdere overdrachtsbelasting of notariskosten zoals in Nederland.",
        ],
      ],
    },
  ],
  tldr: "Geen Zweeds paspoort nodig, geen persoonsnummer nodig, overdrachtskosten van ~€2.250, makelaar heeft ook notariele functie en regelt al het papierwerk.",
};

export type StepKey = (typeof buyingProcess.steps)[number]["key"];
