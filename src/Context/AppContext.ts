import { createContext, useState, useEffect } from "react";

export interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

// export const AppContextProvider = ({ children }) => {
//   return (
//     <AppContext.Provider value={{ item: 1 }}>{children}</AppContext.Provider>
//   );
// };
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export default AppContext;
