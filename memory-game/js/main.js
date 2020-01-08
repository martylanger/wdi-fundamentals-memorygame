console.log("Up and running!");


let cards = ["queen","queen","king","king"];
let cardsPlay = [];
function checkMatch() {
	if (cardsPlay.length === 2) {
		if (cardsPlay[0] === cardsPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}
function flipCard (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsPlay.push(cards[cardId]);
	checkMatch();
}
flipCard(0);
flipCard(3);

