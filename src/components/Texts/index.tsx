import { PropsWithChildren } from "react";
import { Container, TextsStylesProps } from "./styles";
import { TextProps } from "react-native";

interface TextsProps extends TextProps, TextsStylesProps {};

export const Texts = ({ children, ...props }: TextsProps) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};
