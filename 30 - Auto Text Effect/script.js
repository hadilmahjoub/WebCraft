const textEl = document.querySelector("#text");
const form = document.querySelector("#form");
const textInputEl = document.querySelector("#text-input");
const speedEl = document.querySelector("#speed");

let text = "We Love Programming!";

let speed = 300;
speedEl.addEventListener("input", (e) => {
    speed = 300 / e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    text = textInputEl.value;
    textInputEl.value = "";
});

let idx = 1;

writeText(speed);

function writeText() {
    textEl.innerHTML = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(writeText, speed);
}
