const form = document.querySelector("form");
const input = document.querySelectorAll("input");

CHAT_ID = "-1002104534949";
TOKEN = "6779609754:AAGGILcPKAb2oqP3X6ijwabMR5j4Ig1_xDo";
URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log(form);
  console.log(input);

  let message = `<b>GIPERTA FORTE</b>\n`;
  message += `<b>ism:</b>${input[0].value}\n`;
  message += `<b>nomer:</b>${input[1].value}`;

  try {
    await axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });
  } catch (err) {
    console.log(err);
  }
  this.reset();
});

input[1].addEventListener("focus", (event) => {
  input[1].value = "+998";
});

const soatEl = document.querySelector("#soat");
const minutEl = document.querySelector("#minut");
const sekuntEl = document.querySelector("#sekunt");

let soat = 4;
let minut = 10;
let sekunt = 28;
soat = "0" + 4;
setInterval(() => {
  sekunt--;
  if (sekunt < 10 && sekunt > 0) {
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
