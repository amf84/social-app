const { authLoginAction, loginSuccessAction, logoutAction } = require("../actions/authActions");
const { types } = require("../types");
const { authReducer } = require("./authReducer");

describe('test authReducer', () => {

    test('test login', () => {
        const state = authReducer({}, {type: types.login, payload: {
            uid: 1,
            displayName: 'amf',
            token: 'token-123'
        } });
        expect(state.uid).toBe(1);
        expect(state.name).toBe('amf');
        expect(state.token).toBe('token-123');
    });

    test('test logout', () => {
        const state = authReducer({ uid: 1, name: 'name', token: 'token.abc' }, {type: types.logout });
        expect(state.uid).toBeUndefined();
        expect(state.name).toBeUndefined();
        expect(state.token).toBeUndefined();
        expect(state).toMatchObject({})
    });

    test('test authAction login success', () => {
        const action = loginSuccessAction(1, 'amf', 'token-amf');
        expect(action.type).toBe(types.login);
        expect(action.payload.uid).toBe(1);
        expect(action.payload.displayName).toBe('amf');
        expect(action.payload.token).toBe('token-amf');
    });

    test('test authAction logout', () => {
        const action = logoutAction(1, 'amf');
        expect(action.type).toBe(types.logout);
        expect(action.payload).toBeUndefined();
    });
});