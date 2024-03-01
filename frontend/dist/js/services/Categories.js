const Categories = {
  category: "all",
};

const proxiedCategories = new Proxy(Categories, {
  set(target, property, value){
    target[property] = value;
    if (property == "category") {
      window.dispatchEvent(new Event("categorychange"))
    }
    return true;
  },
  get(target, property) {
    return target[property];
  }
}) 

export default proxiedCategories;
