

// change dice image to random calculated number.

function rollDice() {
   
    let diceOneImg = document.getElementById('dice-one');
    let diceTwoImg = document.getElementById('dice-two');

    let diceOne = Math.floor(Math.random() * 6)+1;
    let diceTwo = Math.floor(Math.random() * 6)+1;
    let diceTotal = diceOne + diceTwo;

    diceOneImg.src =`assets/images/dice${diceOne}.png`;
    diceTwoImg.src =`assets/images/dice${diceTwo}.png`;

    checkAnswer()
    console.log(diceTotal);
   

}


let diceInstructions = document.getElementById('dice-instructions');
diceInstructions.addEventListener('click', rollDice);

// Find clicked cards and add to "selected" class

let cards =document.getElementsByClassName('card');


function cardSelect() {

    let cardValue= (this.textContent);
    console.log(cardValue);
    this.classList.add("active");
    this.classList.remove("card");
    cardDisable();
 
}
// for loop for click events:
for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardSelect);}

// Sum all card in "selected" class and then add to "disabled" class if it equals the dice roll
let sum = 0
function cardDisable(){
    let cardActive = document.getElementsByClassName("active");
    let cardArray= [];
    sum = 0
    for (let i=0; i < cardActive.length; i++){
        cardArray.push(parseInt(cardActive[i].textContent));
    }
    for (let i= 0; i < cardActive.length; i++){
    sum += cardArray[i];
    }
 

    console.log(cardArray);
    console.log(sum);

}

// Compare dice total with user answer:

function checkAnswer() {

    let isCorrect = sum === diceTotal;

    if (isCorrect) {
        alert("Correct!");
    } else {
        alert ("Wrong");
    }
    console.log(userAnswer);

}



// Get input numbers from users and check answer against dice total: 


// function userAnswer(){
//     let answerOne = parseInt(document.getElementById('answer-one').value);
//     let answerTwo = parseInt(document.getElementById('answer-two').value);
//     let answerThree = parseInt(document.getElementById('answer-three').value);
//     let answer= answerOne + answerTwo + answerThree;
    

//     let diceAnswer = rollDice();

//     let isCorrect = answer === diceAnswer;

//     if (isCorrect) {
//         alert("Correct!");
//     } else {
//         alert ("Wrong");
//     }
//     console.log(answer);
// }

// let submitAnswer = document.getElementById('submit-answer');
// submitAnswer.addEventListener('click', userAnswer);


