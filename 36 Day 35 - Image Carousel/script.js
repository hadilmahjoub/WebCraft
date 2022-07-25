const imageContainer = document.querySelector("#imgs");
const images = document.querySelectorAll("#imgs img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let i = 0;

let interval = setInterval(run, 2000);

next.addEventListener("click", () => {
    i++;
    changeImage();
    resetInterval();
});

prev.addEventListener("click", () => {
    i--;
    changeImage();
    resetInterval();
});

function run() {
    i++;
    changeImage();
}

function changeImage() {
    if (i > images.length - 1) {
        i = 0;
    } else if (i < 0) {
        i = images.length - 1;
        console.log(i);
    }
    imageContainer.style.transform = `translateX(${-i * 100}%)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}
