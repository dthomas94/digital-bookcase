import { useQuery } from "@apollo/client";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "screens/LoginScreen";
import { SignupScreen } from "screens/SignupScreen";
import { HomeScreen } from "screens/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET_USER_QUERY } from "components/forms/SignupForm/gql/queries/getUser";
import { Text } from "react-native";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  const { data, error, loading } = useQuery(GET_USER_QUERY);

  if (loading) return <Text>...Loading</Text>;

  if (error) {
    console.error(error);
  }

  if (data) console.log(data);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {auth?.isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        ) : ( */}
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
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
