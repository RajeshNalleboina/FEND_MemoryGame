// Create a list that holds all of your cards

var cards = [...document.querySelectorAll(".card")];
var clickedCards = [];
// Adding an event listener to each card.
cards.map(i => {
  i.addEventListener('click', displayCards);
});

var timeStatus= true;
// * Display the cards on the page
function displayCards() {
  if (timeStatus==true) {
    timeStatus=false;
    timerCreation();
  }
  this.classList.add('open', 'show', 'disabled');
  clickedCards.push(this);
  cardsMatched();
}
//  shuffle the list of cards using the provided "shuffle" method
var deck = document.querySelector(".deck");
var cardShuffle = shuffle(cards);
for (i in cardShuffle) {
  [].forEach.call(cards, function(items) {
    deck.appendChild(items);
  });
}

// Matching the cards
function cardsMatched() {
  moveCounter();
  setTimeout(function() {
    if (clickedCards.length == 2) {
      if (clickedCards[0].children[0].classList.item(1) === clickedCards[1].children[0].classList.item(1)) {
        clickedCards.map(i => {
          i.classList.add('match');
          i.classList.remove('open', 'show');
        });
        gameOver();
      } else {
        clickedCards.map(i => {
          i.classList.remove('open', 'show', 'disabled');
        });
      }
      clickedCards = [];
    }
  }, 180);
}

// moves
var move=document.querySelector('.moves');
function moveCounter() {
  moves=move.innerHTML;
  moves++;
  move.innerHTML=moves;
}

// timer Creation
var timer=document.querySelector('.timer');
var sec=0,
mins=0;
function timerCreation() {
  timerInterval = setInterval(function() {
  sec++;
  if (sec==60) {
    mins++;
    sec=0;
  }
  timer.innerHTML=mins + " : "+sec;
},1000);
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
