import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import "./Menu.css";

const desktopDrawerWidth = 240;
const mobileDrawerWidth = 180;

interface MenuProps {
  menuItems: string[];
  subMenuItems: { [key: string]: string[] };
  isSubmenuOpen: boolean;
  toggleSubmenu: () => void;
}

export default function Menu({ menuItems, subMenuItems }: MenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 816px)");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMainMenuClick = (menuItem: string) => {
    // console.log("🖇️ Clicked main menu:", menuItem);

    if (menuItem === "Introduction") {
      // console.log("➡ Navigating to: /");
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveMenuItem(menuItem);
      setActiveMenu(null);
      return;
    }

    const subMenus = subMenuItems[menuItem];

    if (!subMenus) {
      const path = `/${menuItem.toLowerCase().replace(/ /g, "-")}`;
      // console.log(`🚀 Navigating to (no submenus): ${path}`);
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveMenuItem(menuItem);
      setActiveMenu(null);
    } else if (activeMenu === menuItem) {
      // console.log(`📂 Closing submenu for: ${menuItem}`);
      setActiveMenu(null);
      setActiveMenuItem(null);
    } else {
      let firstSubMenuItem = subMenus[0];
      let path = `/${firstSubMenuItem.toLowerCase().replace(/ /g, "-")}`;
      if (
        menuItem === "Beacon 2 PI API" &&
        firstSubMenuItem === "Automated Deployment"
      ) {
        path = "/pi-automated-deployment";
      }
      if (
        menuItem === "Beacon 2 RI API" &&
        firstSubMenuItem === "Automated Deployment"
      ) {
        path = "/automated-deployment";
      }

      // console.log(
      //   `📂 Expanding ${menuItem}, default subpage: ${firstSubMenuItem}`
      // );
      // console.log(`➡ Navigating to: ${path}`);
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveMenu(menuItem);
      setActiveMenuItem(firstSubMenuItem);
    }
  };

  const handleSubMenuClick = (subItem: string, parentMenu: string) => {
    let path = subItem.toLowerCase().replace(/ /g, "-");

    if (subItem === "Configuration") {
      path =
        parentMenu === "Beacon 2 RI API"
          ? "api-configuration"
          : "configuration";
    }

    if (subItem === "Automated Deployment") {
      path =
        parentMenu === "Beacon 2 PI API"
          ? "pi-automated-deployment"
          : "automated-deployment";
    }

    if (subItem === "Manual Deployment") {
      path =
        parentMenu === "Beacon 2 PI API"
          ? "pi-manual-deployment"
          : "manual-deployment";
    }

    if (subItem === "Querying the API") {
      path =
        parentMenu === "Beacon 2 PI API"
          ? "pi-querying-the-api"
          : "querying-the-api";
    }

    setActiveMenuItem(subItem);
    navigate(`/${path}`);
  };

  const drawerContent = (
    <Box>
      <Toolbar>
        <a href="https://www.crg.eu/" target="_blank" rel="noreferrer">
          <img className="CRGLogo" src="https://github.com/costero-e/beacon-ri-documentation/blob/main/docu-app/public/crg_logo_white.svg?raw=true" alt="CRG Logo" />
        </a>
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List
          sx={{
            paddingTop: isSmallScreen ? "10px" : "30px",
          }}
        >
          {menuItems.map((menuItem) => (
            <Box key={menuItem}>
              <ListItemButton
                onClick={() => handleMainMenuClick(menuItem)}
                sx={{
                  bgcolor:
                    activeMenuItem === menuItem || activeMenu === menuItem
                      ? "#4A88B1"
                      : "inherit",
                  color:
                    activeMenuItem === menuItem || activeMenu === menuItem
                      ? "white"
                      : "inherit",
                  "&:hover": {
                    bgcolor: "#4A88B1",
                    color: "white",
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    variant: isSmallScreen ? "body2" : "body1",
                    fontWeight: "bold",
                    color: "inherit",
                  }}
                  primary={menuItem}
                />
                {subMenuItems[menuItem] ? (
                  activeMenu === menuItem ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                ) : null}
              </ListItemButton>

              {subMenuItems[menuItem] && (
                <Collapse
                  in={activeMenu === menuItem}
                  timeout="auto"
                  unmountOnExit
                >
                  {subMenuItems[menuItem]?.map((subItem) => (
                    <ListItemButton
                      key={subItem}
                      onClick={() => handleSubMenuClick(subItem, menuItem)}
                      sx={{
                        color:
                          activeMenuItem === subItem ||
                          location.pathname ===
                            `/${subItem.toLowerCase().replace(/ /g, "-")}`
                            ? "#185177"
                            : "#4A88B1",
                        bgcolor:
                          activeMenuItem === subItem ||
                          location.pathname ===
                            `/${subItem.toLowerCase().replace(/ /g, "-")}`
                            ? "white"
                            : "#E5ECF3",
                        "&:hover": {
                          bgcolor: "white",
                          color: "#185177",
                        },
                      }}
                    >
                      <Typography
                        variant={isSmallScreen ? "body2" : "body1"}
                        fontWeight="bold"
                        sx={{ color: "inherit", p: 0.2 }}
                      >
                        {subItem}
                      </Typography>
                    </ListItemButton>
                  ))}
                </Collapse>
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        top: "-40px",
      }}
    >
      <Toolbar sx={{ position: "relative" }}>
        {isSmallScreen && (
          <IconButton
            aria-label="close drawer"
            onClick={handleDrawerToggle}
            sx={{
              position: "fixed",
              top: "10px",
              left: "10px",
              color: "white",
              zIndex: 1500,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}
        <Typography variant="h6" noWrap></Typography>
      </Toolbar>

      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={!isSmallScreen || mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: isSmallScreen ? mobileDrawerWidth : desktopDrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isSmallScreen ? mobileDrawerWidth : desktopDrawerWidth,
            bgcolor: "#185177",
            color: "white",
            border: "none",
            zIndex: 1200,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
