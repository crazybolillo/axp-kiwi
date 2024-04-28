import { createRoot } from "react-dom/client";
import Widget from "./widget";

class Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.root = createRoot(this.shadowRoot);
  }

  connectedCallback() {
    this.root.render(
      <Widget interactionId={this.getAttribute("interactionId")} />,
    );
  }

  disconnectedCallback() {
    this.root.unmount();
  }
}

customElements.define("axp-kiwi", Component);
