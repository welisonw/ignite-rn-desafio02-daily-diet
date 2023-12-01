import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Screen
        name="home"
        component={Home}
      />
    </Navigator>
  );
};
