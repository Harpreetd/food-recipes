export interface MealApiResponse {
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
}

export interface IRecipeListProps {
  mealsList?: MealApiResponse;
}
