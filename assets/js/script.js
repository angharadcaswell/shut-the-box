// Global variables

let diceTotal = 0;
let sum = 0;
let woodAudio = new Audio('assets/audio/woodblock.mp3');
let diceAudio = new Audio ('assets/audio/dice.mp3');

// Roll dice: Change dice image to random calculated number.

function rollDice() {
    diceAudio.play();
    let diceOneImg = document.getElementById('dice-one');
    let diceTwoImg = document.getElementById('dice-two');

    let diceOne = Math.floor(Math.random() * 6)+1;
    let diceTwo = Math.floor(Math.random() * 6)+1;
    diceTotal = diceOne + diceTwo;

    diceOneImg.src =`assets/images/dice${diceOne}.png`;
    diceTwoImg.src =`assets/images/dice${diceTwo}.png`;


}


let diceInstructions = document.getElementById('dice-instructions');
diceInstructions.addEventListener('click', rollDice);



// Select cards: Find clicked cards and add to "active" class

let cards =document.getElementsByClassName('card-click');
function cardSelect() {
    this.classList.add("active");
    this.classList.remove("card-click");
    woodAudio.play();
    cardDisable();
    
   for (let i=0; i < cardActive.length; i++) {
    cardActive[i].addEventListener('click', cardDeselect);}
}
// for loop for click events:
for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardSelect);}


// Unselect cards: Deactivate cards back to card class if the user has selected the wrong one.
let cardActive = document.getElementsByClassName('active');

function cardDeselect() {
  console.log(cardActive);
    this.classList.add("card-click");
    this.classList.remove("active");
    cardSelect();
   
}

// Check card total: Create array of all cards with "active" class. Sum all cards in the array and compare answer to the dice roll total. If correct, change class of card to "closed".

function cardDisable(){
    let cardArray= [];
    sum = 0
    for (let i=0; i < cardActive.length; i++){
        cardArray.push(parseInt(cardActive[i].textContent));
    }
    for (let i= 0; i < cardActive.length; i++){
    sum += cardArray[i];
    }

   
    if (sum === diceTotal) {
        for (let i=0; i < cardActive.length; i++){
        cardActive[i].classList.add("closed");
       };
      
        let active = document.querySelectorAll('.active');
      
        for (var i = 0; i < active.length; i++) {
        active[i].classList.remove('active')
        };   

  document.getElementById("dice-instructions").innerHTML= `???? ???? ???? Nice one! Roll again!`;

    } else if (sum < diceTotal){
    } else {
        document.getElementById("dice-instructions").innerHTML= `???????????? The numbers you selected don't add up to ${diceTotal}. Try another card! If there are no cards that add up to the total, then the game is over. `;
    }
    closeBox();
}

// When all the cards have been changed to the "closed" class the game is complete.

function closeBox() {
    let cardClosed = document.getElementsByClassName("closed").length;
    let winAudio = new Audio('assets/audio/celebrate.mp3');
    if (cardClosed=== 9) {
        document.getElementById("dice-instructions").innerHTML= `???????????? Congratulations, you closed the box!!!`;    
        winAudio.play();   
    }
    // console.log(cardClosed);
}


let restart= document.getElementById('restart');
function refreshGame(){
  window.location.href= ""
}
restart.addEventListener('click', refreshGame);






