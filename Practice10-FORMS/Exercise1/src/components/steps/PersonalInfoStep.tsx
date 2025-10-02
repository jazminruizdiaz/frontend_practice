import React from "react";
import { StepProps } from "../../types/StepsProps";

const PersonalInfoStep: React.FC<StepProps> = ({
  register,
  errors,
  formData,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="form-step step--personal-info">
      <div className="form-field">
        <label className="form-field__label">Name</label>
        <input
          {...register("name")}
          defaultValue={formData.name}
          placeholder="Name"
          className="form-field__input"
        />
        {errors.name && (
          <p className="form-field__error">{errors.name.message}</p>
        )}
      </div>

      <div className="form-field">
        <label className="form-field__label">Age</label>
        <input
          {...register("age")}
          defaultValue={formData.age}
          placeholder="Age"
          className="form-field__input"
        />
        {errors.age && (
          <p className="form-field__error">{errors.age.message}</p>
        )}
      </div>

      <div className="form-field">
        <label className="form-field__label">Email</label>
        <input
          {...register("email")}
          defaultValue={formData.email}
          placeholder="Email"
          className="form-field__input"
        />
        {errors.email && (
          <p className="form-field__error">{errors.email.message}</p>
        )}
      </div>

      <div className="step--personal-info__buttons">
        <button type="submit" className="btn btn--primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoStep;
