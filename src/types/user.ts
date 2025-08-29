import * as yup from "yup";
import type {
  addSourceValidationSchema,
  userValidationSchema,
  addBannerValidationSchema,
} from "@/validation/userSchema";

export interface User {
  email: string;
  password: string;
}
export interface Source {
  name: string;
  type: string;
  configuration: string;
  activity: boolean;
}
export interface Banner {
  title: string;
  link: string;
  position: string;
  activeTo: string;
  activeFrom: string;
}

export interface RecoverUser {
  email: string;
}

export type UserFormData = yup.InferType<typeof userValidationSchema>;
export type SourceFormData = yup.InferType<typeof addSourceValidationSchema>;
export type BannerFormData = yup.InferType<typeof addBannerValidationSchema>;
