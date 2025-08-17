import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";
import { Navigation } from "@toolpad/core";

export const NAVIGATION: Navigation = [
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
