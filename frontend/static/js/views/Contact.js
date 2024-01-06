export default class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const template = document.getElementById("contact-view-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const headerContainer = document.getElementById("header__container-contact");
    const header = document.createElement("header-item");
    header.dataset.heading = JSON.stringify("Contact");
    headerContainer.appendChild(header);
  }
}

customElements.define("contact-view", Contact);
