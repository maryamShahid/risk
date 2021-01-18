import React, { Component } from "react";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import Router from "./views/router";

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

// Redux dev tools
const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

// Redux Store
const store = createStore(rootReducer, reduxDevTools);

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default Root;
