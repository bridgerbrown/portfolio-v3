export const state = {
  category: 'all',
};

const categoryChangeEvent = new Event('categoryChange');

export function setCategory(value) {
  state.category = value;
  document.dispatchEvent(categoryChangeEvent);
}

export function subscribeToCategoryChange(callback) {
  document.addEventListener('categoryChange', callback);
}
