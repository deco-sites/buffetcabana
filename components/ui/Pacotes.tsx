import { Section } from "$live/blocks/section.ts";
import { renderSection } from "$live/pages/LivePage.tsx";

export interface Props {
  pacotes: string[];
}

export default function Pacotes({pacotes }: Props) {
  const colors = [
    "#964B00",
    "#F2B56B",
    "#303030",
    "#964B00",
    "#F2B56B",
    "#303030",
    "#964B00",
    "#F2B56B",
    "#303030",
  ];
  return (
    <div class="container m-auto max-w-7xl">
      <ul class="mt-12 flex flex-wrap flex-row justify-around container m-auto items-center max-w-4xl">
        {pacotes?.map((pacote) => {
          const index: number = Math.floor(Math.random() * 9);
          const color = `text-[${colors[index]}]`;
          const border = `border-[${colors[index]}]`;
          return (
            <li
              class={`w-72 px-1 py-3 rounded-[30px] ${color} ${border} border border-2 text-center mb-12 text-xl font-semibold`}
            >
              <span class="hidden text-[#964B00] text-[#F2B56B] text-[#303030] border-[#964B00] border-[#F2B56B] border-[#303030] "></span>
              {pacote}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
