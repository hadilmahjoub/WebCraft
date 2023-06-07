const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const remained = document.querySelector("#remained");
const percentage = document.querySelector("#percentage");

updateBigCup();

smallCups.forEach((cup, i) => {
    cup.addEventListener("click", () => {
        highlightCup(i);
    });
});

function highlightCup(i) {
    if (
        smallCups[i].classList.contains("full") &&
        (i == smallCups.length - 1 ||
            !smallCups[i].nextElementSibling.classList.contains("full"))
    ) {
        i--;
    }
    // i: index of the clicked cup
    smallCups.forEach((cup, i2) => {
        // i2: the index of eath cup
        if (i2 <= i) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const totalCups = smallCups.length;
    const fullCups = document.querySelectorAll(".cup-small.full").length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups == totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
}
