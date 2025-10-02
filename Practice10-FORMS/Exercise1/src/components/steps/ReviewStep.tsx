import React from "react";
import { ReviewProps } from "../../types/ReviewProps";

const ReviewStep: React.FC<ReviewProps> = ({ formData, onSubmit, onBack }) => {
  return (
    <form onSubmit={onSubmit} className="form-step">
      <h3 className="form-step__title">Data Review</h3>

      <div className="review">
        <div className="review__section">
          <h4 className="review__section-title">Personal Information</h4>
          <div className="review__item">
            <span className="review__label">Name:</span>
            <span className="review__value">{formData.name}</span>
          </div>
          <div className="review__item">
            <span className="review__label">Age:</span>
            <span className="review__value">{formData.age}</span>
          </div>
          <div className="review__item">
            <span className="review__label">Email:</span>
            <span className="review__value">{formData.email}</span>
          </div>
        </div>

        <div className="review__section">
          <h4 className="review__section-title">Address</h4>
          <div className="review__item">
            <span className="review__label">Country:</span>
            <span className="review__value">{formData.country}</span>
          </div>
          <div className="review__item">
            <span className="review__label">City:</span>
            <span className="review__value">{formData.city}</span>
          </div>
          <div className="review__item">
            <span className="review__label">Zip Code:</span>
            <span className="review__value">{formData.zip}</span>
          </div>
        </div>

        <div className="review__section">
          <h4 className="review__section-title">Preferences</h4>
          <div className="review__item">
            <span className="review__label">Contact:</span>
            <span className="review__value">{formData.contactMethod}</span>
          </div>
          <div className="review__item">
            <span className="review__label">Newsletter:</span>
            <span className="review__value">
              {formData.newsletter ? "Yes" : "No"}
            </span>
          </div>
          <div className="review__item">
            <span className="review__label">Category:</span>
            <span className="review__value">{formData.category}</span>
          </div>
        </div>
      </div>

      <div className="btn-group">
        <button type="button" onClick={onBack} className="btn btn--secondary">
          Back
        </button>
        <button type="submit" className="btn btn--success">
          Send
        </button>
      </div>
    </form>
  );
};

export default ReviewStep;
