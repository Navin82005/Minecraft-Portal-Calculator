import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// REDUX STORE
import store from "./store.mjs";
import {Provider} from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
