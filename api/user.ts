import axios from "axios";
import { REACT_APP_DEV_API, REACT_APP_PROD_API } from "@env";
import * as SecureStore from "expo-secure-store";

const uri =
  process.env.NODE_ENV === "development"
    ? REACT_APP_DEV_API
    : REACT_APP_PROD_API;

export const signupUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await axios.post(`${uri}/signup`, { user: { ...userData } });

  if (res?.headers) {
    console.log(res.headers.authorization);
    await SecureStore.setItemAsync("token", res.headers.authorization);
  }
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  const res = await axios.post(`${uri}/login`, { user: { ...userData } });

  if (res?.headers) {
    console.log(res.headers.authorization);
    await SecureStore.setItemAsync("token", res.headers.authorization);
  }

  return res;
};

export const logoutUser = async () => {
  try {
    const res = await axios.delete(`${uri}/logout`);

    if (res) {
      await SecureStore.deleteItemAsync("token");
      console.log(res.headers.authorization);
      return res;
    }
  } catch (err) {
    console.error(err);
  }
};
