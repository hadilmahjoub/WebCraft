const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMsg = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

replay.addEventListener("click", () => {
    resetDOM();
    runAnimation();
});

function runAnimation() {
    nums.forEach((num, i) => {
        const nextToLast = nums.length - 1;

        num.addEventListener("animationend", (e) => {
            if (e.animationName === "goIn" && i !== nextToLast) {
                num.classList.remove("in");
                num.classList.add("out");
            } else if (e.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in");
            } else {
                counter.classList.add("hide");
                finalMsg.classList.add("show");
            }
        });
    });
}

function resetDOM() {
    counter.classList.remove("hide");
    finalMsg.classList.remove("show");
    nums.forEach((num) => {
        num.classList.value = "";
    });

    nums[0].classList.add("in");
}






// window.addEventListener("load", () => {
//     loadNums();
//     setTimeout(() => {
//         counter.classList.add("hide");
//         finalMsg.classList.add("show");
//     }, 3500);
// });

// function loadNums() {
//     nums.forEach((num, i) => {
//         setTimeout(() => {
//             loadSpan(num);
//         }, i * 1000);
//     });
// }

// function loadSpan(span) {
//     span.className = "in";
//     setTimeout(() => {
//         span.className = "out";
//     }, 500);
// }
