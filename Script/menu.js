var isMenuOpen = false;

function  menu() {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  document.getElementById("line_1").classList.add("rotate_line_1");
  document.getElementById("line_2").classList.add("rotate_line_2");

  isMenuOpen = true;

  document.getElementById("main_nav").style.left = "0";

  if(window.innerWidth < window.innerHeight) {
    document.getElementById("main_nav").style.width = "100vw";
  }
}

function closeMenu() {
  document.getElementById("line_1").classList.remove("rotate_line_1");
  document.getElementById("line_2").classList.remove("rotate_line_2");

  isMenuOpen = false;

  document.getElementById("main_nav").style.left = "-100vw";
  document.getElementById("main_nav").style.width = "30vw";
}
