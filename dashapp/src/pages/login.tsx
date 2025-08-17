import { Button, TextField } from "@mui/material";
import React from "react";

/**
 * 登陆页面
 */
const LoginPage: React.FC = () => {
  return (
    <React.Fragment>
      <form className="form">
        <TextField id="user" label="User" variant="standard" />
        <TextField label="Password" id="password" type="password" />

        <Button variant="contained">Login</Button>
      </form>
    </React.Fragment>
  );
};

export { LoginPage };
