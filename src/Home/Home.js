import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loading } from '../Shared/Loading';
import { Card } from './Card';
import { HomeService } from './HomeService';

const Grid = styled.div`
display: grid;
justify-content: center;
grid-gap: 25px;
grid-template-columns: repeat(auto-fill, 200px);
`;

const Title = styled.h2`
    grid-column-start: 1;
    grid-column-end: -2;
`;
const Search = styled.div`
    grid-column-start: -2;
    grid-column-end: -1;
    align-self: center;
    justify-self: end;
`;

export const Home = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        HomeService().then(resultList => {
            setList(resultList);
        });
    }, []);
    return (<>
        <Grid>
        <Title>Home</Title>
        <Search><input type="text"/></Search>
        {
            list.length === 0
            ? <Loading />
            : list.map(({title, description, id, image}) => <Card 
                key={id}
                id={id}
                title={title}
                description={description}
                image={image}
            />)
        }
        </Grid>
    </>)
}