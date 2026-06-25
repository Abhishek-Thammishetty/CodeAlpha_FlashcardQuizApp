let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
    {
        question: "What is HTML?",
        answer: "HyperText Markup Language"
    },
    {
        question: "What is CSS?",
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is JavaScript?",
        answer: "Programming language for web pages"
    }
];

let currentIndex = 0;

function saveData() {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
}

function displayCard() {
    document.getElementById("question").textContent =
        flashcards[currentIndex].question;

    document.getElementById("answer").textContent =
        flashcards[currentIndex].answer;

    document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    displayCard();
}

function previousCard() {
    currentIndex =
        (currentIndex - 1 + flashcards.length) % flashcards.length;
    displayCard();
}

function addFlashcard() {
    let q = document.getElementById("newQuestion").value;
    let a = document.getElementById("newAnswer").value;

    if (q === "" || a === "") {
        alert("Please enter question and answer");
        return;
    }

    flashcards.push({
        question: q,
        answer: a
    });

    saveData();

    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";

    alert("Flashcard Added!");
}

function editFlashcard() {
    let q = prompt(
        "Edit Question:",
        flashcards[currentIndex].question
    );

    let a = prompt(
        "Edit Answer:",
        flashcards[currentIndex].answer
    );

    if (q && a) {
        flashcards[currentIndex].question = q;
        flashcards[currentIndex].answer = a;

        saveData();
        displayCard();

        alert("Updated Successfully!");
    }
}

function deleteFlashcard() {

    if (flashcards.length === 1) {
        alert("At least one flashcard required");
        return;
    }

    flashcards.splice(currentIndex, 1);

    currentIndex = 0;

    saveData();
    displayCard();

    alert("Deleted Successfully!");
}

displayCard();