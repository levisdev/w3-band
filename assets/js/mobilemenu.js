const header = document.getElementById("header");
const headerHeight = header.clientHeight;
const mobileMenu = document.getElementById("mobile-menu");

mobileMenu.onclick = () => {
  isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

const menuItems = document.querySelectorAll("#nav li a[href*='#']");

for (const menuItem of menuItems) {
  menuItem.onclick = (event) => {
    const isParentMenu =
      menuItem.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
