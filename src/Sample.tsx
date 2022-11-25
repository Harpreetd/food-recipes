import * as React from "react";
import { AppContextConsumer } from "./Context/AppContext";

export const PostInfo = () => (
  <AppContextConsumer>
    {(appContext) =>
      appContext && (
        <div>
          Name: {appContext.name} <br />
          Author: {appContext.author} <br />
          Url: {appContext.url}
        </div>
      )
    }
  </AppContextConsumer>
);
