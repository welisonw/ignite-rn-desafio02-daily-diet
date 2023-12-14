import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Divider,
  IconStatus,
  MealStatusStylesProps,
} from "./styles";
import { Texts } from "@/components/Texts";

interface MealProps extends MealStatusStylesProps, TouchableOpacityProps {
  id: string;
  hour: string;
  name: string;
};

export const Meal = ({
  id,
  name,
  hour,
  isOnTheDiet,
  ...props
}: MealProps) => {
  return (
    <Container id={id} {...props}>
      <Texts fontFamily="bold" fontSize="xs">
        {hour}
      </Texts>
      <Divider />
      <Texts color="gray_600" style={{ flex: 1 }}>
        {name}
      </Texts>
      <IconStatus isOnTheDiet={isOnTheDiet} />
    </Container>
  );
};
