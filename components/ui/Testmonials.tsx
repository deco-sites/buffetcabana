import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { isSection, Section } from "$live/blocks/section.ts";
export interface Testimonials {
  photo: LiveImage;
  name: string;
  occupation: string;
  testimonial: string;
}

export interface Props {
  title: Section;
  testimonals: Testimonials[];
}

export default function Testimonials({ testimonals }: Props) {
  return (
    <ul class="flex mr-14">
      {testimonals.map((testimonial) => (
        <li class="flex flex-col">
          <div class="flex">
            <img src={testimonial.photo} />
            <div class="flex flex-col">
              <h5>{testimonial.name}</h5>
              <h6>{testimonial.occupation}</h6>
            </div>
          </div>
          <p class="">{testimonial.testimonial}</p>
        </li>
      ))}
    </ul>
  );
}
