import React, { Component, PropsWithChildren, ReactNode } from "react";
import "./app.css";

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { NAVIGATION } from "./menu";
import { SnackbarProvider } from "notistack";

interface ProtectedRouteProps {}

const ProtectedRoute = (props: PropsWithChildren<ProtectedRouteProps>) => {
  const authCtx = useAuth();
  if (!authCtx) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return <div>{props.children}</div>;
};

const BRANDING = {
  title: "Watson Pi dashboard",
};

export default function App() {
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
          <Outlet />
        </ReactRouterAppProvider>
      </SnackbarProvider>
    </>
  );
}
