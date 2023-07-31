import { isSection, Section } from "$live/blocks/section.ts";

export interface Props {
  leftContent: Section;
  rightContent: Section;
  className?: string;
}

export default function ContainerFlexRow(
  { leftContent, rightContent, className }: Props,
) {
  return (
    <div class={`flex md:flex-row ${className && className}`}>
      {leftContent}
      {rightContent}
    </div>
  );
}
