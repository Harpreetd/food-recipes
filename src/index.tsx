import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import reportWebVitals from './reportWebVitals';
import { AppContextInterface, AppContextProvider } from "./Context/AppContext";

const sampleAppContext: AppContextInterface = {
  name: "using context in react",
  author: "harpreet",
  url: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider value={sampleAppContext}>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
