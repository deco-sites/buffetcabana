import { forwardRef } from "preact/compat";

import type { ComponentType, JSX } from "preact";

import Spinner from "./Spinner.tsx";

export type Props =
  & Omit<JSX.IntrinsicElements["button"], "as" | "size" | "loading">
  & {
    as?: keyof JSX.IntrinsicElements | ComponentType;
    variant?: keyof typeof variants;
    loading?: boolean;
  };

const variants = {
  addToCart:
    "px-3 rounded-md bg-success h-[45px] font-white text-default-inverse text-sm font-bold uppercase border-transparent hover:bg-success-hover transition-colors",
  closeOrder:
    "px-3 rounded-md bg-success h-11 font-white text-default-inverse text-button uppercase border-transparent hover:bg-success-hover transition-colors",
  primary:
    "px-3 rounded-md bg-primary font-button text-white text-default-inverse border-transparent hover:bg-primary-hover hover:border-interactive active:bg-interactive active:text-default-inverse active:border-transparent disabled:text-subdued disabled:bg-interactive-inverse",
  secondary:
    "px-3 rounded-md bg-interactive-inverse font-button text-button border-default hover:bg-hover active:bg-interactive active:text-interactive-inverse disabled:border-default disabled:text-subdued disabled:bg-interactive-inverse",
  tertiary:
    "px-3 rounded-md bg-interactive-inverse font-button text-button border-transparent hover:bg-hover active:border-interactive disabled:border-transparent disabled:text-subdued",
  icon: "bg-transparent text-default border-transparent disabled:text-subdued",
  variantSelector:
    "px-2 rounded-md h-8 bg-grey-100 font-button text-sm border border-transparent hover:bg-white",
  default: "",
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = "default",
  as = "button",
  type = "button",
  class: _class = "",
  children,
  loading,
  disabled,
  ...props
}, ref) => {
  const Component = as as ComponentType<
    {
      disabled?: boolean | JSX.SignalLike<boolean | undefined>;
      className: string;
      type: string | JSX.SignalLike<string | undefined>;
    }
  >;

  const styles = variants[variant];

  return (
    <Component
      {...props}
      className={`${_class} inline-flex items-center h-11 justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transition-colors duration-150 ease-in border-0 focus:outline-none ${styles}`}
      disabled={disabled || loading}
      ref={ref}
      type={type}
    >
      {loading === true || (variant === "addToCart" && disabled === true)
        ? <Spinner size={24} />
        : children}
    </Component>
  );
});

export default Button;
