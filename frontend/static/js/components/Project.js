export default class Project {
  constructor({ project }) {
    this.project = project;
  }

  getHtml() {
    return `
      <section class="project__container"> 
        <div class="project__content-container">
          <div class="project__image-container">
            <a href="" rel="noopener noreferrer">
              <img
                src=${this.project.img}
                alt="Project image"
                class="project__image"
                priority=${this.project.id === 0 || this.project.id === 1 || this.project.id === 2 }
              />
            </a>
          </div>
          <div class="project__text-container">
            <div>
              <div class="flex-row-center">
                <h2>
                  ${this.project.title}
                </h2>
              </div>
              <h3>
                ${this.project.type}
              </h3>
              <p class="project__text-description">
                ${this.project.description}
              </p>
              <br/>
              <p class="project__text-description">
              </p>
            </div>
            <div class="project__buttons-container">
              <a 
                class=""
                href=""
                rel="noopener noreferrer"
              >
                View
              </a>
              <a 
                class=""
                href=""
                rel="noopener noreferrer"
              >
                Github 
              </a>
            </div>
          </div>
        </div>
        <span class="project__line-bottom"></span>
      </section>
    `;
  }
}
