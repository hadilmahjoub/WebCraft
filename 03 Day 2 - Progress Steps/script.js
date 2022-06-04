const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

const lastContent = circles[circles.length - 1 ].innerHTML

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  console.log(((actives.length - 1) / (circles.length - 1)) * 100);

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive == circles.length) {
    next.disabled = true;
    console.log(currentActive);
    circles[
      circles.length - 1
    ].innerHTML = `<i class="fa-solid fa-check" style="color: #3498db"></i>`;
  } else {
    prev.disabled = false;
    next.disabled = false;
    circles[circles.length - 1].innerHTML = lastContent;
  }
}
