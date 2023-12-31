import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./Context/AppContext";
import "./fonts/Aller_Rg.ttf";
import "./fonts/neuropolitical rg.ttf";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
