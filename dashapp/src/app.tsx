import React, { Component, PropsWithChildren, ReactNode } from "react";
import "./app.css";

import DashLayout from "./layout";
import { SnackbarProvider } from "notistack";
import { Overview } from "./pages/overview";
import { CpuDetail } from "./pages/cpu";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { WifiAdminPage } from "./pages/wifi_admin";
import { LoginPage } from "./pages/login";
import { AppProvider, Navigation, PageContainer } from "@toolpad/core";
import { createTheme } from "@mui/material/styles";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";

interface ProtectedRouteProps {}

const ProtectedRoute = (props: PropsWithChildren<ProtectedRouteProps>) => {
  const authCtx = useAuth();
  if (!authCtx) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return <div>{props.children}</div>;
};

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "public",
  },
  {
    segment: "cpu",
    title: "Cpu",
    icon: <TimelineIcon />,
  },
  {
    segment: "disk",
    title: "Disk",
    icon: <TimelineIcon />,
  },
  {
    segment: "memory",
    title: "Memory",
    icon: <PeopleIcon />,
  },
  {
    kind: "header",
    title: "adminitration",
  },
  {
    segment: "wifi",
    title: "Wifi",
    icon: <BarChartIcon />,
  },
];

const BRANDING = {
  title: "watson corp.",
};

export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}
