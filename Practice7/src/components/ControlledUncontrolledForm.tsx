import React, { useState, useRef } from "react";

const ControlledUncontrolledForm: React.FC = () => {
  const [controlledValue, setControlledValue] = useState<string>("");
  const uncontrolledInput = useRef<HTMLInputElement>(null);

  const handleControlledChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setControlledValue(event.target.value);
  };

  const handleSubmit = () => {
    const uncontrolledValue = uncontrolledInput.current?.value || "";
    console.log("Controlled Input: ", controlledValue);
    console.log("Uncontrolled Input: ", uncontrolledValue);
  };

  return (
    <div className="form">
      <div className="form__group">
        <label htmlFor="controlled" className="form__label">
          Controlled Input
        </label>
        <input
          id="controlled"
          type="text"
          className="form__input"
          value={controlledValue}
          onChange={handleControlledChange}
        />
      </div>

      <div className="form__group">
        <label htmlFor="uncontrolled" className="form__label">
          Uncontrolled Input
        </label>
        <input
          id="uncontrolled"
          type="text"
          className="form__input"
          ref={uncontrolledInput}
        />
      </div>

      <button type="button" onClick={handleSubmit}>
        Log Values
      </button>
    </div>
  );
};

export default ControlledUncontrolledForm;
