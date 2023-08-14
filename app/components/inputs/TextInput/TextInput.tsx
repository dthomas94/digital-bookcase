import { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  TextInput as MaterialTextInput,
  TextInputProps as MaterialTextInputProps,
} from "@react-native-material/core";

type TextInputProps = {
  onChange: (value: string) => void;
  label?: string;
  variant?: MaterialTextInputProps["variant"];
};

export const TextInput = ({
  onChange,
  label,
  variant = "outlined",
}: TextInputProps) => {
  const [text, onChangeText] = useState("");

  const handleOnChange = (value: string) => {
    onChangeText(value);
    onChange(value);
  };

  return (
    <SafeAreaView>
      <MaterialTextInput
        variant={variant}
        label={label}
        value={text}
        onChangeText={handleOnChange}
      />
    </SafeAreaView>
  );
};
