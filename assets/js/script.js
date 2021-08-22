

// change dice image to random calcualted number.

function rollDice() {
    let diceOneImg = document.getElementById('dice-one');
    let diceTwoImg = document.getElementById('dice-two');

    let diceOne = Math.floor(Math.random() * 6)+1;
    let diceTwo = Math.floor(Math.random() * 6)+1;
    let diceTotal = diceOne + diceTwo;

    diceOneImg.src =`assets/images/dice${diceOne}.png`;
    diceTwoImg.src =`assets/images/dice${diceTwo}.png`;

    console.log(diceOne);
    console.log(diceTwo);
    console.log(diceTwoImg.src);
    console.log(diceTotal);
   

}


let diceInstructions = document.getElementById('dice-area');

diceInstructions.addEventListener('click', rollDice);