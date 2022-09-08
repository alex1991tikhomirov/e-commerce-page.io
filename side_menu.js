const sideMenu = document.querySelector(".side_menu"); 
const bars = document.querySelector(".logo")
  .addEventListener("click", visible, false);
const close = document.getElementById("close")
  .addEventListener("click", visible, false);
function visible() {
  sideMenu.classList.toggle("visible"); //toggle class visible to appear and disappear side menu
}