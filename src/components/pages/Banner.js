import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'
import Slider from "react-slick";

const Banner = () => {

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.to.value);

    }
    const [startDate, setStartDate] = useState(new Date());

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <div className=''>
            <div>
                <div>
                    <h2> Single Item</h2>
                    <Slider {...settings}>
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div>
                            <img src={banner2} alt="" />
                        </div>
                        <div>
                            <img src={banner3} alt="" />
                        </div>
                        <div>
                            <img src={banner4} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>


            <div className='mx-auto max-w-[1100px]'>

                <form onSubmit={handelSubmit}
                    className=' max-w-[600px]'>


                    <div className='grid grid-cols-2 gap-5'>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-xs">LEAVING FORM</span>
                            </label>
                            <input name='from-name' type="text" placeholder="Dhaka (Zia inti Airport, DAC)" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-xs">GOING TO</span>
                            </label>
                            <input name="to" type="text" placeholder="Kolkata (Netaji Subhas Chandra Bose Intl), CCU" class="input input-bordered" />
                        </div>

                    </div>

                    <div className='grid grid-cols-2  gap-5'>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-xs">DEPART DATE</span>
                            </label>
                            <input name="departDate" type="text" placeholder="Depart Date" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-xs">RETURN DATE</span>
                            </label>
                            <input name="returnDate" type="text" placeholder="Return Date" class="input input-bordered" />
                        </div>

                    </div>

                    <div className='grid grid-cols-3  gap-5'>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-xs">ADULT (12+)</span>
                            </label>
                            <select name="adult" type="number" placeholder="Return Date" class="input input-bordered">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                            </select>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-xs">CHILD (2-11)</span>
                            </label>
                            <select name="child" type="number" placeholder="Return Date" class="input input-bordered">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                            </select>
                        </div>


                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-xs">INFANT (0-2)</span>
                            </label>
                            <select name="infant" type="number" placeholder="Return Date" class="input input-bordered">
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>

                    </div>

                    <input className='p-2 border-black bg-secondary text-white font-bold w-full mt-3 rounded-sm hover:bg-white hover:text-primary hover:border' type="submit" value={"SEARCH FLIGHT"} />
                </form>
            </div>
        </div>
    );
};

export default Banner;