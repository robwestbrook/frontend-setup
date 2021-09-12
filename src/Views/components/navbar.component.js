//import createElement from "../helpers/createElement";

export default () => /*html*/ `
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Rob's Todos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/stuff">Stuff</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  `;

// Nav Bar Component
// export default function () {
  // Header element
  //const header = createElement("header");
  

  // // Nav element
  // const nav = createElement("nav", [
  //   "navbar",
  //   "navbar-expand-lg",
  //   "navbar-light",
  //   "bg-light",
  // ]);

  // // Container div
  // const container = createElement("div", ["container-fluid"]);

  // // Nav Bar Brand Link
  // const homeLink = createElement("a", ["navbar-brand"]);
  // homeLink.href = "/";
  // homeLink.innerText = "Rob's Todos";

  // // Nav Burger Toggle Button
  // const toggleButton = createElement("button", ["navbar-toggler"]);
  // toggleButton.type = "button";
  // toggleButton.setAttribute("data-bs-toggle", "collapse");
  // toggleButton.setAttribute("data-bs-target", "#navbarSupportedContent");
  // const toggleIcon = createElement("span", ["navbar-toggler-icon"]);
  // toggleButton.append(toggleIcon);

  // // Nav Bar Collapse Div
  // const navCollapse = createElement(
  //   "div",
  //   ["collapse", "navbar-collapse"],
  //   "navbarSupportedContent"
  // );

  // // Navbar UL element
  // const navbarUl = createElement("ul", [
  //   "navbar-nav",
  //   "me-auto",
  //   "mb-2",
  //   "mb-lg-0",
  // ]);

  // // Navbar Home LI element
  // const liHome = createElement("li", ["nav-item"]);
  // const homeMenuLink = createElement("a", ["nav-link"]);
  // homeMenuLink.href = "/";
  // homeMenuLink.innerText = "Home";
  // liHome.append(homeMenuLink);

  // // Navbar Stuff LI element
  // const liStuff = createElement("li", ["nav-item"]);
  // const homeStuffLink = createElement("a", ["nav-link"]);
  // homeStuffLink.href = "/stuff";
  // homeStuffLink.innerText = "Stuff";
  // liStuff.append(homeStuffLink);

  // navbarUl.append(liHome, liStuff);
  // navCollapse.append(navbarUl);

  // container.append(homeLink, toggleButton, navCollapse);
  // nav.append(container);
  // header.append(nav);

  // return header;
// }
