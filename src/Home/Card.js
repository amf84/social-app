import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 0 8px;
    flex-direction: column;
    justify-content: space-between;
    background-color: #000;
    box-shadow: 1px 1px 4px 1px gray; 
    border-radius: 0.3em;
    color: white;
    text-align: center;
    transition: all .2s ease-in-out;
    & p {
        font-size: 0.9em
    }
    :hover {
        transform: scale(0.98);
    }

    & button {background-image: linear-gradient(to right, #ff00cc 0%, #333399  51%, #ff00cc  100%)}
    & button {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            border-radius: 10px;
            display: block;
          }

          & button:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }



`;

export const Card = ({ id, title, description, image }) => {
    return (
        <CardDiv>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <div>
                <p>{description}</p>
            </div>
            <button>Action</button>
        </CardDiv>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
