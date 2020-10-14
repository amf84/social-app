import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../Redux/actions/authActions';

export const Header = () => {
    const dispatch = useDispatch();
    const closeSession = () => {
        dispatch(logoutAction())
    }

    return (<header>
        <img width="70%" id="logo" src="http://localhost:3000/assets/logo_fullstak.svg" />
        <button onClick={closeSession}>Close session</button>
    </header>)
}