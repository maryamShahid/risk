import React from "react";
import styled from "styled-components";
import { CARD_TYPES } from "../../config/gameConstants";
import Card from "./Card";
import { BREAKPOINTS } from "../../config/gameConstants";

class TerritoryCard extends Card {
  constructor(territoryName, infantaryName, savedGame = null) {
    if (savedGame) {
      super(savedGame.territoryName, savedGame.infantaryType);
      this.cardType = savedGame.cardType;
    } else {
      super(territoryName, infantaryName);
      this.cardType = CARD_TYPES.TerritoryType.type;
    }
  }

  getCardType() {
    return this.cardType;
  }

  getView() {
    const Country = React.createElement(Name, {
      children: `Country: ${this.territoryName}`,
    });
    const Troop = React.createElement(Name, {
      children: `Troop Type: ${this.infantaryType}`,
    });

    return React.createElement(CardBorder, { children: Country, Troop });
  }

  getAsJson() {
    var result = {};
    result.territoryName = this.territoryName;
    result.infantaryType = this.infantaryType;
    result.cardType = this.cardType;
    return result;
  }
}

const CardBorder = styled.div`
  width: 100%;
  height: 12%;
  margin-left: 2%;
  margin-right: 2%;

  border-radius: 25px;
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (${BREAKPOINTS.sm}) {
    width: 100%;
    height: 30%;
  }
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

export default TerritoryCard;
