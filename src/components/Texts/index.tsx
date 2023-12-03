import { PropsWithChildren } from "react";
import { Container, TextsStylesProps } from "./styles";

interface TextsProps extends PropsWithChildren, TextsStylesProps {};

export const Texts = ({ children, ...props }: TextsProps) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};
