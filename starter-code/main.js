console.log("JS file is connected to HTML! Woo!")
// Card options
var cards = ['queen', 'queen', 'king', 'king'];

// represents the cards in play
var cardsInPlay = [];
// find the board and sets to variable
// so we can add cards to it
var board = document.getElementById('game-board');
// function that will create your board
function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {
    // create a div element which will be used as a card
    var cardElement = document.createElement('div');
    // add a class to the card element which will help link styling
    cardElement.className = 'card';
		// this will set the card's 'data-card' to be the element of the array
    // data- attributes are meant to store data about an element that is not tied to a style.
    // i.e. "king"
    cardElement.setAttribute('data-card', cards[i]);
		// when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);

    // append the card to the board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}
//checks to see if cards are in play
function isTwoCards() {
  // found in solution section 
  cardsInPlay.push(this.getAttribute('data-card'));
	// show card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  // alert message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
