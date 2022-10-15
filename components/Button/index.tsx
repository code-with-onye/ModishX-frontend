import { FC } from "react";
import { ButtonProps } from "./Buttontype";
import clsx from "clsx";

export const Button: FC<ButtonProps> = ({ children, variant, size }) => {
  return (
    <button
      className={clsx([
        "rounded-sm",
        variant === "primary" && "bg-primary-500 text-gray-100",
        variant === "secondary" && "bg-green-500 text-gray-100",
        size === "small" && "px-2  py-0.5",
        size === "medium" && "px-4 py-1",
        size === "large" && "px-6 py-2",
        size === "x-large" && "px-8 py-3",
      ])}
    >
      {children}
    </button>
  );
};
