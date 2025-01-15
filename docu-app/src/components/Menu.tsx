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
import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Toolbar,
  AppBar,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Menu.css";

const drawerWidth = 240;

interface MenuProps {
  menuItems: string[];
  subMenuItems: { [key: string]: string[] };
  nestedSubMenuItems: { [key: string]: { key: string; label: string }[] };
  isSubmenuOpen: boolean;
  toggleSubmenu: () => void;
}

export default function Menu({
  menuItems,
  subMenuItems,
  nestedSubMenuItems,
  isSubmenuOpen,
  toggleSubmenu,
}: MenuProps) {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  // Map of menu items to direct routes
  const routeMap: { [key: string]: string } = {
    Introduction: "/",

    "Beacon 2 PI API": "/pi-automated-deployment",
    "PI Automated Deployment": "/pi-automated-deployment",
    "PI Manual Deployment": "/pi-manual-deployment",
    "Filtering Terms": "/filtering-terms",
    Configuration: "/pi-api-configuration",
    "PI Querying the API": "/pi-querying-api",

    "Beacon 2 RI API": "/automated-deployment",
    "Automated Deployment": "/automated-deployment",
    "Manual Deployment": "/manual-deployment",
    "Data Linking": "/data-linking",
    "API Configuration": "/api-configuration",
    "Querying the API": "/querying-api",

    "Beacon 2 RI Tools": "/starting-guide",
    "Starting Guide": "/starting-guide",
    "Configuration File": "/configuration-file",
    "Creating the CSV Files": "/creating_csvs",
    "Conversion from CSV to BFF": "/conversion_csv_bff",
    "Conversion from VCF to BFF": "/conversion_vcf_bff",

    "Beacon UI": "/ui_deployment",
    Deployment: "/ui_deployment",
    "Configuration UI": "/ui_configuration",
    "Querying the UI": "/ui_queries",

    "Beacon Network UI": "/networkui_deployment",
    "Network Deployment": "/networkui_deployment",
    "Network Configuration UI": "/networkui_configuration",
    "Network Querying the UI": "/networkui_queries",

    "Official Links": "/official-links",
    Tutorials: "/tutorials",
  };

  const handleMainMenuClick = (item: string) => {
    if (item === "Beacon 2 PI API") {
      navigate("/pi-automated-deployment");
      setActiveMenu(activeMenu === item ? null : item);
      return;
    }

    if (item === "Beacon 2 RI API") {
      navigate("/automated-deployment");
      setActiveMenu(activeMenu === item ? null : item);
      return;
    }

    if (item === "Beacon 2 RI Tools") {
      navigate("/starting-guide");
      setActiveMenu(activeMenu === item ? null : item);
      return;
    }

    if (item === "Beacon UI") {
      navigate("/ui_deployment");
      setActiveMenu(activeMenu === item ? null : item);
      return;
    }

    if (item === "Beacon Network UI") {
      navigate("/networkui_deployment");
      setActiveMenu(activeMenu === item ? null : item);
      return;
    }

    // For other items, handle as usual
    if (routeMap[item] && !subMenuItems[item]) {
      navigate(routeMap[item]);
      setActiveMenu(null); // Collapse menu after navigation
    } else {
      setActiveMenu(activeMenu === item ? null : item); // Toggle submenu
    }
  };

  const handleSubMenuClick = (subItem: string, parentMenu: string) => {
    if (routeMap[subItem]) {
      navigate(routeMap[subItem]);
      console.log(`Navigating to ${routeMap[subItem]}`);
      setActiveSubMenu(null);
      return;
    }
    setActiveSubMenu(activeSubMenu === subItem ? null : subItem);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      ></AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#185177",
            color: "white",
          },
        }}
      >
        <Toolbar>
          <a href="https://ega-archive.org/" target="_blank" rel="noreferrer">
            <img
              className="EGALogo"
              src="./ega_logo_white.png"
              alt="EGALogo"
            ></img>
          </a>
        </Toolbar>
        <Box sx={{ overflow: "auto" }}>
          <List
            sx={{
              paddingTop: "30px",
            }}
          >
            {menuItems.map((menuItem) => (
              <Box key={menuItem}>
                <ListItemButton onClick={() => handleMainMenuClick(menuItem)}>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "body1",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    primary={menuItem}
                  />
                  {activeMenu === menuItem ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItemButton>

                <Collapse
                  in={activeMenu === menuItem}
                  timeout="auto"
                  unmountOnExit
                >
                  {subMenuItems[menuItem]?.map((subItem) => (
                    <Box
                      key={subItem}
                      sx={{
                        pl: 1,
                        bgcolor: "#E5ECF3",
                      }}
                    >
                      <ListItemButton
                        onClick={() => handleSubMenuClick(subItem, menuItem)}
                        sx={{
                          color: "#4A88B1",
                          "&:hover": {
                            bgcolor: "white",
                            color: "#185177",
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          sx={{
                            color: "inherit",
                            p: 0.2,
                          }}
                        >
                          {subItem}
                        </Typography>
                      </ListItemButton>

                      <Collapse
                        in={activeSubMenu === subItem}
                        timeout="auto"
                        unmountOnExit
                      >
                        {nestedSubMenuItems[subItem]?.map((nestedItem) => (
                          <ListItemButton
                            key={nestedItem.key}
                            sx={{ pl: 10 }}
                            onClick={() =>
                              navigate(
                                `/${subItem.toLowerCase().replace(/ /g, "-")}/${
                                  nestedItem.key
                                }`
                              )
                            }
                          >
                            <ListItemText primary={nestedItem.label} />
                          </ListItemButton>
                        ))}
                      </Collapse>
                    </Box>
                  ))}
                </Collapse>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
