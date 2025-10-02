import * as yup from "yup";
import { ContactMethod, Category } from "../types/enums";
import { validateZipCode } from "../utils/validateZipCode";

const personalInfoSchema = yup.object({
  name: yup
    .string()
    .min(5, "Name must be at least 5 characteres")
    .required("Name is requires"),
  age: yup
    .number()
    .min(14, "Age must be at least 14 year")
    .required("Age is required")
    .typeError("Age must be a number"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const addressSchema = yup.object({
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  zip: yup
    .string()
    .required("ZIP Code is required")
    .test("is-valid-zip", "Invalid ZIP Code ", async (value) => {
      if (!value) return false;
      return await validateZipCode(value);
    }),
});
const preferencesSchema = yup.object({
  contactMethod: yup
    .mixed<ContactMethod>()
    .oneOf(Object.values(ContactMethod))
    .required(),
  newsletter: yup.boolean(),
  category: yup.mixed<Category>().oneOf(Object.values(Category)).required(),
});

export const validationSchemas = [
  personalInfoSchema,
  addressSchema,
  preferencesSchema,
  yup.object(), // for review step
];
