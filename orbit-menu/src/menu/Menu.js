import React, { useState, useRef } from 'react';
import './menu.css';
import { IconButton } from "@sharegate/orbit-ui";
import { VerticalDotsMajorIcon } from "@sharegate/orbit-ui";

const MenuIcon = ({menuItem, greeting, bigGreeting}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusedItem, setFocusedItem] = useState(null);
  const menuRef = useRef(null);
   const menuItems = menuItem ?? [{
    sectionTitle: 'PRODUCTS',
    items:[
    {
      icon: "Icon OV", // You can replace this with an actual icon component
      title: "Officevibe",
      description: "Item Description",
      isNew: false,
      isExternal: false,
      redirectUrl: "https://www.officevibe.com/",
    },
    {
        icon: "Icon OV", // You can replace this with an actual icon component
        title: "Officevibe",
        description: "Item Description",
        isNew: false,
        isExternal: false,
        redirectUrl: "https://www.officevibe.com/",
      },
      {
        icon: "Icon OV", // You can replace this with an actual icon component
        title: "Officevibe",
        description: "Item Description",
        isNew: false,
        isExternal: false,
        redirectUrl: "https://www.officevibe.com/",
      }
]},{
sectionTitle: 'DISCOVER',
items:[
{
  icon: "Icon OV", // You can replace this with an actual icon component
  title: "Officevibe",
  description: "Item Description",
  isNew: false,
  isExternal: false,
  redirectUrl: "https://www.officevibe.com/",
},
{
    icon: "Icon OV", // You can replace this with an actual icon component
    title: "Officevibe",
    description: "Item Description",
    isNew: false,
    isExternal: false,
    redirectUrl: "https://www.officevibe.com/",
  },
  {
    icon: "Icon OV", // You can replace this with an actual icon component
    title: "Officevibe",
    description: "Item Description",
    isNew: false,
    isExternal: false,
    redirectUrl: "https://www.officevibe.com/",
  }
]}];


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      menuRef.current.focus();
    }
  };

  const handleItemClick = (item) => {
    alert(`Clicked on ${item.title}`);
  };

  const handleKeyDown = (event, item) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleItemClick(item);
    }
  };

  return (
    <div>
                  <IconButton aria-label="View tasks"
                          className={`icon ${menuOpen ? 'menu-open' : ''}`}
                          onClick={toggleMenu}
                          ref={menuRef}
                          onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                              setMenuOpen(false);
                            }
                          }}
                variant={menuOpen ? "primary" : "secondary"}>
            <VerticalDotsMajorIcon />
          </IconButton>
      {menuOpen && (
        <div className="menu">
            {console.log(greeting)}
            {console.log(bigGreeting)}
          {menuItems.map((item, index) => (
            <div
              className={`menu-section ${focusedItem === index ? 'focused' : ''}`}
              key={index}
            >
              <div className="menu-section-label">{item.sectionTitle + greeting + bigGreeting}</div>
              {item.items.map((menuItem, itemIndex) => (
                <button
                  className="menu-item"
                  key={itemIndex}
                  onFocus={() => setFocusedItem(index)}
                  onBlur={() => setFocusedItem(null)}
                  onClick={() => handleItemClick(menuItem)}
                  onKeyDown={(e) => handleKeyDown(e, menuItem)}
                >
                  <div className="menu-item-avatar">{menuItem.icon}</div>
                  <div className="menu-item-info">
                    <div className="menu-item-title">{menuItem.title}</div>
                    <div className="menu-item-description">
                      {menuItem.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuIcon;