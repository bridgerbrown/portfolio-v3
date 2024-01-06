import PageHeader from "../components/PageHeader.js";
import HeaderRenderer from "../services/renderHeader.js";

export default class About extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("about-view-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);    
    this.headerRenderer = new HeaderRenderer(this.root, "About");
  }
  async connectedCallback() {
    await this.loadCSS();
    this.render();
  }

  async loadCSS() {
    const styles = document.createElement("style");
    const request = await fetch("/static/css/index.css");
    const text = await request.text();
    styles.textContent = text;
    this.root.appendChild(styles);
  };

  render() {
    this.headerRenderer.render();
  }
}

customElements.define("about-view", About);
