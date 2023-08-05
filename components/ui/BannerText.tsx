import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  banner: {
    src: LiveImage;
    alt: string;
  };
  text: HTML;
  /**
   * @title Defina a direção dos elementos
   * @description Normal (imagem + texto) Inverted (texto + imagem)
   */
  direction: "normal" | "inverted";
}

export default function BannerText({ banner, text, direction }: Props) {
  const { src, alt } = banner;
  return (
    <div
      class={`flex justify-center container m-auto max-w-7xl gap-14 ${
        direction === "normal"
          ? "flex-col md:flex-row"
          : "flex-col-reverse md:flex-row-reverse"
      }`}
    >
      <Image class="self-center" src={src} alt={alt} width={600} height={476} />
      <div class="" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
}
