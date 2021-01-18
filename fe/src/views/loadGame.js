import React, { PureComponent } from "react";

import fire from "../firebase";

import { connect } from 'react-redux'
import styled from "styled-components";
import backgroundImage from "../assets/background.jpg"
import { Button, Container, Col, Row, FormGroup, Input, Card, CardTitle, CardText, CardBody } from 'reactstrap';

class LoadGame extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
        };

    }

    async getUserGames() {
        var result = []
        const { currentUser } = this.props;
        const isSignedIn = Object.keys(currentUser).length === 0 && currentUser.constructor === Object;
        if (isSignedIn)
            return result;
        const userRef = fire.firestore().doc(`users/${currentUser.uid}`);
        var userData = await userRef.get();
        userData = userData.data();

        for (var key of Object.keys(userData)) {
            if (key.startsWith("game-"))
                result.push({ gameName: key.replace("game-", ""), gameData: userData[key] });
        }

        result.sort((a, b) => (a.gameName > b.gameName) ? 1 : 0);
        var newGameNames = result.map(game => game.gameName);
        var oldGameNames = this.state.games.map(game => game.gameName);
        newGameNames.sort();
        oldGameNames.sort();

        if (JSON.stringify(newGameNames) !== JSON.stringify(oldGameNames)) {
            this.setState({ games: result })
        }
    }

    startGame(game) {
        this.props.history.push('/board', { savedGame: game });
    }

    render() {
        this.getUserGames()
        const { games } = this.state;

        return (
            <BackgroundContainer>
                <CenteredContainer>
                    <InnerContainer>
                        <h2>Load Game</h2>
                        <p>Choose a game to load, if you have no saved games you can start a new game here</p>
                        <CardsContainer>
                            {games.length > 0 && games.map((game) => {
                                return (
                                    <StyledCard body key={game.gameName} onClick={() => this.startGame(game)}>
                                        <CardBody tag="h5">{game.gameName}</CardBody>
                                    </StyledCard>
                                )
                            })}
                        </CardsContainer>
                    </InnerContainer>
                </CenteredContainer>
            </BackgroundContainer >
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
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const InnerContainer = styled(Container)`
  width: 60%;
  padding: 25px;
  border-radius: 25px;
  background-color: white;
`;

const CardsContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledCard = styled(Card)`
    padding: 5px;
    margin: 10px;
    width: calc(50% - 20px);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    :hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

const mapStateToProps = state => ({
    currentUser: state.currentUser || {}
});

export default connect(mapStateToProps)(LoadGame);