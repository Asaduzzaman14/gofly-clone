import React from 'react';

const Flight = ({ flight }) => {
    return <div>
        <img src={flight.img} alt="" />
        <h1>{flight.title}</h1>
    </div>
};

export default Flight;