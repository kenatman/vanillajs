const select = document.querySelector(".js-select");

const COUNTRY = "country";
let currentCT = localStorage.getItem(COUNTRY);

const option1 = document.querySelector("select option[value=KR]");
const option2 = document.querySelector("select option[value=GR]");
const option3 = document.querySelector("select option[value=TK]");
const option4 = document.querySelector("select option[value=FL]");

function saveCountry(event) {
  const savedValue = event.target.value;

  localStorage.setItem(COUNTRY, savedValue);
}

select.addEventListener("change", saveCountry);

if (currentCT !== null) {
  if (option1.value === currentCT) {
    option1.setAttribute("selected", "");
  } else if (option2.value === currentCT) {
    option2.setAttribute("selected", "");
  } else if (option3.value === currentCT) {
    option3.setAttribute("selected", "");
  } else if (option4.value === currentCT) {
    option4.setAttribute("selected", "");
  }
}
