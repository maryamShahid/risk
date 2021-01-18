import React, { Component } from 'react'
import SlidingPane from "react-sliding-pane";
import styled from "styled-components";
import { withAlert } from "react-alert";

class CardSlidingPane extends Component {
    render() {
        const { title, showCards, onClose, playerCards, onCardClick, onTradeButtonClick, currentPlayerSelectedCards } = this.props;
        return (
            <SlidingPane
                className="slidingPane"
                isOpen={showCards}
                title={title}
                from="left"
                onRequestClose={onClose}
                overlayClassName="slidingPaneOverlay"
            >
                {playerCards && playerCards.length > 0 ? (
                    <RiskCardsContainer>
                        {playerCards.map((card, index) => {
                            return (
                                <RiskCard
                                    key={index}
                                    onClick={() => onCardClick(card)}
                                >
                                    <CardType>{card.cardType}</CardType>
                                    <br />
                                    <TerritoryName>
                                        {card.territoryName}
                                    </TerritoryName>
                                    <br />
                                    <InfantryType>
                                        {card.infantaryType}
                                    </InfantryType>
                                    <br />
                                </RiskCard>
                            );
                        })}
                    </RiskCardsContainer>
                ) : null}
                <TradeButton
                    onClick={onTradeButtonClick}
                    disabled={currentPlayerSelectedCards.length < 3}
                >
                    Trade
                </TradeButton>
            </SlidingPane>
        )
    }
}
const RiskCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
const RiskCard = styled.div`
    background-color: lightgrey;
    width: fit-content;
    border-radius: 7px;
    padding: 5px;
    text-align: center;
    margin-top: 2px;
    margin-left: -36px;
    min-width: 106px;
    border: 1px solid black;
`;
const CardType = styled.span`
    text-decoration: underline;
`;
const TerritoryName = styled.span`
    font-size: 18px;
`;
const InfantryType = styled.span`
    font-size: 12px;
`;
const TradeButton = styled.button`
    margin-left: -27px !important;
    background-color: #4a934a;
    color: white;
    font-size: 90%;
    border: none;
    border-radius: 5px;
    width: 88px;
    height: 35px;
    outline: none;
    :hover {
        background-color: white;
        color: #4a934a;
        border: 3px solid #4a934a;
    }
    :focus {
        outline: 0;
    }
    :disabled {
        background-color: white;
        color: #4a934a;
        border: 3px solid #4a934a;
    }
`;
export default withAlert()(CardSlidingPane);