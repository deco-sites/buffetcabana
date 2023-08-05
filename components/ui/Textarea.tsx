import { Ref, useRef } from "preact/hooks";

export interface TextareaProps {
  id: string;
  placeholder: string;
  label: string;
  textAreaRef: Ref<HTMLTextAreaElement>;
  error: string;
  type: "checkbox" | "text" | "textarea";
  className?: string;
}

export default function Textarea({
  id,
  placeholder,
  label,
  textAreaRef,
  error,
  type,
  className,
}: TextareaProps) {
  return (
    <div class="w-full">
      <div class="">
        <label htmlFor={id} class="text-lg font-bold">
          {label}
        </label>
        <span class="text-red-500 text-[11px] leading-3">{error}</span>
      </div>
      <textarea
        id={id}
        type={type}
        ref={textAreaRef}
        class={`w-full border border-[#151515] rounded-3xl py-3 px-4 h-52 mb-4 bg-[#d9d9d9]/10 text-[#858585] text-base${
          className && className
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}
