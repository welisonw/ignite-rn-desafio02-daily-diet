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
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Input } from "./Input";
import { Texts } from "@/components/Texts";
import { Button } from "@/components/Button";

interface LayoutNewAndEditMealProps {
  text: string;
}

export const LayoutNewAndEditMeal = ({ text }: LayoutNewAndEditMealProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  };

  function handleToggleSelected(option: string) {
    setSelectedOption(option);
  };

  function handleCreateNewMeal() {
    navigation.navigate("feedback");
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
          <Input label="Nome" />
          <Input label="Descrição" multiline />
          <ContainerRow>
            <Input
              label="Data"
              keyboardType="numeric"
              style={{ width: "46%" }}
            />
            <Input
              label="Hora"
              keyboardType="numeric"
              style={{ width: "46%" }}
            />
          </ContainerRow>

          <Texts fontFamily="bold" fontSize="sm" color="gray_600">
            Está dentro da dieta?
          </Texts>
          <ContainerRow>
            <SelectedIsOnTheDiet
              bgColor="green"
              isSelected={selectedOption === "Sim"}
              onPress={() => handleToggleSelected("Sim")}
            >
              <StatusIsOnTheDiet bgColor="green" />
              <Texts fontFamily="bold" fontSize="sm">
                Sim
              </Texts>
            </SelectedIsOnTheDiet>
            <SelectedIsOnTheDiet
              bgColor="red"
              isSelected={selectedOption === "Não"}
              onPress={() => handleToggleSelected("Não")}
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
