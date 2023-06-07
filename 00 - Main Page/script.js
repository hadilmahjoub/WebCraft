const data = [
    {
        id: "01",
        title: "Expanding Cards",
        alt: "expanding-cards",
        route: "../02 Day 1 - Expanding Cards/index.html",
    },
    {
        id: "02",
        title: "Progress Steps",
        alt: "progress-steps",
        route: "",
    },
    {
        id: "03",
        title: "Rotating Navigation",
        alt: "rotation-nagivation",
        route: "",
    },
    {
        id: "04",
        title: "Hidden Search Widget",
        alt: "hidden-search-widget",
        route: "",
    },
    {
        id: "05",
        title: "Blurry Loading",
        alt: "blurry-loading",
        route: "",
    },
    {
        id: "06",
        title: "Scroll Animation",
        alt: "scroll-animation",
        route: "",
    },
    {
        id: "07",
        title: "Split Landing Page",
        alt: "split-landing-page",
        route: "",
    },
    {
        id: "08",
        title: "Form Wave Animation",
        alt: "form-wave-animation",
        route: "",
    },
    {
        id: "09",
        title: "Sound Board",
        alt: "sound-board",
        route: "",
    },
    {
        id: "10",
        title: "Dad Jokes",
        alt: "dad-jokes",
        route: "",
    },
    {
        id: "11",
        title: "Event KeyCodes",
        alt: "event-keycodes",
        route: "",
    },
    {
        id: "12",
        title: "FAQ Collapse",
        alt: "faq-collapse",
        route: "",
    },
    {
        id: "13",
        title: "Random Choise Picker",
        alt: "random-choise-picker",
        route: "",
    },
    {
        id: "14",
        title: "Animated Navigation",
        alt: "animated-navigation",
        route: "",
    },
    {
        id: "15",
        title: "Incrementing Counter",
        alt: "increamenting-counter",
        route: "",
    },
    {
        id: "16",
        title: "Drink Water",
        alt: "drink-water",
        route: "",
    },
    {
        id: "17",
        title: "Movie App",
        alt: "movie-app",
        route: "",
    },
    {
        id: "18",
        title: "Background-slider",
        alt: "background-slider",
        route: "",
    },
    {
        id: "19",
        title: "Theme Clock",
        alt: "theme-clock",
        route: "",
    },
    {
        id: "20",
        title: "Button Ripple Effect",
        alt: "button-ripple-effect",
        route: "",
    },
    {
        id: "21",
        title: "Drag N Drop",
        alt: "drag-n-drop",
        route: "",
    },
    {
        id: "22",
        title: "Drawing App",
        alt: "drawing-app",
        route: "",
    },
    {
        id: "23",
        title: "Kinetic Loader",
        alt: "kinetic-loader",
        route: "",
    },
    {
        id: "24",
        title: "Content Placeholder",
        alt: "content-placeholder",
        route: "",
    },
    {
        id: "25",
        title: "Sticky Navbar",
        alt: "sticky-navigation",
        route: "",
    },
    {
        id: "26",
        title: "Double Vertical Slider",
        alt: "double-vertical-slider",
        route: "",
    },
    {
        id: "27",
        title: "Toast Notification",
        alt: "toast-notification",
        route: "",
    },
    {
        id: "28",
        title: "Github Profiles",
        alt: "github-profiles",
        route: "",
    },
    {
        id: "29",
        title: "Double Click Heart",
        alt: "double-click-heart",
        route: "",
    },
    {
        id: "30",
        title: "Auto Text Effect",
        alt: "auto-text-effect",
        route: "",
    },
    {
        id: "31",
        title: "Password Generator",
        alt: "password-generator",
        route: "",
    },
    {
        id: "32",
        title: "Good Cheap Fast",
        alt: "good-cheap-fast",
        route: "",
    },
    {
        id: "33",
        title: "Notes App",
        alt: "notes-app",
        route: "",
    },
    {
        id: "34",
        title: "Animated Countdown",
        alt: "animated-countdown",
        route: "",
    },
    {
        id: "35",
        title: "Image Carousel",
        alt: "image-carousel",
        route: "",
    },
    {
        id: "36",
        title: "Hoverboard",
        alt: "hoverboard",
        route: "",
    },
    {
        id: "37",
        title: "Pokedex",
        alt: "pokedex",
        route: "",
    },
    {
        id: "38",
        title: "Mobile Tab Navigation",
        alt: "mobile-tab-navigation",
        route: "",
    },
    {
        id: "39",
        title: "Password Strength Background",
        alt: "password-strength-background",
        route: "",
    },
    {
        id: "40",
        title: "3D Background Boxes",
        alt: "3d-boxes-background",
        route: "",
    },
    {
        id: "41",
        title: "Verify Account Ui",
        alt: "verify-account-ui",
        route: "",
    },
    {
        id: "42",
        title: "Live User Filter",
        alt: "live-user-filter",
        route: "",
    },
    {
        id: "43",
        title: "Feedback Ui Design",
        alt: "feedback-ui-design",
        route: "",
    },
    {
        id: "44",
        title: "Custom Range Slider",
        alt: "custom-range-slider",
        route: "",
    },
    {
        id: "45",
        title: "Netflix Mobile Navigation",
        alt: "netflix-mobile-navigation",
        route: "",
    },
    {
        id: "46",
        title: "Quiz App",
        alt: "quiz-app",
        route: "",
    },
    {
        id: "47",
        title: "Testimonial Box Switcher",
        alt: "testimonial-box-switcher",
        route: "",
    },
    {
        id: "48",
        title: "Random Image Feed",
        alt: "random-image-generator",
        route: "",
    },
    {
        id: "49",
        title: "Todo List",
        alt: "todo-list",
        route: "",
    },
    {
        id: "50",
        title: "Insect Catch Game",
        alt: "insect-catch-game",
        route: "",
    },
];

const projects = document.querySelector("#projects");

data.forEach((e, i) => {
    const project = document.createElement("div");
    project.classList.add("project");
    project.innerHTML = `
        <span class="day">
                    Day ${e.id}
                </span>
                <img src="Assets/projects-img/${e.id}.png" alt="${e.alt}">
                <div class="content">
                    <h4>
                        ${e.title}
                    </h4>
                    <a href="${e.route}" class="btn btn-primary"> Live Demo</a>
                </div>
    `;

    projects.appendChild(project);
});
