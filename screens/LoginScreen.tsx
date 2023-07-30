import { Text, StyleSheet, View } from "react-native";
import { LoginForm } from "../components/forms/LoginForm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;

export const LoginScreen = ({ route, navigation }: LoginScreenProps) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.subheading}>Please sign in to continue.</Text>
    </View>
    <LoginForm />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    rowGap: 50,
    paddingRight: 20,
    paddingLeft: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 36,
    textAlign: "left",
    marginBottom: 10,
  },
  subheading: {
    color: "rgb(145, 145, 145)",
    fontWeight: "bold",
  },
});
