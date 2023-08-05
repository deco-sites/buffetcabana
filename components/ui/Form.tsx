import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import type { JSX } from "preact";
import Button from "$store/components/ui/Button.tsx";
import Input from "$store/components/ui/Input.tsx";
import Textarea from "$store/components/ui/Textarea.tsx";
import RichText from "$store/components/seo/RichText.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Section } from "$live/blocks/section.ts";
import { useRef } from "preact/hooks";
import { renderSection } from "$live/pages/LivePage.tsx";

const subscribe = Runtime.create(
  "deco-sites/std/actions/vtex/newsletter/subscribe.ts",
);

export interface Props {
  title: HTML;
  section: Section;
}

export default function Form({ title, section }: Props) {
  const loading = useSignal(false);
  const errors = useSignal({
    name: "",
    email: "",
    LGPD: "",
    phone: "",
    whats: "",
    info: "",
    guests: "",
    date: "",
  });
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const whatsInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const infoInputRef = useRef<HTMLInputElement | null>(null);
  const guestsInputRef = useRef<HTMLInputElement | null>(null);
  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const textInputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      loading.value = true;
      const email = "teste";
      await subscribe({ email });
    } finally {
      loading.value = false;
    }
  };

  return (
    <div class="flex flex-col container m-auto max-w-7xl ">
      <RichText textSeo={title} />
      <div class="flex flex-row justify-between">
        <form onSubmit={handleSubmit} class="flex flex-col">
          <Input
            id="name"
            label="Nome:"
            placeholder="Thaise toth"
            inputRef={nameInputRef}
            error={errors.value.email}
            type="text"
            className="mb-9"
          />
          <div class="flex mb-9">
            <div class="mr-6">
              <Input
                id="phone"
                label="Telefone:"
                placeholder="(11) 99677-7004"
                inputRef={phoneInputRef}
                error={errors.value.phone}
                type="text"
              />
            </div>
            <div>
              <Input
                id="whats"
                label="WhatsApp:"
                placeholder="(11) 94761-2110"
                inputRef={whatsInputRef}
                error={errors.value.whats}
                type="text"
              />
            </div>
          </div>
          <Input
            id="email"
            label="E-mail:"
            placeholder="contato@buffetbacana.com.br"
            inputRef={emailInputRef}
            error={errors.value.email}
            type="text"
            className="mb-9"
          />
          <div class="flex mb-9">
            <div class="mr-6">
              <Input
                id="guests"
                label="Qtd. de Convidados:"
                placeholder="500"
                inputRef={guestsInputRef}
                error={errors.value.guests}
                type="text"
              />
            </div>
            <div>
              <Input
                id="date"
                label="Data do Evento:"
                placeholder="11/02/2023"
                inputRef={dateInputRef}
                error={errors.value.whats}
                type="text"
              />
            </div>
          </div>
          <Textarea
            id="text"
            label="Comentário ou Mensagem:"
            placeholder="Escreva aqui os principais pontos..."
            textAreaRef={textInputRef}
            error={errors.value.whats}
            type="textarea"
          />
          <Button
            type="Submit"
            class="w-52 rounded-3xl bg-[#16A232] text-lg text-white font-bold"
          >
            Enviar
          </Button>
        </form>
        <div class="block">{renderSection(section, 500)}</div>
      </div>
    </div>
  );
}
