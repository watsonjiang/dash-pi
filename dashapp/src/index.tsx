import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashLayout from "./layouts/dashLayout";
import { Overview } from "./pages/overview";
import { CpuDetail } from "./pages/cpu";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: DashLayout,
        children: [
          {
            path: "",
            Component: Overview,
          },
          {
            path: "cpu",
            Component: CpuDetail,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
