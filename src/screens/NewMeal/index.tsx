import { LayoutNewAndEditMeal } from "@/components/LayoutNewAndEditMeal";
import { Container } from "./styles";

export const NewMeal = () => {
  return (
    <Container>
      <LayoutNewAndEditMeal text="Nova refeição" />
    </Container>
  );
};
