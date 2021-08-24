
// change dice image to random calcualted number.

function rollDice() {

    let diceOneImg = document.getElementById('dice-one');
    let diceTwoImg = document.getElementById('dice-two');

    let diceOne = Math.floor(Math.random() * 6)+1;
    let diceTwo = Math.floor(Math.random() * 6)+1;
    let diceTotal = diceOne + diceTwo;

    diceOneImg.src =`assets/images/dice${diceOne}.png`;
    diceTwoImg.src =`assets/images/dice${diceTwo}.png`;

    console.log(diceTotal);
   

}

let diceInstructions = document.getElementById('dice-instructions');
diceInstructions.addEventListener('click', rollDice);






// Get input numbers from users and check answer against dice total: 


function userAnswer(){
    let answerOne = parseInt(document.getElementById('answer-one').value);
    let answerTwo = parseInt(document.getElementById('answer-two').value);
    let answerThree = parseInt(document.getElementById('answer-three').value);
    let answer= answerOne + answerTwo + answerThree;
    

    let diceAnswer = rollDice();

    let isCorrect = answer === diceAnswer;

    if (isCorrect) {
        alert("Correct!");
    } else {
        alert ("Wrong");
    }
    console.log(answer);
}

let submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', userAnswer);



// // Wait for the DOM to finish loading before running the game
// document.addEventListener("DOMContentLoaded",runGame);




// When a player selects a card, sum the cards to then be able to check against the dice total. 

// let cards =document.getElementsByClassName('card');


// function cardSelect() {
//     this.style.backgroundColor= "red";
//     let cardValue= (this.textContent);
//     console.log(cardValue);
 
// }

// // for loop for click events:
// for (let i=0; i < cards.length; i++) {
//     cards[i].addEventListener('click', cardSelect);}

// function createArray(){
//     cardArray =[];
//     cardArray.push(cardValue);
//     console.log(cardArray);}
