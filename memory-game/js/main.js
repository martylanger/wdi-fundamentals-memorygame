console.log("Up and running!");


let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king", 
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];
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
	console.log("User flipped " + cards[cardId].rank);
	cardsPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkMatch();
}
flipCard(0);
flipCard(3);

