export default class Home extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("home-view-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);    
  }

  async connectedCallback() {
    await this.loadCSS();
  }

  async loadCSS() {
    const styles = document.createElement("style");
    const request = await fetch("/static/css/index.css");
    const text = await request.text();
    styles.textContent = text;
    this.root.appendChild(styles);
  };
}

customElements.define("home-view", Home);
