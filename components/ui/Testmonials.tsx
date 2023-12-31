import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "apps/website/components/Image.tsx";
import { Section } from "$live/blocks/section.ts";
import { renderSection } from "$live/pages/LivePage.tsx";
export interface Testimonials {
  photo: {
    src: LiveImage;
    alt: string;
  };
  name: string;
  occupation: string;
  testimonial: string;
}

export interface Props {
  testimonals: Testimonials[];
}

export default function Testimonials({ testimonals }: Props) {
  return (
    <div class="container m-auto max-w-7xl mt-10">
      <ul class="flex md:flex-row mt-14 gap-14">
        {testimonals.map(({ photo, name, occupation, testimonial }) => (
          <li class="flex flex-col border border-[#D9D9D9] p-6">
            <div class="flex mb-5">
              <Image
                class="self-center mr-4 rounded-[50%]"
                src={photo.src}
                alt={photo.alt}
                width={70}
                height={70}
              />
              <div class="flex flex-col">
                <h5 class="text-xl mb-2">{name}</h5>
                <h6 class="text-base">{occupation}</h6>
              </div>
            </div>
            <p class="text-lg">{testimonial}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
