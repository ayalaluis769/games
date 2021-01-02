// nav bar function
function dropdownMenu() {
  var x = document.getElementById("dropdownClick");
  if (x.className === "mainnav") {
    x.className += " responsive";
  } else {
    x.className = "mainnav";
  }
}

// Number Game Function
function pickNumber() {
  let guessString = "";
  let guessNumber = 0;
  let correct = false;
  let numAttempts = 0;

  const prize = Math.floor(Math.random() * 50) + 1;

  do {
    guessString = prompt(
      "I am thinking of a number in the range of 1 to 50. \nWhat number do you think it is?"
    );
    guessNumber = +guessString;

    if (guessString === null) {
      alert("The game has been canceled.");
      return;
    }
    correct = seeGuess(guessNumber, prize);
    numAttempts += 1;
  } while (!correct);

  alert(
    "Great! You guessed the right number.\nIt took you " +
      numAttempts +
      " tries to figure it out."
  );
}

function seeGuess(guessNumber, prize) {
  let correct = false;

  if (!guessNumber) {
    alert("You didn/t choose a number. \nGuess again!");
  } else if (guessNumber < 1 || guessNumber > 50) {
    alert("You have to choose a number within the range!");
  } else if (guessNumber > prize) {
    alert("Too high!");
  } else if (guessNumber < prize) {
    alert("Too low!");
  } else {
    correct = true;
  }
  return correct;
}
