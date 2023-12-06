import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/Home";
import { Statistics } from "@/screens/Statistics";

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
      <Screen
        name="statistics"
        component={Statistics}
      />
    </Navigator>
  );
};
