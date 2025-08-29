import axios from "axios";
import type { Banner, RecoverUser, Source, User } from "@/types/user";

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
export const addSource = async (payload: Source) => {
  const response = await axios.post<Source>("", payload);
  return response.data;
};
export const addBanner = async (payload: Banner) => {
  const response = await axios.post<Banner>("", payload);
  return response.data;
};
