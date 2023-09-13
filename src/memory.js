class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined
    }

    for (let i = 0; i<this.cards.length -1; i += 1) {
      let shuffle = Math.floor(Math.random () *(this.cards.length -1) +1)
      let temp = this.cards[i]
      this.cards[i] = this.cards[shuffle]
      this.cards[shuffle] = temp
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if (card1 === card2){
      this.pairsGuessed += 1
      return true
    }
    else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here

    if (this.pairsGuessed === this.cards.length/2){
      return true
    }
    else {
      return false
    }
  }
}
