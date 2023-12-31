import AbstractView from "./AbstractView.js";
import { renderCategories, state } from "../services/state.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
  }

  async getHtml() {
    return `
      <div class="page page__projects">
            <div class="projects__categories-container content__width">
              <input 
                type="radio" 
                  id="all" 
                  name="categories" 
                  value="all" 
                  checked=${state.category === 'all'}
                  onClick=${() => state.set('category', 'all')}
                  readOnly
                />
                  <label 
                    htmlFor="all"
                    id="category__label"    
                  >
                    ${
                    state.category == "all"
                    ?
                    "All " + "(" + allProjects.length + ")"
                    :
                    "All"
                    }
                  </label>
                <input 
                  type="radio" 
                  id="featured" 
                  name="categories" 
                  value="featured"
                  checked=${state.category === 'featured'}
                  onClick=${() => state.set('category', 'featured')}
                  readOnly
                />
                  <label 
                    htmlFor="featured"
                    id="category__label"    
                  >
                    ${
                    state.category == "featured"
                    ?
                    "Featured " + "(" + featuredProjects.length + ")"
                    :
                    "Featured"
                    }
                  </label>
              <input 
                type="radio" 
                id="solo-projects" 
                name="categories" 
                value="solo-projects"
                checked=${state.category === 'solo-projects'}
                onClick=${() => state.set('category', 'solo-projects')}
                readOnly
              />
                <label 
                  htmlFor="solo-projects"
                  id="category__label"    
                >
                  ${
                  state.category == "solo-projects"
                  ?
                  "Solo-Projects " + "(" + soloProjects.length + ")"
                  :
                  "Solo-Projects"
                  }
                </label>
              <input 
                type="radio" 
                id="work" 
                name="categories" 
                value="work"
                checked=${state.category === 'work'}
                onClick=${() => state.set('category', 'work')}
                readOnly
              />
                <label 
                  htmlFor="work"
                  id="category__label"    
                >
                  ${
                  state.category == "work"
                  ?
                  "Work " + "(" + workProjects.length + ")"
                  :
                  "Work"
                  }
                </label>
          </div>
          <main class="page__content-container">
            <div id="projects__content-container">
                ${
                  projectsData ? 
                    state.category == 'all' ?
                      allProjects
                      :
                      state.category == 'solo-projects' ?
                        soloProjects
                        :
                        state.category == 'featured' ?
                        featuredProjects
                        :
                        workProjects
                  :
                  `<div id="loading__container">
                    <h2>
                      Loading...
                    </h2>
                  </div>`
                }
            </div>
          </main>
          <Footer />
      </div>
    `;
  }
}
