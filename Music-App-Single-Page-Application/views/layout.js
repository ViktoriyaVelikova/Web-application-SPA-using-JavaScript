import { html } from "https://unpkg.com/lit-html?module";

import headerTemplate from "./header.js";
import footerTemplate from "./footer.js";

export default (content, props) => html `
  ${headerTemplate(props)}
  <main id="main-content">${content}</main>
  ${footerTemplate(props)}
`;