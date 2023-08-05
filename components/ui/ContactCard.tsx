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
    <div class="flex flex-col p-12 border border-[#66AF27] bg-white container m-auto w-[546px] bg-contact bg-no-repeat py-14 px-12">
      <div class="flex flex-col justify-center items-center mb-14">
        <Icon id="Phone" strokeWidth={0.1} size={30} class="text-center" />
        <p class="text-xl color-[#303030] text-center font-medium mb-3">
          Telefone
        </p>
        <div class="flex flex-row justify-center">
          {phone.number.map((number) => (
            <p class="text-xl color-[#303030] font-semibold mr-7 last:mr-0">
              {number}
            </p>
          ))}
        </div>
      </div>
      <div class="flex flex-col justify-center items-center mb-14">
        <Icon
          id="WhatsApp"
          strokeWidth={0.1}
          size={30}
          class="text-center color-[#964B00]"
        />
        <p class="text-xl color-[#303030] text-center font-medium mb-3">
          Whatsapp
        </p>
        <div class="flex flex-row justify-center">
          {whats.number.map((number) => (
            <p class="text-xl color-[#303030] font-semibold mr-7 last:mr-0">
              {number}
            </p>
          ))}
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <Icon id="Email" strokeWidth={0.1} size={30} class="" />
        <p class="text-xl color-[#303030] font-medium mb-3">E-mail</p>
        <div class="flex flex-row justify-center">
          {email.text.map((text) => (
            <p class="text-xl color-[#303030] font-semibold mr-7 last:mr-0">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
