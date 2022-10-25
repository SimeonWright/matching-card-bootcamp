// function ready(){
    let cards = Array.from(document.getElementsByClassName('card'));
    // let game = new MixorMatch(cards)
    let clickedOn = true;
    cards.forEach(card => card.addEventListener("click", flipCard))
    let hasFlippedCard = false;
    let lockBoard = false;
    // lockboard is what we are using to stop the user from selecting more then 2 cards at a time
    let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return; 
    
    if (this === firstCard) return;
    this.classList.add('visible')

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    // hasFlippedCard = false;

    checkForMatch();
}

function checkForMatch() {
     if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
        // dataset.framwork is hwo we call the data we assigned the section
      }

      unflipCards();

    
    }

    function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

      resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove('visible');
        secondCard.classList.remove('visible');
        // lockBoard = false;
        resetBoard();
      }, 1500);
    }

    function resetBoard(){
        [hasFlippedCard, lockBoard] = [false, false]
        [firstCard, secondCard] = [null, null]

    }
     (function shuffle() {
          cards.forEach(card => {
             let ramdomPos = Math.floor(Math.random() * 12);
             card.style.order = ramdomPos;
           });
         })();


         
    // make an array 
    // let pickedUpCard = []

    // pickedUpCard.push()
    // write a conditional for arr.length that dosent pass 2 cards, check the card and stop theplayer from drawing more cards
    // write a conditional to keep picking iff arr.lrngth is under 2
    // 

// }

// check to see if a card is flipped over
// if the card is flipped stay on front side
// pick another card
// if that card matches plug it into the matchedCards[]
    // if it dosent match return both cards back to front

















// class MixorMatch{
//     constructor(cards){
//         this.cardsArray = cards;
//     }

//     startGame(){
//     this.cardToCheck = null;
//     this.matchedCards = []
//     this.busy = true;
//     }

//     flipCard(card){
//         console.log("triggering flip card")
//         if(this.canFlipCard(card)){
//          card.classList.add('visible');
//         }
//     }

//     canFlipCard(card){
//     return true;
//     // return(!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck )
//     }
// }



// // function ready(){
//     let cards = Array.from(document.getElementsByClassName('card'));
//     // let game = new MixorMatch(cards)
//     let clickedOn = true;
//     cards.forEach(card => card.addEventListener("click", flipCard))
// function flipCard(click) {
//     //   console.log("start of log")
//      click.target.classList.add("visible")
//       console.log(click.target)
//     }

//     // make an array 
//     let pickedUpCard = []

//     pickedUpCard.push()