import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer
});

export const Store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)) 
)