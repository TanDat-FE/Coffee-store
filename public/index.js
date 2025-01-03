const menuItems = document.getElementById("event-menu");
const menuIcon = document.getElementById("menu-icon");

//Open-close menu
document.addEventListener("click", (e) => {
  //neu su kien click xay ra tren menuIcon thi...
  //dong thanh menu se hidden
  //list menu items col se duoc hien thi
  if (menuIcon.contains(e.target)) {
    menuItems.classList.toggle("hidden");
    menuItems.classList.toggle("topmenu-expanded");
  } else {
    //Neu co list menu item (trong qua trinh click)
    //close list menu
    //them hidden de an thanh menu
    if (menuItems.classList.contains("topmenu-expanded")) {
      menuItems.classList.remove("topmenu-expanded");
      menuItems.classList.add("hidden");
    }
  }
});
