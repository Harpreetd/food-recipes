import { createContext, useState, useEffect } from "react";
import { IMealApiResponse } from "../Interface/Interface";
const AppContext = createContext<IMealApiResponse | null>(null);

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export default AppContext;
