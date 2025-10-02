import * as yup from "yup";
import { Platform } from "../types/enums";

export const socialMediaLinksSchema = yup.object({
  links: yup
    .array()
    .of(
      yup.object({
        platform: yup
          .mixed<Platform>()
          .oneOf(Object.values(Platform))
          .required("Pick a platform"),
        url: yup.string().url("Invalid URL").required("URL is required"),
      })
    )
    .min(1, "At least one URL must be added")
    .max(5, "Only 5 URL can be added"),
});
