import React, { Component } from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import NavBar from "./components/navBar";

// Pages
import App from "./mainMenu";
import Login from "./login";
import SignUp from "./signup";
import GameSetup from "./game-setup";
import fire from "../firebase";
import Board from "./board/Board";
import Game from './game';
import About from "./about";
import LoadGame from "./loadGame";
import How from "./how";

import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

// Redux Actions
import { connect } from 'react-redux'
import { setCurrentUser } from "../redux/actions"

const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
};

class Router extends Component {
    game = new Game();
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }

        this.authListener = this.authListener.bind(this);
    }

    async getUserDocument(user) {
        if (!user) return null;
        try {
            var doc = await fire.firestore().doc(`users/${user.uid}`).get()
            return {
                ...user,
                ...doc.data()
            };
        }
        catch (error) {
            console.error("Error fetching user", error);
        }

    };

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged(userAuth => {
            if (userAuth) {
                this.getUserDocument(userAuth).then(user => {
                    this.setState({ user });
                    this.props.setCurrentUser(user)
                });
            } else {
                this.setState({ user: null });
                this.props.setCurrentUser(null);
            }
        })
    }

    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Provider template={AlertTemplate} {...options}>
                    <StyledAppWrapper>
                        <Route path="/" exact component={App} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={SignUp} />
                        <Route path="/setup" exact component={GameSetup} />
                        <Route path="/board" exact component={this.game.getInstance()} />
                        {/* <Route path="/board" exact component={Board} /> */}
                        <Route path="/how" exact component={How} />
                        <Route path="/about" exact component={About} />
                        <Route path="/load" exact component={LoadGame} />
                    </StyledAppWrapper>
                </Provider>
            </BrowserRouter>
        );
    }
}


const StyledAppWrapper = styled.div`
    // -100 Accounting for header
    margin-top: -100px;
`;


const mapDispatchToProps = {
    setCurrentUser: setCurrentUser,
};

export default connect(null, mapDispatchToProps)(Router);