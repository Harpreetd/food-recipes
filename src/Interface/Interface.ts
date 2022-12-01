export interface IAllIngredients {
  [key: string]: string | null;
}
export interface IMeasures {
  [key: string]: string | null;
}
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
  strIngredients: IAllIngredients;
  strMeasures: IMeasures;
  strCategoryDescription?: string;
}
export interface ICountry {
  strArea: string;
}
export interface ICategory {
  strCategory: string;
}
export interface IIngredient {
  strIngredient: string;
}

export interface IMealApiResponse {
  loading: boolean;
  filter?: any;
  searchTerm: string;
  setSearchTerm: Function;
  meals: IMeals[];
  country: ICountry[];
  category: ICategory[];
  ingredient: IIngredient[];
  url: string;
  setUrl: Function;
  children?: JSX.Element | JSX.Element[];
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
  optionSelection: Function;
  dropdownName: string;
}
