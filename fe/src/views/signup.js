import React, { PureComponent } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.jpg"
import fire from "../firebase";
import { connect } from 'react-redux'
import { Button, Container, Col, Row, Form, FormGroup, Input } from 'reactstrap';

class SignUp extends PureComponent {
    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
    }

    signUp(e) {
        e.preventDefault();
        const firstName = e.target[0].value;
        const lastName = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;
        const confirmedPassword = e.target[4].value;

        if (password.localeCompare(confirmedPassword) !== 0) {
            alert("passwords should match");
            return;
        }

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                const userRef = fire.firestore().doc(`users/${u.user.uid}`);
                userRef.set({
                    firstName,
                    lastName
                }).catch(error => {
                    console.error("Error creating user document", error);
                });

                this.props.history.push('/');
            })
            .catch((err) => {
                console.log('Error: ' + err.toString());
            })
    }

    render() {
        const { currentUser } = this.props;
        const isSignedIn = !(Object.keys(currentUser).length === 0 && currentUser.constructor === Object);

        if (isSignedIn) {
            this.props.history.push('/')
            return null;
        } else {
            return (
                <BackgroundContainer>
                    <CenteredContainer>
                        <InnerContainer>
                            <h2>Sign Up</h2>
                            <Form onSubmit={this.signUp}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" name="firstName" placeholder="first name" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" name="lastName" placeholder="last name" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Input type="email" name="email" placeholder="email" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Input type="password" name="password" placeholder="password" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Input type="password" name="confirmedPassword" placeholder="confirm password" />
                                        </FormGroup>
                                    </Col>

                                </Row>
                                <StyledButton>Sign Up</StyledButton>
                            </Form>
                        </InnerContainer>
                    </CenteredContainer>
                </BackgroundContainer>
            );
        }
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
  padding: 25px;
  border-radius: 25px;
  background-color: white;
`;


const StyledButton = styled(Button)`
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

const mapStateToProps = state => ({
    currentUser: state.currentUser || {}
});

export default connect(mapStateToProps)(SignUp);