import React, { useEffect, useState } from 'react';
import Flight from './Flight';
import Slider from "react-slick";

const TopFlights = () => {
    const [flights, setFlights] = useState()



    useEffect(() => {
        fetch('')
            .then(data => data.json())
            .then(data => setFlights(data))
    }, [])


    // const flights = [
    //     {
    //         _id: 1,
    //         img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
    //         title: "Jessore to Cox's Bazar",
    //         desc: "start from 06 oct 2022"
    //     },
    //     {
    //         _id: 2,
    //         img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
    //         title: "Chittagong To Bangkok",
    //         desc: "Weekly 5 nonstops flight"

    //     },
    //     {
    //         _id: 4,
    //         img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
    //         title: "Chattogram to Sylhet",
    //         desc: "start from 06 oct 2022"

    //     },
    //     {
    //         _id: 5,
    //         img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
    //         title: "Fly to india"
    //     },
    //     {
    //         _id: 6,
    //         img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
    //         title: "Dhaka To China"
    //     },
    //     {
    //         _id: 7,
    //         img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
    //         title: "Dhaka To china"
    //     },
    //     {
    //         _id: 8,
    //         img: "https://gofly.com.bd/self/assets/img/offer/direct_flight_to_coxs_bazar_from_jessore.png",
    //         title: "Dhaka To china"
    //     },
    // ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='p-6 mx-auto max-w-[1100px] bg-base-100'>
            <div className='mt-5'>
                <h2 className='text-primary text-[22px] px-3 font-semibold'>TOP FLIGHTS OFFERS</h2>
                <p className='text-small'>Enjoy the amazing offers and great deals</p>
            </div>



            <div >
                <Slider  {...settings} className='grid grid-cols-1 lg:grid-cols-4 gap-4 ' >   {
                    flights?.map(flight => {
                        return <div key={flight._id} className="">

                            <img className='w-[200px] mx-auto' src={flight.img} alt="" />
                            <h1>{flight.title}</h1>
                            <button>Details</button>
                        </div>
                    })}

                </Slider>
            </div>







        </div >
    );
};

export default TopFlights;