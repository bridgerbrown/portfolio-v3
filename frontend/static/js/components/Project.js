export default class Project extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("project-item-template");
    const content = template.content.cloneNode(true);

    this.appendChild(content);

    const project = JSON.parse(this.dataset.project);
    this.querySelector("img").src = `/static/public${project.img}`;
    this.querySelector("h2").textContent = project.title;
    this.querySelector("h3").textContent = project.type;
    this.querySelector(".project__description").textContent = project.description;
    const builtWith = project.builtWith.map((item, index) => {
      return index < project.builtWith.length - 1 
        ? 
        `<span><span class="project__builtWith-item">${item}</span>, </span>` 
        : 
        `<span>and <span class="project__builtWith-item">${item}</span>.</span>` 
    });
    this.querySelector(".project__builtwith").innerHTML = "Built with " + builtWith.join(' ');

    const headingTop = this.querySelector(".project__heading-top");
    const isFeatured = project.featured === "true";
    const featuredStar = document.createElement("img");
    featuredStar.src = "/static/public/star.png";
    featuredStar.alt = "Featured project icon, a yellow star";
    featuredStar.id = "project__featured-icon";
    if (isFeatured) headingTop.appendChild(featuredStar)
  }
}

customElements.define("project-item", Project);
