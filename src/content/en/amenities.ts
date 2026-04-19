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
  title: "Amenities",
  tabs: [
    {
      key: "isolatie",
      title: "Insulation",
      body: [
        [
          "The house was built in 2012, which means it's well insulated and has modern heating options. This keeps costs down during the times you're not at the house.",
        ],
      ],
    },
    {
      key: "internet",
      title: "Internet",
      body: [
        [
          "In recent years, the house has been connected to the grid with a lightning-fast fiber connection.",
          { br: true },
          { br: true },
          "You can easily pick a subscription that fits your needs (up to 1000 Mbit/s up and down), and in Sweden you can even sign up for just 1 or 2 weeks at a time, handy if you only need internet when you're actually there!",
        ],
      ],
    },
    {
      key: "verwarming",
      title: "Heating",
      body: [
        [
          "The main heating is the air source heat pump in the living room. Cozier is the wood stove in the living room, which heats most of the house really well.",
          { br: true },
          { br: true },
          "On top of that, you can add extra heat to any room with the electric radiators that are installed throughout.",
        ],
      ],
    },
    {
      key: "water",
      title: "Water",
      warning: true,
      body: [
        [
          "Houses in the Swedish countryside have their own water source. Either a dug well a few meters deep or a drilled well that goes tens of meters into the ground.",
          { br: true },
          { br: true },
          "The water setup at this property needs to be modernized (budget €5,000 to €10,000), since the dug well can run dry in the summer when it stays dry for too long.",
        ],
      ],
    },
    {
      key: "riolering",
      title: "Sewage",
      body: [
        [
          "Sewage is also handled on the property itself. Everything collects in a three-chamber tank that gets emptied once a year by a company called SSAM (costs around €150).",
          { br: true },
          { br: true },
          "Toilet, taps, washing machine, and shower all work exactly like you're used to, once a year a truck comes by to empty the tank.",
        ],
      ],
    },
  ],
};

export type AmenityKey = (typeof amenities.tabs)[number]["key"];
