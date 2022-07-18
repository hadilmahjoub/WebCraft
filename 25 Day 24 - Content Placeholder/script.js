const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profileImg = document.querySelector("#profile-img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgText = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `
        <img 
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
            alt="" 
        />`;
    title.innerHTML = "Lorem ipsum dolor sit amet";
    excerpt.innerHTML =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, illum.";
    profileImg.innerHTML = `
        <img
            src="https://randomuser.me/api/portraits/women/17.jpg"
            alt=""
        />`;
    name.innerHTML = "Lorem ipsum";
    date.innerHTML = "Oct 08, 2020";

    animatedBgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animatedBgText.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
