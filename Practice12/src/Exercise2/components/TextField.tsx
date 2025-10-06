interface TextFieldProps {
  label: string;
  type?: "text" | "email";
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  name: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  type = "text",
  value,
  error,
  placeholder,
  onChange,
  name,
}) => {
  return (
    <div className={`form__field form__field--${name}`}>
      <label className="form__label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`form__input ${error ? "form__input--error" : ""}`}
        placeholder={placeholder}
      />
      {error && <p className="form__error">{error}</p>}
    </div>
  );
};
