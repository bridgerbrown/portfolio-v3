const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Home") },
    { path: "/projects", view: () => console.log("Projects") },
    { path: "/about", view: () => console.log("About") },
    { path: "/contact", view: () => console.log("Contact") },
  ];

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
  
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });

  router();
});
