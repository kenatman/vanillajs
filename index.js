const body = document.querySelector("body");
const span = document.createElement("span");
body.appendChild(span);
span.innerText = `Hello!!`;
span.style.color = "white";

if (window.innerWidth <= 500) {
  body.style.backgroundColor = "#2e8cd5";
} else if (window.innerWidth > 500 && window.innerWidth < 800) {
  body.style.backgroundColor = "#904ead";
} else {
  body.style.backgroundColor = "#eebc30";
}

function supersuper() {
  if (window.innerWidth <= 500) {
    body.style.backgroundColor = "#2e8cd5";
  } else if (window.innerWidth > 500 && window.innerWidth < 800) {
    body.style.backgroundColor = "#904ead";
  } else {
    body.style.backgroundColor = "#eebc30";
  }
}

window.addEventListener("resize", supersuper);
