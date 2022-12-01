export interface IListItems {
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
  strIngredients: IListItems;
  strMeasures: IListItems;
}

export interface IMealApiResponse {
  loading: boolean;
  filter?: any;
  searchTerm: string;
  setSearchTerm: Function;
  meals: IMeals[];
  country: IListItems[];
  category: IListItems[];
  ingredient: IListItems[];
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
