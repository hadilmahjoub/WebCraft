const jokeEl = document.querySelector("#joke");
const jokeEBtn = document.querySelector("#jokeBtn");

generateJoke();

jokeEBtn.addEventListener("click", generateJoke);

//? .then
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: "application/json",
//         },
//     };
//     fetch("https://icanhazdadjoke.com", config) // async fun | return a promise
//         .then((res) => res.json()) // get the json data from the response
//         .then((data) => {
//             jokeEl.innerHTML = data.joke;
//         }); // get the actual data ( an object with id, joke, status as attributes)
// }

//? ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };
    const res = await fetch("https://icanhazdadjoke.com", config); // async fun | return a promise
    const data = await res.json(); // get the json data from the response
    jokeEl.innerHTML = data.joke;
}
