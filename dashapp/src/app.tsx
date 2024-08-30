import React from "react";
import "./app.css";

import DashLayout from "./layout";
import { Provider } from "react-redux";
import { store } from "./store";
import { setupAxios } from "./api";

setupAxios(store);

function App() {
  return (
    <Provider store={store}>
      <DashLayout />
    </Provider>
  );
}

export default App;
