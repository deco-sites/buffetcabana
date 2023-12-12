import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  textSeo: HTML;
  className?: string;
  button?: callToAction;
}

export interface callToAction  {
  label: string;
  href: string;
}

export default function RichText({ textSeo, className, button }: Props) {
  return (
    <div
      class={`container m-auto max-w-7xl mt-12 px-36 ${className}`}
      dangerouslySetInnerHTML={{ __html: textSeo }}
    >
    { button && (
      <a
          href={button.href}
          class="w-52 rounded-3xl bg-[#16A232] text-lg text-white font-bold"
        >
          {button.label}
      </a>
    )}
    
    </div>
  );
}
