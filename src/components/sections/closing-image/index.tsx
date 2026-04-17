import { BlurImage } from "@/components/BlurImage";
import { closingImage } from "@/content/images";

export function ClosingImage(): React.ReactNode {
  if (!closingImage) return null;

  return (
    <div className="relative aspect-[2/1] w-full">
      <BlurImage
        src={closingImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient that bleeds into the dark footer */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1c2a22] to-transparent" />
    </div>
  );
}
