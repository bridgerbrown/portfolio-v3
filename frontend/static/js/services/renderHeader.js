export default class HeaderRenderer {
  constructor(root, text) {
    this.root = root;
    this.text = text;
  }

  render() {
    const headerContainer = this.root.querySelector("#header__container");
    headerContainer.innerHTML = "";

    const element = document.createElement("header-item");
    element.dataset.header = JSON.stringify(this.text);
    headerContainer.appendChild(element);
  }
};
