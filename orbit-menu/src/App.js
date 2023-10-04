import './App.css';
import r2wc from "@r2wc/react-to-web-component";
import { IconButton } from "@sharegate/orbit-ui";
import { VerticalDotsMajorIcon } from "@sharegate/orbit-ui";
import { PlaceholderMajorIcon } from "@sharegate/orbit-ui";
import { Text } from "@sharegate/orbit-ui";

import { MenuTrigger, Menu, Item, Section, Divider, MenuTriggerContext, useMenuTriggerContext } from "@sharegate/orbit-ui";
import { ThemeProvider, createThemeVars, ThemeContext, useThemeContext, ColorSchemeContext, useColorSchemeContext } from "@sharegate/orbit-ui";

import { ShareGateTheme } from "@sharegate/orbit-ui";

function App() {
  const { isOpen } = useMenuTriggerContext();
  createThemeVars([ShareGateTheme]);

  return (

      <ThemeProvider theme={ShareGateTheme} colorScheme="system" defaultColorScheme="light">
        <MenuTrigger>
          <IconButton aria-label="View tasks"
                variant={isOpen ? "primary" : "secondary"}>
            <VerticalDotsMajorIcon />
          </IconButton>
          <Menu>
            <Item key="launch">Launch...
            <PlaceholderMajorIcon />
            <Text>Launch...</Text>
            <Text slot="description">Launch...</Text></Item>
            <Item key="eject">  <PlaceholderMajorIcon />
            <Text>Eject...</Text>
            <Text slot="description">Eject...</Text></Item>
            <Divider />
            <Item key="land">    <PlaceholderMajorIcon />
            <Text>Land...</Text>
            <Text slot="description">Land on Of Course I Still Love You</Text></Item>
          </Menu>
        </MenuTrigger>
      </ThemeProvider>

  );
}

 const WebGreeting = r2wc(App)

 customElements.define("web-greeting", WebGreeting)

export default App;
