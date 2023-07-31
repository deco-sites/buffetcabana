import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  images: Posts[];
}

export interface Posts {
  src: LiveImage;
  alt: string;
  href: string;
}

export default function Instafeed({ images }: Props) {
  return (
    <ul class="flex flex-row justify-center container m-auto">
      {images.map((image) => (
        <a class="block mr-5" href={image.href}>
          <Image
            class="self-center"
            src={image.src}
            alt={image.alt}
            width={220}
            height={220}
          />
        </a>
      ))}
    </ul>
  );
}
