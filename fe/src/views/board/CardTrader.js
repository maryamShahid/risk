import {
    NUMBER_OF_TRADES_SET,
    NUMBER_OF_CARDS_FOR_TRADE,
    TROOP_TYPES,
    CARD_TYPES,
} from "../../config/gameConstants";

class CardTrader {
    constructor(savedTrader = null) {
        if (savedTrader) {
            this.noOfPreviousTrades = savedTrader.noOfPreviousTrades;
            this.noOfTroopsGivenInPreviousTrade = savedTrader.noOfTroopsGivenInPreviousTrade;
        } else {
            this.noOfPreviousTrades = 0;
            this.noOfTroopsGivenInPreviousTrade = 0;
        }
    }

    setNoOfPreviousTrades(noOfPreviousTrades) {
        this.noOfPreviousTrades = noOfPreviousTrades;
    }

    getAsJson() {
        var result = {};
        result.noOfPreviousTrades = this.noOfPreviousTrades;
        result.noOfTroopsGivenInPreviousTrade = this.noOfTroopsGivenInPreviousTrade;
        return result;
    }

    tradeCards(cards) {
        if (this.checkIfTradeValid(cards)) {
            console.log("trading");
            if (this.noOfPreviousTrades < NUMBER_OF_TRADES_SET) {
                this.noOfPreviousTrades++;
                this.noOfTroopsGivenInPreviousTrade =
                    2 * this.noOfPreviousTrades + 2;
                return this.noOfTroopsGivenInPreviousTrade;
            } else {
                this.noOfPreviousTrades++;
                this.noOfTroopsGivenInPreviousTrade += 5;
                return this.noOfTroopsGivenInPreviousTrade;
            }
        }
        return 0;
    }

    checkIfTradeValid(cards) {
        if (this.checkIfCardsOfSameDesign(cards)) {
            return true;
        }
        if (this.checkIfCards1OfEachDesign(cards)) {
            return true;
        }
        if (this.checkIfWildCardTrade(cards)) {
            return true;
        }
        return false;
    }

    checkIfCardsOfSameDesign(cards) {
        const [firstCard, secondCard, thirdCard] = cards;
        if (firstCard.getInfantaryType() === secondCard.getInfantaryType() && firstCard.getInfantaryType() === thirdCard.getInfantaryType()) {
            return true;
        }
        return false;
    }

    checkIfCards1OfEachDesign(cards) {
        let types = [
            TROOP_TYPES.Artillery.name,
            TROOP_TYPES.Cavalry.name,
            TROOP_TYPES.Infantry.name,
        ];

        for (let i = 0; i < cards.length; i++) {
            const position = types.indexOf(cards[i].getInfantaryType());
            if (position >= 0) {
                types.splice(position, 1);
            }
        }
        return types.length === 0;
    }

    checkIfWildCardTrade(cards) {
        const tempTerritoryCards = [];
        const tempWildCards = [];
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].getCardType() !== CARD_TYPES.WildType.type) {
                tempTerritoryCards.push(cards[i]);
            } else {
                tempWildCards.push(cards[i]);
            }
        }
        if (tempWildCards.length === 3) {
            return true;
        }

        if (tempWildCards.length === 2) {
            return true;
        }

        if (tempWildCards.length === 1) {
            let types = [
                TROOP_TYPES.Artillery.name,
                TROOP_TYPES.Cavalry.name,
                TROOP_TYPES.Infantry.name,
            ];
            for (let i = 0; i < tempTerritoryCards.length; i++) {
                const position = types.indexOf(cards[i].getInfantaryType());
                if (position >= 0) {
                    types.splice(position, 1);
                }
            }
            if (types.length === 1) {
                return true;
            }
        }
        return false;
    }


}

export default CardTrader;
