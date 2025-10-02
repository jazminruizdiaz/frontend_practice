import React from "react";
import { StepProps } from "../../types/StepsProps";

const AddressStep: React.FC<StepProps> = ({
  register,
  errors,
  formData,
  onSubmit,
  onBack,
}) => {
  return (
    <form onSubmit={onSubmit} className="form-step step--adress">
      <div className="form-field">
        <label className="form-field__label"> Country</label>
        <input
          {...register("country")}
          defaultValue={formData.country}
          placeholder="Country"
          className="form-field__input"
        />
        {errors.country && (
          <p className="form-field__error">{errors.country.message}</p>
        )}
      </div>

      <div className="form-field">
        <label className="form-field__label">City</label>
        <input
          {...register("city")}
          defaultValue={formData.city}
          placeholder="City"
          className="form-field__input"
        />
        {errors.city && (
          <p className="form-field__error">{errors.city.message}</p>
        )}
      </div>

      <div className="form-field">
        <label className="form-field__label">ZIP Code</label>
        <input
          {...register("zip")}
          defaultValue={formData.zip}
          placeholder="ZIP Code (ej: 90210)"
          className="form-field__input"
        />
        {errors.zip && (
          <p className="form-field__error">{errors.zip.message}</p>
        )}
      </div>

      <div className="step--address__buttons">
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

export default AddressStep;
