import { ButtonStylesProps, Container, IconPlus } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { Texts } from "@/components/Texts";

interface ButtonProps extends ButtonStylesProps, TouchableOpacityProps {
  activeOpacity: number;
  onPress?: () => void;
  icon?: boolean;
  text: string;
};

export const Button = ({
  activeOpacity,
  onPress,
  bgColor,
  icon = false,
  text,
  ...props
}: ButtonProps) => {
  return (
    <Container
      onPress={onPress}
      activeOpacity={activeOpacity}
      bgColor={bgColor}
      {...props}
    >
      {icon && <IconPlus />}
      <Texts fontFamily="bold" fontSize="sm" color="white">
        {text}
      </Texts>
    </Container>
  );
};
