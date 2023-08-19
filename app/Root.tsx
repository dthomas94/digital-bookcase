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
import { useMutation, useReactiveVar } from "@apollo/client";
import { userRegisteredVar } from "components/forms/SignupForm/SignupForm";
import { userLoggedInVar } from "components/forms/LoginForm/LoginForm";
import { LOGOUT_USER } from "./components/navigation/navItem/gql/mutations/logoutUser";
import { LogoutDrawerItem } from "components/navigation/navItem/Logout";

export type RootDrawerParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Logout: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const Root = () => {
  const userRegistered = useReactiveVar(userRegisteredVar || userLoggedInVar);
  const userLoggedIn = useReactiveVar(userLoggedInVar);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {!!(userLoggedIn || userRegistered)?.credentials?.accessToken && (
              <LogoutDrawerItem />
            )}
          </DrawerContentScrollView>
        )}
      >
        {!!(userLoggedIn || userRegistered)?.credentials?.accessToken ? (
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
