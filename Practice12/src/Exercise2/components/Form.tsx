import { useReducer } from "react";
import { TextField } from "./TextField";
import { formReducer } from "../reducer/formReducer";
import { initialState } from "../data/initialState";
import { validateForm } from "../utils/validateForm";

export default function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handleSubmit = () => {
    const errors = validateForm(state);

    if (errors.name || errors.email) {
      dispatch({ type: "SET_ERRORS", errors });
      return;
    }

    alert("Form has been successfully sent");

    console.log("data", {
      name: state.name,
      email: state.email,
      newsletter: state.newsletter,
    });

    handleReset();
  };

  return (
    <div className="form">
      <div className="form__container">
        <div className="form__header">
          <h1 className="form__title">Form</h1>
        </div>

        <div className="form__content">
          <TextField
            name="name"
            label="Name"
            value={state.name}
            error={state.errors.name}
            placeholder="Input your name"
            onChange={(value) => dispatch({ type: "SET_NAME", value })}
          />

          <TextField
            name="email"
            label="Email"
            type="email"
            value={state.email}
            error={state.errors.email}
            placeholder="example@.com"
            onChange={(value) => dispatch({ type: "SET_EMAIL", value })}
          />

          <label>
            <input
              type="checkbox"
              checked={state.newsletter}
              onChange={(e) =>
                dispatch({ type: "SET_NEWSLETTER", value: e.target.checked })
              }
            />
            <span>Subscribe to newsletter </span>
          </label>
        </div>

        <div className="form__actions">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
