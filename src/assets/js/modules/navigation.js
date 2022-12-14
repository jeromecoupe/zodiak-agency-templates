const SELECTORS = {
  body: document.querySelector("body"),
  menu: document.querySelector(".js-mobilemenu"),
  triggers: document.querySelectorAll(".js-menutrigger"),
};

const CLASSES = {
  open: "is-open",
  active: "has-menu",
};

const init = () => {
  SELECTORS.triggers.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      SELECTORS.menu.classList.toggle(CLASSES.open);
      SELECTORS.body.classList.toggle(CLASSES.active);
    });
  });
};

export { init };
