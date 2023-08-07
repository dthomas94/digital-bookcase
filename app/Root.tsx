import { useQuery } from "@apollo/client";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "screens/LoginScreen";
import { SignupScreen } from "screens/SignupScreen";
import { HomeScreen } from "screens/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  const [userToken, setUserToken] = useState("");

  const getUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) setUserToken(token);
    } finally {
      return;
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!userToken ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
