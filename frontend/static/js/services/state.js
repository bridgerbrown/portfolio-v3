export const state = new Proxy(
  {
    category: 'all'
  },
  {
    set: (target, prop, value) => {
      target[prop] = value;
      renderCategories();
      return true;
    }
  }
);

export function renderCategories() {
  const categoryLabel = document.getElementById('category__label'); 
  const contentContainer = document.getElementById('projects__content_container');
  
  categoryLabel.innerHTML = state.category
}
