import r2wc from "@r2wc/react-to-web-component";

import { Menu } from "./Components/Menu";

const MenuWC = r2wc(Menu);

customElements.define("menu-wc", MenuWC);
