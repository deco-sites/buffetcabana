import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { isSection, Section } from "$live/blocks/section.ts";

export interface Props {
  logo: {
    src: LiveImage;
    alt: string;
  };
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
  institucional,
  cardapios,
  pacotes,
}: Props) {
  const { title: titleInstitucional, list: listInstitucional } = institucional;
  const { title: titleCardapios, list: listCardapios } = cardapios;
  const { title: titlePacotes, list: listPacotes } = pacotes;

  return (
    <footer class="flex flex-col md:flex-row justify-between bg-footer bg-[#F7F7F7] bg-no-repeat h-[950px] bg-center">
      {logo && (
        <Image
          class="self-center mx-14"
          src={logo.src}
          alt={logo.alt}
          width={296}
          height={138}
        />
      )}
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex flex-col mr-16">
          <h4 class="text-xl text-[#303030]">{titleInstitucional}</h4>
          <ul class="flex flex-col">
            {listInstitucional.map((link) => {
              <li class="block">
                <a
                  class="text-lg text-[#303030]"
                  href={link.href}
                  target={link.target}
                >
                  {link.text}
                </a>
              </li>;
            })}
          </ul>
        </div>
        <div class="flex flex-col mr-16">
          <h4 class="text-xl text-[#303030]">{titleCardapios}</h4>
          <ul class="flex flex-col">
            {listCardapios.map((link) => {
              <li class="block">
                <a
                  class="text-lg text-[#303030]"
                  href={link.href}
                  target={link.target}
                >
                  {link.text}
                </a>
              </li>;
            })}
          </ul>
        </div>
        <div class="flex flex-col mr-16">
          <h4 class="text-xl text-[#303030]">{titlePacotes}</h4>
          <ul class="flex flex-col">
            {listPacotes.map((link) => {
              <li class="block">
                <a
                  class="text-lg text-[#303030]"
                  href={link.href}
                  target={link.target}
                >
                  {link.text}
                </a>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
