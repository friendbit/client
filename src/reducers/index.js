import { combineReducers } from 'redux'

const user = (state = {}, action) => {
    console.log("action: " + action.type);
    switch (action.type) {
        case 'LOGIN_FAILED':
            
            return {
                ...state,
                user:action.user,
                message:action.message
            };
    
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    user
})

export default rootReducer