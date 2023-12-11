import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/Home";
import { Statistics } from "@/screens/Statistics";
import { NewMeal } from "@/screens/NewMeal";
import { Feedback } from "@/screens/Feedback";

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
      <Screen
        name="newmeal"
        component={NewMeal}
      />
      <Screen
        name="feedback"
        component={Feedback}
      />
    </Navigator>
  );
};
