import { FC } from "react";
import { ButtonProps } from "./Buttontype";
import clsx from "clsx";

const ButtonPrimary: FC<ButtonProps> = ({ children, variant }) => {
  let user = "20";
  return (
    <button className={clsx(variant === "primary" && "bg-blue-600")}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
