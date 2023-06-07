const boxesContainer = document.querySelector("#boxes");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

createBoxes();

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.backgroundPosition = `${j * -125}px ${i * -125}px`;
            boxesContainer.appendChild(box);
        }
    }
}






// for (let i = 0; i < 16; i++) {
//     const box = document.createElement('div')
//     box.classList.add('box')
//     boxesContainer.appendChild(box);
// }

// const boxes = document.querySelectorAll('.box')
// const btn = document.querySelector('#btn')

// let idx = 0
// let x = 0
// let y = 0

// boxes.forEach((box,i) => {
//     console.log('LOOOP');
//     console.log(idx, x, y);
//     box.style.backgroundPosition = `${x}px ${y}px`
//     x -= 125
//     idx ++
//     if (idx % 4 == 0) {
//         x = 0
//         y -= 125
//     }
// })

// btn.addEventListener('click', ()=> {
//     boxesContainer.classList.toggle('big')
// })
