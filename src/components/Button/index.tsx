import { ButtonStylesProps, Container } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { Texts } from "@/components/Texts";
import React from "react";

interface ButtonProps extends ButtonStylesProps, TouchableOpacityProps {
  activeOpacity?: number;
  onPress?: () => void;
  hasIcon?: boolean;
  icon?: JSX.Element;
  text: string;
};

export const Button = ({
  activeOpacity,
  onPress,
  bgColor,
  hasIcon = false,
  icon,
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
      {hasIcon && icon}
      <Texts fontFamily="bold" fontSize="sm" color="white">
        {text}
      </Texts>
    </Container>
  );
};
