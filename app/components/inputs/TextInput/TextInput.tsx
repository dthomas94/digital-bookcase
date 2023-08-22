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
  placeholder?: string;
};

export const TextInput = ({
  onChange,
  label,
  variant = "outlined",
  placeholder,
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
        placeholder={placeholder}
        onChangeText={handleOnChange}
      />
    </SafeAreaView>
  );
};
