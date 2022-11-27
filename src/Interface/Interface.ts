export interface IMeals {
  idMeal: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
}
export interface ICountry {
  strArea?: string;
}
export interface ICategory {
  strCategory?: string;
}
export interface IIngredient {
  strIngredient?: string;
}

// export interface IDropdownOptions {
//   [key: string]: string;
// }

export interface IMealApiResponse {
  //
  loading: boolean;
  filter?: any;
  searchTerm: string;
  setSearchTerm: Function;
  meals: IMeals[];
  country: ICountry[];
  category: ICategory[];
  ingredient: IIngredient[];
  setUrl: Function;
  children?: JSX.Element | JSX.Element[];
}

export interface IRecipeListProps {
  mealsList?: IMealApiResponse;
}

export interface IRecipeCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  area: string;
}

export interface IDropdownProps {
  options?: string[];
  showDropdown: boolean;
  toggleDropdown: Function;
  optionSelection: Function;
  onChange?: Function;
  id: string;
}
