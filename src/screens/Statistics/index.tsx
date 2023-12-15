import { Texts } from "@/components/Texts";
import {
  Container,
  ContainerCards,
  ContainerCardsInAndOutOfTheDiet,
  Content,
  Header,
} from "./styles";
import { Card } from "@/components/Card";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealPlan } from "@/dtos/MealDTO";

interface RouteParams {
  meals: MealPlan[];
};

export const Statistics = () => {
  const route = useRoute();

  const { meals } = route.params as RouteParams;

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  };

  const amountOfMeals = meals.reduce((acc, cur) => {
    return acc + cur.meals.length;
  }, 0);

  const amountOfMealsInDiet = meals.reduce((acc, cur) => {
    return acc + cur.meals.filter((meal) => meal.isOnTheDiet).length;
  }, 0);

  const percentOfMealsInDiet =
    amountOfMeals === 0
      ? "--,--%"
      : ((amountOfMealsInDiet * 100) / amountOfMeals)
          .toFixed(2)
          .split(".")
          .join(",") + "%";

  const bestDietSequence = meals
    .map((mealPlan) => mealPlan.meals)
    .flat()
    .reduce((acc, cur, i, arr) => {
      if (!cur.isOnTheDiet) return acc;

      let counter = 0;

      for (let j = i; j < arr.length; j++) {
        if (arr[j].isOnTheDiet) counter++;
        else break;
      };

      if (counter > acc) return counter;

      return acc;
    }, 0);

  return (
    <Container>
      <Header>
        <Card
          title={percentOfMealsInDiet}
          subtitle="das refeições dentro da dieta"
          bgColor={percentOfMealsInDiet > "50" ? "green" : "red"}
          onPress={handleGoHome}
        />
      </Header>
      <Content>
        <Texts fontFamily="bold" fontSize="sm" style={{ marginBottom: 23 }}>
          Estatísticas gerais
        </Texts>

        <ContainerCards>
          <Card
            title={bestDietSequence}
            subtitle="melhor sequência de pratos dentro da dieta"
            bgColor="gray"
            showIconButton={false}
            style={{ height: 89 }}
          />
          <Card
            title={amountOfMeals}
            subtitle="refeições registradas"
            bgColor="gray"
            showIconButton={false}
            style={{ height: 89 }}
          />

          <ContainerCardsInAndOutOfTheDiet>
            <Card
              title={amountOfMealsInDiet}
              subtitle="refeições dentro da dieta"
              bgColor="green"
              showIconButton={false}
              style={{ width: "48%" }}
            />
            <Card
              title={amountOfMeals - amountOfMealsInDiet}
              subtitle="refeições fora da dieta"
              bgColor="red"
              showIconButton={false}
              style={{ width: "48%" }}
            />
          </ContainerCardsInAndOutOfTheDiet>
        </ContainerCards>
      </Content>
    </Container>
  );
};
