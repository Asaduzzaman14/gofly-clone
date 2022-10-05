import React from 'react';

const TopHotels = () => {

    const hotels = [
        {
            _id: 1,
            img: "https://gofly.com.bd/self/assets/img/offer/thumbs/Welcome_back_to_Europe.png",
            title: "Dhaka To india"
        },
        {
            _id: 2,
            img: "https://gofly.com.bd/self/assets/img/offer/thumbs/Welcome_back_to_Europe.png",
            title: "Chittagong To dhaka"
        },
        {
            _id: 3,
            img: "https://gofly.com.bd/self/assets/img/offer/thumbs/Welcome_back_to_Europe.png",
            title: "Dhaka To china"
        }
    ]



    return (
        <div>

            <div className='mt-5'>
                <h2 className='text-primary text-[22px] px-3 font-semibold'>TOP HOTEL DESTINATIONS</h2>
                <p className='text-small'>Enjoy the amazing offers and great deals</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-5'>{
                hotels.map(flight => {
                    return <div className='w-[285px] h-[225px] '>
                        <img src={flight.img} alt="" />
                        <h1>{flight.title}</h1>
                    </div>
                })
            }

            </div>


        </div>
    );
};

export default TopHotels;