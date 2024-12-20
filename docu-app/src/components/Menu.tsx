import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

type ParentMenu = "Beacon UI" | "Beacon Network UI" | "Beacon 2 RI Tools";

interface MenuProps {
  isSubmenuOpen: boolean;
  toggleSubmenu: () => void;
}

const directNavigationMenus: Record<ParentMenu, Record<string, string>> = {
  "Beacon UI": {
    Deployment: "/ui_deployment",
    "Configuration UI": "/ui_configuration",
    "Querying the UI": "/ui_queries",
  },
  "Beacon Network UI": {
    Deployment: "/networkui_deployment",
    "Configuration UI": "/networkui_configuration",
    "Querying the UI": "/networkui_queries",
  },
  "Beacon 2 RI Tools": {
    "Creating the CSV files": "/creating_csvs",
    "Conversion from CSV to BFF": "/conversion_csv_bff",
    "Conversion from VCF to BFF": "/conversion_vcf_bff",
  },
};

const subMenuItems: { [key: string]: string[] } = {
  "Beacon 2 RI API": [
    "Automated Deployment",
    "Manual Deployment",
    "Data Linking",
    "API Configuration",
    "Querying the API",
  ],
  "Beacon 2 RI Tools": [
    "Starting Guide",
    "Configuration File",
    "Creating the CSV files",
    "Conversion from CSV to BFF",
    "Conversion from VCF to BFF",
  ],
  "Beacon UI": ["Deployment", "Configuration UI", "Querying the UI"],
  "Beacon Network UI": ["Deployment", "Configuration UI", "Querying the UI"],
};

const nestedSubMenuItems: { [key: string]: string[] } = {
  "Automated Deployment": [
    "Cloning the repository",
    "Execute start script from root",
  ],
  "Manual Deployment": [
    "Cloning the repository",
    "Creating the containers",
    "Data injection",
    "Data indexing",
  ],
  "Data Linking": [
    "Linking ids to dataset and cohort",
    "Extract filtering terms",
    "Manually adding filtering terms",
  ],
  "API Configuration": [
    "Managing dataset permissions",
    "Supplying AAI credentials",
    "Handling CORS",
    "Editing your beacon information",
    "Limiting the granularity",
    "Adding beacon handovers",
  ],
  "Querying the API": ["GET Method", "POST Method"],
  "Configuration File": [
    "Generic config parameters",
    "VCF conversion config parameters",
  ],
  "Starting Guide": ["Tools Introduction", "Installation Guide"],
  "Beacon UI": ["Deployment", "Configuration", "Querying the UI"],
  "Beacon Network UI": ["Deployment", "Configuration", "Querying the UI"],
};

function Menu({ isSubmenuOpen, toggleSubmenu }: MenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>("Introduction");
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeNestedSubMenuItem, setActiveNestedSubMenuItem] = useState<
    string | null
  >(null);
  const navigate = useNavigate();

  const menuItems: string[] = [
    "Introduction",
    "Beacon 2 RI API",
    "Beacon 2 RI Tools",
    "Beacon UI",
    "Beacon Network UI",
    "Tutorials",
    "FAQs",
    "Official Links",
  ];

  const handleClick = (item: string) => {
    const isMenuItemActive = activeMenu === item;

    if (item === "Introduction") {
      setActiveMenu("Introduction"); // Mark "Introduction" as active
      setActiveSubMenu(null);
      setActiveNestedSubMenuItem(null);
      navigate("/");
      if (isSubmenuOpen) {
        toggleSubmenu(); // Close the submenu if open
      }
      return;
    }

    setActiveMenu(item);
    setActiveSubMenu(null);
    setActiveNestedSubMenuItem(null);

    if (!isSubmenuOpen) {
      toggleSubmenu(); // Open the submenu if it's not already open
    }
  };

  const handleToggleSubmenu = () => {
    toggleSubmenu();
  };

  const handleSubMenuClick = (subItem: string, parentMenu: string) => {
    setActiveSubMenu(subItem); // Mark the subItem as active
    setActiveNestedSubMenuItem(null);

    if (
      directNavigationMenus[parentMenu as ParentMenu] &&
      directNavigationMenus[parentMenu as ParentMenu][subItem]
    ) {
      navigate(directNavigationMenus[parentMenu as ParentMenu][subItem]);
    } else {
      setActiveSubMenu(activeSubMenu === subItem ? null : subItem);
      setActiveNestedSubMenuItem(null); // Close nested sub-menu when a new sub-menu item is clicked
    }
  };

  const handleNestedSubMenuItemClick = (
    subItem: string,
    nestedItem: string
  ) => {
    setActiveNestedSubMenuItem(nestedItem);

    const basePathMap: { [key: string]: string } = {
      "Automated Deployment": "/automated-deployment",
      "Manual Deployment": "/manual-deployment",
      "Data Linking": "/data-linking",
      "API Configuration": "/api-configuration",
      "Querying the API": "/querying-api",
      "Beacon UI": "/beacon-ui",
      "Beacon Network UI": "/beacon-network-ui",
      "Configuration File": "/configuration-file",
      "Starting Guide": "/starting-guide",
    };

    const pathMap: { [key: string]: string } = {
      "Cloning the repository": "#cloning-repository",
      "Execute start script from root": "#execute-start-script",
      "Creating the containers": "#creating-the-containers",
      "Data injection": "#data-injection",
      "Data indexing": "#data-indexing",
      "Linking ids to dataset and cohort": "#linking-ids-to-dataset-and-cohort",
      "Extract filtering terms": "#extract-filtering-terms",
      "Manually adding filtering terms": "#manually-adding-filtering-terms",
      "Get descendant terms": "#get-descendant-terms",
      "Managing dataset permissions": "#managing-dataset-permissions",
      "Supplying AAI credentials": "#supplying-aai-credentials",
      "Handling CORS": "#handling-cors",
      "Editing your beacon information": "#editing-beacon-info",
      "Limiting the granularity": "#limiting-granularity",
      "Adding beacon handovers": "#adding-beacon-handovers",
      "GET Method": "#get-method",
      "GET query examples": "#get-query-examples",
      "POST Method": "#post-method",
      "POST query examples": "#post-query-examples",
      "List of endpoints": "#list-of-endpoints",
      "Generic config parameters": "#generic-config-parameters",
      "VCF conversion config parameters": "#vcf-conversion-config-parameters",
      Deployment: "#deployment",
      "API Configuration": "#configuration",
      "Querying the UI": "#querying-ui",
      "Tools Introduction": "#tools-introduction",
      "Installation Guide": "#installation-guide",
    };

    const basePath = basePathMap[subItem];
    const hash = pathMap[nestedItem];

    if (basePath && hash) {
      navigate(`${basePath}${hash}`);
    }
  };

  return (
    <div className="menuContainer">
      <div className="menuDiv">
        <a
          href="https://ega-archive.org/"
          className="logoInstitution"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="EGALogo"
            src="./ega_logo_white.png"
            alt="EGALogo"
          ></img>
        </a>
        {menuItems.map((item) => (
          <div
            key={item}
            className={`menuItem ${activeMenu === item ? "active" : ""}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {activeMenu && activeMenu !== "Introduction" && isSubmenuOpen && (
        <div className="subMenuContainer">
          <button className="buttonHideSubmenu" onClick={handleToggleSubmenu}>
            <img src="./back.png" className="backIcon" alt="backIcon"></img>
          </button>
          {activeMenu && subMenuItems[activeMenu] && (
            <div className="subMenu">
              {subMenuItems[activeMenu].map((subItem: string) => (
                <div key={subItem}>
                  <button
                    className={`subMenuItem ${
                      activeSubMenu === subItem ||
                      activeNestedSubMenuItem === subItem
                        ? "active2"
                        : ""
                    }`}
                    onClick={() => handleSubMenuClick(subItem, activeMenu)}
                  >
                    {subItem}
                    {!(
                      activeMenu === "Beacon UI" ||
                      activeMenu === "Beacon Network UI" ||
                      (activeMenu === "Beacon 2 RI Tools" &&
                        [
                          "Creating the CSV files",
                          "Conversion from CSV to BFF",
                          "Conversion from VCF to BFF",
                        ].includes(subItem))
                    ) && (
                      <img
                        src={
                          activeSubMenu === subItem
                            ? "../arrow-down.png"
                            : "../arrow-right.png"
                        }
                        alt={
                          activeSubMenu === subItem ? "Arrow Up" : "Arrow Down"
                        }
                        className="arrowIcon"
                      />
                    )}
                  </button>
                  {activeSubMenu === subItem && nestedSubMenuItems[subItem] && (
                    <div className="nestedSubMenu">
                      {nestedSubMenuItems[subItem].map((nestedItem: string) => (
                        <div
                          key={nestedItem}
                          className={`nestedSubMenuItem ${
                            activeNestedSubMenuItem === nestedItem
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleNestedSubMenuItemClick(subItem, nestedItem)
                          }
                        >
                          {nestedItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {!isSubmenuOpen && activeMenu !== "Introduction" && (
        <div className="subMenuContainerNoExpanded">
          <button className="buttonShowSubmenu" onClick={handleToggleSubmenu}>
            <img
              src="./forward.png"
              className="forwardIcon"
              alt="forwardIcon"
            ></img>
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
