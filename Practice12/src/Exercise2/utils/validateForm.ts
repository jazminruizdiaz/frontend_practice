import type { FormState } from "../types/types";

export function validateForm(state: FormState): {
  name: string;
  email: string;
} {
  const errors = { name: "", email: "" };

  if (!state.name.trim()) {
    errors.name = "Name is required";
  }

  if (!state.email.trim()) {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    !emailRegex.test(state.email)
      ? (errors.email = "Invalid email format")
      : "";
  }

  return errors;
}
