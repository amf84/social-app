import { types } from '../types';
export const postReducer = (state = {}, action) => {
    switch(action.type) {
        case types.selectCurrentPost: 
            return {
                ...action.payload
            }
        case types.unselectCurrentPost: return {};
        default: return state; 
    }
}