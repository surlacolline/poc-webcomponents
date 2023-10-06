import App from './App';
import Menu from './menu/Menu';
import Menu2 from './menuOrbit/MenuOrbit';
import TestSimple from './testsimpleAvecReact/TestSimple';
import r2wc from "@r2wc/react-to-web-component";
import SansReact from './sansreact/SansReact';

const WebGreeting = r2wc(App);

customElements.define("web-greeting", WebGreeting);

const MenuWC = r2wc(Menu, { shadow: "open", props: { menuItem: "json", greeting: "string", bigGreeting: "string" } });

customElements.define("menu-wc", MenuWC);

const MenuOrbit = r2wc(Menu2, { shadow: "closed" });

customElements.define("menuorbit-wc", MenuOrbit);

const TestSimpleAvecReactWC = r2wc(TestSimple);

customElements.define("testsimple-wc", TestSimpleAvecReactWC);

customElements.define("sansreact-wc", SansReact);