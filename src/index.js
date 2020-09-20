import React from "react";
import ReactDOM from "react-dom";
import { Provider, darkTheme } from "@adobe/react-spectrum";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider theme={darkTheme}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement,
);
