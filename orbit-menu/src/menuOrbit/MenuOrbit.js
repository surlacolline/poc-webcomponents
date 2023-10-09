import React from 'react';
import '../index.css';
import { IconButton } from "@sharegate/orbit-ui";
import { ShareGateTheme, ThemeProvider } from "@sharegate/orbit-ui";
import { VerticalDotsMajorIcon } from "@sharegate/orbit-ui";
import { Text } from "@sharegate/orbit-ui";
import { PlaceholderMajorIcon } from "@sharegate/orbit-ui";
import { MenuTrigger, Section, createThemeVars, Menu, Item } from "@sharegate/orbit-ui";

const MenuOrbit = ({ menuItems, func, label }) => {
    createThemeVars([ShareGateTheme]);
    const menuItemsInternal = menuItems ?? [{
        sectionTitle: "PRODUCTS",
        items: [
            {
                icon: "Icon OV",
                title: " ",
                description: "Engage, recognize and manage performance",
                isNew: false,
                isExternal: false,
                redirectUrl: "https://www.officevibe.com/"
            }
        ]
    }, {
        sectionTitle: "DISCOVER",
        items: [
            {
                icon: "Icon OV",
                title: "LMS",
                description: "Item Description",
                isNew: true,
                isExternal: false,
                redirectUrl: "https://www.officevibe.com/"
            }
        ]
    }];

    return (
        <>
            <ThemeProvider theme={ShareGateTheme} colorScheme="light">
                <MenuTrigger>
                    <IconButton variant="secondary" aria-label="View tasks">
                        <VerticalDotsMajorIcon />
                    </IconButton>
                    <Menu>
                        {menuItemsInternal.map((section, index) => (
                               <Section key ={"section"+index}title={section.sectionTitle}>
                               {section.items.map((menuItem, menuItemIndex) => (
                                   <Item key={"menuitem-" + menuItemIndex} onClick={() => func(menuItem.title)}>
                                       <PlaceholderMajorIcon />
                                       <Text>{menuItem.title + " - " + label}</Text>
                                       <Text slot="description">{menuItem.description}</Text>
                                   </Item>
                               ))}
                           </Section>
                        ))}
                    </Menu>
                </MenuTrigger>
            </ThemeProvider>
        </>);
};

export default MenuOrbit;
