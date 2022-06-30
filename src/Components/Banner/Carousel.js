import React from 'react';
import { Carousel as CarouselSlider } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Styles/Style.css'
import Navigation from '../Navigaton/Navigation'
const Carousel = () => {
    return (
        <div className='bg-dark  pb-5 ' >
            <div className='topHeaderContainer'>
                <div className=' text-white d-flex justify-content-between py-5   container'>
                    <div>
                        <img className=' img-fluid' src="http://kayapati.com/demos/lavan/wp-content/uploads/sites/157/2018/05/logo.png" alt="" />
                    </div>
                    <div className='text-end'>
                        <h4>
                            Call Us: +1 800 559 6580
                        </h4>
                        <div>
                            <button className='loginLegButton'>LOGIN</button> <button className='loginLegButton'> REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container'>
                <Navigation />
                <CarouselSlider showThumbs={false} infiniteLoop={true}>
                    <div className='headerBanner1' style={{ color: "#fff" }}>
                        <div>
                            <div style={{ float: 'left', textAlign: 'left', padding: '0 70px' }}>
                                <div>
                                    <h1>BIGGEST AGENCY</h1>
                                    <h3>For Talents</h3>
                                    <p>Nam pellentesque magna at augue blandit, in eleifend nulla vehicula. Proin maximus porta <br /> varius. Nam vitae neque ut quam egestas pharetra a sed erat.</p>

                                    <button className='fineOutNowButtonHeader'>Fine Out Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='headerBanner1' style={{ color: "#fff" }}>
                        <div>
                            <div style={{ float: 'left', textAlign: 'left', padding: '0 70px' }}>
                                <div>
                                    <h1>BIGGEST AGENCY</h1>
                                    <h3>For Talents</h3>
                                    <p>Nam pellentesque magna at augue blandit, in eleifend nulla vehicula. Proin maximus porta <br /> varius. Nam vitae neque ut quam egestas pharetra a sed erat.</p>

                                    <button className='fineOutNowButtonHeader'>Fine Out Now</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='headerBanner1' style={{ color: "#fff" }}>
                        <div>
                            <div style={{ float: 'right', textAlign: 'left', padding: '0 70px' }}>
                                <div>
                                    <h1>BIGGEST AGENCY</h1>
                                    <h3 style={{fontFamily:'Engagement, Sanserif'}}>For Talents</h3>
                                    <p>Nam pellentesque magna at augue blandit, in eleifend nulla vehicula. Proin maximus porta <br /> varius. Nam vitae neque ut quam egestas pharetra a sed erat.</p>

                                    <button className='fineOutNowButtonHeader'>Fine Out Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselSlider>
            </div>
        </div>
    );
};

export default Carousel;