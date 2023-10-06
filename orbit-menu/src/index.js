import App from './App';
import Menu from './menu/Menu'
import Menu2 from './menu2/Menu2'
 import TestSimple from './testsimple/TestSimple'
 import r2wc from "@r2wc/react-to-web-component";
import SansReact from './sansreact/SansReact'

const WebGreeting = r2wc(App);

customElements.define("web-greeting", WebGreeting);

const MenuWC = r2wc(Menu,  { props: { menuItem: "json", greeting: "string", bigGreeting: "string" } });

customElements.define("menu-wc", MenuWC);

const MenuWC2 = r2wc(Menu2);

customElements.define("menu-wc2", MenuWC2);

 const TestSimpleWC = r2wc(TestSimple);

 customElements.define("testsimple-wc", TestSimpleWC);



customElements.define("sansreact-wc", SansReact);