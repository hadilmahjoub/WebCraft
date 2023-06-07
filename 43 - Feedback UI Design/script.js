const ratingsContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("rating")) {
        removeActive();
        e.target.parentNode.classList.add("active");
        if (e.target.classList.contains("icon")) {
            selectedRating = e.target.nextElementSibling.innerHTML;
        } else {
            selectedRating = e.target.innerHTML;
        }
    }
});

sendBtn.addEventListener("click", (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
    //? for
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove("active");
    }

    //? forEach
    //* ratings.forEach(rating => rating.classList.remove('active'))
}
