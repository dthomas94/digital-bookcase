import { Text, View } from "react-native";
import { LoginForm } from "components/forms/LoginForm/LoginForm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { styled } from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  row-gap: 50px;
  padding-right: 20px;
  padding-left: 20px;
`;

const StyledHeading = styled.Text`
  font-weight: bold;
  font-size: 36px;
  text-align: left;
  margin-bottom: 10px;
`;

const StyledSubheading = styled.Text`
  color: rgb(145, 145, 145);
  font-weight: bold;
`;

const StyledSignupText = styled.Text`
  align-self: center;
  position: absolute;
  bottom: 50px;
`;

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;

export const LoginScreen = ({ route, navigation }: LoginScreenProps) => (
  <StyledView>
    <View>
      <StyledHeading>Login</StyledHeading>
      <StyledSubheading>Please sign in to continue.</StyledSubheading>
    </View>
    <LoginForm />
    <StyledSignupText>
      Don't have an account?{" "}
      <Text
        onPress={() => navigation.replace("Signup")}
        style={{ color: "rgb(255, 164, 61)" }}
      >
        Sign Up
      </Text>
    </StyledSignupText>
  </StyledView>
);
