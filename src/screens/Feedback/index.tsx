import { Container } from "./styles";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Texts } from "@/components/Texts";
import { Button } from "@/components/Button";
import IlustrationDiet from "../../../assets/illustrationDiety.png";

export const Feedback = () => {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Texts fontFamily="bold" fontSize="xl" color="green_dark">
        Continue assim!
      </Texts>
      <Texts>
        Você continua <Texts fontFamily="bold">dentro da dieta</Texts>.
        Muito bem!
      </Texts>
      <Image
        source={IlustrationDiet}
        style={{ marginTop: 40, marginBottom: 32 }}
      />
      <Button
        text="Ir para a página inicial"
        activeOpacity={0.8}
        style={{ width: 191 }}
        onPress={handleGoHome}
      />
    </Container>
  );
};
