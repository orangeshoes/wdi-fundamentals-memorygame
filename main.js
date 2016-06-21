

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";



if (cardOne === cardTwo) {
	alert('Yay.');
} else if (cardOne === cardThree) {
	alert('No 1');
} else if (cardOne === cardFour ) {
	alert('No 2');
} else if (cardThree === cardFour) {
	alert('Yay 2.');
} else if (cardTwo === cardFour ) {
	alert('No 3'); 
} else if (cardThree === cardTwo ) {
	alert('No 4'); 
} else { 
	alert('nullalert');
}