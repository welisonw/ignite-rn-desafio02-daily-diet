import { CardBgColors, Container } from "./styles";
import { Texts } from "@/components/Texts";
import { ViewProps } from "react-native";

interface CardProps extends CardBgColors, ViewProps {
  title: string;
  subtitle: string;
};

export const Card = ({ bgColor = "gray_200", title, subtitle, ...props }: CardProps) => {
  return (
    <Container bgColor={bgColor} {...props} >
      <Texts fontSize="2xl" fontFamily="bold">{title}</Texts>
      <Texts fontSize="sm" color="gray_600">{subtitle}</Texts>
    </Container>
  );
};
