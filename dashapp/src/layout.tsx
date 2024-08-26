import { Overview } from "./pages/overview";
import { CpuDetail } from "./pages/cpu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import {
  AppBarProps,
  Badge,
  Box,
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

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

const dashTheme = createTheme();

const drawerWidth: number = 240;

interface DashAppBarProps extends AppBarProps {
  open?: boolean;
}

const DashAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<DashAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DashDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const DashLayout: React.FC = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={dashTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <DashAppBar position="absolute" open={true}>
          <Toolbar sx={{ pr: "24px" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ marginRight: "36px" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </DashAppBar>
      </Box>
    </ThemeProvider>
  );
};

export default DashLayout;
