function move(element) {
  var e = document.getElementById(element);

  e.style.marginRight = "0";
  e.style.marginLeft = "0";
  e.style.opacity = "1";
}

function setBackgroundToLeftPanel() {
  var left = document.getElementById("left");
  var logo = document.getElementById("left_logo");

  left.classList.remove("whithout_background");

  logo.style.opacity = "1";
  logo.style.transform = "translateY(0)";
}
