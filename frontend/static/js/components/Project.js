export default class Project extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("project-item-template");
    const content = template.content.cloneNode(true);

    this.appendChild(content);

    const project = JSON.parse(this.dataset.project);
    const projectImg = this.querySelector("img");
    projectImg.src = project.img;
    projectImg.title = project.title + " image preview"
    projectImg.alt = project.title + " image preview"
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
    featuredStar.src = "star.png";
    featuredStar.alt = "Featured project icon, a yellow star";
    featuredStar.id = "project__featured-icon";
    if (isFeatured) headingTop.appendChild(featuredStar)

    const disableButtons = (type) => {
      if (project.buttonsEnabled === "11") {
        return type === "view" ? project.projectLink : project.githubLink;
      } else if (project.buttonsEnabled === "01") {
        return type === "view" ? "#" : project.githubLink;
      } else if (project.buttonsEnabled === "10") {
        return type === "github" ? "#" : project.projectLink;
      } else {
        return "#";
      };
    }

    const viewButton = this.querySelector("#project__button-view");
    viewButton.href = disableButtons("view");
    viewButton.title = project.title + " project view link"
    const githubButton = this.querySelector("#project__button-github");
    githubButton.href = disableButtons("github");
    githubButton.title = project.title + " project github link"
  }
}

customElements.define("project-item", Project);
