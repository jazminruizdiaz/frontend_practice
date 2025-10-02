import * as yup from "yup";

export const ratingSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must have at leat 2 characters")
    .trim(),

  rating: yup.number().required("Rating is required").min(1).max(5),

  feedback: yup
    .string()
    .when("rating", {
      is: (rating: number) => rating < 3,
      then: (schema) =>
        schema
          .required("Message is required for rating below 3 stars")
          .min(10, "Message must have at leat 10 characters"),
      otherwise: (schema) => schema.notRequired(),
    })
    .trim(),
});
