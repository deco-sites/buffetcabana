import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

/**
 * @title Itens do menu
 * @description Itens mostrados no menu
 */
export interface menuItems {
  title: string;
  href: string;
  highlight?: boolean;
}

/**
 * @title Propriedades do header
 * @description Popule o header com os seus elementos
 */

export interface Props {
  /**
   * @title Itens do menu a esquerda no desktop
   * @description Adicione o link para uma página do seu site
   */
  menuLeftItems?: menuItems[];
  /**
   * @title Logo
   * @description Adicione o logo do seu site
   */
  logo?: {
    src: LiveImage;
    alt: string;
  };
  /**
   * @title Itens do menu a direita no desktop
   * @description Adicione o link para uma página do seu site
   */
  menuRightItems?: menuItems[];
}

export default function Header({ menuLeftItems, logo, menuRightItems }: Props) {
  return (
    <header class="flex flex-row justify-center container m-auto items-center py-4">
      <nav>
        <ul class="flex flex-row">
          {menuLeftItems?.map((item) => (
            <li
              class={`mr-14 text-2xl text-black capitalize last:mx-0 ${
                item.highlight ? "bold" : ""
              }`}
              href={item.href}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      {logo && (
        <Image
          class="self-center mx-14"
          src={logo.src}
          alt={logo.src}
          width={200}
          height={94}
        />
      )}
      <nav>
        <ul class="flex flex-row">
          {menuRightItems?.map((item) => (
            <li
              class={`mr-14 text-2xl text-black capitalize last:mx-0 ${
                item.highlight ? "bold" : ""
              }`}
              href={item.href}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
