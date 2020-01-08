console.log("Up and running!");


let cards = ["queen","queen","king","king"];
let cardsPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];
cardsPlay.push(cardOne);
console.log("User flipped " + cardOne);
cardsPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
if (cardsPlay.length === 2) {
	if (cardsPlay[0] === cardsPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}


