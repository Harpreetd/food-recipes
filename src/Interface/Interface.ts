export interface IMealApiResponse {
  // length: number;
  loading: boolean;
  filter?: any;
  searchTerm: string;
  setSearchTerm: Function;
  meals: {
    idMeal?: string;
    strArea?: string;
    strCategory?: string;
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
  };
  children?: JSX.Element | JSX.Element[];
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
