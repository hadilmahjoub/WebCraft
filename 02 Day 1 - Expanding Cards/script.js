const container = document.querySelector(".container");

const data = [
    {
        src: "Assets/boxed-water-is-better-jbcY_yvsDzk-unsplash.jpg",
        title: "Exploring The World",
    },
    {
        src: "Assets/dawid-zawila--G3rw6Y02D0-unsplash.jpg",
        title: "Sunset Hills",
    },
    {
        src: "Assets/luca-bravo-VowIFDxogG4-unsplash.jpg",
        title: "Frozen Mountains",
    },
    {
        src: "Assets/hendrik-cornelissen--qrcOR33ErA-unsplash.jpg",
        title: "Wild River",
    },
    {
        src: "Assets/tim-swaan-eOpewngf68w-unsplash.jpg",
        title: "Bridge into the Woods",
    },
    {
        src: "Assets/camille-minouflet-d7M5Xramf8g-unsplash.jpg",
        title: "Golden Waves",
    },
];

data.forEach((e, i) => {
    const panel = document.createElement("div");
    panel.classList.add("panel");
    if (i == 0) {
        panel.classList.add("active");
    }
    panel.style.backgroundImage = `url(${e.src})`;
    panel.style.objectFit = "cover";
    panel.innerHTML = `<h3>${e.title}</h3>`;

    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });

    container.appendChild(panel);
});

const panels = document.querySelectorAll(".panel"); // node list

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
