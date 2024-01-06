export default class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const template = document.getElementById("about-view-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const headerContainer = document.getElementById("header__container-about");
    const header = document.createElement("header-item");
    header.dataset.heading = JSON.stringify("About");
    headerContainer.appendChild(header);
  }
}

customElements.define("about-view", About);
