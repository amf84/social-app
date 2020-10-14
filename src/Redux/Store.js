import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { postReducer } from './reducers/postReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer,
    post: postReducer,
});


export const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('state');
        if(!serializedState) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch(e) {
        console.log('Exception sessionStorage: ', e);
        return undefined;
    }
}

export const saveState = state => {
    debugger;
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    } catch(e) {
        console.log('Exception sessionStorage: ', e);
    }
}

const s = loadState();

export const Store = createStore(
    reducers,
    s,
    composeEnhancers(applyMiddleware(thunk)),
);


Store.subscribe(async () => {
    const state = await Store.getState();
    saveState(state);
});