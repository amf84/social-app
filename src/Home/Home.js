import React, { useEffect, useState } from 'react';
import { Loading } from '../Shared/Loading';
import { Card } from './Card';
import { HomeService } from './HomeService';

export const Home = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        HomeService().then(resultList => {
            setList(resultList);
        });
    }, []);
    return (<>
        <h3>Home</h3>
        <div>
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
        </div>
    </>)
}