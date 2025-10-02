import { FormData } from "./FormData";

export interface ReviewProps {
  formData: FormData;
  onSubmit: () => void;
  onBack: () => void;
}
