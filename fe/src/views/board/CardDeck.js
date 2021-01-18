import TerritoryCard from "./TerritoryCard";
import WildCard from "./WildCard";
import { CARD_TYPES } from "../../config/gameConstants";
import {
  CARDS,
  WILDCARDS,
  NUMBER_OF_CARDS_IN_DECK,
} from "../../config/gameConstants";

class CardDeck {
  cards = [];
  noOfCards = NUMBER_OF_CARDS_IN_DECK;

  constructor(SavedCards = null) {
    if (SavedCards) {
      for (let i = 0; i < SavedCards.cards.length; i++) {
        if (
          SavedCards.cards[i].cardType.localeCompare(
            CARD_TYPES.TerritoryType.type
          ) == 0
        )
          this.cards.push(new TerritoryCard(null, null, SavedCards.cards[i]));
        else
          this.cards.push(new WildCard(null, null, null, SavedCards.cards[i]));
      }
      this.noOfCards = SavedCards.noOfCards;
    } else {
      for (let i = 0; i < CARDS.length; i++) {
        this.cards.push(new TerritoryCard(CARDS[i].country, CARDS[i].troop));
      }

      for (let j = 0; j < WILDCARDS.length; j++) {
        this.cards.push(
          new WildCard(
            WILDCARDS[j].troop1,
            WILDCARDS[j].troop2,
            WILDCARDS[j].troop3
          )
        );
      }
    }
  }

  getCard() {
    if (this.noOfCards > 0) {
      var card = this.cards.shift();
      this.noOfCards--;
      console.log("Card received no: " + this.noOfCards + "\n");
      return card;
    } else {
      console.log("No Cards left");
    }
  }

  shuffleCards() {
    for (let i = 0; i < this.noOfCards; i++) {
      let number1 = Math.floor(Math.random() * this.noOfCards);
      let number2 = Math.floor(Math.random() * this.noOfCards);
      let temp = this.cards[number1];
      this.cards[number1] = this.cards[number2];
      this.cards[number2] = temp;
    }
    return "CARDS_SHUFFLED";
  }

  getAsJson() {
    var result = {};
    result.cards = [];
    for (let i = 0; i < this.cards.length; i++) {
      result.cards.push(this.cards[i].getAsJson());
    }
    result.noOfCards = this.noOfCards;
    return result;
  }
}

export default CardDeck;
