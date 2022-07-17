const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const sizeEl = document.querySelector("#size");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const colorEl = document.querySelector("#color");
const clear = document.querySelector("#clear");

// global variables
let size = sizeEl.textContent;
let isPressed = false;
let color;
let x;
let y;

colorEl.addEventListener("input", () => {
    color = colorEl.value;
});

increase.addEventListener("click", () => {
    if (size < 50) {
        size = parseInt(size) + 5;
        // console.log(size);
        sizeEl.innerHTML = size;
    }
});

decrease.addEventListener("click", () => {
    if (size > 5) {
        size = parseInt(size) - 5;
        // console.log(size);
        sizeEl.innerHTML = size;
    }
});

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    //position where the mouse is (inside the canvas)
    x = e.offsetX;
    y = e.offsetY;

    // console.log(isPressed, x, y);
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;

    // console.log(isPressed, x, y);
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

clear.addEventListener("click", () => ctx.clearRect(0, 0, 600, 600));

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
