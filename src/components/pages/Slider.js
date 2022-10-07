import React, { useState } from 'react';

const Slider = () => {

    const slides = [
        {
            _id: 1,
            image: "https://gofly.com.bd/self/assets/img/offer/thumbs/Welcome_back_to_Europe.png",
            title: "Dhaka To india"
        },
        {
            _id: 2,
            image: "https://gofly.com.bd/self/assets/img/offer/thumbs/Welcome_back_to_Middle_East.png",
            title: "Chittagong To dhaka"
        },
        {
            _id: 3,
            image: "https://gofly.com.bd/self/assets/img/offer/thumbs/gofly.png",
            title: "Welcome to back Europe"
        }
    ]

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    // setInterval(nextSlide, 10000);
    return (
        <div>
            <section className='slider'>
                <button className='left-arrow' onClick={prevSlide} >prev</button>
                <button className='right-arrow' onClick={nextSlide} >next</button>
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='travel' className='image' />
                            )}
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Slider;