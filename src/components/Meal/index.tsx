import { Container, Divider, IconStatus, MealStatusStylesProps } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { Texts } from "@/components/Texts";

interface MealProps extends MealStatusStylesProps, TouchableOpacityProps {
  id: string;
  hour: string;
  description: string;
};

export const Meal = ({ id, hour, description, isOnTheDiet, ...props }: MealProps) => {
  return (
    <Container id={id} {...props}>
      <Texts fontFamily="bold" fontSize="xs">{hour}</Texts>
      <Divider />
      <Texts color="gray_600" style={{ flex: 1 }}>{description}</Texts>
      <IconStatus isOnTheDiet={isOnTheDiet} />
    </Container>
  );
};
