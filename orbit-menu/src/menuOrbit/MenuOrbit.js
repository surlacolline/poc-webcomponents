import React from 'react';
import { IconButton } from "@sharegate/orbit-ui";
import { ShareGateTheme, ThemeProvider } from "@sharegate/orbit-ui";
import { VerticalDotsMajorIcon } from "@sharegate/orbit-ui";
import { Text } from "@sharegate/orbit-ui";
import { PlaceholderMajorIcon } from "@sharegate/orbit-ui";
import { MenuTrigger,createThemeVars, Menu, Item } from "@sharegate/orbit-ui";
import { Accordion, Content, H3} from "@sharegate/orbit-ui";

const MenuOrbit = () => {
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
            <Text>Launch2...</Text>
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
<Accordion>
    <Item key="mars">
        <H3>Mars</H3>
        <Content>
            Mars is the fourth planet from the Sun and the second-smallest planet in the Solar
            System.
        </Content>
    </Item>
    <Item key="jupiter">
        <H3>Jupiter</H3>
        <Content>
            Jupiter is the fifth planet from the Sun and the largest in the Solar System.
        </Content>
    </Item>
    <Item key="venus">
        <H3>Venus</H3>
        <Content>
            Venus is the second planet from the Sun. It is named after the Roman goddess of love and
            beauty.
        </Content>
    </Item>
</Accordion>
</>);
};

export default MenuOrbit;
