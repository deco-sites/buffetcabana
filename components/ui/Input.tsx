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
        <label htmlFor={id} class="">
          {label}
        </label>
        <span class="text-red-500 text-[11px] leading-3">{error}</span>
      </div>
      <input
        id={id}
        type={type}
        ref={inputRef}
        class={`w-full border border-color-[#151515] rounded-3xl py-3 px-4 ${
          className && className
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}
