import React from "react";

type ButtonProps = {
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = React.memo(
  ({
    onClick,
    type = "button",
    className = "",
    disabled = false,
    children,
  }: ButtonProps) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded bg-blue-600 text-white cursor-pointer disabled:opacity-50 ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export default Button;
