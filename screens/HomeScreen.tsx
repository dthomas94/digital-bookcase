import { Text, View } from "react-native";
import { logout } from "../api/users";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen = () => (
  <View>
    <Text
      style={{ marginTop: 100 }}
      onPress={async () => await AsyncStorage.removeItem("authToken")}
    >
      Hello!
    </Text>
  </View>
);
