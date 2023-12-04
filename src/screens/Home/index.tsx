import { Header } from "@/components/Header";
import { Container } from "./styled";
import { Card } from "@/components/Card";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Card
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        bgColor="green"
        iconPosition="right"
      />
    </Container>
  );
};
