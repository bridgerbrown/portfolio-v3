export default class Project extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("project-item-template");
    const content = template.content.cloneNode(true);

    this.appendChild(content);

    const project = JSON.parse(this.dataset.project);
    this.querySelector("img").src = `/static/public${project.img}`;
    this.querySelector("h2").textContent = project.title;
    this.querySelector("h3").textContent = project.type;
    this.querySelector(".project__description").textContent = project.description;
    this.querySelector(".project__builtwith").textContent = project.builtWith;
  }
}

customElements.define("project-item", Project);
