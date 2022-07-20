const APIURL = "https://api.github.com/users/"; //api root

const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main = document.querySelector("#main");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;
    if (user) {
        getUser(user);
        search.value = "";
    }
});

// function getUser(username) {
//     axios(APIURL + username)  // === axios.get(...)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err))
// }

async function getUser(username) {
    try {
        // const res = await axios(APIURL + username);
        // console.log(res.data);
        const { data } = await axios(APIURL + username);
        createUserCard(data);
        getRepos(username);
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard("No profile with this username");
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + "/repos?sort=created");
        addReposToCard(data);
    } catch (err) {
        createErrorCard("Problem fetching repos");
    }
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">    
            <div>
                <img src="${user.avatar_url}" alt="" class="avatar">
            </div>

            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio ? user.bio : ""}</p>
                
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                
                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>`;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.querySelector("#repos");
    reposEl.innerHTML = "";

    repos.slice(0, 10).forEach((repo) => {
        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        reposEl.target = "_blank";
        repoEl.innerText = repo.name;
        reposEl.appendChild(repoEl);
    });
}
