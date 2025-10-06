export interface FormErrors {
  name: string;
  email: string;
}

export interface FormState {
  name: string;
  email: string;
  newsletter: boolean;
  errors: FormErrors;
}

export type FormAction =
  | { type: "SET_NAME"; value: string }
  | { type: "SET_EMAIL"; value: string }
  | { type: "SET_NEWSLETTER"; value: boolean }
  | { type: "SET_ERRORS"; errors: FormErrors }
  | { type: "RESET" };
