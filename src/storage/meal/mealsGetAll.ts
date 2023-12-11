import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealDTO } from "@/dtos/MealDTO";


export const mealsGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];
    
    return meals;
  } catch (error) {
    throw error;
  };
};
