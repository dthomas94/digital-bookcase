import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "app/Root";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text
        style={{ marginTop: 100 }}
        onPress={async () => await AsyncStorage.removeItem("authToken")}
      >
        Hello!
      </Text>
    </View>
  );
};
