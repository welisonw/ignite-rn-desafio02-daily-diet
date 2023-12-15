import { Container } from "./styles";
import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Texts } from "@/components/Texts";
import { Button } from "@/components/Button";
import IlustrationDiet from "../../../assets/illustrationDiety.png";
import IlustrationNoDiet from "../../../assets/illustrationNoDiety.png";

interface RouteParams {
  isOnTheDiet: boolean;
};

export const Feedback = () => {
  const route = useRoute();

  const { isOnTheDiet } = route.params as RouteParams;

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  };

  return (
    <Container>
      {isOnTheDiet ? (
        <>
          <Texts
            fontFamily="bold"
            fontSize="xl"
            color="green_dark"
            style={{ marginBottom: 8 }}
          >
            Continue assim!
          </Texts>
          <Texts style={{ textAlign: "center" }}>
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
        </>
      ) : (
        <>
          <Texts
            fontFamily="bold"
            fontSize="xl"
            color="red_dark"
            style={{ marginBottom: 8 }}
          >
            Que pena!
          </Texts>
          <Texts style={{ textAlign: "center" }}>
            Você <Texts fontFamily="bold">saiu da dieta</Texts> dessa vez, mas
            continue se esforçando e não desista!
          </Texts>
          <Image
            source={IlustrationNoDiet}
            style={{ marginTop: 40, marginBottom: 32 }}
          />
          <Button
            text="Ir para a página inicial"
            activeOpacity={0.8}
            style={{ width: 191 }}
            onPress={handleGoHome}
          />
        </>
      )}
    </Container>
  );
};
