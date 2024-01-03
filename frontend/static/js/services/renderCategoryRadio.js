import renderProjects from "./renderProjects.js";
import { setCategory, state} from "./state.js";

export default function renderCategoryRadio(id, label, count) {
  const handleClick = () => {
    setCategory(id);
  }

  document.addEventListener("click", (event) => {
    if (event.target.matches(`#${id}, #${id}-label`)) {
      handleClick();
    }
  });

  return `
    <input
      type="radio"
      class="projects__category-input"
      id="${id}"
      name="categories"
      value="${id}"
      checked="${state.category === id}"
    />
    <label
      for="${id}"
      class="projects__category-label"
      id="${id}-label"
    >
      ${state.category === id ? `${label} (${count})` : `${label}`}
    </label>
  `;
};
