import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logoutAction } from '../Redux/actions/authActions';

const HeaderDiv = styled.header`
display: grid;
grid-template-columns: 1fr 1fr;
`;

const Image = styled.img`
width: 350px;
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-self: end;
    justify-content: flex-end;
    margin:0;
    & li {
        padding: 10px 25px;
    }
        & li::after {
            content: '';
            display: block;
            width: 0;
            margin-top: 15px;
            margin-bottom: 0;
            height: 5px;
            background: #fff;
            transition: width .5s;
        }
        & li:hover::after {
            width: 100%;
        }
`;

export const Header = () => {
    const dispatch = useDispatch();
    const closeSession = () => {
        dispatch(logoutAction())
    }

    return (<HeaderDiv>
        <Image  id="logo" src="http://localhost:3000/assets/logo_fullstak.svg" />
        
        <Ul>
            <li> <a href="#">Home</a></li>
            <li><a href="#">Notifications</a></li>
            <li><a href="#">Settings</a></li>
        </Ul>
    </HeaderDiv>)
}