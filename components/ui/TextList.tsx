import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  texts: string[];
}

export default function TextList({ texts }: Props) {
  return (
    <ul class="flex flex-col flex-wrap max-h-80 container m-auto">
      {texts.map((text) => {
        <li class="flex">
          <Icon id="WhatsApp" strokeWidth={0.1} size={28} class="mr-1" />
          <p class="text-xl font-bold color-[#303030]">{text}</p>  
        </li>;
      })}
    </ul>
  );
}
