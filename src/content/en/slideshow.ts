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
  title: "A look inside the house",
  groups: [
    {
      key: "keuken-eetkamer-woonkamer",
      title: "Kitchen & living room",
      description:
        "On the ground floor you'll find the kitchen, dining room, and living room in one open space. Plenty of light comes in through the windows all around. The living room has a cozy wood stove and, here too, lots of windows looking out onto the garden and the forest.",
      photos: [
        {
          alt: "Entrance",
          caption: "Coming in from the porch.",
          url: "keuken-eetkamer-woonkamer-1.jpg",
        },
        {
          alt: "View on arrival",
          caption: "Looking through to the kitchen and the stairs going up.",
          url: "keuken-eetkamer-woonkamer-2.jpg",
        },
        {
          alt: "Kitchen detail",
          caption:
            "From the kitchen you look out onto the forest just outside the door, facing west.",
          url: "keuken-eetkamer-woonkamer-3.jpg",
        },
        {
          alt: "Kitchen detail",
          caption:
            "Lots of light streams into the kitchen. Open cabinets and a fridge-freezer combo.",
          url: "keuken-eetkamer-woonkamer-4.jpg",
        },
        {
          alt: "Kitchen overview",
          caption: "Lots of light and space ☀️",
          url: "keuken-eetkamer-woonkamer-5.jpg",
        },
        {
          alt: "Dining room",
          caption:
            "View of the dining room from the kitchen, again lots of light through the windows all around. You're looking south here.",
          url: "keuken-eetkamer-woonkamer-6.jpg",
        },
        {
          alt: "Dining room",
          caption: "Detail with a view of the forest to the west from the dining table.",
          url: "keuken-eetkamer-woonkamer-7.jpg",
        },
        {
          alt: "Living room",
          caption: "Cozy living room with wood stove. You're looking south and east here.",
          url: "keuken-eetkamer-woonkamer-8.jpg",
        },
        {
          alt: "Living room",
          caption:
            "Detail with a view of the garden facing east, in the background you can see the guest cabin.",
          url: "keuken-eetkamer-woonkamer-9.jpg",
        },
        {
          alt: "Living room",
          caption: "The corner with the TV and the wood stove, a wonderful little reading nook ❤️",
          url: "keuken-eetkamer-woonkamer-10.jpg",
        },
        {
          alt: "Living room",
          caption: "Same corner with the wood stove cozily burning.",
          url: "keuken-eetkamer-woonkamer-11.jpg",
        },
        {
          alt: "Living room",
          caption: "Looking from the kitchen toward the front door and the stairs going up.",
          url: "keuken-eetkamer-woonkamer-12.jpg",
        },
      ],
    },
    {
      key: "slaapkamer-1",
      title: "Bedroom 1",
      description:
        "On the ground floor you'll also find the first bedroom with a built-in wardrobe. From the window you look west, out onto the forest.",
      photos: [
        {
          alt: "Door to bedroom 1",
          caption: "To the right of the kitchen, you'll find the door to bedroom 1.",
          url: "slaapkamer-1-1.jpg",
        },
        {
          alt: "Built-in wardrobe",
          caption: "Taken from the window, looking toward the built-in wardrobe.",
          url: "slaapkamer-1-2.jpg",
        },
        {
          alt: "Light in bedroom 1",
          caption: "Lots of light through the big window overlooking the forest.",
          url: "slaapkamer-1-3.jpg",
        },
        {
          alt: "Light in bedroom 1",
          caption: "Facing west, lots of light and a view of the forest.",
          url: "slaapkamer-1-4.jpg",
        },
        {
          alt: "Bed in bedroom 1",
          caption: "Spacious bedroom, big enough for a double bed.",
          url: "slaapkamer-1-5.jpg",
        },
      ],
    },
    {
      key: "boven-slaapkamer-2",
      title: "Bedroom 2",
      description:
        "Via the stairs by the front door you reach the upper floor, where you'll find 2 more bedrooms. On the landing there's room for a home office, for example.",
      photos: [
        {
          alt: "Looking up the stairs",
          caption:
            "Directly to the left of the front door you'll find the open staircase going up.",
          url: "boven-slaapkamer-2-1.jpg",
        },
        {
          alt: "Looking up the stairs",
          caption:
            "Looking upstairs, you can see the 2 built-in windows that already give the landing a bit of light.",
          url: "boven-slaapkamer-2-2.jpg",
        },
        {
          alt: "Landing",
          caption: "Spacious landing (± 12 m²), you could set up a nice home office here.",
          url: "boven-slaapkamer-2-3.jpg",
        },
        {
          alt: "Balustrade",
          caption: "Looking down at the entrance from the landing.",
          url: "boven-slaapkamer-2-4.jpg",
        },
        {
          alt: "Bedroom 2",
          caption:
            "Directly to the left of the stairs you'll find the door to bedroom 2, a spacious room with a view of the forest to the south.",
          url: "boven-slaapkamer-2-5.jpg",
        },
        {
          alt: "Bedroom 2",
          caption: "View of the forest facing south.",
          url: "boven-slaapkamer-2-6.jpg",
        },
        {
          alt: "Bedroom 2",
          caption: "Taken from the window, looking toward the landing.",
          url: "boven-slaapkamer-2-7.jpg",
        },
      ],
    },
    {
      key: "slaapkamer-3",
      title: "Bedroom 3",
      description:
        "On the right side of the landing you'll find the door to bedroom 3, a spacious room with a view of the forest to the north.",
      photos: [
        {
          alt: "Bedroom 3",
          caption: "Spacious bedroom with a view of the forest to the north.",
          url: "slaapkamer-3-1.jpg",
        },
        {
          alt: "Bedroom 3",
          caption: "Light coming through the big window overlooking the forest.",
          url: "slaapkamer-3-2.jpg",
        },
        {
          alt: "Bedroom 3",
          caption: "View of the landing with the balustrade and the stairs going down.",
          url: "slaapkamer-3-3.jpg",
        },
        {
          alt: "Bedroom 3",
          caption: "View of the forest facing north.",
          url: "slaapkamer-3-4.jpg",
        },
      ],
    },
    {
      key: "badkamer",
      title: "Bathroom",
      description:
        "Back on the ground floor, you'll find the bathroom on your right as you come in. This is also where the washing machine hookup is.",
      photos: [
        {
          alt: "Bathroom",
          caption: "Door to the bathroom, directly to the right of the front door.",
          url: "badkamer-1.jpg",
        },
        {
          alt: "Bathroom",
          caption: "Sink with built-in lighting, the window faces east.",
          url: "badkamer-2.jpg",
        },
        {
          alt: "Bathroom",
          caption: "Looking into the nook with the shower.",
          url: "badkamer-3.jpg",
        },
        {
          alt: "Bathroom",
          caption: "Looking from the shower toward the bathroom door.",
          url: "badkamer-4.jpg",
        },
        {
          alt: "Bathroom",
          caption:
            "Corner with the shower, in the cabinet behind the shower you'll find the water pump that supplies the house with water.",
          url: "badkamer-5.jpg",
        },
        {
          alt: "Bathroom",
          caption: "Light coming through the window overlooking the garden to the east.",
          url: "badkamer-6.jpg",
        },
      ],
    },
    {
      key: "perceel",
      title: "The plot",
      description:
        "The spacious 2,390 m² plot around the house offers plenty of room for gardening, playing, and relaxing.",
      photos: [
        {
          alt: "Plot",
          caption: "View of the house from (above) the unpaved road it sits on.",
          url: "aerial-photo-hero_3.jpg",
        },
        {
          alt: "Plot",
          caption:
            "Here you see the house from the south side, on the right you can spot the guest cabin.",
          url: "aerial-photo-hero_1.jpg",
        },
        {
          alt: "Plot",
          caption: "From this angle you can see the unpaved road and the large workshop shed.",
          url: "aerial-photo-hero_2.jpg",
        },
        {
          alt: "Plot",
          caption: "Another look toward the unpaved road, roughly facing northwest.",
          url: "aerial-photo-hero_4.jpg",
        },
      ],
    },
  ],
} as const;
