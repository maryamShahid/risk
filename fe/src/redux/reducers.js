import { combineReducers } from "redux";

import { SET_CURRENT_USER } from "./actions";

/**
 * User Reducers
 */
function userReducers(state = {}, action) {
    const { user } = action;

    switch (action.type) {
        // load the user to the store
        case SET_CURRENT_USER:
            return user;

        // any other action: return the current state
        default:
            return state;
    }
}

// export all above reducers combined
export default combineReducers({ currentUser: userReducers });
