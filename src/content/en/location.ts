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
  title: "Location",
  tabs: [
    {
      key: "natuur",
      title: "Discover the forests and lakes of Småland",
      paragraphs: [
        [
          "Right near Möckeln (less than 10 minutes by car), a huge lake of no less than 48 square kilometers. Here you'll find beautiful canoe routes, swimming spots with the most gorgeous sunsets, and hundreds of little islands to explore.",
          { br: true },
          { br: true },
          "In Sweden you're invited to enjoy nature, thanks to the famous ",
          { italic: "allemansrätten" },
          " you're allowed to pitch your tent and grill your own sausages in most places.",
        ],
      ],
    },
    {
      key: "voorzieningen",
      title: "Amenities nearby",
      paragraphs: [
        [
          "In the village you'll find a small supermarket for the daily basics. In Älmhult (12 minutes by car) you can do a bigger grocery run. This is also where you'll find schools (including an international school) and a GP.",
          { br: true },
          { br: true },
          "In Ljungby (30 minutes by car) or Växjö (40 minutes by car) you'll find the nearest hospitals.",
        ],
      ],
    },
    {
      key: "avonturen",
      title: "Endless outdoor adventures",
      paragraphs: [
        [
          "Out here in Småland, you hang up the streamers yourself. Whether you love running, swimming, fishing, cycling, camping, hiking, kayaking, or anything in between, this is the place to go wild.",
          { br: true },
          { br: true },
          "With a bit of luck you might even spot moose, deer, or other common wildlife.",
        ],
      ],
    },
    {
      key: "bereikbaar",
      title: "Easy to reach from Copenhagen/Malmö ✈️",
      paragraphs: [
        [
          "Despite being tucked away in quiet, fairytale-like Småland, urban life isn't far off. In 2.5 hours you can drive from Copenhagen airport to your little house in the woods.",
          { br: true },
          { br: true },
          "Nearby Älmhult (12 minutes by car) also has a direct train connection to CPH airport.",
        ],
      ],
    },
    {
      key: "weten",
      title: "Good to know",
      paragraphs: [
        [
          "The house is close to the main road between Malmö and Växjö. You can hear the road from the garden, but not from inside the house, and as far as we're concerned, the location more than makes up for it.",
        ],
      ],
    },
  ],
};

export type LocationTabKey = (typeof location.tabs)[number]["key"];
