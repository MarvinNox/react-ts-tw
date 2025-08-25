import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be at lease 3 char")
    .max(50, "Password must be at most 50 char")
    .required("Password is required"),
});
