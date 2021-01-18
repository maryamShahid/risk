import React from "react";
import styled from "styled-components";
import {
    BREAKPOINTS,
    CARD_TYPES,
    NUMBER_OF_CARDS_FOR_TRADE,
} from "../../config/gameConstants";

class Player {
    constructor(name, id, remainingTroops, color, isPlayerTurn, turnNumber, diceRoll = null, noOfCards = 0, numOfCardTrades = 0) {
        this.name = name;
        this.id = id;
        this.remainingTroops = remainingTroops;
        this.color = color;
        this.isPlayerTurn = isPlayerTurn;
        this.turnNumber = turnNumber;
        this.diceRoll = diceRoll;
        this.cards = [];
        this.numOfCardTrades = numOfCardTrades;
        this.noOfCards = noOfCards;
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getTurnNumber() {
        return this.turnNumber;
    }

    getNumOfCardTrades() {
        return this.numOfCardTrades;
    }
    setNumOfCardTrades(numOfCardTrades) {
        this.numOfCardTrades = numOfCardTrades;
    }

    setDiceRoll(numOfPlayers) {
        this.diceRoll = Math.floor(Math.random() * 7);
    }
    getDiceRoll() {
        return this.diceRoll;
    }

    getTurnNumber() {
        return this.turnNumber;
    }

    getRemainingTroops() {
        return this.remainingTroops;
    }

    setRemainingTroops(remainingTroops) {
        if (remainingTroops >= 0) {
            this.remainingTroops = remainingTroops;
            return true;
        }
        return false;
    }

    getIsPlayerTurn() {
        return this.isPlayerTurn;
    }

    setIsPlayerTurn(playerTurn) {
        this.isPlayerTurn = playerTurn;
    }

    getColor() {
        return this.color;
    }

    getNoOfCards() {
        return this.noOfCards;
    }

    getCards() {
        return this.cards;
    }

    rollDiceBasedOnTroops(numOfTroops) {
        let diceRolls = [];
        if (numOfTroops >= 3) {
            diceRolls = new Array(3);
        } else {
            diceRolls = new Array(parseInt(numOfTroops));
        }
        const numOfRolls = diceRolls.length;
        for (let i = 0; i < numOfRolls; i++) {
            diceRolls[i] = Math.floor(Math.random() * 7);
        }
        return diceRolls.sort((a, b) => b - a);
    }

    addCard(card) {
        this.cards.push(card);
        this.noOfCards++;
    }

    removeCards(cards) {
        redoLoop:
        for (let i = 0; i < this.cards.length; i++) {
            for (let j = 0; j < cards.length; j++) {
                if (
                    this.cards[i].getCardType() === CARD_TYPES.WildType.type &&
                    cards[j].getCardType() === CARD_TYPES.WildType.type
                ) {
                    this.cards.splice(i, 1);
                    i = -1;
                    continue redoLoop;
                }
                if (
                    this.cards[i].getCardType() === CARD_TYPES.TerritoryType.type &&
                    cards[j].getInfantaryType() ===
                    this.cards[i].getInfantaryType() &&
                    cards[j].getTerritoryName() ===
                    this.cards[i].getTerritoryName()
                ) {
                    this.cards.splice(i, 1);
                    i = -1;
                    continue redoLoop;
                }
            }
        }
        this.noOfCards -= 3;
    }

    getView() {
        const PlayerName = React.createElement(Name, {
            children: this.name,
        });
        const PlayerTroops = React.createElement(Reserved, {
            children: `Reserve: ${this.remainingTroops}`,
        });
        const ColorText = React.createElement(Reserved, {
            children: "Color:",
        });
        const ColorIndicator = React.createElement(ColorBox, {
            style: { backgroundColor: this.color },
        });
        const ColorContainerElement = React.createElement(
            ColorContainer,
            null,
            ColorText,
            ColorIndicator
        );

        return React.createElement(
            CardBorder,
            {
                style: {
                    backgroundColor: `${this.isPlayerTurn ? "#d9b51c" : "white"
                        }`,
                },
                key: this.id,
            },
            PlayerName,
            PlayerTroops,
            ColorContainerElement
        );
    }
}
// width: 100%;
//     height: 12%;
//     margin-left: 2%;
//     margin-right: 2%;

//     border-radius: 25px;
//     background-color: white;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     @media (${BREAKPOINTS.sm}) {
//         width: 100%;
//         height: 30%;
//     }
const ColorContainer = styled.div`
    display: flex;
    width: fit-content;
`;
const ColorLabel = styled.h6``;
const ColorBox = styled.div`
    height: 10px;
    width: 10px;
    margin-top: 5px;
    margin-left: 23px;
`;
const CardBorder = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 15px;
    background-color: white;
    justify-content: center;
    margin-right: 20px;
    margin-left: 20px;
`;
const Name = styled.h5`
    font-size: 140%;
    text-align: center;
    margin: 0 0 10% 0;
    @media (${BREAKPOINTS.sm}) {
        font-size: 100%;
        margin: 0 0 2px 0;
        text-align: center;
    }
`;
const Reserved = styled.h6`
    font-size: 100%;
    text-align: center;
    color: #606060;
    @media (${BREAKPOINTS.sm}) {
        font-size: 80%;
        text-align: center;
    }
`;
export default Player;
