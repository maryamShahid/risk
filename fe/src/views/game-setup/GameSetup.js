import React, { Component } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { TwitterPicker } from 'react-color';
import { Container, Button, Row, Col, FormGroup, Input, Label } from "reactstrap";
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';
import { withAlert } from "react-alert";

import { BREAKPOINTS, COLORS } from "../../config/gameConstants";
import backgroundImage from "../../assets/background.jpg";

class GameSetup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numOfPlayers: 2,
            numOfPlayersRecorded: false,
            players: [],
            displayColorPickers: [],
        };
    }

    handleColorPickerClick(index) {
        var result = this.state.displayColorPickers;
        if (result[index]) {
            result[index] = !this.state.displayColorPicker;
            this.setState({ displayColorPickers: result });
        }
        else {
            result[index] = true;
            this.setState({ displayColorPickers: result });
        }
    };

    handleColorPickerClose(index) {
        var result = this.state.displayColorPickers;
        result[index] = false;
        this.setState({ displayColorPickers: result });
    };



    render() {
        const {
            numOfPlayers,
            numOfPlayersRecorded,
            players,
        } = this.state;

        return (
            <BackgroundContainer>
                <CenteredContainer>
                    <InnerContainer>
                        <Title>Setup New Game</Title>
                        {!numOfPlayersRecorded ? (
                            <div>
                                <Row>
                                    <Col md={12}>
                                        <Label>Number of players:</Label>
                                        <Input
                                            value={numOfPlayers}
                                            type="select"
                                            onChange={(e) =>
                                                this.setState({ numOfPlayers: e.target.value })
                                            }
                                        >
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4 </option>
                                            <option value={5}>5</option>
                                        </Input>
                                    </Col>
                                </Row>
                                <StyledButton onClick={this.validateInput}>Setup Game</StyledButton>
                            </div>
                        ) : null}
                        {numOfPlayersRecorded &&
                            players.length > 0 &&
                            players.map((player, index) => {
                                return (
                                    <div key={player.id}>
                                        <Row>
                                            <Col md={10}>
                                                <FormGroup>
                                                    <Input
                                                        placeholder={"Player " + (index + 1) + "'s Name"}
                                                        value={this.state.players[index]["player" + index + "Name"]}
                                                        onChange={(e) => this.inputOnChangeHandler(e, index)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={2}>
                                                <div>
                                                    <ColorContainer onClick={() => this.handleColorPickerClick(index)}>
                                                        <ColoredDiv color={players[index].color} />
                                                    </ColorContainer>
                                                    {this.state.displayColorPickers[index] ? <ColorPickerPopover>
                                                        <ColorPickerCover onClick={() => this.handleColorPickerClose(index)} />

                                                        <TwitterPicker
                                                            color="#36c"
                                                            triangle="top-left"
                                                            colors={COLORS}
                                                            onChange={color => {
                                                                var players = this.state.players;
                                                                players[index].color = color.hex;
                                                                this.setState({ players });
                                                            }}
                                                        />
                                                    </ColorPickerPopover> : null}

                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })}
                        {numOfPlayersRecorded && players.length > 0 ? <DiceContainer>
                            {players.map((player, index) => {
                                const playerIndex = index;
                                return <div key={player.id}>
                                    <ReactDice 
                                        numDice={1}
                                        rollDone={(num) => this.rollDoneCallback(num, playerIndex)}
                                        faceColor="#000"
                                        dotColor="fff"
                                        rollTime={1}
                                    />
                                </div>
                            })}
                        </DiceContainer> : null}
                        {numOfPlayersRecorded ? <StyledButton onClick={e => {
                            e.preventDefault();
                            if (this.validateGameStartState()) {
                                players.sort((a, b) => (a.roll < b.roll) ? 1 : -1);
                                players.map((_, index) => {
                                    players[index].turnNumber = index;
                                })
                                this.props.alert.success("Players sorted by dice rolls");
                                this.props.history.push('/board', { ...this.state, initialDeployment: true });
                            }
                        }}>Start Game</StyledButton> : null}
                    </InnerContainer>
                </CenteredContainer>
            </BackgroundContainer>
        );
    }

    validatePlayerInfo = () => {
        const { players } = this.state;
        for (let i = 0; i < players.length; i++) {
            if (!players[i].name || !players[i].color) {
                this.setState({ playersValid: true });
                return false;
            }
        }
        this.setState({ playersValid: false });
        return true;
    }

    rollDoneCallback = (num, playerIndex) => {
        const { players } = this.state;
        if (players && players.length > 0) {
            players[playerIndex]["roll"] = num;
        }
    }

    validateInput = () => {
        const val = this.state.numOfPlayers;
        if (isNaN(val) || val < 2 || val > 5) {
            console.log("invalid input");
        } else {
            let players = [];
            for (let i = 0; i < val; i++) {
                players.push({
                    id: uuidv4(), turnNumber: i, reservePersonel: 50 - (5 * val)
                });
            }
            this.setState({ numOfPlayersRecorded: true, players });
        }
    };

    inputOnChangeHandler = (e, index) => {
        var players = this.state.players;
        players[index].name = e.target.value;
        this.setState({ players });
    }

    validateGameStartState = () => {
        const { alert } = this.props;
        const { players } = this.state;
        for (let i = 0; i < players.length; i++) {
            if (!players[i].color || !players[i].name) {
                alert.error("Player " + (i + 1) + " fields invalid.");
                return false;
            }
        }
        return true;
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
  padding: 50px;
  margin: 10% 0 0 0;
  border-radius: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (${BREAKPOINTS.sm}) {
    width: 80%;
  }
`;

const DiceContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 0 0 50px 0;
  @media (${BREAKPOINTS.sm}) {
    font-size: 200%;
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 50px;
  padding: 10px 50px;
  font-size: large;
  font-weight: bold;
  background-color: #1d65a8;
  color: white;

  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.24)
  }

  :active {
    transform: translateY(2px);
  }
`;

const ColorContainer = styled.div`
    padding: 5px;
    background: #fff;
    border-radius: 1px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1);
    display: inline-block;
    cursor: pointer;
`;

const ColoredDiv = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 2px;
    background: ${props => props.color};
`;

const ColorPickerPopover = styled.div`
    position: absolute;
    z-index: 2;
`;

const ColorPickerCover = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`;

export default withAlert()(GameSetup);
