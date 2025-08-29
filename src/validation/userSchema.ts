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

export const addSourceValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  type: Yup.string().required("Please choose a type"),
  configuration: Yup.string().required("Please choose configuration"),
  activity: Yup.boolean().required(),
});

export const addBannerValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required!"),
  link: Yup.string().required("Please enter a url"),
  position: Yup.string().required("Please choose configuration"),
  activeFrom: Yup.string().required("Please enter a date active from"),
  activeTo: Yup.string().required("Please enter a date active to"),
});
