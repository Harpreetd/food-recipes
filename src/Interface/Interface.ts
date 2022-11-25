export interface IMealApiResponse {
  length: number;
  // [x: string]: number;
  filter: any;
  // filter(arg0: (meal: any) => boolean): [IMealApiResponse | undefined, import("react").Dispatch<import("react").SetStateAction<IMealApiResponse | undefined>>];
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

export interface IDropdownProps {
  collection?: string[];
  showDropdown: boolean;
  toggleDropdown: Function;
  itemSelection: Function;
  onChange?: Function;
}