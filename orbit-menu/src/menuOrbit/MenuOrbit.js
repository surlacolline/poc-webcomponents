import React from 'react';
import '../index.css';
import { IconButton } from "@sharegate/orbit-ui";
import { ShareGateTheme, ThemeProvider } from "@sharegate/orbit-ui";
import { VerticalDotsMajorIcon } from "@sharegate/orbit-ui";
import { Text } from "@sharegate/orbit-ui";
import { PlaceholderMajorIcon } from "@sharegate/orbit-ui";
import { MenuTrigger, createThemeVars, Menu, Item } from "@sharegate/orbit-ui";

const MenuOrbit = ({ menuItems, funcProp, greeting }) => {
    createThemeVars([ShareGateTheme]);
    return (
        <>
            <ThemeProvider theme={ShareGateTheme} colorScheme="light">
                <MenuTrigger>
                    <IconButton variant="secondary" aria-label="View tasks">
                        <VerticalDotsMajorIcon />
                    </IconButton>
                    <Menu>
                        <Item key="launch">
                            <PlaceholderMajorIcon />
                            <Text>Launch2... {greeting}</Text>
                            <Text slot="description">Launch...</Text>
                        </Item>
                        <Item key="eject">
                            <PlaceholderMajorIcon />
                            <Text>Eject...</Text>
                            <Text slot="description">Eject...</Text>
                        </Item>
                        <Item key="land">
                            <PlaceholderMajorIcon />
                            <Text>Land...</Text>
                            <Text slot="description">Land on Of Course I Still Love You</Text>
                        </Item>
                    </Menu>
                </MenuTrigger>
            </ThemeProvider>
        </>);
};

export default MenuOrbit;
