import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TextInput, View } from "react-native";

export const LoginForm = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email Address" style={styles.input} />
      <TextInput secureTextEntry placeholder="Password" style={styles.input} />
      <Button title="LOGIN" onPress={() => {}} accessibilityLabel="Login" />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: " 100%",
    padding: 10,
  },
});
