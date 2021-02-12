// You're gonna need this

const h2 = document.querySelector("h2");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const now = new Date();
  const gap = xmasDay.getTime() - now.getTime();

  const days = Math.ceil(gap / day);
  const hours = Math.ceil((gap % day) / hour);
  const minutes = Math.ceil((gap % hour) / minute);
  const seconds = Math.ceil((gap % minute) / second);
  h2.innerText = `${days < 10 ? `0${days}` : days}d  ${
    hours < 10 ? `0${hours}` : hours
  }h  ${minutes < 10 ? `0${minutes}` : minutes}m  ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
