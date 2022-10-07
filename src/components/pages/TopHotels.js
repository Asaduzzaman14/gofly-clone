import React from 'react';
import Slider from "react-slick";

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
        },
        {
            _id: 3,
            img: "https://gofly.com.bd/self/assets/img/offer/thumbs/Welcome_back_to_Europe.png",
            title: "Dhaka To china"
        },
    ]

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
        <div className='mx-auto max-w-[1100px]'>

            <div className='mt-5'>
                <h2 className='text-primary text-[22px] px-3 font-semibold'>TOP HOTEL DESTINATIONS</h2>
                <p className='text-small'>Enjoy the amazing offers and great deals</p>
            </div>

            <Slider  {...settings} className='grid grid-cols-1 lg:grid-cols-4 gap-5'>{
                hotels.map(flight => {
                    return <div key={flight._id} className='w-[285px] h-[225px] '>
                        <img className='w-100 lg:max-w-[250px]' src={flight.img} alt="" />

                        <div className='text-xs'>
                            <h1>{flight.title}</h1>
                            <p>extra 10% discount</p>
                        </div>
                    </div>
                })
            }
            </Slider>


        </div>



    );
};

export default TopHotels;