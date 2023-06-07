const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const body = document.body;
const quiz = document.querySelector("#quiz");
const questionEl = document.querySelector("#question");
const answerEls = document.querySelectorAll(".answer");
const aText = document.querySelector("#a-text");
const bText = document.querySelector("#b-text");
const cText = document.querySelector("#c-text");
const dText = document.querySelector("#d-text");
const submitBtn = document.querySelector("#submit");

const quizDataAnswers = []; // to save the submitted answers
const quizDataAnswersClasses = []; // to save for each submited answers a proper class: false or correct

let currentQuiz = 0;
let score = 0;

loadQuiz();

// submit an answer
submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        // save the submitted answer
        quizDataAnswers.push(answer);

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions</h2>

                <div class = "buttons-container">
                    <button onclick="location.reload()">Reload</button>
                    <button onclick="loadSummary()">View summary</button>
                </div>
            `;
        }
    }

    console.log(quizDataAnswers);
});

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    // display the next quiz
    questionEl.innerHTML = currentQuizData.question;
    aText.innerHTML = currentQuizData.a;
    bText.innerHTML = currentQuizData.b;
    cText.innerHTML = currentQuizData.c;
    dText.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function loadSummary() {
    // clear the document view
    body.innerHTML = "";

    // create the container for the summary cards
    const cardsEl = document.createElement("div");
    cardsEl.classList.add("cards");

    // loop through the data
    quizData.forEach((quiz, idx) => {
        // assign each submitted answer its proper class: correct or false
        if (quiz.correct === quizDataAnswers[idx]) {
            quizDataAnswersClasses.push("correct");
        } else {
            quizDataAnswersClasses.push("false");
        }

        // create the card element
        const card = document.createElement("div");
        card.classList.add("card-container");
        card.innerHTML = `
            <div class="card-header">
                <h2 id="question">${quiz.question}</h2>
                <ul>
                    <li><p class = "a">${quiz.a}</p></li>
                    <li><p class = "b">${quiz.b}</p></li>
                    <li><p class = "c">${quiz.c}</p></li>
                    <li><p class = "d">${quiz.d}</p></li>
                </ul>
            </div>
        `;

        // add the card to the container
        cardsEl.appendChild(card);
    }); // end foreach (looping through data)

    // reload button
    const reload = document.createElement("div");
    reload.classList.add("reload-home");
    reload.innerHTML = `<button onclick="location.reload()">Reload</button>`;

    // add the container and the button to the body
    body.appendChild(cardsEl);
    body.appendChild(reload);

    // get the cards in th summary
    const cards = document.querySelectorAll(".card-container");

    // loop througn the cards
    cards.forEach((card, i) => {
        // get the listed answers for each question
        const ps = card.querySelectorAll("p");

        // loop througn the answers to hightight the correct answer and test with the submitted answer
        ps.forEach((p) => {
            // find the correct answer (from the data)
            if (p.className === quizData[i].correct) {
                p.parentNode.classList.add("correct");
            }

            // assign the submitted answer its proper class
            if (p.className === quizDataAnswers[i]) {
                p.parentNode.classList.add(quizDataAnswersClasses[i]);
            }
        });
    }); // end foreach (looping through summary cards)
}
