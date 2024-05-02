const form = document.querySelector("form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const soatEl = document.querySelector("#soat");
const minutEl = document.querySelector("#minut");
const sekuntEl = document.querySelector("#sekunt");

let soat = 4;
let minut = 10;
let sekunt = 28;
setInterval(() => {
  sekunt--;
  if (sekunt < 10) {
    sekunt = "0" + sekunt;
  }
  sekuntEl.innerHTML = sekunt;
  minutEl.innerHTML = minut;
  soatEl.innerHTML = soat;
  

  if (sekunt < 0) {
    minut--;
    sekunt = 59;
    if (minut < 10) {
      minut = "0" + minut;
    }

    sekuntEl.innerHTML = sekunt;
    minutEl.innerHTML = minut;
    soatEl.innerHTML = soat;
  }
  if (minut < 0) {
    soat--;
    minut = 59;
    if (soat < 10) {
      soat = "0" + soat;
    }
    sekuntEl.innerHTML = sekunt;
    minutEl.innerHTML = minut;
    soatEl.innerHTML = soat;
  }
  if (soat == 0) {
    sekunt = 0;
    minut = 0;
    soat = 0;
    sekuntEl.innerHTML = sekunt;
    minutEl.innerHTML = minut;
    soatEl.innerHTML = soat;
  }
}, 1000);
