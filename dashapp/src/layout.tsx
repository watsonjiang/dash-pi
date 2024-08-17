import {
  DefaultFooter,
  ProLayout,
  ProLayoutProps,
} from "@ant-design/pro-components";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Overview } from "./pages/overview";
import { CpuDetail } from "./pages/cpu";
import { Route } from "@ant-design/pro-layout/es/typing";
import { CheckCircleOutlined } from "@ant-design/icons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/cpu",
    element: <CpuDetail />,
  },
]);

const proLayoutRoute: Route = {
  path: "/",
  children: [
    {
      name: "Overview11",
      path: "/",
      icon: <CheckCircleOutlined />,
    },
    {
      name: "Cpu",
      path: "/cpu",
    },
  ],
};

const menuItemRender: React.ReactNode = (
  item: MenuDataItem & {
    isUrl: boolean;
    onClick: () => void;
  },
  defaultDom: React.ReactNode,
  menuProps: BaseMenuProps & Partial<PrivateSiderMenuProps>
) => {
  if (item.isUrl || menuProps.children) {
    return defaultDom;
  }
  return (
    <Link to={menuProps.path} target={menuProps.target}>
      {defaultDom}
    </Link>
  );
};

const DashFooter: React.FC = (props: ProLayoutProps) => {
  return <DefaultFooter copyright="2024 Watson Inc. All rights reserved." />;
};

const DashLayout: React.FC = () => {
  return (
    <ProLayout
      title="Dashboard Pi"
      menuItemRender={menuItemRender}
      footerRender={DashFooter}
    >
      <RouterProvider router={router} />
    </ProLayout>
  );
};

export default DashLayout;
