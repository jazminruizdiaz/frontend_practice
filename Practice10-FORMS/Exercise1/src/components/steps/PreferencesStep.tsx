import React from "react";
import { StepProps } from "../../types/StepsProps";
import { Category, ContactMethod } from "../../types/enums";

const PreferencesStep: React.FC<StepProps> = ({
  register,
  errors,
  formData,
  onSubmit,
  onBack,
}) => {
  return (
    <form onSubmit={onSubmit} className="form-step step--preferences">
      <fieldset className="step--preferences__group">
        <legend>Contact Method</legend>
        {Object.values(ContactMethod).map((method) => (
          <label key={method} className="step--preferences__option">
            <input
              type="radio"
              value={method}
              {...register("contactMethod")}
              defaultChecked={formData.contactMethod === method}
            />
            {method}
          </label>
        ))}
        {errors.contactMethod && (
          <p className="step--preferences__error">
            {errors.contactMethod.message}
          </p>
        )}
      </fieldset>

      <label className="step--preferences__checkbox">
        <input
          type="checkbox"
          {...register("newsletter")}
          defaultChecked={formData.newsletter}
        />
        Subscribe to newsletter
      </label>

      <label className="step--preferences__select">
        Category:
        <select {...register("category")} defaultValue={formData.category}>
          {Object.values(Category).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      {errors.category && (
        <p className="step--preferences__error">{errors.category.message}</p>
      )}

      <div className="step--preferences__buttons">
        <button type="button" onClick={onBack} className="btn btn--back">
          Back
        </button>
        <button type="submit" className="btn btn--primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default PreferencesStep;
