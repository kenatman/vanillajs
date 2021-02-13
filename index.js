const select = document.querySelector(".js-select");

const COUNTRY = "country";
let currentCT = localStorage.getItem(COUNTRY);
const options = select.querySelectorAll("option");

const option1 = options[1];
const option2 = options[2];
const option3 = options[3];
const option4 = options[4];

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
