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
  strIngredient1?: string;
}

export interface IDropdownOptions {
  [key: string]: any;
}

export interface IMealApiResponse {
  //
  loading: boolean;
  filter?: any;
  // searchTerm: string;
  setSearchTerm: Function;
  meals: IMeals[];
  country?: IDropdownOptions[];
  category: IDropdownOptions[];
  ingredient: IDropdownOptions[];
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
  options?: IDropdownOptions[];
  showDropdown: boolean;
  toggleDropdown: Function;
  optionSelection: Function;
  onChange?: Function;
}
