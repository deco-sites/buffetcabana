import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { isSection, Section } from "$live/blocks/section.ts";
import { renderSection } from "$live/pages/LivePage.tsx";


export interface Props {
  logo: {
    src: LiveImage;
    alt: string;
  };
  list: {
    links: ListLinks
  }
  section: Section
}

export interface ListLinks {
  institucional: {
    title: string;
    list: links[];
  };
  cardapios: {
    title: string;
    list: links[];
  };
  pacotes: {
    title: string;
    list: links[];
  };
}

export interface links {
  text: string;
  href: string;
  target: "none" | "_blank";
}

export default function Footer({
  logo,
  list,
  section
}: Props) {
  const { title: titleInstitucional, list: listInstitucional } = list.links.institucional;
  const { title: titleCardapios, list: listCardapios } = list.links.cardapios;
  const { title: titlePacotes, list: listPacotes } = list.links.pacotes;
  const { src, alt } = logo

  return (
    <footer class="flex flex-col md:justify-center justify-between items-center bg-footer bg-[#F7F7F7] bg-no-repeat h-[950px] bg-center">
      <div class="block mb-[92px]">{renderSection(section, 500)}</div>
      <div class="flex flex-col md:flex-row md:justify-center justify-between items-center">
      {logo && (
        <Image
          class="self-center mx-14"
          src={src}
          alt={alt}
          width={296}
          height={138}
        />
      )}
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex flex-col mr-16">
          <h4 class="text-xl text-[#303030]">{titleInstitucional}</h4>
          <ul class="flex flex-col">
            {listInstitucional.map((link) => (
              <li class="block">
                <a
                  class="text-lg text-[#303030]"
                  href={link.href}
                  target={link.target}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="flex flex-col mr-16">
          <h4 class="text-xl text-[#303030]">{titleCardapios}</h4>
          <ul class="flex flex-col">
            {listCardapios.map((link) => (
              <li class="block">
                <a
                  class="text-lg text-[#303030]"
                  href={link.href}
                  target={link.target}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="flex flex-col mr-16">
          <h4 class="text-xl text-[#303030]">{titlePacotes}</h4>
          <ul class="flex flex-col">
            {listPacotes.map((link) => (
              <li class="block">
                <a
                  class="text-lg text-[#303030]"
                  href={link.href}
                  target={link.target}
                >
                  {link.text}
                </a>
                {}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
}
