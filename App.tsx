import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "@/themes";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Routes } from "@/routes";
import { Loading } from "@/components/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" style="dark" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
