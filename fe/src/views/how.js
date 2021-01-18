import React, { Component } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.jpg";
import { Container } from "reactstrap";
import { BREAKPOINTS } from "../config/gameConstants";

class How extends Component {
    render() {
        return (
            <BackgroundContainer>
                <CenteredContainer>
                    <InnerContainer>
                        <Title>How to play?</Title>
                        <p>* After signing in you will choose a new game if you don't have a saved game to load. </p>
                        <p>* You will then be directed to the setup to select no of players (3 - 5 inclusive). </p>
                        <p>* Next, you will then enter player names and choose the color of the troops. </p>
                        <p>* To deploy troops double click on a non conquered country. </p>
                        <p>* To attack a country, single click on your country and double click on the country you want to attack. 
                            Two input fields will appear enter number of attacking troops not exceeding 3 and defending troops not exceeding 2
                            and then reselect the attacking and defending country and click Attack. </p>
                        <p>* To make sure a country to attack from or maneuver from is selected it will be highlighted in yellow. 
                          If it is not then after putting the values for attacking troops, defending troops in Attack Phase or maneuvering troops then reclick on your country 
                          and double click on the country to Attack or the country to maneuver to. </p>
                        <p>* To maneuver troops to another country, single click on your country and double click on the country you want to move troops to. 
                            One input field will appear, enter number of troops to maneuver leaving at least one behind. Then click Maneuver. </p>
                        <p>* For trading cardes, go to the slide panel and choose three cards (3 cards with same troop, 3  different cards, 3 wild cards) and press trade, 
                          to know if you have selected the cards, after three cards being selected the trade button will be enabled. </p>
                        <p>* After you are done, click end turn, to end your turn and that the next player can start playing. </p>
                    </InnerContainer>
                </CenteredContainer>
            </BackgroundContainer>
        );
    }
}

const BackgroundContainer = styled.div`
  background-image: url(${backgroundImage});
  height: calc(100% - 100px);
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;


const InnerContainer = styled(Container)`
  width: 60%;
  padding: 30px;
  margin: 12% 0 0 0;
  border-radius: 25px;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  @media (${BREAKPOINTS.sm}) {
    width: 80%;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 0 0 20px 0;
  @media (${BREAKPOINTS.sm}) {
    font-size: 200%;
    text-align: center;
  }
`;


export default How;