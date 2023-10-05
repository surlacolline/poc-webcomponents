import r2wc from "@r2wc/react-to-web-component";

import { OrbitMenu } from "./Components/OrbitMenu";

const OrbitMenuWC = r2wc(OrbitMenu);

customElements.define("orbitmenu-wc", OrbitMenuWC);
