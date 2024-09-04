import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CpuDetail } from "./pages/cpu";
import { Overview } from "./pages/overview";

const dashRouter = createBrowserRouter([
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/cpu",
    element: <CpuDetail />, 
  },
]);

export default dashRouter;
