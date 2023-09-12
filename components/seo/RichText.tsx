import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  textSeo: HTML;
  className?: string;
}

export default function RichText({ textSeo, className }: Props) {
  return (
    <div
      class={`container m-auto max-w-7xl mt-12 px-36 ${className}`}
      dangerouslySetInnerHTML={{ __html: textSeo }}
    >
    </div>
  );
}
