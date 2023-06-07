const container = document.querySelector(".container");
const unsplaqhURL = `https://source.unsplash.com/collection/`;
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${unsplaqhURL}${getRandomNumber()}`;
    container.appendChild(img);
}

// function getRandomSize() {
//     return `${getRandomNumber()}x${getRandomNumber()}`
// }

function getRandomNumber() {
    return Math.floor(Math.random() * 500);
}
