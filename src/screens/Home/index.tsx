import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Alert, SectionList } from "react-native";
import { MealPlan } from "@/dtos/MealDTO";
import { mealsGetAll } from "@/storage/meal/mealsGetAll";
import { Container } from "./styled";
import theme from "@/themes";
import { Plus } from "phosphor-react-native";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Texts } from "@/components/Texts";
import { Meal } from "@/components/Meal";

export const Home = () => {
  const [meals, setMeals] = useState<MealPlan[]>([]);

  const navigation = useNavigation();

  function handleGoStatistics() {
    navigation.navigate("statistics", { meals });
  };

  function handleGoNewMeal() {
    navigation.navigate("newmeal");
  };

  function handleGoMeal(id: string) {
    navigation.navigate("meal", { id });
  };

  async function fetchMealPlans() {
    try {
      const mealDTOList = await mealsGetAll();

      const mealPlansList = mealDTOList.reduce<MealPlan[]>((acc, cur) => {
        const existingPlan = acc.find((plan) => plan.date === cur.date);

        if (existingPlan) {
          existingPlan.meals.push({
            id: cur.id,
            name: cur.name,
            description: cur.description,
            hour: cur.hour,
            isOnTheDiet: cur.isOnTheDiet,
          });

          // Ordenar as refeições dentro de cada data por hora decrescente
          existingPlan.meals.sort((a, b) => {
            const timeA = a.hour.split(":").map(Number);
            const timeB = b.hour.split(":").map(Number);

            return timeB[0] * 60 + timeB[1] - (timeA[0] * 60 + timeA[1]);
          });
        } else {
          acc.push({
            date: cur.date,
            meals: [
              {
                id: cur.id,
                name: cur.name,
                description: cur.description,
                hour: cur.hour,
                isOnTheDiet: cur.isOnTheDiet,
              },
            ],
          });
        };

        return acc;
      }, []);

      // Ordenar os planos de refeições pela data
      mealPlansList.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

      setMeals(mealPlansList);
    } catch (error) {
      Alert.alert("Erro ao carregar os planos de refeições");
    };
  };


  // statistics
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

  useFocusEffect(
    useCallback(() => {
      fetchMealPlans();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Card
        title={percentOfMealsInDiet}
        subtitle="das refeições dentro da dieta"
        bgColor={
          percentOfMealsInDiet === "--,--%"
            ? "gray"
            : percentOfMealsInDiet > "50"
            ? "green"
            : "red"
        }
        iconPosition="right"
        style={{ marginBottom: 40 }}
        onPress={handleGoStatistics}
      />

      <Texts>Refeições</Texts>
      <Button
        text="Nova refeição"
        activeOpacity={0.9}
        hasIcon={true}
        icon={<Plus size={18} color={theme.colors.base.gray_100} />}
        onPress={handleGoNewMeal}
      />

      <SectionList
        sections={meals.map((meal) => ({ date: meal.date, data: meal.meals }))}
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
        renderSectionHeader={({ section }) => (
          <Texts
            fontFamily="bold"
            fontSize="lg"
            style={{ marginBottom: 8, marginTop: 32 }}
          >
            {section.date}
          </Texts>
        )}
        renderItem={({ item }) => (
          <Meal {...item} isOnTheDiet={item.isOnTheDiet} onPress={() => handleGoMeal(item.id)} />
        )}
        style={{ marginBottom: 32 }}
      />
    </Container>
  );
};
