import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  instagram: {
    name: string;
    link: string;
  };
  images: Posts[];
}

export interface Posts {
  src: LiveImage;
  alt: string;
  href: string;
}

export default function Instafeed({ images, instagram }: Props) {
  return (
    <div class="container m-auto max-w-7xl">
      <div class="flex flex-row justify-center items-center mb-7">
        <Icon id="Instagram" size={37} class="text-center" />
        <a href={instagram.link} class="mx-5 text-[42px] font-bold text-[#964B00]">
          {instagram.name}
        </a>
        <p class="h-[32px] w-[37px] bg-panda bg-no-repeat bg-contain"></p>
      </div>
      <ul class="flex flex-row justify-center">
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
    </div>
  );
}
