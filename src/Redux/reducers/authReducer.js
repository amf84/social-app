import { types } from '../types';

const session = sessionStorage.getItem('auth');
const initialState = {}; //(session)? JSON.parse(session) : {};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.login: 
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                token: action.payload.token
            }
        case types.logout: return {};
        default: return state; 
    }
}