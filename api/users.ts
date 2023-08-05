import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_DEV_API } from "@env";

const url = process.env.NODE_ENV === "development" ? REACT_APP_DEV_API : "";

export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post(`${url}`, { user: { ...userData } });
    console.log(res.headers.authorization);
    return res.data.user;
  } catch (err: any) {
    // janky way of getting error message because of Devise on the backend
    console.error(err.response.data.status.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${url}`, {
      email,
      password,
    });
    const token = res.headers.authorization;
    await AsyncStorage.setItem("authToken", token);
    console.log("User is logged in:", token);

    return true;
  } catch (err: any) {
    // janky way of getting error message because of Devise on the backend
    console.error(err.response.data.message);
    return false;
  }
};

export const logout = async () => {
  try {
    const res = await axios.delete(`${url}`);

    await AsyncStorage.removeItem("authToken");
    return res.data.user;
  } catch (err: any) {
    // janky way of getting error message because of Devise on the backend
    console.error(err.response.data.status.message);
  }
};
