import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Image {
  srcDesktop: LiveImage;
  srcMobile?: LiveImage;
  href: string;
  alt: string;
}

export interface Props {
  images: Image[];
}

export default function ImageGallery({ images }: Props) {
  return (
    <div class="flex container max-w-7xl justify-between items-center flex-wrap m-auto mt-24">
      {images?.map((image) => (
        <img
          src={image?.srcDesktop}
          alt={image?.alt}
          href={image?.href}
          class="mb-11"
        />
      ))}
    </div>
  );
}
