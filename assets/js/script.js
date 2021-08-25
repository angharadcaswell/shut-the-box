// Global variables

let diceTotal = 0;
let sum = 0;

// Change dice image to random calculated number.

function rollDice() {
   
    let diceOneImg = document.getElementById('dice-one');
    let diceTwoImg = document.getElementById('dice-two');

    let diceOne = Math.floor(Math.random() * 6)+1;
    let diceTwo = Math.floor(Math.random() * 6)+1;
    diceTotal = diceOne + diceTwo;

    diceOneImg.src =`assets/images/dice${diceOne}.png`;
    diceTwoImg.src =`assets/images/dice${diceTwo}.png`;

    // console.log(diceTotal);

}

let diceInstructions = document.getElementById('dice-instructions');
diceInstructions.addEventListener('click', rollDice);

// Find clicked cards and add to "active" class

// Find clicked cards and add to "active" class

let cards =document.getElementsByClassName('card');
function cardSelect() {
    this.classList.add("active");
    this.classList.remove("card");
    cardDisable();
    
   for (let i=0; i < cardActive.length; i++) {
    cardActive[i].addEventListener('click', cardDeselect);}
}
// for loop for click events:
for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardSelect);}


// Deactivate cards back to card class if the user has selected the wrong one.
let cardActive = document.getElementsByClassName('active');

function cardDeselect() {
  console.log(cardActive);
    this.classList.add("card");
    this.classList.remove("active");
    cardSelect();
   
}

// Create array of all cards with "active" class. Sum all cards in the array and compare answer to the dice roll total. If correct, change class of card to "closed".

function cardDisable(){
    // let cardActive = document.getElementsByClassName("active");
    let cardArray= [];
    sum = 0
    for (let i=0; i < cardActive.length; i++){
        cardArray.push(parseInt(cardActive[i].textContent));
    }
    for (let i= 0; i < cardActive.length; i++){
    sum += cardArray[i];
    }
    // console.log(cardArray);
    // console.log(sum);
   
    if (sum === diceTotal) {
        // console.log("Correct!");
        for (let i=0; i < cardActive.length; i++){
        cardActive[i].classList.add("closed");
       };
      
        let active = document.querySelectorAll('.active');
      
        for (var i = 0; i < active.length; i++) {
        active[i].classList.remove('active')
        };   

  document.getElementById("dice-instructions").innerHTML= `🎲 🎲 🎲 Nice one! Roll again!`;

    } else if (sum < diceTotal){
        // console.log("select another card!")
    } else {
        // console.log("Wrong");
        document.getElementById("dice-instructions").innerHTML= `🚨🚨🚨 The numbers you selected don't add up to ${diceTotal}. Try another card!`;
    }
    closeBox();
}

// When all the cards have been changed to the "closed" class the game is complete.

function closeBox() {
    let cardClosed = document.getElementsByClassName("closed").length;
    if (cardClosed=== 9) {
        document.getElementById("dice-instructions").innerHTML= `💥💥💥 Congratulations, you closed the box!!!`;       
    }
    // console.log(cardClosed);
}


let restart= document.getElementById('restart');
function refreshGame(){
  window.location.href= ""
}
restart.addEventListener('click', refreshGame);

// Be able to deselect cards
// If the cards with class card don't add up to dice then game ends. 
// add audio
// responsive design
// accessibility


