export interface Props {
  pacotes: string[];
}

export default function Pacotes({ pacotes }: Props) {
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
    <ul class="flex flex-wrap flex-row justify-around container m-auto items-center">
      {pacotes?.map((pacote) => {
        const index: number = Math.floor(Math.random() * 9);
        return (
          <li class={`w-72 px-1 rounded-3xl ${colors[index]}`}>{pacote}</li>
        );
      })}
    </ul>
  );
}
