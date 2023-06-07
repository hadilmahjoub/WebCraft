const tagsEl = document.querySelector("#tags");
const textarea = document.querySelector("#textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);

    if (e.key == "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 10);
        randomSelect();
    }
});

function createTags(input) {
    // console.log(input);
    const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());
    // console.log(tags);

    tagsEl.innerHTML = "";

    tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerHTML = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;
    const timeout = 100;

    //* the highlight animation
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, timeout);
    }, timeout);

    //* stop the animation and highlight a random tag
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            
            highlightTag(randomTag);
        }, timeout);
    }, times * timeout);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add("highlight");
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight");
}
