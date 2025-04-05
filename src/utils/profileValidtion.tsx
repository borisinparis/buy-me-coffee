import * as Yup from "yup";
import { object, string } from "yup";

export let profileSchema = object({
  name: string().email().required(),
  about: string().min(10).required(),
  media: string().min(8).required(),
});
export const addCategoryValidationSchema = Yup.object({
  categoryName: Yup.string().required("Category name is required"),
});
