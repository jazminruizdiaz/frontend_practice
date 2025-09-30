import React from "react";
import { Link } from "react-router-dom";
import "../../styles/button.css";
import type { ButtonVariant } from "../types/ButtonVariant";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  onClick?: () => void;
  to?: string;
  className?: string;
  disabled?: boolean;
  state?: any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  onClick,
  to,
  className = "",
  state,
}) => {
  const baseClass = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={baseClass} state={state}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
