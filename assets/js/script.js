let diceTotal = 0;
let sum = 0;

// change dice image to random calculated number.

function rollDice() {
   
    let diceOneImg = document.getElementById('dice-one');
    let diceTwoImg = document.getElementById('dice-two');

    let diceOne = Math.floor(Math.random() * 6)+1;
    let diceTwo = Math.floor(Math.random() * 6)+1;
    diceTotal = diceOne + diceTwo;

    diceOneImg.src =`assets/images/dice${diceOne}.png`;
    diceTwoImg.src =`assets/images/dice${diceTwo}.png`;

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
   
    if (sum === diceTotal) {
        console.log("Correct!");
        document.getElementById("dice-instructions").innerHTML= `Nice one! Roll again!`

        for (let i=0; i < cardActive.length; i++){
        cardActive[i].classList.add("closed");
        cardActive[i].classList.remove("active");};

    } else if (sum < diceTotal){
        console.log("select another card!")
    } else {
        console.log("Wrong");
        document.getElementById("dice-instructions").innerHTML= `The numbers your selected don't add up to ${diceTotal}. Try another card!`
    }

}


// Check if game is finished by looking for an empty array of card classes. 
// Be able to deselect cards
// If the cards with class card don't add up to dice then game ends. 






