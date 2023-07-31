import axios from "axios";
import { REACT_APP_DEV_API } from "@env";

const url = process.env.NODE_ENV === "development" ? REACT_APP_DEV_API : "";

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${url}/login`, {
      email,
      password,
    });
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
