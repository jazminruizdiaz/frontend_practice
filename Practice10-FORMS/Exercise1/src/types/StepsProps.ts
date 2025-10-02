import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./FormData";

export interface StepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  formData: FormData;
  onSubmit: () => void;
  onBack?: () => void;
}
