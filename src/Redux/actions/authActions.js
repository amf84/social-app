import { types } from '../types';

export const authLoginAction = (email, password) => {
    return (dispatch, getState) => {
        const state = getState(); // Recuperar los datos del store
        dispatch(loginSuccessAction(1222, 'Adrian', 'token-123'));
        /*dispatch(authLoading());
        httpAuh(email, password)
            .then(({ uid, name}) => {
                dispatch(loginSuccessAction(uid, name));
                dispatch(cleanAuthLoading());
            });
        */
    }
}

export const loginSuccessAction = (uid, displayName, token) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            token
        }
    }
}

export const logoutAction = () => {
    return {
        type: types.logout
    }
}