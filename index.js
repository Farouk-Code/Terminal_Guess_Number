import { prompt } from "./prompt.js";

console.log(
  "\nWelcome to the Number Guessing Game! 🎮\n\n",
  "Rules:\n",
  "1. The system will generate a random number between 0 and 100.\n",
  "2. Your task is to guess this number.\n",
  "3. Enter a number when prompted.\n",
  "4. If your guess is too high or too low, you'll be notified, and you can guess again.\n",
  "5. The game continues until you guess the correct number.\n\n",
  "Let's get started! 🚀\n\n"
);

const getRandomNumber = (max) => Math.floor(Math.random() * max);
let targetNumber = getRandomNumber(100);
let playerAttemps = 0;

const isValidNumber = (number) => {
  return !Number.isNaN(number) && number >= 0 && number <= 100;
};

console.log(targetNumber);

const playGuessNumber = () => {
  const playerGuess = Number(prompt("Choose the number : "));
  playerAttemps++;
  console.log(playerAttemps);

  if (!isValidNumber(playerGuess)) {
    console.log("Rentrez un chiffre valide");
    return playGuessNumber();
  }

  if (playerGuess > targetNumber) {
    console.log("Le nombre est trop grand");
    return playGuessNumber();
  }

  if (playerGuess < targetNumber) {
    console.log("Le nombre est trop petit");
    return playGuessNumber();
  }

  return console.log(
    `🟢 Bravo, le nombre aléatoire est bien ${playerGuess}.\n`,
    `✨ Vous avez réussi en ${playerAttemps} tentatives.`
  );
};

playGuessNumber();

const relaunchGame = () => {
  const relaunch = prompt("Voulez-vous rejouer ? (O/N) : ");

  if (relaunch === "o" || relaunch === "O") {
    targetNumber = getRandomNumber(100);
    playerAttemps = 0;
    playGuessNumber();
  } else {
    process.exit(1);
  }
};

relaunchGame();
