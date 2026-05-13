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
  title: "Hoe koop je een huis in Zweden als je er niet woont?",
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
          "Geen Zweeds persoonsnummer? Geen probleem, na ondertekening van het koopcontract moet een samordningsnummer aangevraagd worden bij Skatteverket (Belastingdienst), terwijl die aanvraag loopt kan er vast een bankrekening geopend worden. Dit proces kan even duren, maar uiteindelijk wordt deze rekening gebruikt om het geld naar Zweden te brengen.",
        ],
        [
          "Klinkt complex, maar makelaar Stjernfeldt zal hierin begeleiden en ervoor zorgen dat het zo soepel mogelijk verloopt.",
        ],
      ],
    },
    {
      key: "eigendom",
      title: "4. Eigendomsregistratie (Lagfart)",
      paragraphs: [
        [
          "Stjernfeldt stuurt het koopcontract naar Lantmäteriet (het Zweedse kadaster) om jullie te registreren als nieuwe eigenaar.",
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
  tldr: "Geen Zweeds paspoort nodig, geen persoonsnummer nodig, overdrachtskosten van ~€2.250, makelaar heeft ook notariele functie en regelt al het papierwerk, kosten ongeveer €1350,-",
};

export type StepKey = (typeof buyingProcess.steps)[number]["key"];
