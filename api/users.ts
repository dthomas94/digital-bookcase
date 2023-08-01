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
    const res = await axios.post(`${url}/signup`, { user: { ...userData } });
    return res.data.user;
  } catch (err: any) {
    // janky way of getting error message because of Devise on the backend
    console.error(err.response.data.status.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${url}/login`, {
      email,
      password,
    });

    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      console.log("User is logged in");
    } else {
      await AsyncStorage.setItem("authToken", res.headers.authorization);
    }

    return res.data.user;
  } catch (err: any) {
    // janky way of getting error message because of Devise on the backend
    console.error(err.response.data.status.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios.delete(`${url}/logout`);

    await AsyncStorage.setItem("authToken", res.headers.authorization);
    return res.data.user;
  } catch (err: any) {
    // janky way of getting error message because of Devise on the backend
    console.error(err.response.data.status.message);
  }
};
