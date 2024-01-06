export default class PageHeader extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("header-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const heading = JSON.parse(this.dataset.heading);
    this.querySelector("h1").innerText = heading;
  }
};

customElements.define("header-item", PageHeader);
