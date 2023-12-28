
import { MealDTO } from "@/dtos/MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "../storageConfig";

export const mealUpdate = async (editMeal: MealDTO) => {
  try { 
    const storedMeals = await mealsGetAll();

    const mealsFilter = storedMeals.filter((meal) => meal.id !== editMeal.id);

    const storage = JSON.stringify([...mealsFilter, editMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  };
};
