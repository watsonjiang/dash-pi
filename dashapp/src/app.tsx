import React from "react";
import "./app.css";

import DashLayout from "./layout";
import { SnackbarProvider } from "notistack";
import { Overview } from "./pages/overview";
import { CpuDetail } from "./pages/cpu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Routes>
          <Route path="/" element={<DashLayout />}>
            <Route index element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/cpu" element={<CpuDetail />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
