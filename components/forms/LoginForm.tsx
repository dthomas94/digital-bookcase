import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { login } from "../../api/login";

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

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginFormData>();
  const onSubmit = () => {
    const data = getValues();
    login(data.email, data.password);
  };

  return (
    <StyledView>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            placeholder="Email Address"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextInput
            secureTextEntry
            placeholder="Password"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <View style={{ alignSelf: "flex-end", marginTop: 10 }}>
        <StyledButton onPress={() => onSubmit()} accessibilityLabel="Login">
          <Text style={{ color: "white" }}>LOGIN</Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </StyledButton>
      </View>
      <StatusBar style="auto" />
    </StyledView>
  );
};
