const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;

// create our own double click event
loveMe.addEventListener("click", (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if (new Date().getTime() - clickTime < 800) {
            createHeart(e);
            clickTime = 0;
            times.textContent++;
        } else {
            clickTime = new Date().getTime();
        }
    }
});
function createHeart(e) {
    const x = e.clientX;
    const y = e.clientY;

    const imageLeft = e.target.offsetLeft;
    const imageTop = e.target.offsetTop;

    const heart = document.createElement("i");

    const xInside = x - imageLeft;
    const yInside = y - imageTop;

    heart.style.left = xInside + "px";
    heart.style.top = yInside + "px";

    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    loveMe.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
}
