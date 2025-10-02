import React, { useState } from "react";
import type { RatingFormValues } from "../types/Rating";
import { useFormik } from "formik";
import { ratingSchema } from "../schemas/ratingSchema";
import StarIcon from "./StarIcon";

const RatingForm: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<RatingFormValues | null>(
    null
  );

  const formik = useFormik<RatingFormValues>({
    initialValues: {
      name: "",
      rating: 0,
      feedback: "",
    },
    validationSchema: ratingSchema,
    onSubmit: (values) => {
      console.log("Form has been sent", values);
      setSubmittedData(values);
      formik.resetForm();
    },
  });

  const getRatingText = (rating: number): string => {
    const texts: { [key: number]: string } = {
      1: "Very Poor",
      2: "Poor",
      3: "Average",
      4: "Good",
      5: "Excellent",
    };
    return texts[rating] || "";
  };

  return (
    <div className="rating-form-container">
      <div className="rating-form-wrapper">
        <div className="rating-form__header">
          <h1 className="rating-form__title">Rating Form</h1>
        </div>

        <form onSubmit={formik.handleSubmit} className="rating-form">
          <div className="rating-form__field">
            <label htmlFor="name" className="rating-form__label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`rating-form__input ${
                formik.errors.name && formik.touched.name
                  ? "rating-form__input--error"
                  : ""
              }`}
            />
            {formik.errors.name && formik.touched.name && (
              <span className="rating-form__error">{formik.errors.name}</span>
            )}
          </div>

          <div className="rating-form__field">
            <label className="rating-form__label">Rating</label>
            <div className="rating-form__stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => formik.setFieldValue("rating", star)}
                  className="rating-form__star"
                >
                  <StarIcon
                    filled={formik.values.rating >= star}
                    className="rating-form__star-icon"
                  />
                </button>
              ))}
            </div>
            {formik.values.rating > 0 && (
              <p className="rating-form__rating-text">
                {getRatingText(formik.values.rating)}
              </p>
            )}
            {formik.errors.rating && formik.touched.rating && (
              <span className="rating-form__error">{formik.errors.rating}</span>
            )}
          </div>

          <div className="rating-form__field">
            <label htmlFor="feedback" className="rating-form__label">
              Message
            </label>
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Feedback."
              rows={4}
              value={formik.values.feedback}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`rating-form__textarea ${
                formik.errors.feedback && formik.touched.feedback
                  ? "rating-form__textarea--error"
                  : ""
              }`}
            />
            {formik.errors.feedback && formik.touched.feedback && (
              <span className="rating-form__error">
                {formik.errors.feedback}
              </span>
            )}
          </div>

          <button type="submit" className="rating-form__submit">
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="rating-form__result">
            <div className="rating-form__result-header">
              <h2 className="rating-form__result-title">Your Rating</h2>
            </div>

            <div className="rating-form__result-content">
              <div className="rating-form__result-item">
                <span className="rating-form__result-label">Name:</span>
                <span className="rating-form__result-value">
                  {submittedData.name}
                </span>
              </div>

              <div className="rating-form__result-item">
                <span className="rating-form__result-label">Rating:</span>
                <div className="rating-form__result-stars">
                  {[...Array(submittedData.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      filled
                      className="rating-form__result-star-icon"
                    />
                  ))}
                  <span className="rating-form__result-rating-text">
                    {submittedData.rating}/5 -{" "}
                    {getRatingText(submittedData.rating)}
                  </span>
                </div>
              </div>

              {submittedData.feedback && (
                <div className="rating-form__result-item">
                  <span className="rating-form__result-label">Feedback:</span>
                  <p className="rating-form__result-feedback">
                    {submittedData.feedback}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingForm;
