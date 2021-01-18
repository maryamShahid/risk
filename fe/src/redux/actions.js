/**
 * Actions
 */
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY';


/**
 * Action Creators
 */
export function setCurrentUser(user) {
    return { type: SET_CURRENT_USER, user };
}