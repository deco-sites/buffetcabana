import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  textSeo: HTML;
}

export default function RichText({ textSeo }: Props) {
  return (
    <div
      class="container m-auto max-w-7xl mt-12 px-36"
      dangerouslySetInnerHTML={{ __html: textSeo }}
    >
    </div>
  );
}
