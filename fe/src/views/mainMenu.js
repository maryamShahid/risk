import React, { Component } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.jpg";
import { Container, Button } from "reactstrap";
import { BREAKPOINTS } from "../config/gameConstants";
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { currentUser } = this.props;
    const isSignedIn = !(Object.keys(currentUser).length === 0 && currentUser.constructor === Object);
    if (isSignedIn) {
      return (
        <BackgroundContainer>
          <CenteredContainer>
            <InnerContainer>
              <Title>Main Menu</Title>
              <StyledButton href="/setup">New Game</StyledButton>
              <StyledButton href="/load">Load Game</StyledButton>
            </InnerContainer>
          </CenteredContainer>
        </BackgroundContainer>
      );
    } else {
      return (
        <BackgroundContainer>
          <CenteredContainer>
            <InnerContainer>
              <Title>Main Menu</Title>
              <StyledButton href="/login"> Sign In </StyledButton>
              <StyledButton href="/signup">Sign Up</StyledButton>
            </InnerContainer>
          </CenteredContainer>
        </BackgroundContainer>
      );
    }
  }
};

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

const StyledButton = styled(Button)`
  font-size: 120%;
  font-weight: bold;
  background-color: #1d65a8;
  color: white;
  margin: 0 0 10px 0;
  width: 60%;

  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.24);
  }

  :active {
    transform: translateY(2px);
  }

  @media (${BREAKPOINTS.md}) {
    width: 80%;
  }

  @media (${BREAKPOINTS.sm}) {
    font-size: 140%;
    width: 80%;
  }
`;

const InnerContainer = styled(Container)`
  width: 60%;
  padding: 50px;
  margin: 10% 0 0 0;
  border-radius: 25px;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (${BREAKPOINTS.sm}) {
    width: 80%;
  }
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

const mapStateToProps = state => ({
  currentUser: state.currentUser || {}
});

export default connect(mapStateToProps)(App);