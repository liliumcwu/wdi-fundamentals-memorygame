var cards = [
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
  }

];
var cardsInPlay = [];

var flipCard = function(evt) {
  console.log('this', this);
  //var cardId = this.getAttribute('data-id');
  var cardId = this.getAttribute('data-id');
  // console.log("You just flipped " + cards[cardId].rank)
  // console.log("Image is " + cards[cardId].cardImage);
  // console.log("Suit is " + cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage);
  // checkForMatch();
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    document.getElementById('game-board').appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);


    document.getElementById('reset-button').addEventListener('click', resetCards);
  }
}

var resetCards = function() {
  console.log('this is ' + this);
  var cardElements = document.getElementById('game-board').childNodes;
  console.log("cardElements is " + cardElements);
  for (var i = 0; i < cardElements.length; i++) {
    cardElements[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
}

createBoard();


