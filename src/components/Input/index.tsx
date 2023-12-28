import { Container, InputText, inputTextStylesProps } from "./styles";
import { TextInputProps } from "react-native";
import { Texts } from "@/components/Texts";
import { dateMask, hourMask } from "@/utils/mask";

interface InputProps extends inputTextStylesProps, TextInputProps {
  label: string;
  mask?: "date" | "hour";
  onInputMaksChange?: (text: string) => void;
}

export const Input = ({
  label,
  multiline = false,
  mask,
  onInputMaksChange,
  ...props
}: InputProps) => {
  function handleChange(text: string) {
    onInputMaksChange && mask === "date" && onInputMaksChange(dateMask(text));
    onInputMaksChange && mask === "hour" && onInputMaksChange(hourMask(text));
  };

  return (
    <Container >
      <Texts fontFamily="bold" fontSize="sm" color="gray_600">
        {label}
      </Texts>

      <InputText
        multiline={multiline}
        maxLength={mask === "date" ? 10 : mask === "hour" ? 5 : 50}
        onChangeText={(text) => handleChange(text)}
        {...props}
      />
    </Container>
  );
};
