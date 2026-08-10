import React from "react";

type InputProps = {
  label?: string; // Optional label
  placeholder: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  disabled = false,
  className = "",
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="mb-1 font-medium">
          {label}
        </label>
      )}
      <input
        id={name || ""}
         name={name || ""}
        type={type}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`outline-none border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
      />
    </div>
  );
};

export default Input;
