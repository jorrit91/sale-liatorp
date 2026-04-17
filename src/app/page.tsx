import { Amenities } from "@/components/sections/amenities";
import { BasicInfo } from "@/components/sections/basic-info";
import { BuyingProcess } from "@/components/sections/buying-process";
import { ClosingImage } from "@/components/sections/closing-image";
import { Costs } from "@/components/sections/costs";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { Slideshow } from "@/components/sections/slideshow";
import { Separator } from "@/components/ui/separator";
import { WinterTeaser } from "@/components/WinterTeaser";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <BasicInfo />
      <Separator />
      <Slideshow />
      <Separator />
      <Location />
      <Costs />
      <Separator />
      <Amenities />
      <BuyingProcess />
      <ClosingImage />
      <Footer />
      <WinterTeaser />
    </main>
  );
}
