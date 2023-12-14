import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Props {
  srcDesktop: LiveImage;
  srcMobile: LiveImage;
  href: string;
  alt: string;
  preload: boolean;
}

export default function Banner({
  srcDesktop,
  srcMobile,
  href,
  alt,
  preload,
}: Props) {
  return (
    <a href={href}>
      <Picture preload={preload} class="w-full h-auto">
        <Source
          src={srcDesktop}
          width={360}
          height={120}
          media="(max-width: 767px)"
        />
        <Source
          src={srcDesktop}
          width={1920}
          height={469}
          media="(min-width: 767px)"
        />
        <img class="w-full" src={srcDesktop} alt={alt} />
      </Picture>
    </a>
  );
}
