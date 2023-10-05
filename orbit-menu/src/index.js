import App from './App';
import Menu from './menu/Menu'
import r2wc from "@r2wc/react-to-web-component";

const WebGreeting = r2wc(App);

customElements.define("web-greeting", WebGreeting);

const MenuWC = r2wc(Menu);

customElements.define("menu-wc", MenuWC);