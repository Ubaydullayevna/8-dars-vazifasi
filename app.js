let css = document.querySelector("codes");
let color1 = document.querySelector("color1");
let color2 = document.querySelector("color2");
let bodys = document.getElementById("gradient");
let linerDirection = document.getElementsByName("toDirection");

function currentSettings() {
  let cssProp = window
    .getComputedStyle(bodys, null)
    .getPropertyValue("background-image");

  css.textContent = cssProp;
}
currentSettings();

function returnColor() {
  bodys.style.background =
    "liner-gradient(" +
    linerDirection.values +
    " ," +
    color1.values +
    " ," +
    color2.values +
    "(";

  currentSettings();
}

document.querySelector('select[name = "toDirection"]').onchange = returnColor;
color1.addEventListener("input", returnColor);
color2.addEventListener("input", returnColor);
