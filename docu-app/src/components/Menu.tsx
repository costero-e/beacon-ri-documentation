import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Menu.css'

type ParentMenu = 'Beacon UI' | 'Beacon Network UI' | 'Beacon 2 RI Tools'
type SubMenuItemsBeaconUI =
  | 'Deployment'
  | 'Configuration UI'
  | 'Querying the UI'
type SubMenuItemsBeaconTools =
  | 'Creating the CSV files'
  | 'Conversion from CSV to BFF'
  | 'Conversion from VCF to BFF'

const directNavigationMenus: Record<ParentMenu, Record<string, string>> = {
  'Beacon UI': {
    Deployment: '/ui_deployment',
    'Configuration UI': '/ui_configuration',
    'Querying the UI': '/ui_queries'
  },
  'Beacon Network UI': {
    Deployment: '/networkui_deployment',
    'Configuration UI': '/networkui_configuration',
    'Querying the UI': '/networkui_queries'
  },
  'Beacon 2 RI Tools': {
    'Creating the CSV files': '/creating_csvs',
    'Conversion from CSV to BFF': '/conversion_csv_bff',
    'Conversion from VCF to BFF': '/conversion_vcf_bff'
  }
}

function Menu () {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [activeNestedSubMenuItem, setActiveNestedSubMenuItem] = useState<
    string | null
  >(null)
  const navigate = useNavigate()

  const menuItems: string[] = [
    'Introduction',
    'Beacon 2 RI API',
    'Beacon 2 RI Tools',
    //'Beacon Verifier',
    'Beacon UI',
    'Beacon Network UI'
    //'Tutorials',
    // 'FAQs',
    // 'Official Links'
  ]

  const subMenuItems: { [key: string]: string[] } = {
    'Beacon 2 RI API': [
      'Automated Deployment',
      'Manual Deployment',
      'Data Linking',
      'Configuration',
      'Querying the API'
    ],
    'Beacon 2 RI Tools': [
      'Starting Guide',
      'Configuration File',
      'Creating the CSV files',
      'Conversion from CSV to BFF',
      'Conversion from VCF to BFF'
    ],
    'Beacon UI': ['Deployment', 'Configuration UI', 'Querying the UI'],
    'Beacon Network UI': ['Deployment', 'Configuration UI', 'Querying the UI']
  }

  const nestedSubMenuItems: { [key: string]: string[] } = {
    'Automated Deployment': [
      'Cloning the repository',
      'Execute start script from root'
    ],
    'Manual Deployment': [
      'Cloning the repository',
      'Creating the containers',
      'Data injection',
      'Data indexing'
    ],
    'Data Linking': [
      'Linking ids to dataset and cohort',
      'Extract filtering terms',
      'Manually adding filtering terms',
      'Get descendant terms'
    ],
    Configuration: [
      'Managing dataset permissions',
      'Supplying AAI credentials',
      'Handling CORS',
      'Editing your beacon information',
      'Limiting the granularity',
      'Adding beacon handovers'
    ],
    'Querying the API': [
      'GET Method',
      'GET query examples',
      'POST Method',
      'POST query examples',
      'List of endpoints'
    ],
    'Configuration File': [
      'Generic config parameters',
      'VCF conversion config parameters'
    ],
    'Starting Guide': ['Tools Introduction', 'Installation Guide'],
    'Beacon UI': ['Deployment', 'Configuration', 'Querying the UI'],
    'Beacon Network UI': ['Deployment', 'Configuration', 'Querying the UI']
  }

  const handleClick = (item: string) => {
    setActiveMenu(activeMenu === item ? null : item)
    setActiveSubMenu(null) // Close sub-menu when a new main menu item is clicked
    setActiveNestedSubMenuItem(null) // Close nested sub-menu when a new main menu item is clicked

    if (item === 'Introduction') {
      navigate('/')
      setActiveMenu(null) // Hide the submenu
      window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to the top of the page
    }
  }

  const handleHideSubmenu = () => {
    setActiveMenu(null)
  }

  const handleShowSubmenu = () => {
    if (activeMenu) {
      setActiveMenu(activeMenu) // Reopen the submenu
    }
  }

  const handleSubMenuClick = (subItem: string, parentMenu: string) => {
    if (
      directNavigationMenus[parentMenu as ParentMenu] &&
      directNavigationMenus[parentMenu as ParentMenu][subItem]
    ) {
      navigate(directNavigationMenus[parentMenu as ParentMenu][subItem])
      // Close the menu after navigation
    } else {
      setActiveSubMenu(activeSubMenu === subItem ? null : subItem)
      setActiveNestedSubMenuItem(null) // Close nested sub-menu when a new sub-menu item is clicked
    }
  }

  const handleNestedSubMenuItemClick = (
    subItem: string,
    nestedItem: string
  ) => {
    setActiveNestedSubMenuItem(
      activeNestedSubMenuItem === nestedItem ? null : nestedItem
    )

    const basePathMap: { [key: string]: string } = {
      'Automated Deployment': '/automated-deployment',
      'Manual Deployment': '/manual-deployment',
      'Data Linking': '/data-linking',
      Configuration: '/api-configuration',
      'Querying the API': '/querying-api',
      'Beacon UI': '/beacon-ui',
      'Beacon Network UI': '/beacon-network-ui',
      'Configuration File': '/configuration-file',
      'Starting Guide': '/starting-guide'
    }

    const pathMap: { [key: string]: string } = {
      'Cloning the repository': '#cloning-repository',
      'Execute start script from root': '#execute-start-script',
      'Creating the containers': '#creating-the-containers',
      'Data injection': '#data-injection',
      'Data indexing': '#data-indexing',
      'Linking ids to dataset and cohort': '#linking-ids-to-dataset-and-cohort',
      'Extract filtering terms': '#extract-filtering-terms',
      'Manually adding filtering terms': '#manually-adding-filtering-terms',
      'Get descendant terms': '#get-descendant-terms',
      'Managing dataset permissions': '#managing-dataset-permissions',
      'Supplying AAI credentials': '#supplying-aai-credentials',
      'Handling CORS': '#handling-cors',
      'Editing your beacon information': '#editing-beacon-info',
      'Limiting the granularity': '#limiting-granularity',
      'Adding beacon handovers': '#adding-beacon-handovers',
      'GET Method': '#get-method',
      'GET query examples': '#get-query-examples',
      'POST Method': '#post-method',
      'POST query examples': '#post-query-examples',
      'List of endpoints': '#list-of-endpoints',
      'Generic config parameters': '#generic-config-parameters',
      'VCF conversion config parameters': '#vcf-conversion-config-parameters',
      Deployment: '#deployment',
      Configuration: '#configuration',
      'Querying the UI': '#querying-ui',
      'Tools Introduction': '#tools-introduction',
      'Installation Guide': '#installation-guide'
    }

    const basePath = basePathMap[subItem]
    const hash = pathMap[nestedItem]

    if (basePath && hash) {
      navigate(`${basePath}${hash}`)
    }
  }

  return (
    <div className='menuContainer'>
      <div className='menuDiv'>
        <a
          href='https://ega-archive.org/'
          className='logoInstitution'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='EGALogo'
            src='./ega_logo_white.png'
            alt='EGALogo'
          ></img>
        </a>
        {menuItems.map(item => (
          <div
            key={item}
            className={`menuItem ${activeMenu === item ? 'active' : ''}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {activeMenu && (
        <div className='subMenuContainer'>
          <button className='buttonHideSubmenu'>
            <img
              src='./back.png'
              className='backIcon'
              alt='backIcon'
              onClick={handleHideSubmenu}
            ></img>
          </button>
          {activeMenu && subMenuItems[activeMenu] && (
            <div className='subMenu'>
              {subMenuItems[activeMenu].map((subItem: string) => (
                <div key={subItem}>
                  <button
                    className={`subMenuItem ${
                      activeSubMenu === subItem ? 'active' : ''
                    }`}
                    onClick={() => handleSubMenuClick(subItem, activeMenu)}
                  >
                    {subItem}
                    {!(
                      activeMenu === 'Beacon UI' ||
                      activeMenu === 'Beacon Network UI' ||
                      (activeMenu === 'Beacon 2 RI Tools' &&
                        [
                          'Creating the CSV files',
                          'Conversion from CSV to BFF',
                          'Conversion from VCF to BFF'
                        ].includes(subItem))
                    ) && (
                      <img
                        src={
                          activeSubMenu === subItem
                            ? '../arrow-down.png'
                            : '../arrow-right.png'
                        }
                        alt={
                          activeSubMenu === subItem ? 'Arrow Up' : 'Arrow Down'
                        }
                        className='arrowIcon'
                      />
                    )}
                  </button>
                  {activeSubMenu === subItem && nestedSubMenuItems[subItem] && (
                    <div className='nestedSubMenu'>
                      {nestedSubMenuItems[subItem].map((nestedItem: string) => (
                        <div
                          key={nestedItem}
                          className={`nestedSubMenuItem ${
                            activeNestedSubMenuItem === nestedItem
                              ? 'active'
                              : ''
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
      {!activeMenu && (
        <div className='subMenuContainerNoExpanded'>
          <button
            className='buttonShowSubmenu'
            onClick={() => setActiveMenu('Beacon UI')}
          >
            <img
              src='./forward.png'
              className='forwardIcon'
              alt='forwardIcon'
            ></img>
          </button>
        </div>
      )}
    </div>
  )
}

export default Menu
