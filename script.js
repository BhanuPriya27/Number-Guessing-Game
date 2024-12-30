// const inputEl = document.querySelector("input");
// const guessEl = document.querySelector(".guess");
// const checkBtnEl = document.querySelector(".checkBtn");
// const remainingChancesTextEl = document.querySelector(".chances");
// const remainingChancesEl = document.querySelector(".chance");

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let totalChances = 10;

// function resetGame() {
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//     totalChances = 10;
//     inputEl.disabled = false;
//     inputEl.value = "";
//     guessEl.textContent = "";
//     remainingChancesEl.textContent = totalChances;
//     remainingChancesTextEl.textContent = `You have ${totalChances} chances left`;
//     checkBtnEl.textContent = "Check";
// }

// checkBtnEl.addEventListener("click", () => {
//     const inputValue = parseInt(inputEl.value, 10);

//     if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
//         guessEl.textContent = "Please enter a valid number between 1 and 100.";
//         guessEl.style.color = "red";
//         return;
//     }

//     totalChances--;
//     remainingChancesEl.textContent = totalChances;

//     if (inputValue === randomNumber) {
//         guessEl.textContent = "Congratulations! 🎉 You guessed the correct number.";
//         guessEl.style.color = "green";
//         inputEl.disabled = true;
//         checkBtnEl.textContent = "Play Again";
//     } else if (totalChances === 0) {
//         guessEl.textContent = `Game Over! The correct number was ${randomNumber}.`;
//         guessEl.style.color = "red";
//         inputEl.disabled = true;
//         checkBtnEl.textContent = "Play Again";
//     } else {
//         guessEl.textContent = inputValue > randomNumber ? "Your guess is too high!" : "Your guess is too low!";
//         guessEl.style.color = "#1446a0";
//     }

//     if (checkBtnEl.textContent === "Play Again") {
//         checkBtnEl.addEventListener("click", resetGame);
//     }
// });

//======================================================================================

const inputEl = document.querySelector("input");
const guessEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector(".checkBtn");
const remainingChancesTextEl = document.querySelector(".chances");
const remainingChancesEl = document.querySelector(".chance");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let totalChances = 10;

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    totalChances = 10; // Reset chances
    inputEl.disabled = false; // Enable input
    inputEl.value = ""; // Clear the input
    guessEl.textContent = ""; // Clear the guess message
    remainingChancesEl.textContent = totalChances; // Update the chances left display
    remainingChancesTextEl.textContent = `You have ${totalChances} chances left`; // Update chances message
    checkBtnEl.textContent = "Check"; // Change button text back to "Check"
    checkBtnEl.removeEventListener("click", resetGame); // Remove reset handler
    checkBtnEl.addEventListener("click", handleGuess); // Reattach the guess handler
}

function handleGuess() {
    const inputValue = parseInt(inputEl.value, 10);

    // Validate input
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
        guessEl.textContent = "Please enter a valid number between 1 and 100.";
        guessEl.style.color = "red";
        return;
    }

    totalChances--;
    remainingChancesEl.textContent = totalChances;

    if (inputValue === randomNumber) {
        guessEl.textContent = "Congratulations! 🎉 You guessed the correct number.";
        guessEl.style.color = "green";
        inputEl.disabled = true; // Disable input field
        checkBtnEl.textContent = "Play Again"; // Change button text to "Play Again"
        checkBtnEl.removeEventListener("click", handleGuess); // Remove guess handler
        checkBtnEl.addEventListener("click", resetGame); // Attach resetGame handler
    } else if (totalChances === 0) {
        guessEl.textContent = `Game Over! The correct number was ${randomNumber}.`;
        guessEl.style.color = "red";
        inputEl.disabled = true; // Disable input field
        checkBtnEl.textContent = "Play Again"; // Change button text to "Play Again"
        checkBtnEl.removeEventListener("click", handleGuess); // Remove guess handler
        checkBtnEl.addEventListener("click", resetGame); // Attach resetGame handler
    } else {
        guessEl.textContent = inputValue > randomNumber ? "Your guess is too high!" : "Your guess is too low!";
        guessEl.style.color = "#1446a0";
    }
}

// Attach the initial event listener for guessing
checkBtnEl.addEventListener("click", handleGuess);
