export interface IMealApiResponse {
  strArea: string;
  strCategory: string;
  strInstructions?: string;
  strMeal?: string;
  strMealThumb?: string;
  strSource?: string;
  strTags?: string;
  strYoutube?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
}

export interface IRecipeListProps {
  mealsList?: IMealApiResponse;
}

export interface IRecipeCardProps {
  value: IMealApiResponse;
}
