import React from 'react';
import styled from 'styled-components';


const MainDiv = styled.main`
border: 10px solid;
border-image-slice: 1;
border-width: 10px;
border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
background: #fff;
padding: 10px
`;


export const Main = ({children}) => {
    return (
    <MainDiv>
        {children}
    </MainDiv>)
}