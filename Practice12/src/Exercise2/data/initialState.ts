import type { FormState } from "../types/types";

export const initialState: FormState = {
  name: "",
  email: "",
  newsletter: false,
  errors: {
    name: "",
    email: "",
  },
};
