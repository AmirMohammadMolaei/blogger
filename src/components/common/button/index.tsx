"use client";
import { FC, ReactNode } from "react";

const RadiusProperty = {
  full: "rounded-full",
};

interface ButtonProps {
  children: ReactNode;
  types?: "bordered" | "fill";
  className?: string;
  radius: keyof typeof RadiusProperty;
}

const Button: FC<ButtonProps> = ({ children, className, radius }) => {
  return (
    <button
      className={`w-fit h-fit cursor-pointer text-base 
        font-sans rounded-full px-6 py-2 ${className} ${RadiusProperty[radius]}`}
    >
      {children}
    </button>
  );
};

export default Button;
