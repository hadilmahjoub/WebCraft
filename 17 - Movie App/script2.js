const container = document.querySelector("#container");

container.innerHTML=''
console.log(localStorage);

let myMovie = localStorage.getItem("movieCard");
let myMovieEl = document.createElement("div");
myMovieEl.classList.add("card");
myMovieEl.innerHTML = myMovie;

container.appendChild(myMovieEl);