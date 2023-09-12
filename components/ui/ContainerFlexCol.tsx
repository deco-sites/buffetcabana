import { isSection, Section } from "$live/blocks/section.ts";

export interface Props {
  firstContent: Section;
  secondContent: Section;
  className?: string;
}

export default function ContainerFlexCol(
  { firstContent, secondContent, className }: Props,
) {
  return (
    <div
      class={`flex md:flex-col ${
        className && className
      } container m-auto max-w-7xl`}
    >
      {firstContent}
      {secondContent}
    </div>
  );
}
