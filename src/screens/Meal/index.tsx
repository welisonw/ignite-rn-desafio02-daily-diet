import {
  Container,
  ContainerButtons,
  ContainerContent,
  ContainerIconBack,
  Content,
  ContentDateAndHour,
  ContentNameAndDescription,
  Header,
  IsOnTheDiet,
  StatusIsOnTheDiet,
} from "./styles";
import { ArrowLeft, PencilLine, Trash } from "phosphor-react-native";
import theme from "@/themes";
import { Texts } from "@/components/Texts";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { MealDTO } from "@/dtos/MealDTO";
import { Alert } from "react-native";
import { mealsGetAll } from "@/storage/meal/mealsGetAll";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";

interface RouteParams {
  id: string;
}

export const Meal = () => {
  const [meal, setMeal] = useState<MealDTO>();
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  function handleGoHome() {
    navigation.navigate("home");
  }

  async function fetchMeal() {
    try {
      const meals = await mealsGetAll();

      const meal = meals.filter((_meal) => _meal.id === id)[0];

      setMeal(meal);
    } catch (error) {
      Alert.alert("Refeição", "Não foi possível carregar a refeição");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <Container>
      <Header isOnTheDiet={meal?.isOnTheDiet}>
        <ContainerIconBack onPress={handleGoHome}>
          <ArrowLeft size={24} color={theme.colors.base.gray_600} />
        </ContainerIconBack>

        <Texts fontFamily="bold" fontSize="lg" textAlign="center">
          Refeição
        </Texts>

        <Texts style={{ width: "15%" }}></Texts>
      </Header>

      <ContainerContent>
        <Content>
          <ContentNameAndDescription>
            <Texts fontFamily="bold" style={{ fontSize: 20 }}>
              {meal?.name}
            </Texts>
            <Texts fontSize="md">{meal?.description}</Texts>
          </ContentNameAndDescription>

          <ContentDateAndHour>
            <Texts fontFamily="bold" fontSize="sm">
              Data e hora
            </Texts>
            <Texts fontSize="md">
              {meal?.date} às {meal?.hour}
            </Texts>
          </ContentDateAndHour>

          <IsOnTheDiet>
            <StatusIsOnTheDiet isOnTheDiet={meal?.isOnTheDiet} />
            <Texts fontSize="sm">
              {meal?.isOnTheDiet ? "dentro da dieta" : "fora da dieta"}
            </Texts>
          </IsOnTheDiet>
        </Content>

        <ContainerButtons>
          <Button
            text="Editar refeição"
            activeOpacity={0.9}
            hasIcon={true}
            icon={<PencilLine size={18} color={theme.colors.base.gray_100} />}
            onPress={() => "ass"}
          />
          <Button
            bgColor="gray_100"
            color="gray_700"
            text="Excluir refeição"
            activeOpacity={0.8}
            hasIcon={true}
            icon={<Trash size={18} color={theme.colors.base.gray_700} />}
            onPress={() => setModalVisible(true)}
            style={{ borderWidth: 1, borderColor: theme.colors.base.gray_700 }}
          />
        </ContainerButtons>
      </ContainerContent>

      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={meal ? meal.id : ""}
      />
    </Container>
  );
};
