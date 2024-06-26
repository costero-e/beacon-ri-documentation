import React, { useState } from 'react'
import './Menu.css'

function Menu () {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [activeNestedSubMenuItem, setActiveNestedSubMenuItem] = useState<
    string | null
  >(null)

  const menuItems: string[] = [
    'Introduction',
    'Beacon 2 RI API',
    'Beacon 2 RI Tools',
    'Beacon Verifier',
    'Beacon UI',
    'Beacon Network UI',
    'Tutorials',
    'FAQs',
    'Official Links'
  ]

  const subMenuItems: { [key: string]: string[] } = {
    'Beacon 2 RI API': [
      'Automated Deployment',
      'Manual Deployment',
      'Configuration',
      'Querying the API'
    ]
  }

  const nestedSubMenuItems: { [key: string]: string[] } = {
    'Automated Deployment': [
      'Cloning the repository',
      'Execute start script from root'
    ]
  }

  const handleClick = (item: string) => {
    setActiveMenu(activeMenu === item ? null : item)
    setActiveSubMenu(null) // Close sub-menu when a new main menu item is clicked
    setActiveNestedSubMenuItem(null) // Close nested sub-menu when a new main menu item is clicked
  }

  const handleHideSubmenu = () => {
    setActiveMenu(null)
  }

  const handleSubMenuClick = (item: string) => {
    setActiveSubMenu(activeSubMenu === item ? null : item)
    setActiveNestedSubMenuItem(null) // Close nested sub-menu when a new sub-menu item is clicked
  }

  const handleNestedSubMenuItemClick = (item: string) => {
    setActiveNestedSubMenuItem(activeNestedSubMenuItem === item ? null : item)
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
          <button className='buttonHideSubmenu'><img src='./back.png' className='backIcon' alt='backIcon' onClick={handleHideSubmenu}></img></button>
          {activeMenu && subMenuItems[activeMenu] && (
            <div className='subMenu'>
              {subMenuItems[activeMenu].map((subItem: string) => (
                <div key={subItem}>
                  <button
                    className={`subMenuItem ${
                      activeSubMenu === subItem ? 'active' : ''
                    }`}
                    onClick={() => handleSubMenuClick(subItem)}
                  >
                    {subItem}
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
                            handleNestedSubMenuItemClick(nestedItem)
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
      {!activeMenu && <div className='subMenuContainerNoExpanded'></div>}
    </div>
  )
}

export default Menu
