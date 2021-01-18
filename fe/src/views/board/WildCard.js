import { result } from "lodash";
import React from "react";
import styled from "styled-components";
import { CARD_TYPES } from "../../config/gameConstants";
import { BREAKPOINTS } from "../../config/gameConstants";
import Card from "./Card";

class WildCard extends Card {
  constructor(troop1, troop2, troop3, savedGame = null) {
    super();
    if (savedGame) {
      this.troop1 = savedGame.troop1;
      this.troop2 = savedGame.troop2;
      this.troop3 = savedGame.troop3;
      this.cardType = savedGame.cardType;
    } else {
      this.troop1 = troop1;
      this.troop2 = troop2;
      this.troop3 = troop3;
      this.cardType = CARD_TYPES.WildType.type;
    }
  }

  getCardType() {
    return this.cardType;
  }

  getView() {
    const Troop1 = React.createElement(Name, {
      children: `Country: ${this.troop1}`,
    });
    const Troop2 = React.createElement(Name, {
      children: `Troop Type: ${this.troop2}`,
    });
    const Troop3 = React.createElement(Name, {
      children: `Troop Type: ${this.troop3}`,
    });

    return React.createElement(CardBorder, {
      children: Troop1,
      Troop2,
      Troop3,
    });
  }

  getAsJson() {
    var result = {};
    result.troop1 = this.troop1;
    result.troop2 = this.troop2;
    result.troop3 = this.troop3;
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

export default WildCard;
