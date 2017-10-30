import { combineReducers } from 'redux'

const user = (state = {userId:"storedUserId"}, action) => {
    console.log("action: " + action.type);
    switch (action.type) {
        case 'LOGIN_FAILED':
            
            return {
                ...state,
                userId:action.user,
                message:action.message
            };
        case 'USER_ID_CHANGED':
            return {
                ...state,
                userId:action.newUserId
            };

        default:
            return state;
    }
}


const rootReducer = combineReducers({
    user
})

export default rootReducer