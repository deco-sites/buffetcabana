import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  logo: {
    src: LiveImage;
    alt: string;
  };
  texts: HTML[];
}

export default function OurWork({ logo, texts }: Props) {
  return (
    <div class="relative h-[1000px] container m-auto max-w-7xl">
      <Image
        class="self-center"
        src={logo.src}
        alt={logo.alt}
        width={412}
        height={194}
      />
      {texts.map((text) => {
        <p
          class="absolute top-0 left-0"
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </p>;
      })}
    </div>
  );
}
