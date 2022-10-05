import React from 'react';
import Banner from './Banner';
import Gofly from './Gofly';
import Important from './Important';
import Testmonial from './Testmonial';
import TopFlights from './TopFlights';
import TopHotels from './TopHotels';

const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <Important />
            <TopFlights />
            {/* <TopHotels /> */}
            <Gofly />
            {/* <Testmonial /> */}
        </div>
    );
};

export default Home;