import React from 'react';

const CountractUs = () => {
    return (
        <div>
            <h2>This is CountractUs</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>

                    <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-lg" />
                </div>

                <div>
                    <div>
                        <h4>Have Questions? Call Us !</h4>
                        <h5>01713-289172</h5>
                    </div>
                    <div>
                        <h4>Write us on !</h4>
                        <h5>support@goflybd.com</h5>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <a href="_#"> 1/1, Shukrabad, Mirpur Road,
                            Beside New Model College, Dhaka,
                            Bangladesh, 1207 </a>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CountractUs;