import React from 'react';
import Flight from './Flight';

const TopFlights = () => {

    const flights = [
        {
            _id: 1,
            img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
            title: "Dhaka To india"
        },
        {
            _id: 2,
            img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
            title: "Chittagong To dhaka"
        },
        {
            _id: 3,
            img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
            title: "Dhaka To china"
        }
    ]


    return (
        <div className='p-6'>
            <div className='mt-5'>
                <h2 className='text-primary text-[22px] px-3 font-semibold'>TOP FLIGHTS OFFERS</h2>
                <p className='text-small'>Enjoy the amazing offers and great deals</p>
            </div>

            <div className='p-5 grid grid-cols-1 lg:grid-cols-4 gap-4  '>{
                flights.map(flight => <Flight
                    flight={flight}
                    key={flight._id}
                ></Flight>)
            }

            </div>


        </div>
    );
};

export default TopFlights;