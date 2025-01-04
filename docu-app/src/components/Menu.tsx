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

  "Beacon 2 PI API": [
    "PI Automated Deployment",
    "PI Manual Deployment",
    "Filtering Terms",
    "Configuration",
    "PI Querying the API",
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

const nestedSubMenuItems: { [key: string]: { key: string; label: string }[] } =
  {
    "Automated Deployment": [
      { key: "cloning-repository", label: "Cloning the repository" },
      { key: "execute-start-script", label: "Execute start script from root" },
    ],
    "PI Automated Deployment": [
      { key: "cloning-repository", label: "Cloning the repository" },
      { key: "execute-start-script", label: "Execute start script from root" },
    ],
    "Manual Deployment": [
      { key: "cloning-repository", label: "Cloning the repository" },
      { key: "creating-containers", label: "Creating the containers" },
      { key: "data-injection", label: "Data injection" },
      { key: "data-indexing", label: "Data indexing" },
    ],
    "PI Manual Deployment": [
      { key: "cloning-repository", label: "Cloning the repository" },
      { key: "creating-containers", label: "Creating the containers" },
      { key: "data-injection", label: "Data injection" },
      { key: "data-indexing", label: "Data indexing" },
    ],
    "Data Linking": [
      { key: "linking-ids", label: "Linking ids to dataset and cohort" },
      { key: "extract-filtering-terms", label: "Extract filtering terms" },
      {
        key: "manually-adding-terms",
        label: "Manually adding filtering terms",
      },
    ],
    "API Configuration": [
      { key: "managing-permissions", label: "Managing dataset permissions" },
      { key: "supplying-aai", label: "Supplying AAI credentials" },
      { key: "handling-cors", label: "Handling CORS" },
      { key: "editing-beacon-info", label: "Editing your beacon information" },
      { key: "limiting-granularity", label: "Limiting the granularity" },
      { key: "adding-handovers", label: "Adding beacon handovers" },
    ],
    Configuration: [
      { key: "editing-beacon-info", label: "Editing your beacon information" },
      { key: "managing-permissions", label: "Managing dataset permissions" },
      { key: "supplying-aai", label: "Supplying AAI credentials" },
      { key: "handling-cors", label: "Handling CORS" },
      { key: "default-granularity", label: "Setting the default granularity" },
      { key: "adding-handovers", label: "Adding beacon handovers" },
      { key: "configuring-entry-types", label: "Configuring your entry types" },
      { key: "setting-logs", label: "Setting the logs" },
      { key: "tls-config", label: "TLS configuration" },
      { key: "tls-mongodb", label: "TLS secured MongoDB" },
    ],
    "Querying the API": [
      { key: "get-method", label: "GET Method" },
      { key: "post-method", label: "POST Method" },
    ],
    "PI Querying the API": [
      { key: "pi-get-method", label: "GET Method" },
      { key: "pi-post-method", label: "POST Method" },
    ],
    "Configuration File": [
      { key: "generic-config", label: "Generic config parameters" },
      { key: "vcf-config", label: "VCF conversion config parameters" },
    ],
    "Starting Guide": [
      { key: "tools-intro", label: "Tools Introduction" },
      { key: "installation-guide", label: "Installation Guide" },
    ],
    "Beacon UI": [
      { key: "ui-deployment", label: "Deployment" },
      { key: "ui-configuration", label: "Configuration" },
      { key: "ui-querying", label: "Querying the UI" },
    ],
    "Beacon Network UI": [
      { key: "network-deployment", label: "Deployment" },
      { key: "network-configuration", label: "Configuration" },
      { key: "network-querying", label: "Querying the UI" },
    ],
    "Filtering Terms": [
      { key: "extract-terms", label: "Extract filtering terms" },
      {
        key: "manually-adding-terms",
        label: "Manually adding filtering terms",
      },
      { key: "get-descendant-terms", label: "Get descendant terms" },
    ],
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
    "Beacon 2 PI API",
    "Beacon 2 RI API",
    "Beacon 2 RI Tools",
    // "Beacon Verifier",
    "Beacon UI",
    "Beacon Network UI",
    "Tutorials",
    // "FAQs",
    "Official Links",
  ];

  const handleClick = (item: string) => {
    if (item === "Official Links") {
      navigate("/official-links");
      setActiveMenu(item);
      setActiveSubMenu(null);
      setActiveNestedSubMenuItem(null);
      return;
    }

    if (item === "Tutorials") {
      navigate("/tutorials");
      setActiveMenu(item);
      setActiveSubMenu(null);
      setActiveNestedSubMenuItem(null);
      return;
    }

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
      setActiveNestedSubMenuItem(null);
    }
  };

  const handleNestedSubMenuItemClick = (
    subItem: string,
    nestedItem: { key: string; label: string }
  ) => {
    setActiveNestedSubMenuItem(nestedItem.key);

    const basePathMap: { [key: string]: string } = {
      "Automated Deployment": "/automated-deployment",
      "PI Automated Deployment": "/pi-automated-deployment",
      "Manual Deployment": "/manual-deployment",
      "PI Manual Deployment": "/pi-manual-deployment",
      "Data Linking": "/data-linking",
      "API Configuration": "/api-configuration",
      Configuration: "/pi-api-configuration",
      "Querying the API": "/querying-api",
      "PI Querying the API": "/pi-querying-api",
      "Beacon UI": "/beacon-ui",
      "Beacon Network UI": "/beacon-network-ui",
      "Configuration File": "/configuration-file",
      "Starting Guide": "/starting-guide",
      "Filtering Terms": "/filtering-terms",
      "Official Links": "/official-links",
    };

    const pathMap: { [key: string]: string } = {
      "cloning-repository": "#cloning-repository",
      "execute-start-script": "#execute-start-script",
      "creating-containers": "#creating-the-containers",
      "data-injection": "#data-injection",
      "data-indexing": "#data-indexing",
      "linking-ids": "#linking-ids-to-dataset-and-cohort",
      "extract-filtering-terms": "#extract-filtering-terms",
      "manually-adding-terms": "#manually-adding-filtering-terms",
      "get-descendant-terms": "#get-descendant-terms",
      "managing-permissions": "#managing-dataset-permissions",
      "supplying-aai": "#supplying-aai-credentials",
      "handling-cors": "#handling-cors",
      "editing-beacon-info": "#editing-beacon-info",
      "limiting-granularity": "#limiting-granularity",
      "adding-handovers": "#adding-beacon-handovers",
      "get-method": "#get-method",
      "post-method": "#post-method",
      "pi-get-method": "#pi-get-method",
      "pi-post-method": "#pi-post-method",
      "generic-config": "#generic-config-parameters",
      "vcf-config": "#vcf-conversion-config-parameters",
      deployment: "#deployment",
      "api-configuration": "#configuration",
      "default-granularity": "#setting-default-granularity",
      "configuring-entry-types": "#configuring-entry-types",
      "setting-logs": "#setting-logs",
      "tls-config": "#TLS-configuration",
      "tls-mongodb": "#TLS-secured-MongoDB",
      "querying-ui": "#querying-ui",
      "tools-intro": "#tools-introduction",
      "installation-guide": "#installation-guide",
    };

    // "Filtering Terms": [
    //   { key: "extract-terms", label: "Extract filtering terms" },
    //   {
    //     key: "manually-adding-terms",
    //     label: "Manually adding filtering terms",
    //   },
    //   { key: "get-descendant-terms", label: "Get descendant terms" },
    // ],

    const basePath = basePathMap[subItem];
    const hash = pathMap[nestedItem.key];

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
                      {nestedSubMenuItems[subItem].map((nestedItem) => (
                        <div
                          key={nestedItem.key}
                          className={`nestedSubMenuItem ${
                            activeNestedSubMenuItem === nestedItem.key
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleNestedSubMenuItemClick(subItem, nestedItem)
                          }
                        >
                          {nestedItem.label}
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
