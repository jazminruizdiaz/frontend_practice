import React from "react";
import "../../styles/text-field.css";

interface TextFieldProps {
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  rows?: number;
  name?: string;
  required?: boolean;
  label?: string;
  className?: string;
  type?: "text" | "textarea";
  id?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  placeholder,
  rows = 3,
  name,
  required = false,
  label,
  className = "",
  type = "text",
  id,
}) => {
  const inputId = id || name;

  return (
    <div className={`text-field ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-field__label">
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className="text-field__textarea"
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="text-field__input"
        />
      )}
    </div>
  );
};

export default TextField;
