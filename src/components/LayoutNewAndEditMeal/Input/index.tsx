import { Texts } from "@/components/Texts";
import { Container, InputText, inputTextStylesProps } from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends inputTextStylesProps, TextInputProps {
  label: string;
}

export const Input = ({ label, multiline = false, ...props }: InputProps) => {
  return (
    <Container {...props}>
      <Texts fontFamily="bold" fontSize="sm" color="gray_600">
        {label}
      </Texts>
      <InputText multiline={multiline} />
    </Container>
  );
};
