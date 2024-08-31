import React from "react";
import "./app.css";

import DashLayout from "./layout";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider anchorOrigin={{ horizontal: "center", vertical: "top" }}>
      <DashLayout />
    </SnackbarProvider>
  );
}

export default App;
