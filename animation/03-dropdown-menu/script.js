const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (dropdownMenu.classList.contains("hide")) {
    dropdownMenu.classList.add("visible");
    dropdownMenu.classList.remove("hide")
  } else if (dropdownMenu.classList.contains("visible")) {
    dropdownMenu.classList.add("hide");
    dropdownMenu.classList.remove("visible")
  } else dropdownMenu.classList.add("visible");
})

window.addEventListener("click", (e) => {
  if (dropdownMenu.classList.contains("visible") && (!dropdownContainer.contains(e.target))) {
    dropdownMenu.classList.add("hide");
    dropdownMenu.classList.remove("visible")
  }
})