import Navbar from "./Navbar.js";

export default class PageHeader extends HTMLElement {
  constructor() {
    super()
    this.navbar = new Navbar().getHtml();
  }

  connectedCallback() {
    const template = document.getElementById("header-template");
    const content = template.content.cloneNode(true);

    this.appendChild(content);

    const headerText = JSON.parse(this.dataset.header);
    this.querySelector("h1").textContent = headerText;
    const navContainer = this.querySelector(".header__nav-container")
    navContainer.innerHTML = this.navbar;
  }
};

customElements.define("header-item", PageHeader);
