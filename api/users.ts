import axios from "axios";
import { REACT_APP_DEV_API } from "@env";

const url = process.env.NODE_ENV === "development" ? REACT_APP_DEV_API : "";

export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  try {
    const res = await axios.get(`${url}/users/new`, { data: { ...userData } });
  } catch (err: any) {
    throw new Error(err.message);
  }
};
