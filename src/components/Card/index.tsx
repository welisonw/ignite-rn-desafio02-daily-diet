import {
  CardBgColors,
  Container,
  ContainerArrowBack,
  ContainerArrowUpRight,
  IconArrowBack,
  IconArrowUpRight,
} from "./styles";
import { Texts } from "@/components/Texts";
import { ViewProps } from "react-native";

interface CardProps extends CardBgColors, ButtonFloatProps, ViewProps {
  title: string;
  subtitle: string;
  showIconButton?: boolean;
  onPress?: () => void;
}

interface ButtonFloatProps {
  iconPosition?: "left" | "right";
}

export const Card = ({
  bgColor = "gray",
  iconPosition = "left",
  showIconButton = true,
  onPress,
  title,
  subtitle,
  ...props
}: CardProps) => {
  return (
    <Container bgColor={bgColor} {...props}>
      {showIconButton &&
        (iconPosition === "left" ? (
          <ContainerArrowBack onPress={onPress}>
            <IconArrowBack bgColor={bgColor} />
          </ContainerArrowBack>
        ) : (
          <ContainerArrowUpRight onPress={onPress}>
            <IconArrowUpRight bgColor={bgColor} />
          </ContainerArrowUpRight>
        ))}

      <Texts fontSize="2xl" fontFamily="bold">
        {title}
      </Texts>
      <Texts fontSize="sm" color="gray_600" textAlign="center">
        {subtitle}
      </Texts>
    </Container>
  );
};
