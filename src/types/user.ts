import * as yup from "yup";
import type { userValidationSchema } from "@/validation/userSchema";

export interface User {
  email: string;
  password: string;
}

export interface RecoverUser {
  email: string;
}

export type UserFormData = yup.InferType<typeof userValidationSchema>;
