// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Menu.css";

// type ParentMenu = "Beacon UI" | "Beacon Network UI" | "Beacon 2 RI Tools";

// interface MenuProps {
//   isSubmenuOpen: boolean;
//   toggleSubmenu: () => void;
// }

// const directNavigationMenus: Record<ParentMenu, Record<string, string>> = {
//   "Beacon UI": {
//     Deployment: "/ui_deployment",
//     "Configuration UI": "/ui_configuration",
//     "Querying the UI": "/ui_queries",
//   },
//   "Beacon Network UI": {
//     Deployment: "/networkui_deployment",
//     "Configuration UI": "/networkui_configuration",
//     "Querying the UI": "/networkui_queries",
//   },
//   "Beacon 2 RI Tools": {
//     "Creating the CSV files": "/creating_csvs",
//     "Conversion from CSV to BFF": "/conversion_csv_bff",
//     "Conversion from VCF to BFF": "/conversion_vcf_bff",
//   },
// };

// const subMenuItems: { [key: string]: string[] } = {
//   "Beacon 2 RI API": [
//     "Automated Deployment",
//     "Manual Deployment",
//     "Data Linking",
//     "API Configuration",
//     "Querying the API",
//   ],

//   "Beacon 2 PI API": [
//     "PI Automated Deployment",
//     "PI Manual Deployment",
//     "Filtering Terms",
//     "Configuration",
//     "PI Querying the API",
//   ],
//   "Beacon 2 RI Tools": [
//     "Starting Guide",
//     "Configuration File",
//     "Creating the CSV files",
//     "Conversion from CSV to BFF",
//     "Conversion from VCF to BFF",
//   ],
//   "Beacon UI": ["Deployment", "Configuration UI", "Querying the UI"],
//   "Beacon Network UI": ["Deployment", "Configuration UI", "Querying the UI"],
// };

// const nestedSubMenuItems: { [key: string]: { key: string; label: string }[] } =
//   {
//     "Automated Deployment": [
//       { key: "cloning-repository", label: "Cloning the repository" },
//       { key: "execute-start-script", label: "Execute start script from root" },
//     ],
//     "PI Automated Deployment": [
//       { key: "cloning-repository", label: "Cloning the repository" },
//       { key: "execute-start-script", label: "Execute start script from root" },
//     ],
//     "Manual Deployment": [
//       { key: "cloning-repository", label: "Cloning the repository" },
//       { key: "creating-containers", label: "Creating the containers" },
//       { key: "data-injection", label: "Data injection" },
//       { key: "data-indexing", label: "Data indexing" },
//     ],
//     "PI Manual Deployment": [
//       { key: "cloning-repository", label: "Cloning the repository" },
//       { key: "creating-containers", label: "Creating the containers" },
//       { key: "data-injection", label: "Data injection" },
//       { key: "data-indexing", label: "Data indexing" },
//     ],
//     "Data Linking": [
//       { key: "linking-ids", label: "Linking ids to dataset and cohort" },
//       { key: "extract-filtering-terms", label: "Extract filtering terms" },
//       {
//         key: "manually-adding-terms",
//         label: "Manually adding filtering terms",
//       },
//     ],
//     "API Configuration": [
//       { key: "managing-permissions", label: "Managing dataset permissions" },
//       { key: "supplying-aai", label: "Supplying AAI credentials" },
//       { key: "handling-cors", label: "Handling CORS" },
//       { key: "editing-beacon-info", label: "Editing your beacon information" },
//       { key: "limiting-granularity", label: "Limiting the granularity" },
//       { key: "adding-handovers", label: "Adding beacon handovers" },
//     ],
//     Configuration: [
//       { key: "editing-beacon-info", label: "Editing your beacon information" },
//       { key: "managing-permissions", label: "Managing dataset permissions" },
//       { key: "supplying-aai", label: "Supplying AAI credentials" },
//       { key: "handling-cors", label: "Handling CORS" },
//       { key: "default-granularity", label: "Setting the default granularity" },
//       { key: "adding-handovers", label: "Adding beacon handovers" },
//       { key: "configuring-entry-types", label: "Configuring your entry types" },
//       { key: "setting-logs", label: "Setting the logs" },
//       { key: "tls-config", label: "TLS configuration" },
//       { key: "tls-mongodb", label: "TLS secured MongoDB" },
//     ],
//     "Querying the API": [
//       { key: "get-method", label: "GET Method" },
//       { key: "post-method", label: "POST Method" },
//     ],
//     "PI Querying the API": [
//       { key: "pi-get-method", label: "GET Method" },
//       { key: "pi-post-method", label: "POST Method" },
//     ],
//     "Configuration File": [
//       { key: "generic-config", label: "Generic config parameters" },
//       { key: "vcf-config", label: "VCF conversion config parameters" },
//     ],
//     "Starting Guide": [
//       { key: "tools-intro", label: "Tools Introduction" },
//       { key: "installation-guide", label: "Installation Guide" },
//     ],
//     "Beacon UI": [
//       { key: "ui-deployment", label: "Deployment" },
//       { key: "ui-configuration", label: "Configuration" },
//       { key: "ui-querying", label: "Querying the UI" },
//     ],
//     "Beacon Network UI": [
//       { key: "network-deployment", label: "Deployment" },
//       { key: "network-configuration", label: "Configuration" },
//       { key: "network-querying", label: "Querying the UI" },
//     ],
//     "Filtering Terms": [
//       { key: "extract-terms", label: "Extract filtering terms" },
//       {
//         key: "manually-adding-terms",
//         label: "Manually adding filtering terms",
//       },
//       { key: "get-descendant-terms", label: "Get descendant terms" },
//     ],
//   };

// function Menu({ isSubmenuOpen, toggleSubmenu }: MenuProps) {
//   const [activeMenu, setActiveMenu] = useState<string | null>("Introduction");
//   const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
//   const [activeNestedSubMenuItem, setActiveNestedSubMenuItem] = useState<
//     string | null
//   >(null);
//   const navigate = useNavigate();

//   const menuItems: string[] = [
//     "Introduction",
//     "Beacon 2 PI API",
//     "Beacon 2 RI API",
//     "Beacon 2 RI Tools",
//     // "Beacon Verifier",
//     "Beacon UI",
//     "Beacon Network UI",
//     "Tutorials",
//     // "FAQs",
//     "Official Links",
//   ];

//   const handleClick = (item: string) => {
//     const hasSubMenu = subMenuItems[item] && subMenuItems[item].length > 0;

//     if (item === "Official Links") {
//       navigate("/official-links");
//       setActiveMenu(item);
//       setActiveSubMenu(null);
//       setActiveNestedSubMenuItem(null);
//       return;
//     }

//     if (item === "Tutorials") {
//       navigate("/tutorials");
//       setActiveMenu(item);
//       setActiveSubMenu(null);
//       setActiveNestedSubMenuItem(null);
//       return;
//     }

//     if (item === "Introduction") {
//       setActiveMenu("Introduction");
//       setActiveSubMenu(null);
//       setActiveNestedSubMenuItem(null);
//       navigate("/");
//       if (isSubmenuOpen) {
//         toggleSubmenu(); // Close the submenu if open
//       }
//       return;
//     }

//     setActiveMenu(item);
//     setActiveSubMenu(null);
//     setActiveNestedSubMenuItem(null);

//     // Open the submenu only if it has submenu items
//     if (hasSubMenu) {
//       if (!isSubmenuOpen) {
//         toggleSubmenu(); // Open the submenu if it's not already open
//       }
//     } else {
//       // If no submenu items, navigate directly and don't open submenu
//       navigate(`/${item.toLowerCase().replace(/ /g, "-")}`);
//     }
//   };

//   const handleToggleSubmenu = () => {
//     toggleSubmenu();
//   };

//   const handleSubMenuClick = (subItem: string, parentMenu: string) => {
//     setActiveSubMenu(subItem);
//     setActiveNestedSubMenuItem(null);

//     if (
//       directNavigationMenus[parentMenu as ParentMenu] &&
//       directNavigationMenus[parentMenu as ParentMenu][subItem]
//     ) {
//       navigate(directNavigationMenus[parentMenu as ParentMenu][subItem]);
//     } else {
//       setActiveSubMenu(activeSubMenu === subItem ? null : subItem);
//       setActiveNestedSubMenuItem(null);
//     }
//   };

//   const handleNestedSubMenuItemClick = (
//     subItem: string,
//     nestedItem: { key: string; label: string }
//   ) => {
//     setActiveNestedSubMenuItem(nestedItem.key);

//     const basePathMap: { [key: string]: string } = {
//       "Automated Deployment": "/automated-deployment",
//       "PI Automated Deployment": "/pi-automated-deployment",
//       "Manual Deployment": "/manual-deployment",
//       "PI Manual Deployment": "/pi-manual-deployment",
//       "Data Linking": "/data-linking",
//       "API Configuration": "/api-configuration",
//       Configuration: "/pi-api-configuration",
//       "Querying the API": "/querying-api",
//       "PI Querying the API": "/pi-querying-api",
//       "Beacon UI": "/beacon-ui",
//       "Beacon Network UI": "/beacon-network-ui",
//       "Configuration File": "/configuration-file",
//       "Starting Guide": "/starting-guide",
//       "Filtering Terms": "/filtering-terms",
//       "Official Links": "/official-links",
//     };

//     const pathMap: { [key: string]: string } = {
//       "cloning-repository": "#cloning-repository",
//       "execute-start-script": "#execute-start-script",
//       "creating-containers": "#creating-the-containers",
//       "data-injection": "#data-injection",
//       "data-indexing": "#data-indexing",
//       "linking-ids": "#linking-ids-to-dataset-and-cohort",
//       "extract-filtering-terms": "#extract-filtering-terms",
//       "manually-adding-terms": "#manually-adding-filtering-terms",
//       "get-descendant-terms": "#get-descendant-terms",
//       "managing-permissions": "#managing-dataset-permissions",
//       "supplying-aai": "#supplying-aai-credentials",
//       "handling-cors": "#handling-cors",
//       "editing-beacon-info": "#editing-beacon-info",
//       "limiting-granularity": "#limiting-granularity",
//       "adding-handovers": "#adding-beacon-handovers",
//       "get-method": "#get-method",
//       "post-method": "#post-method",
//       "pi-get-method": "#pi-get-method",
//       "pi-post-method": "#pi-post-method",
//       "generic-config": "#generic-config-parameters",
//       "vcf-config": "#vcf-conversion-config-parameters",
//       deployment: "#deployment",
//       "api-configuration": "#configuration",
//       "default-granularity": "#setting-default-granularity",
//       "configuring-entry-types": "#configuring-entry-types",
//       "setting-logs": "#setting-logs",
//       "tls-config": "#TLS-configuration",
//       "tls-mongodb": "#TLS-secured-MongoDB",
//       "querying-ui": "#querying-ui",
//       "tools-intro": "#tools-introduction",
//       "installation-guide": "#installation-guide",
//     };

//     const basePath = basePathMap[subItem];
//     const hash = pathMap[nestedItem.key];

//     if (basePath && hash) {
//       navigate(`${basePath}${hash}`);
//     }
//   };

//   return (
//     <div className="menuContainer">
//       <div className="menuDiv">
//         <a
//           href="https://ega-archive.org/"
//           className="logoInstitution"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             className="EGALogo"
//             src="./ega_logo_white.png"
//             alt="EGALogo"
//           ></img>
//         </a>
//         {menuItems.map((item) => (
//           <div
//             key={item}
//             className={`menuItem ${activeMenu === item ? "active" : ""}`}
//             onClick={() => handleClick(item)}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//       {activeMenu &&
//       subMenuItems[activeMenu] &&
//       subMenuItems[activeMenu].length > 0 ? (
//         activeMenu !== "Introduction" && isSubmenuOpen ? (
//           <div className="subMenuContainer">
//             <button className="buttonHideSubmenu" onClick={handleToggleSubmenu}>
//               <img src="./back.png" className="backIcon" alt="backIcon"></img>
//             </button>
//             <div className="subMenu">
//               {subMenuItems[activeMenu].map((subItem: string) => (
//                 <div key={subItem}>
//                   <button
//                     className={`subMenuItem ${
//                       activeSubMenu === subItem ||
//                       activeNestedSubMenuItem === subItem
//                         ? "active2"
//                         : ""
//                     }`}
//                     onClick={() => handleSubMenuClick(subItem, activeMenu)}
//                   >
//                     {subItem}
//                     {!(
//                       activeMenu === "Beacon UI" ||
//                       activeMenu === "Beacon Network UI" ||
//                       (activeMenu === "Beacon 2 RI Tools" &&
//                         [
//                           "Creating the CSV files",
//                           "Conversion from CSV to BFF",
//                           "Conversion from VCF to BFF",
//                         ].includes(subItem))
//                     ) && (
//                       <img
//                         src={
//                           activeSubMenu === subItem
//                             ? "../arrow-down.png"
//                             : "../arrow-right.png"
//                         }
//                         alt={
//                           activeSubMenu === subItem ? "Arrow Up" : "Arrow Down"
//                         }
//                         className="arrowIcon"
//                       />
//                     )}
//                   </button>
//                   {activeSubMenu === subItem && nestedSubMenuItems[subItem] && (
//                     <div className="nestedSubMenu">
//                       {nestedSubMenuItems[subItem].map((nestedItem) => (
//                         <div
//                           key={nestedItem.key}
//                           className={`nestedSubMenuItem ${
//                             activeNestedSubMenuItem === nestedItem.key
//                               ? "active"
//                               : ""
//                           }`}
//                           onClick={() =>
//                             handleNestedSubMenuItemClick(subItem, nestedItem)
//                           }
//                         >
//                           {nestedItem.label}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="subMenuContainerNoExpanded">
//             <button className="buttonShowSubmenu" onClick={handleToggleSubmenu}>
//               <img
//                 src="./forward.png"
//                 className="forwardIcon"
//                 alt="forwardIcon"
//               ></img>
//             </button>
//           </div>
//         )
//       ) : null}
//     </div>
//   );
// }

// export default Menu;

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
import { useMediaQuery } from "@mui/material"; // Correct import
import { useTheme } from "@mui/material/styles"; // Keep `useTheme` from styles
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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 816px)");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMainMenuClick = (menuItem: string) => {
    const subMenus = subMenuItems[menuItem];
    if (!subMenus) {
      navigate(`/${menuItem.toLowerCase().replace(/ /g, "-")}`);
      setActiveMenuItem(menuItem);
      setActiveMenu(null);
    } else if (activeMenu === menuItem) {
      setActiveMenu(null);
      setActiveMenuItem(null);
    } else {
      const firstSubMenuItem = subMenus[0];
      navigate(`/${firstSubMenuItem.toLowerCase().replace(/ /g, "-")}`);
      setActiveMenu(menuItem);
      setActiveMenuItem(firstSubMenuItem);
    }
  };

  const handleSubMenuClick = (subItem: string) => {
    navigate(`/${subItem.toLowerCase().replace(/ /g, "-")}`);
  };

  const drawerContent = (
    <Box>
      <Toolbar>
        <a href="https://ega-archive.org/" target="_blank" rel="noreferrer">
          <img className="EGALogo" src="./ega_logo_white.png" alt="EGALogo" />
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
                      onClick={() => handleSubMenuClick(subItem)}
                      sx={{
                        color:
                          location.pathname ===
                          `/${subItem.toLowerCase().replace(/ /g, "-")}`
                            ? "#185177"
                            : "#4A88B1",
                        bgcolor:
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
        position: "relative", // Ensure it doesn't shift
        top: "-40px", // Moves it up slightly
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
