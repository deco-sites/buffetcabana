import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  phone: {
    number: string[];
  };
  whats: {
    number: string[];
  };
  email: {
    text: string[];
  };
}

export default function ContactCard({ phone, whats, email }: Props) {
  return (
    <div class="flex flex-col p-12 border border-[#66AF27] bg-white container m-auto">
      <div class="flex flex-col">
        <Icon id="WhatsApp" strokeWidth={0.1} size={30} class="" />
        <p class="text-xl color-[#303030]">Telefone</p>
        <div class="flex flex-row justify-center">
          {phone.number.map((number) => (
            <p class="text-2xl color-[#303030] font-semibold mr-7 last:mr-0">
              {number}
            </p>
          ))}
        </div>
      </div>
      <div class="flex flex-col">
        <Icon id="WhatsApp" strokeWidth={0.1} size={30} class="" />
        <p class="text-xl color-[#303030]">Whatsapp</p>
        <div class="flex flex-row justify-center">
          {whats.number.map((number) => (
            <p class="text-2xl color-[#303030] font-semibold mr-7 last:mr-0">
              {number}
            </p>
          ))}
        </div>
      </div>
      <div class="flex flex-col">
        <Icon id="WhatsApp" strokeWidth={0.1} size={30} class="" />
        <p class="text-xl color-[#303030]">E-mail</p>
        <div class="flex flex-row justify-center">
          {email.text.map((text) => (
            <p class="text-2xl color-[#303030] font-semibold mr-7 last:mr-0">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
