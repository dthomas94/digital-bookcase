import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "screens/LoginScreen";
import { SignupScreen } from "screens/SignupScreen";
import { HomeScreen } from "screens/HomeScreen";
import { useReactiveVar } from "@apollo/client";
import { LogoutDrawerItem } from "components/navigation/navItem/Logout";
import { userVar } from "./utils/cache";
import { Bookcase } from "screens/Bookcase";

export type RootDrawerParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Logout: undefined;
  Bookcase: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const Root = () => {
  const user = useReactiveVar(userVar);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {!!user?.credentials?.accessToken && <LogoutDrawerItem />}
          </DrawerContentScrollView>
        )}
      >
        {!!user?.credentials?.accessToken ? (
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
            <Drawer.Screen
              name="Bookcase"
              component={Bookcase}
              options={{
                drawerLabel: "Bookcase",
                headerTitle: "",
                drawerIcon: () => (
                  <MaterialIcons name="book" size={24} color="black" />
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
