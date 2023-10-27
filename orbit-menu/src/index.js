import Nav from './nav/nav';
import MenuOrbit from './menuOrbit/MenuOrbit';
import r2wc from "@r2wc/react-to-web-component";
import ReactDOM from "react-dom";

const NavWC = r2wc(Nav, {props: { token: "string" }});

customElements.define("nav-wc", NavWC);

const MenuOrbitWC = r2wc(MenuOrbit, {props: { menuItems: "json", func: "function", label: "string" }});

customElements.define("menuorbit-wc", MenuOrbitWC) ;

customElements.define(
    "my-component",
    class extends HTMLElement {
      connectedCallback() {
        setTimeout(() => {
          // setTimeout is only used for demo reasons here

          const shadowRoot = this.attachShadow({ mode: "closed" });
          shadowRoot.childNodes.forEach(childNode => {
            this.appendChild(childNode);
          });
          ReactDOM.render(<MenuOrbit />, shadowRoot);
        }, 100);
      }
    }
);