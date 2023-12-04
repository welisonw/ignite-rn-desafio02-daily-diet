import { Container } from "./styled";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Texts } from "@/components/Texts";

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

      <Texts>Refeições</Texts>
      <Button text="Nova refeição" activeOpacity={0.9} icon={true} />
    </Container>
  );
};
