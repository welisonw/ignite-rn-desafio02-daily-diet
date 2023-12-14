export interface MealDTO {
  id:  string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isOnTheDiet: boolean;
};

export interface MealPlan {
  date: string;
  meals: Omit<MealDTO, "date">[];
};
