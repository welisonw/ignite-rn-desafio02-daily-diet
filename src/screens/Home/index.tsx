import { Container } from "./styled";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Texts } from "@/components/Texts";
import { Meal } from "@/components/Meal";
import { SectionList } from "react-native";

export const Home = () => {
  const meals = [
    {
      title: "12.08.2023",
      data: [
        {
          id: "01",
          hour: "20:00",
          description: "X-tudo",
          isOnTheDiet: false,
        },
        {
          id: "02",
          hour: "20:00",
          description: "X-tudo",
          isOnTheDiet: false,
        },
      ],
    },
    {
      title: "11.08.2023",
      data: [
        {
          id: "01",
          hour: "20:00",
          description: "Salada",
          isOnTheDiet: true,
        },
      ],
    },
  ];

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

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <Texts>Não há refeições cadastradas ainda.</Texts>
          </>
        )}
        contentContainerStyle={
          !meals.length && {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }
        }
        renderSectionHeader={({ section: { title } }) => (
          <Texts
            fontFamily="bold"
            fontSize="lg"
            style={{ marginBottom: 8, marginTop: 32 }}
          >
            {title}
          </Texts>
        )}
        renderItem={({ item }) => <Meal {...item} onPress={() => ""} />}
        style={{ marginBottom: 32 }}
      />
    </Container>
  );
};
