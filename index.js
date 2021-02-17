const form = document.querySelector(".js-form"),
  rangeInput = form.querySelector(".range-input"),
  numberInput = form.querySelector(".number-input"),
  explain = document.querySelector(".explain"),
  result = document.querySelector(".result");

const title = document.querySelector(".title");

const button = form.querySelector(".button");

function paintTitle(e) {
  const currentValue = e.target.value;
  title.innerText = `Generate a number between 0 and ${currentValue}`;
}

rangeInput.addEventListener("input", paintTitle);

function paintExplain(e) {
  e.preventDefault();
  const randomNumber = Math.floor(Math.random() * parseInt(rangeInput.value));
  const selectNumber = parseInt(numberInput.value);

  if (selectNumber !== NaN) {
    explain.innerText = `You chose "${selectNumber}", the machine chose "${randomNumber}"`;
  }
  if (selectNumber === randomNumber) {
    result.innerText = `YOU WIN!!!`;
  } else {
    result.innerText = `you lose~`;
  }
}

button.addEventListener("click", paintExplain);
