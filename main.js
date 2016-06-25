

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";



function isMatch(cardsInPlay) {
	console.log(cardsInPlay)
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert('yay');
	} else {
		alert('no');
	}

	// if (cardOne === cardTwo) {
	// 	alert('Yay.');
	// } 
	// else if (cardOne === cardThree) {
	// 	alert('No 1');
	// } 
	// else if (cardOne === cardFour ) {
	// 	alert('No 2');
	// } 
	// else if (cardThree === cardFour) {
	// 	alert('Yay 2.');
	// } 
	// else if (cardTwo === cardFour ) {
	// 	alert('No 3'); 
	// } 
	// else if (cardThree === cardTwo ) {
	// 	alert('No 4'); 
	// } 
	// else { 
	// 	alert('nullalert');
	// }
}


var GameBoard = document.getElementById("game-board");


var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []

function createBoard() {
	for (var i=0; i<cards.length; i++) {
		var card = document.createElement('div');
		card.className='card'
		GameBoard.appendChild(card);
		card.setAttribute('data-card', cards[i]);
		card.addEventListener('click', isTwoCards)
		if (i<=1) {
			card.innerHTML = '<img src="HeartsQ.png" alt="Queen of Hearts" >';
		}
		else {
			card.innerHTML = '<img src="HeartsK.png" alt="King of Hearts" >';
		}
	}
}

createBoard();




function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = []; 
	}
}