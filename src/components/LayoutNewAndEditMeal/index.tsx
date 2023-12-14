import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { mealCreate } from "@/storage/meal/mealCreate";
import { Alert } from "react-native";
import { format } from "date-fns";
import {
  Container,
  ContainerIconBack,
  ContainerRow,
  ConteinerInputs,
  Content,
  Header,
  SelectedIsOnTheDiet,
  StatusIsOnTheDiet,
} from "./styles";
import theme from "@/themes";
import { ArrowLeft } from "phosphor-react-native";
import { Input } from "./Input";
import { Texts } from "@/components/Texts";
import { Button } from "@/components/Button";

interface LayoutNewAndEditMealProps {
  text: string;
};

export const LayoutNewAndEditMeal = ({ text }: LayoutNewAndEditMealProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(format(new Date(), "dd/MM/yyyy"))
  const [hour, setHour] = useState(format(new Date(), "HH:mm"))
  const [isOnTheDiet, setIsOnTheDiet] = useState(true);

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  };

  function formatDate (text: string) {
    let formatted = text.replace(/\D/g, "");

    if (formatted.length > 2) {
      formatted = `${formatted.slice(0, 2)}/${formatted.slice(2)}`;
    };

    if (formatted.length > 5) {
      formatted = `${formatted.slice(0, 5)}/${formatted.slice(5)}`;
    };

    setDate(formatted);
  };

  function formatHour(value: string) {
    const numericValue = value.replace(/\D/g, "");

    let formattedHour = "";
    if (numericValue.length > 0) {
      formattedHour = numericValue.slice(0, 2);

      if (numericValue.length > 2) {
        formattedHour += ":" + numericValue.slice(2, 4);
      };
    };

    setHour(formattedHour);
  };

  async function handleCreateNewMeal() {
    try {
      const newMeal = {
        id: String(Math.floor(Math.random() * 1000000)),
        name: name.trim(),
        description: description.trim(),
        date,
        hour,
        isOnTheDiet,
      };

      if (!name.trim())
        return Alert.alert(
          "Nova refeição",
          "O nome da refeição deve ser preenchido."
        );
      if (!description.trim())
        return Alert.alert(
          "Nova refeição",
          "A descrição da refeição deve ser preenchida."
        );
      if (!date.trim())
        return Alert.alert(
          "Nova refeição",
          "A data da refeição deve ser preenchida"
        );
      if (date.length < 10)
        return Alert.alert(
          "Nova refeição",
          "O formato da data não é válido (dd/mm/aaaa)."
        );
      if (!hour.trim())
        return Alert.alert(
          "Nova refeição",
          "A hora da refeição deve ser preenchida"
        );
      if (hour.length < 5)
        return Alert.alert(
          "Nova refeição",
          "O formato da hora não é válido (hh:mm)."
        );

      await mealCreate(newMeal);

      navigation.navigate("feedback", { isOnTheDiet });
    } catch (error) {
      Alert.alert("Nova refeição", "Não foi possível adicionar a refeição!");
    };
  };

  return (
    <Container>
      <Header>
        <ContainerIconBack onPress={handleGoHome}>
          <ArrowLeft size={24} color={theme.colors.base.gray_600} />
        </ContainerIconBack>

        <Texts fontFamily="bold" fontSize="lg" textAlign="center">
          {text}
        </Texts>

        <Texts style={{ width: "15%" }}></Texts>
      </Header>

      <Content>
        <ConteinerInputs>
          <Input label="Nome" value={name} onChangeText={setName} />

          <Input
            label="Descrição"
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <ContainerRow>
            <Input
              label="Data"
              keyboardType="numeric"
              value={date}
              onChangeText={formatDate}
            />

            <Input
              label="Hora"
              keyboardType="numeric"
              value={hour}
              onChangeText={formatHour}
            />
          </ContainerRow>

          <Texts fontFamily="bold" fontSize="sm" color="gray_600">
            Está dentro da dieta?
          </Texts>
          <ContainerRow style={{ width: "100%", gap: 0 }}>
            <SelectedIsOnTheDiet
              bgColor="green"
              onPress={() => setIsOnTheDiet(true)}
              isSelected={isOnTheDiet}
            >
              <StatusIsOnTheDiet bgColor="green" />
              <Texts fontFamily="bold" fontSize="sm">
                Sim
              </Texts>
            </SelectedIsOnTheDiet>

            <SelectedIsOnTheDiet
              bgColor="red"
              onPress={() => setIsOnTheDiet(false)}
              isSelected={!isOnTheDiet}
            >
              <StatusIsOnTheDiet bgColor="red" />
              <Texts fontFamily="bold" fontSize="sm">
                Não
              </Texts>
            </SelectedIsOnTheDiet>
          </ContainerRow>
        </ConteinerInputs>

        <Button text="Cadastrar refeição" onPress={handleCreateNewMeal} />
      </Content>
    </Container>
  );
};
