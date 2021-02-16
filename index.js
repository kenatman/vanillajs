const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const pendingUL = document.querySelector(".js-pending");
const finishedUL = document.querySelector(".js-finished");

const PENDING = "pending";
const FINISHED = "finished";

let pending = [];
let finished = [];

function deletePending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingUL.removeChild(li);
  const cleanPending = pending.filter((sth) => sth.id !== parseInt(li.id));
  pending = cleanPending;
  savePending();
}

function deleteFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedUL.removeChild(li);
  const cleanFinished = finished.filter((sth) => sth.id !== parseInt(li.id));
  finished = cleanFinished;
  saveFinished();
}

function movePending(event) {
  const btn = event.target;
  const li = btn.parentNode;

  pendingUL.removeChild(li);
  const cleanPending = pending.filter((sth) => sth.id !== parseInt(li.id));
  pending = cleanPending;
  savePending();

  finishedUL.appendChild(li);
  const finishedObj = { text: li.firstChild.innerText, id: li.id };
  finished.push(finishedObj);
  saveFinished();
}

function moveFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;

  finishedUL.removeChild(li);
  const cleanFinished = finished.filter((sth) => sth.id !== parseInt(li.id));
  finished = cleanFinished;
  saveFinished();

  pendingUL.appendChild(li);
  const pendingObj = { text: li.firstChild.innerText, id: li.id };
  pending.push(pendingObj);
  savePending();
}

function savePending() {
  localStorage.setItem(PENDING, JSON.stringify(pending));
}

function saveFinished() {
  localStorage.setItem(FINISHED, JSON.stringify(finished));
}

function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("btn");
  const moveBtn = document.createElement("btn");

  const span = document.createElement("span");

  const newID = pending.length + 1;

  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deletePending);
  moveBtn.innerText = "🌟";
  moveBtn.addEventListener("click", movePending);

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(moveBtn);
  li.id = newID;
  pendingUL.appendChild(li);

  const pendingObj = { text: text, id: newID };
  pending.push(pendingObj);
  savePending();
}

function paintFinished(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("btn");
  const moveBtn = document.createElement("btn");

  const span = document.createElement("span");

  const newID = finished.length + 1;

  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFinished);
  moveBtn.innerText = "🌟";
  moveBtn.addEventListener("click", moveFinished);

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(moveBtn);
  li.id = newID;
  finishedUL.appendChild(li);

  const finishedObj = { text: text, id: newID };
  finished.push(finishedObj);
  saveFinished();
}

function loadPending() {
  const loadedPending = localStorage.getItem(PENDING);
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach((sth) => paintPending(sth.text));
  }
}

function loadFinished() {
  const loadedFinished = localStorage.getItem(FINISHED);
  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach((sth) => paintFinished(sth.text));
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintPending(currentValue);
  input.value = "";
}

function init() {
  loadPending();
  loadFinished();

  form.addEventListener("submit", handleSubmit);
}

init();
