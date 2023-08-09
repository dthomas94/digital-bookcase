import { Text, View } from "react-native";
import { RootDrawerParamList } from "app/Root";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeScreenProps = NativeStackScreenProps<
  RootDrawerParamList,
  "Home"
>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text style={{ marginTop: 100 }}>Hello!</Text>
    </View>
  );
};
