import * as Yup from "yup";

export const userRegisterValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be at lease 3 char")
    .min(50, "Password must be at most 50 char"),
});
