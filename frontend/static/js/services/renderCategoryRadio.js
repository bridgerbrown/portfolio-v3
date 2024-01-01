import { state } from "./state.js";

export default function renderCategoryRadio(id, label, count) {
  return `
    <input
      type="radio"
      class="projects__category-input"
      id="${id}"
      name="categories"
      value="${id}"
      checked="${state.category === id}"
      onclick="${() => state.set('category', id)}"
      readOnly
    />
    <label
      for="${id}"
      class="projects__category-label"
    >
      ${state.category === id ? `${label} (${count})` : `${label}`}
    </label>
  `;
};
