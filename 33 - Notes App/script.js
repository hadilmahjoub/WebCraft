const notesContainer = document.querySelector(".notes-container");
const addBtn = document.querySelector("#add");
const clearBtn = document.querySelector("#clear");

const notes = JSON.parse(localStorage.getItem("notes"));

//? display the stored notes
if (notes) {
    notes.forEach((note) => addNewNote(note));
}

//? add note
addBtn.addEventListener("click", () => addNewNote());

//? clear all notes
clearBtn.addEventListener("click", () => clearNotes());

function addNewNote(text = "") {
    // create a note
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tools">
        <button class="edit" id="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete" id="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked.parse(text);

    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS(); //delete
        toggleClear(); //? if we delete the last note the clear btn is hidden
    });

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked.parse(value);
        updateLS(); //add&edit
    });

    notesContainer.appendChild(note);

    toggleClear(); //? if we add a new note the clear btn is shown
}

function clearNotes() {
    const notes = document.querySelectorAll(".note");
    notes.forEach((note) => note.remove());

    localStorage.setItem("notes", "[]");
    toggleClear(); //? if we clear all the notes no need to show the clear btn
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];
    notesText.forEach((note) => notes.push(note.value));
    localStorage.setItem("notes", JSON.stringify(notes));
}

function toggleClear() {
    if (notesContainer.innerHTML === "") {
        clearBtn.classList.add("hidden");
        addBtn.style.right = "1rem";
    } else {
        clearBtn.classList.remove("hidden");
        addBtn.style.right = "6rem";
    }
}
