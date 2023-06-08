const data = [
    {
        id: "01",
        title: "Expanding Cards",
        alt: "expanding-cards",
    },
    {
        id: "02",
        title: "Progress Steps",
        alt: "progress-steps",
    },
    {
        id: "03",
        title: "Rotating Navigation",
        alt: "rotation-nagivation",
    },
    {
        id: "04",
        title: "Hidden Search Widget",
        alt: "hidden-search-widget",
    },
    {
        id: "05",
        title: "Blurry Loading",
        alt: "blurry-loading",
    },
    {
        id: "06",
        title: "Scroll Animation",
        alt: "scroll-animation",
    },
    {
        id: "07",
        title: "Split Landing Page",
        alt: "split-landing-page",
    },
    {
        id: "08",
        title: "Form Wave Animation",
        alt: "form-wave-animation",
    },
    {
        id: "09",
        title: "Sound Board",
        alt: "sound-board",
    },
    {
        id: "10",
        title: "Dad Jokes",
        alt: "dad-jokes",
    },
    {
        id: "11",
        title: "Event KeyCodes",
        alt: "event-keycodes",
    },
    {
        id: "12",
        title: "FAQ Collapse",
        alt: "faq-collapse",
    },
    {
        id: "13",
        title: "Random Choice Picker",
        alt: "random-choice-picker",
    },
    {
        id: "14",
        title: "Animated Navigation",
        alt: "animated-navigation",
    },
    {
        id: "15",
        title: "Incrementing Counter",
        alt: "increamenting-counter",
    },
    {
        id: "16",
        title: "Drink Water",
        alt: "drink-water",
    },
    {
        id: "17",
        title: "Movie App",
        alt: "movie-app",
    },
    {
        id: "18",
        title: "Background Slider",
        alt: "background-slider",
    },
    {
        id: "19",
        title: "Theme Clock",
        alt: "theme-clock",
    },
    {
        id: "20",
        title: "Button Ripple Effect",
        alt: "button-ripple-effect",
    },
    {
        id: "21",
        title: "Drag N Drop",
        alt: "drag-n-drop",
    },
    {
        id: "22",
        title: "Drawing App",
        alt: "drawing-app",
    },
    {
        id: "23",
        title: "Kinetic CSS Loader",
        alt: "kinetic-loader",
    },
    {
        id: "24",
        title: "Content Placeholder",
        alt: "content-placeholder",
    },
    {
        id: "25",
        title: "Sticky Navbar",
        alt: "sticky-navigation",
    },
    {
        id: "26",
        title: "Double Vertical Slider",
        alt: "double-vertical-slider",
    },
    {
        id: "27",
        title: "Toast Notification",
        alt: "toast-notification",
    },
    {
        id: "28",
        title: "Github Profiles",
        alt: "github-profiles",
    },
    {
        id: "29",
        title: "Double Click Heart",
        alt: "double-click-heart",
    },
    {
        id: "30",
        title: "Auto Text Effect",
        alt: "auto-text-effect",
    },
    {
        id: "31",
        title: "Password Generator",
        alt: "password-generator",
    },
    {
        id: "32",
        title: "Good Cheap Fast",
        alt: "good-cheap-fast",
    },
    {
        id: "33",
        title: "Notes App",
        alt: "notes-app",
    },
    {
        id: "34",
        title: "Animated Countdown",
        alt: "animated-countdown",
    },
    {
        id: "35",
        title: "Image Carousel",
        alt: "image-carousel",
    },
    {
        id: "36",
        title: "Hoverboard",
        alt: "hoverboard",
    },
    {
        id: "37",
        title: "Pokedex",
        alt: "pokedex",
    },
    {
        id: "38",
        title: "Mobile Tab Navigation",
        alt: "mobile-tab-navigation",
    },
    {
        id: "39",
        title: "Password Strength Background",
        alt: "password-strength-background",
    },
    {
        id: "40",
        title: "3D Background Boxes",
        alt: "3d-boxes-background",
    },
    {
        id: "41",
        title: "Verify Account UI",
        alt: "verify-account-ui",
    },
    {
        id: "42",
        title: "Live User Filter",
        alt: "live-user-filter",
    },
    {
        id: "43",
        title: "Feedback UI Design",
        alt: "feedback-ui-design",
    },
    {
        id: "44",
        title: "Custom Range Slider",
        alt: "custom-range-slider",
    },
    {
        id: "45",
        title: "Netflix Mobile Navigation",
        alt: "netflix-mobile-navigation",
    },
    {
        id: "46",
        title: "Quiz App",
        alt: "quiz-app",
    },
    {
        id: "47",
        title: "Testimonial Box Switcher",
        alt: "testimonial-box-switcher",
    },
    {
        id: "48",
        title: "Random Image Feed",
        alt: "random-image-generator",
    },
    {
        id: "49",
        title: "Todo List",
        alt: "todo-list",
    },
    {
        id: "50",
        title: "Insect Catch Game",
        alt: "insect-catch-game",
    },
];

const projects = document.querySelector("#projects");

let text = ""


data.forEach((e, i) => {
    const regex = new RegExp(' ', "g");
    const route = `${e.id} - ${e.title}`.replace(regex, '%20')
    // text =
    //     text +
    //     "\n" +
    //     `| ${e.id} | [${e.title}](https://github.com/hadilmahjoub/WebCraft/tree/master/${route})           | [Live Demo](https://hadilmahjoub.github.io/WebCraft/${route})           |`;
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
                    <a href="https://hadilmahjoub.github.io/WebCraft/${route}" class="btn btn-primary" target="_blank"> Live Demo</a>
                </div>
    `;

    projects.appendChild(project);
});

// console.log(text);