import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="transparent"
        style="dark"
        translucent
      />
    </SafeAreaView>
  );
};
