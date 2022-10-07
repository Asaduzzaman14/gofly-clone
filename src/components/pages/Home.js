import React from 'react';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import Gofly from './Gofly';
import Important from './Important';
import Slider from './Slider';
import Testmonial from './Testmonial';
import TopFlights from './TopFlights';
import TopHotels from './TopHotels';

const Home = () => {
    return (
        <div>
            <Banner />
            {/* <Slider /> */}
            <Important />
            <ChooseUs />
            <TopFlights />
            <TopHotels />
            <Gofly />
            <Testmonial />
        </div>
    );
};

export default Home;