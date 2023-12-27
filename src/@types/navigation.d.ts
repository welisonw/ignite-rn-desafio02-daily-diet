import { MealPlan } from "@/dtos/MealDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: { meals: MealPlan[] };
      newmeal: undefined;
			feedback: { isOnTheDiet: boolean };
      meal: { id: string };
    };
  };
};
