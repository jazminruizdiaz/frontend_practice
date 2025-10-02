import { Category, ContactMethod } from "./enums";

export interface FormData {
  name: string;
  age: number;
  email: string;
  country: string;
  city: string;
  zip: string;
  contactMethod: ContactMethod;
  newsletter: boolean;
  category: Category;
}
