import { Ref, useRef } from "preact/hooks";

export interface InputProps {
  id: string;
  placeholder: string;
  label: string;
  inputRef: Ref<HTMLInputElement>;
  error: string;
  type: "checkbox" | "text" | "textarea";
  className?: string;
}

export default function Input({
  id,
  placeholder,
  label,
  inputRef,
  error,
  type,
  className,
}: InputProps) {
  return (
    <div class="w-full">
      <div class="">
        <label htmlFor={id} class="text-lg font-bold">
          {label}
        </label>
        <span class="text-red-500 text-[11px] leading-3">{error}</span>
      </div>
      <input
        id={id}
        type={type}
        ref={inputRef}
        class={`w-full border border-[#151515] rounded-3xl py-3 px-4 h-11 bg-[#d9d9d9]/10 text-[#858585] text-base ${
          className && className
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}
