export interface GalleryPhoto {
  alt: string;
  caption: string;
  url: string;
}

export interface GalleryGroup {
  key: string;
  title: string;
  description: string;
  photos: GalleryPhoto[];
}

export const slideshow = {
  title: "Een kijkje in het huis",
  groups: [
    {
      key: "keuken-eetkamer-woonkamer",
      title: "Keuken & woonkamer",
      description:
        "Op de benedenverdieping vind je de keuken, eetkamer en woonkamer in een open ruimte. Er is veel lichtinval door de ramen rondom. De woonkamer heeft een gezellige houtkachel en ook hier veel ramen met uitzicht op de tuin en het bos.",
      photos: [
        {
          alt: "Entree",
          caption: "Binnenkomst vanaf de veranda.",
          url: "keuken-eetkamer-woonkamer-1.jpg",
        },
        {
          alt: "Zicht bij binnenkomst",
          caption: "Doorkijk naar de keuken en de trap naar boven.",
          url: "keuken-eetkamer-woonkamer-2.jpg",
        },
        {
          alt: "Detail keuken",
          caption:
            "Vanuit de keuken heb je uitzicht op het bos voor de deur, je kijkt hier richting het westen.",
          url: "keuken-eetkamer-woonkamer-3.jpg",
        },
        {
          alt: "Detail keuken",
          caption: "Er valt veel licht de keuken binnen. Open kasten en koel-vriescombinatie.",
          url: "keuken-eetkamer-woonkamer-4.jpg",
        },
        {
          alt: "Overzicht keuken",
          caption: "Veel licht en ruimte ☀️",
          url: "keuken-eetkamer-woonkamer-5.jpg",
        },
        {
          alt: "Eetkamer",
          caption:
            "Blik op de eetkamer vanuit de keuken, weer veel licht door ramen rondom. Hier kijk je richting het zuiden.",
          url: "keuken-eetkamer-woonkamer-6.jpg",
        },
        {
          alt: "Eetkamer",
          caption: "Detail met zicht op het bos richting het westen vanaf de eetkamertafel.",
          url: "keuken-eetkamer-woonkamer-7.jpg",
        },
        {
          alt: "Woonkamer",
          caption:
            "Gezellige woonkamer met houtkachel, hier kijk je richting het zuiden en oosten.",
          url: "keuken-eetkamer-woonkamer-8.jpg",
        },
        {
          alt: "Woonkamer",
          caption:
            "Detail met zicht op de tuin richting het oosten, op de achtergrond zie je het gastenverblijf.",
          url: "keuken-eetkamer-woonkamer-9.jpg",
        },
        {
          alt: "Woonkamer",
          caption: "De hoek met de tv en de houtkachel, heerlijke boeken-lees-plek ❤️",
          url: "keuken-eetkamer-woonkamer-10.jpg",
        },
        {
          alt: "Woonkamer",
          caption: "Zelfde hoek met gezellig brandende houtkachel.",
          url: "keuken-eetkamer-woonkamer-11.jpg",
        },
        {
          alt: "Woonkamer",
          caption: "Doorkijk vanuit de keuken richting de voordeur en de trap naar boven.",
          url: "keuken-eetkamer-woonkamer-12.jpg",
        },
      ],
    },
    {
      key: "slaapkamer-1",
      title: "Slaapkamer 1",
      description:
        "Op de benedenverdieping vind je ook de eerste slaapkamer met ingebouwde kledingkast, vanuit het raam kijk je richting het westen en heb je uitzicht op het bos.",
      photos: [
        {
          alt: "Deur naar slaapkamer 1",
          caption: "Rechts van de keuken vind je de deur naar slaapkamer 1.",
          url: "slaapkamer-1-1.jpg",
        },
        {
          alt: "Ingebouwde kledingkast",
          caption: "Genomen vanaf het raam, richting de ingebouwde kledingkast.",
          url: "slaapkamer-1-2.jpg",
        },
        {
          alt: "Lichtinval slaapkamer 1",
          caption: "Veel lichtinval door het grote raam met uitzicht op het bos.",
          url: "slaapkamer-1-3.jpg",
        },
        {
          alt: "Lichtinval slaapkamer 1",
          caption: "Richting het westen, veel lichtinval en uitzicht op het bos.",
          url: "slaapkamer-1-4.jpg",
        },
        {
          alt: "Bed slaapkamer 1",
          caption: "Ruime slaapkamer, geschikt voor een tweepersoonsbed.",
          url: "slaapkamer-1-5.jpg",
        },
      ],
    },
    {
      key: "boven-slaapkamer-2",
      title: "Slaapkamer 2",
      description:
        "Via de trap bij de voordeur kom je op de bovenverdieping, hier vind je nog 2 slaapkamers. Op de overloop vind je ruimte voor (bijvoorbeeld) een thuiswerkplek.",
      photos: [
        {
          alt: "Blik op trap naar boven",
          caption: "Direct links van de voordeur vind je de open trap naar boven.",
          url: "boven-slaapkamer-2-1.jpg",
        },
        {
          alt: "Blik op trap naar boven",
          caption:
            "Doorkijk naar boven, hier zie je de 2 ingebouwde ramen die de overloop van licht voorzien al een klein beetje.",
          url: "boven-slaapkamer-2-2.jpg",
        },
        {
          alt: "Overloop",
          caption: "Ruime overloop (± 12m2), hier zou je een fijne thuiswerkplek kunnen maken.",
          url: "boven-slaapkamer-2-3.jpg",
        },
        {
          alt: "Ballustrade",
          caption: "Blik op de entree vanaf de overloop.",
          url: "boven-slaapkamer-2-4.jpg",
        },
        {
          alt: "Slaapkamer 2",
          caption:
            "Direct links van de trap vind je de deur naar slaapkamer 2, een ruime kamer met uitzicht op het bos richting het zuiden.",
          url: "boven-slaapkamer-2-5.jpg",
        },
        {
          alt: "Slaapkamer 2",
          caption: "Uitzicht op het bos richting het zuiden.",
          url: "boven-slaapkamer-2-6.jpg",
        },
        {
          alt: "Slaapkamer 2",
          caption: "Genomen vanaf het raam, richting de overloop.",
          url: "boven-slaapkamer-2-7.jpg",
        },
      ],
    },
    {
      key: "slaapkamer-3",
      title: "Slaapkamer 3",
      description:
        "Aan de rechterkant van de overloop vind je de deur naar slaapkamer 3, een ruime kamer met uitzicht op het bos richting het noorden.",
      photos: [
        {
          alt: "Slaapkamer 3",
          caption: "Ruime slaapkamer met uitzicht op het bos richting het noorden.",
          url: "slaapkamer-3-1.jpg",
        },
        {
          alt: "Slaapkamer 3",
          caption: "Lichtinval door het grote raam met uitzicht op het bos.",
          url: "slaapkamer-3-2.jpg",
        },
        {
          alt: "Slaapkamer 3",
          caption: "Zicht op de overloop met de ballustrade en de trap naar beneden.",
          url: "slaapkamer-3-3.jpg",
        },
        {
          alt: "Slaapkamer 3",
          caption: "Uitzicht op het bos richting het noorden.",
          url: "slaapkamer-3-4.jpg",
        },
      ],
    },
    {
      key: "badkamer",
      title: "Badkamer",
      description:
        "Terug op de benedenverdieping vind je de badkamer bij binnenkomst aan je rechterhand. Hier vind je ook de wasmachine aansluiting.",
      photos: [
        {
          alt: "Badkamer",
          caption: "Deur naar de badkamer, direct rechts van de voordeur.",
          url: "badkamer-1.jpg",
        },
        {
          alt: "Badkamer",
          caption: "Wastafel met ingebouwde verlichting, raam kijkt richting het oosten.",
          url: "badkamer-2.jpg",
        },
        {
          alt: "Badkamer",
          caption: "Blik op de nis met de douche.",
          url: "badkamer-3.jpg",
        },
        {
          alt: "Badkamer",
          caption: "Doorkijkje vanuit de douche richting de badkamerdeur.",
          url: "badkamer-4.jpg",
        },
        {
          alt: "Badkamer",
          caption:
            "Hoek met douche, in de kast achter de douche vind je de waterpomp die het huis van water voorziet.",
          url: "badkamer-5.jpg",
        },
        {
          alt: "Badkamer",
          caption: "Lichtinval door het raam met uitzicht op de tuin richting het oosten.",
          url: "badkamer-6.jpg",
        },
      ],
    },
    {
      key: "perceel",
      title: "Perceel",
      description:
        "Het ruime perceel van 2 390 m² rondom het huis biedt voldoende ruimte voor tuinieren, spelen en ontspannen.",
      photos: [
        {
          alt: "Perceel",
          caption: "Zicht op het huis van (boven) de onverharde weg waaraan het ligt.",
          url: "aerial-photo-hero_3.jpg",
        },
        {
          alt: "Perceel",
          caption:
            "Hier zie je het huis vanaf de zuidkant, aan de rechterkant zie je het gastenverblijf liggen.",
          url: "aerial-photo-hero_1.jpg",
        },
        {
          alt: "Perceel",
          caption: "Vanuit deze hoek zie je de onverharde weg en de grote klusschuur",
          url: "aerial-photo-hero_2.jpg",
        },
        {
          alt: "Perceel",
          caption: "Nog een blik richting de onverharde weg, ongeveer richting het noordwesten.",
          url: "aerial-photo-hero_4.jpg",
        },
      ],
    },
  ],
} as const;
