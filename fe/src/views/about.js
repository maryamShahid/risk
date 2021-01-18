import React, { Component } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.jpg";
import { Container } from "reactstrap";
import { BREAKPOINTS } from "../config/gameConstants";

class About extends Component {
    render() {
        return (
            <BackgroundContainer>
                <CenteredContainer>
                    <InnerContainer>
                        <Title>About Us</Title>
                        <p>TODO: Add About us text</p>
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


export default About;