import React from "react";
import { TextInput } from "react-native-paper";

export type TextInput = React.ComponentProps<typeof TextInput>;

const ResuableInput: React.FC<TextInput> = ({ label, style, ...props }) => {
  return (
    <TextInput
      label={label}
      style={[
        { marginVertical: 10, width: "100%", backgroundColor: "#fff" },
        style,
      ]}
      {...props}
      autoCapitalize="none"
    />
  );
};

export default ResuableInput;
