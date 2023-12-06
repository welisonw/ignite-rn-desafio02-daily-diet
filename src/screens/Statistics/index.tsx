import { Texts } from "@/components/Texts";
import { Container, ContainerCards, ContainerCardsInAndOutOfTheDiet, Content, Header } from "./styles";
import { Card } from "@/components/Card";
import { useNavigation } from "@react-navigation/native";

export const Statistics = () => {

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  };

  return (
    <Container>
      <Header>
        <Card
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          bgColor="green"
          onPress={handleGoHome}
        />
      </Header>
      <Content>
        <Texts fontFamily="bold" fontSize="sm" style={{ marginBottom: 23 }}>
          Estatísticas gerais
        </Texts>

        <ContainerCards>
          <Card title="22" subtitle="melhor sequência de pratos dentro da dieta" bgColor="gray" showIconButton={false} style={{ height: 89 }} />
          <Card title="109" subtitle="refeições registradas" bgColor="gray" showIconButton={false} style={{ height: 89 }} />

          <ContainerCardsInAndOutOfTheDiet>
            <Card title="99" subtitle="refeições dentro da dieta" bgColor="green" showIconButton={false} style={{ width: "48%" }} />
            <Card title="10" subtitle="refeições fora da dieta" bgColor="red" showIconButton={false} style={{ width: "48%" }} />

          </ContainerCardsInAndOutOfTheDiet>


        </ContainerCards>
      </Content>
    </Container>
  );
};
