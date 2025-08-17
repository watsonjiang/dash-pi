import { Button, TextField } from "@mui/material";
import { SignInPage } from "@toolpad/core";
import React from "react";

/**
 * 登陆页面
 */

const LoginPage: React.FC = () => {
  return (
    <SignInPage
      providers={[{ id: "credentials", name: "Credentials" }]}
      signIn={async (provider, formData, callbackUrl) => {
        const email = formData?.get("email") as string;
        const password = formData?.get("password") as string;

        if (!email || !password) {
          return { error: "Email and password are required" };
        }
        return { error: "An error occurred" };
      }}
    />
  );
};

export { LoginPage };
