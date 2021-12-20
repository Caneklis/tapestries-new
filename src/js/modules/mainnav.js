export function openMainNav() {
  const menuButton = document.querySelector(".main-nav__button");
  const menuList = document.querySelector(".main-nav__list");
  const body = document.querySelector("body");
  const lang = document.querySelector(".lang");

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      let expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !expanded);
      menuButton.classList.toggle("main-nav__button--open");
      menuList.classList.toggle("main-nav__list--open");
      body.classList.toggle("page__body--fade");
      lang.classList.toggle("lang--active");
    });

    document.onkeydown = function (evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        menuButton.classList.remove("main-nav__button--open");
        menuList.classList.remove("main-nav__list--open");
        body.classList.remove("page__body--fade");
        lang.classList.remove("lang--active");
      }
    };
  }
}
