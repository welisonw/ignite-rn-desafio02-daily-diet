import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealDTO } from "@/dtos/MealDTO";


export const mealsGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    let meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    meals = meals.sort((a, b) => {      
      const dateA = new Date(+a.date.split('/')[2], +a.date.split('/')[1], +a.date.split('/')[0]);
      const dateB = new Date(+b.date.split('/')[2], +b.date.split('/')[1], +b.date.split('/')[0]);

      return dateB.getTime() - dateA.getTime();
    });

    return meals;
  } catch (error) {
    throw error;
  };
};
