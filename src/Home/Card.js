import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Card = ({ id, title, description, image }) => {



    return (
        <div>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
