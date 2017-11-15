import { combineReducers } from 'redux'
import nav from './nav'

const user = (state = { userId: "user" }, action) => {
    console.log("action: " + action.type);
    switch (action.type) {
        case 'LOGIN_FAILED':

            return {
                ...state,
                userId: action.user,
                message: action.message
            };
        case 'LOGIN_SUCCESS':

            return {
                ...state,
                userId: action.user,
                message: null
            };
        case 'LOGIN_FB_SUCCESS':

            return {
                ...state,
                longinFbResult: action.longinFbResult,
                message: null
            };

        case 'USER_ID_CHANGED':
            return {
                ...state,
                userId: action.newUserId
            };

        case "PHONE_CONTACTS_LOADED":
            return {
                ...state,
                contacts: action.contacts
            };

        default:
            return state;
    }
}


const rootReducer = combineReducers({
    user, nav
})

export default rootReducer