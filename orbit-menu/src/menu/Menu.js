import React, { useState, useRef } from 'react';
import './menu.css';
import { IconButton } from "@sharegate/orbit-ui";
import { VerticalDotsMajorIcon } from "@sharegate/orbit-ui";

const MenuIcon = ({ menuItems, greeting }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusedItem, setFocusedItem] = useState(null);
  const menuRef = useRef(null);
  const menuItemsOrDefault = menuItems ?? [{
    sectionTitle: 'PRODUCTS',
    items: [
      {
        icon: "Icon OV", // You can replace this with an actual icon component
        title: "Officevibe",
        description: "Item Description",
        isNew: false,
        isExternal: false,
        redirectUrl: "https://www.officevibe.com/",
      }
    ]
  }, {
    sectionTitle: 'DISCOVER',
    items: [
      {
        icon: "Icon OV", // You can replace this with an actual icon component
        title: "Officevibe",
        description: "Item Description",
        isNew: false,
        isExternal: false,
        redirectUrl: "https://www.officevibe.com/",
      }
    ]
  }];

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
    <div className='wc'>
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
        <><VerticalDotsMajorIcon />{greeting}</>
      </IconButton>
      {menuOpen && (
        <div className="wc-menu">
          {menuItemsOrDefault.map((item, index) => (
            <div
              className={`wc-menu-section ${focusedItem === index ? 'focused' : ''}`}
              key={index}
            >
              <div className="wc-menu-section-label">{item.sectionTitle}</div>
              {item.items.map((menuItem, itemIndex) => (
                <button
                  className="wc-menu-item"
                  key={itemIndex}
                  onFocus={() => setFocusedItem(index)}
                  onBlur={() => setFocusedItem(null)}
                  onClick={() => handleItemClick(menuItem)}
                  onKeyDown={(e) => handleKeyDown(e, menuItem)}
                >
                  <div className="wc-menu-item-avatar">{menuItem.icon}</div>
                  <div className="wc-menu-item-info">
                    <div className="wc-menu-item-title">{menuItem.title}</div>
                    <div className="wc-menu-item-description">
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
