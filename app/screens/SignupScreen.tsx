import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styled } from "styled-components/native";
import { SignupForm } from "components/forms/SignupForm/SignupForm";
import { RootDrawerParamList } from "app/Root";

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

const StyledLoginText = styled.Text`
  align-self: center;
  position: absolute;
  bottom: 50px;
`;

export type SignupScreenProps = NativeStackScreenProps<
  RootDrawerParamList,
  "Signup"
>;

export const SignupScreen = ({ route, navigation }: SignupScreenProps) => (
  <StyledView>
    <View>
      <StyledHeading>Sign Up</StyledHeading>
      <StyledSubheading>Please sign up to continue.</StyledSubheading>
    </View>
    <SignupForm />
    <StyledLoginText>
      Already have an account?{" "}
      <Text
        onPress={() => navigation.replace("Login")}
        style={{ color: "rgb(255, 164, 61)" }}
      >
        Log In
      </Text>
    </StyledLoginText>
  </StyledView>
);
