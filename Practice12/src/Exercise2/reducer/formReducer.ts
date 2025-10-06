import { initialState } from "../data/initialState";
import type { FormAction, FormState } from "../types/types";

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.value,
        errors: { ...state.errors, name: "" },
      };

    case "SET_EMAIL":
      return {
        ...state,
        email: action.value,
        errors: { ...state.errors, email: "" },
      };

    case "SET_NEWSLETTER":
      return { ...state, newsletter: action.value };

    case "SET_ERRORS":
      return { ...state, errors: action.errors };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
