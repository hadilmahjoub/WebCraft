const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc747cd1e5204883561992621be78e6a&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=cc747cd1e5204883561992621be78e6a&query="';

const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main = document.querySelector("#main");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);
        search.value = "";
    } else {
        window.location.reload(); //* reload the page
    }
});

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
                <img
                    src="${IMG_PATH + poster_path}"
                    alt="${title}"
                />
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(
                        vote_average
                    )}" >${vote_average}</span>
                </div>
                <div class="overview"> 
                    <h3>Overview</h3>
                    ${overview}
                </div>
        `;
        main.appendChild(movieEl);

        movieEl.addEventListener("click", () => {
            // createMovieCard();
            window.location.href = "detail.html";
            let movieCard = document.createElement("div");
            movieCard.classList.add("card");
            movieCard.innerHTML = `
                <img
                    src="${IMG_PATH + poster_path}"
                    alt="${title}"
                />     
                <div class="content">
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="${getClassByRate(
                            vote_average
                        )}" >${vote_average}</span>
                    </div>
                    <div class="text">
                        ${overview}
                    </div>
                </div>
            `;
            // console.log(movieCard.innerHTML.toString());
            localStorage.clear();
            localStorage.setItem("movieCard", movieCard.innerHTML.toString());
        });
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

// function createMovieCard(movie) {}
