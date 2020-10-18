import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logoutAction } from '../Redux/actions/authActions';
import { FaCss3Alt, FaTools, FaMobileAlt, FaReact, FaAngular } from 'react-icons/fa';

const HeaderDiv = styled.header`
display: grid;
grid-template-columns: 1fr 1fr;
@media screen and (max-width: 880px) {
    display: block;
    text-align: center;
}
`;

const Image = styled.img`
width: 350px;
`;

const Ul = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    align-self: end;
    justify-content: flex-end;
    margin:0;
    & li {
        padding: 10px 25px;
        & a {
            text-decoration: none;
            color: #fff;
        }
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

        @media screen and (max-width: 880px) {
            justify-content: center;
        }
        @media screen and (max-width: 524px) {
            display: block;
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
            <li><a href="#"> <FaAngular/> Angular</a></li>
            <li><a href="#"> <FaReact/> React</a></li>
            <li><a href="#"> <FaCss3Alt /> CSS</a></li>
            <li><a href="#"> <FaMobileAlt /> Mobile</a></li>
            <li><a href="#"> <FaTools /> DevTools</a></li>
            
            



        </Ul>
    </HeaderDiv>)
}