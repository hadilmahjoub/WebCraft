const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navs = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
    navs.forEach((navEl) => navEl.classList.add("visible"));
});

closeBtn.addEventListener("click", () => {
    navs.forEach((navEl) => navEl.classList.remove("visible"));
});
