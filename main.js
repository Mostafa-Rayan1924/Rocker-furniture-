let menu = document.querySelector(".menu");
let links = document.querySelector(".links ul");

menu.onclick = () => {
  links.classList.toggle("block");
};
