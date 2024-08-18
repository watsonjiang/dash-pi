import { Overview } from "./pages/overview";
import { CpuDetail } from "./pages/cpu";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const dashRouter = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/cpu",
    element: <CpuDetail />,
  },
]);

const DashLayout: React.FC = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <RouterProvider router={dashRouter} />
      </Content>
    </Layout>
  );
};

export default DashLayout;
