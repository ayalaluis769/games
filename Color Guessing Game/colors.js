// nav bar function
function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "mainnav") {
        x.className += " responsive";
    }
    else {
        x.className = "mainnav";
    }
}

// Color Game Function
const pickArray = [ 'coral', 'tomato', 'gold', 'orange', 'red', 'salmon', 'crimson', 'green', 'olive', 'springgreen', 'aqua', 'turquoise', 'teal', 'lightblue', 'blue', 'navy', 'lavender', 'violet', 'magenta', 'purple', 'indigo', 'brown', 'silver', 'dimgray', 'black'];

function chooseColor() {
    let pick = ''
    let correct = false;
    let pickTries = 0;

    const winnerPick = Math.floor(Math.random()*pickArray.length);
    const winner = pickArray[winnerPick];

    do {
        let pick = prompt('I am thinking of one of these colors \n\n' + pickArray.join(', ') + '\n\nWhich one is it?');

        if (pick === null){
            alert('The game has ended!');
            return;
        } 
        correct = checkPick(pick, winner);
        pickTries ++;
    } while (!correct)
    alert('Great News!!! You guessed it right!' + '\n It took you '+ pickTries +' guesses to finish this game!');
}

function checkPick(pick, winner) {
    let correct = false;
    let pickIndex = pickArray.indexOf(pick);
    let checkPickIndex = pickArray.indexOf(winner);
    let option = pickArray.includes(pick);

    if (!option) {
        alert('Sorry that isn/t an option. \nTry again.');
        return false;
    }
    else if (pickIndex < checkPickIndex) {
        alert('Sorry your guess is wrong. \nTry again. \nHint: Your color is visually stronger than mine.');
        return false;
    }
    else if (pickIndex > checkPickIndex) {
        alert('Sorry your guess is wrong. \nTry again. \nHint: Your color is visually weaker than mine.');
        return false;
    }
    else {
        alert('Yes! You got it!')
        document.body.style.background = pick;
    } return true;
}