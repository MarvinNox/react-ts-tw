import axios from "axios";
import type { RecoverUser, User } from "@/types/user";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";

export const recoverPassword = async (payload: RecoverUser) => {
  const response = await axios.post<RecoverUser>("", payload);
  return response.data;
};

export const loginUser = async (payload: User) => {
  const response = await axios.post<User>("", payload);
  return response.data;
};

export const registerUser = async (payload: User) => {
  const response = await axios.post<User>("", payload);
  return response.data;
};
