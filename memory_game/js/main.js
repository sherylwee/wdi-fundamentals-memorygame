//console.log("Up and running!");

/* var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo); */

var cardOne = 'cards[0]';
var cardTwo = 'cards[2]';

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
cardsInPlay.push('cardOne');
console.log("User flipped queen");
cardsInPlay.push('cardTwo');
console.log("User flipped king");

if (cardsInPlay.length === 2) { 
	console.log(	); 
if (cardsInPlay[0] === cardsInPlay[1]) 
	alert("You found a match!"); 
else 
	alert("Sorry, try again"); 
} 