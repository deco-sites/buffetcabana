export interface Props {
  pacotes: string[];
}

export default function Pacotes({ pacotes }: Props) {
  return (
    <ul class="flex flex-wrap flex-row justify-around">
      {pacotes?.map((pacote) => <li class="w-72 px-1 ">{pacote}</li>)}
    </ul>
  );
}
