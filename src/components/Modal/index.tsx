import { Container, ContainerButtons, ContainerModal, Content } from "./styles";
import theme from "@/themes";
import { Button } from "@/components/Button";
import { Texts } from "@/components/Texts";
import { Dispatch, SetStateAction } from "react";
import { mealRemove } from "@/storage/meal/mealRemove";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  id: string;
}

export const Modal = ({
  modalVisible = false,
  setModalVisible,
  id,
}: ModalProps) => {
  const navigation = useNavigation();

  function handleCloseModal() {
    setModalVisible(false);
  }

  async function handleRemoveMeal(id: string) {
    try {
      await mealRemove(id);

      setModalVisible(false);

      navigation.navigate("home");
    } catch (error) {
      Alert.alert("Não foi possível remover a refeição");
    }
  }

  return (
    <ContainerModal animationType="fade" transparent visible={modalVisible}>
      <Container>
        <Content>
          <Texts
            fontFamily="bold"
            fontSize="lg"
            textAlign="center"
            style={{ marginBottom: 20 }}
          >
            Deseja realmente excluir o registro da refeição?
          </Texts>

          <ContainerButtons>
            <Button
              bgColor="gray_100"
              color="gray_700"
              text="Cancelar"
              activeOpacity={0.8}
              onPress={handleCloseModal}
              style={{
                borderWidth: 1,
                borderColor: theme.colors.base.gray_700,
                width: "48%",
              }}
            />
            <Button
              text="Sim, excluir"
              activeOpacity={0.9}
              onPress={() => handleRemoveMeal(id)}
              style={{ width: "48%" }}
            />
          </ContainerButtons>
        </Content>
      </Container>
    </ContainerModal>
  );
};
