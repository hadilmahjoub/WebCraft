const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");
const html = document.querySelector("html");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

toggleEl.addEventListener("click", (e) => {
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
        e.target.innerHTML = "Light mode";
    } else {
        e.target.innerHTML = "Dark mode";
    }
});

// while (true) {
// setTime();
// }

setInterval(setTime, 1000)

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM': 'AM'
    // console.log(time);

    hourEl.style.transform = `translate(-50%, -100%) rotate(${
        (hoursForClock * 360) / 12
    }deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${
        (minutes * 360) / 60
    }deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${
        (seconds * 360) / 60
    }deg)`;
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}
