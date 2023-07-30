import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const StyledView = styled.View`
  align-items: "center";
  justify-content: "center";
  align-content: "center";
  width: 100%;
`;

const StyledTextInput = styled.TextInput`
  border-radius: 5px;
  height: 40px;
  margin-bottom: 12px;
  border: 1px solid lightgray;
  width: 100%;
  padding: 10px;
`;

const StyledButton = styled.Pressable`
  background-color: rgb(254, 167, 64);
  border-radius: 45px;
  padding: 15px 25px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  color: white;
  margin-top: 10px;
`;

export const LoginForm = () => {
  return (
    <StyledView>
      <StyledTextInput placeholder="Email Address" />
      <StyledTextInput secureTextEntry placeholder="Password" />
      <View style={{ alignSelf: "flex-end", marginTop: 10 }}>
        <StyledButton onPress={() => {}} accessibilityLabel="Login">
          <Text style={{ color: "white" }}>LOGIN</Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </StyledButton>
      </View>
      <StatusBar style="auto" />
    </StyledView>
  );
};
