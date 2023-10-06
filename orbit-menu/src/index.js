import Menu from './menu/Menu';
import MenuOrbit from './menuOrbit/MenuOrbit';
import r2wc from "@r2wc/react-to-web-component";

const MenuWC = r2wc(Menu, { props: { menuItems: "json", greeting: "string" } });

customElements.define("menu-wc", MenuWC);

const MenuOrbitWC = r2wc(MenuOrbit, {props: { menuItems: "json",  funcProp: "function", label: "string" }});

customElements.define("menuorbit-wc", MenuOrbitWC) ;
