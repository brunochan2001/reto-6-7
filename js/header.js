`use-strict`;
const headerImageMenuopen = document.getElementById(`headerImageMenuopen`);

//   Start - Menu Open
const listMenuOpen = () => {
  const listMenu = document.querySelector(`.header-info__link-item-list`);
  const headerInfoLink = document.getElementById(`headerInfoLink`);

  listMenu.classList.toggle(`header-info__link-item-list--open`);
  headerInfoLink.classList.toggle(`header-info__link--border`);
};
headerImageMenuopen.addEventListener(`click`, listMenuOpen);
//   End - Menu Open

//   Start - Header Scroll
const headerScroll = () => {
  const header = document.querySelector(`.header`);
  const menuOpen = document.querySelector(`.header-image__image-menuopen-container`);
  header.classList.toggle(`header--scroll`, window.scrollY > 0);
  menuOpen.classList.toggle(`.header-image__image-menuopen-container--scroll`, window.scrollY > 0);
};

window.addEventListener(`scroll`, headerScroll);
//   End - Header Scroll};
