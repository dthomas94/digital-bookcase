import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "screens/LoginScreen";
import { SignupScreen } from "screens/SignupScreen";
import { HomeScreen } from "screens/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { logoutUser } from "api/user";
import axios from "axios";

export type RootDrawerParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Logout: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const Root = () => {
  const [userToken, setUserToken] = useState("");

  const getUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setUserToken(token);
        axios.defaults.headers.common["Authorization"] = token;
      }
    } finally {
      return;
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {!!userToken && (
              <DrawerItem
                label="Logout"
                onPress={() => logoutUser()}
                icon={() => (
                  <MaterialIcons name="logout" size={24} color="black" />
                )}
              />
            )}
          </DrawerContentScrollView>
        )}
      >
        {!!userToken ? (
          <>
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={{
                drawerLabel: "Home",
                headerTitle: "",
                drawerIcon: () => (
                  <MaterialIcons name="home" size={24} color="black" />
                ),
              }}
            />
          </>
        ) : (
          <>
            <Drawer.Screen
              name="Login"
              component={LoginScreen}
              options={{
                drawerLabel: "Login",
                headerTitle: "",
                drawerIcon: () => (
                  <MaterialIcons name="login" size={24} color="black" />
                ),
              }}
            />
            <Drawer.Screen
              name="Signup"
              component={SignupScreen}
              options={{
                drawerLabel: "Signup",
                headerTitle: "",
                drawerIcon: () => (
                  <MaterialIcons
                    name="person-add-alt-1"
                    size={24}
                    color="black"
                  />
                ),
              }}
            />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
