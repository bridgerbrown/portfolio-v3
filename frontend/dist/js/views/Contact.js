export default class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  copyContact() {
    const secret = ['m', 'o', 'c', '.', 'l', 'i', 'a', 'm', 'g', '@', 'v', 'e', 'd', 'n', 'w', 'o', 'r', 'b', 'r', 'e', 'g', 'd', 'i', 'r', 'b']
    navigator.clipboard.writeText(secret.reverse().join(''));
    const button = document.getElementById("contact__email-button");
    button.innerText = "Copied! ✔";
    setTimeout(() => {
      button.innerText = "Copy Email";
    }, 3000);
  }

  render() {
    const template = document.getElementById("contact-view-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const headerContainer = document.getElementById("header__container-contact");
    const header = document.createElement("header-item");
    header.dataset.heading = JSON.stringify("Contact");
    headerContainer.appendChild(header);

    const emailButton = document.getElementById("contact__email-button");
    emailButton.onclick = () => this.copyContact();
  }
}

customElements.define("contact-view", Contact);
