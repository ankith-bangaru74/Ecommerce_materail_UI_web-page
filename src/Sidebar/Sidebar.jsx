
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Switch,
  FormControlLabel,
} from "@mui/material";

import "./Sidebar.styles.scss";
import { Link } from "react-router-dom";

function Sidebar({ mode, setMode }) {
  const sidebarItems = [
    { name: "Ayurvedic", path: "/category#organic" },
    { name: "Vegan Products", path: "/category#organic" },

    { name: "Mobiles", path: "/category#mobile" },
    { name: "Vivo S1", tag:'trending', path: "/category#mobile" },
    { name: "SamSung S12", path: "/category#mobile" },
    { name: "Honor 4x",tag:'bestSeller', path: "/category#mobile" },
    { name: "Poco X2", tag:'trending',  path: "/category#mobile" },
    { name: "Iphone 11", path: "/category#mobile" },

    { name: "Laptops",tag:'bestSeller', path: "/category#laptop" },
    { name: "Dell Inspiron ",smallname:'bestSeller', path: "/category#laptop" },
    { name: "Asus Rogue", smallname:'bestSeller', path: "/category#laptop" },
    { name: "Lenovo Specter", path: "/category#laptop" },
    { name: "Lenovo Yoga series", path: "/category#laptop" },
  ];

  return (
    <Box className="sidebar-page">
      <Typography className="main-title" variant="h5">Online Store</Typography>

      <Typography >
        <Link className="page-title" to="/">Home</Link>
      </Typography>

      <ListItemButton className="side-page" component={Link} to="/category#organic">
        <ListItemText primary="OFFER" />
        <span className="side-title">Limited Time</span>
      </ListItemButton>

      <Typography  variant="body1">
        <Link  className="side-page" to="/category#mobile">Products</Link>
      </Typography>

      <List>
        {sidebarItems.map((items) => (
          <ListItemButton
            key={items.name}
            component={Link}
            to={items.path}
           
          >
            <ListItemText  className="sidebar-profile" primary={items.name} />
            <span className="side-title">{items.tag}</span>
            <span className="small-title">{items.smallname}</span>
          </ListItemButton>
        ))}
      </List>

      <Box className="dark-mode-toggle">
        <FormControlLabel
          control={
            <Switch
              checked={mode === "dark"}
              className="dark-mode-toggle"
              onChange={() =>
                setMode(mode === "light" ? "dark" : "light")
              }
            />
          }
          label="Dark Mode"
        />
      </Box>
    </Box>
  );
}

export default Sidebar;
