import React from 'react';
import './FooterStyle.css';
const Footer = () => {
    return (
        <footer className='pt-5 container mt-5'>
            <div className='row '>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h4 className=' text-white'>Contact</h4>
                    <br />
                
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> 84091-1547</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span>  MoneyLion, Inc. P.O. Box 1547 Sandy, UT</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> 1-888-659-8244 </a>
                </div>

                <div className='col-lg-2 col-md-6 col-sm-12'>
                    <h4 className=' text-white'>Company</h4>
                    <br />
                    <a href="/" className='footerLinkColor'><span className='dot'>
                    </span> Blog</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> About</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Support </a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Legal </a>
                </div>

                <div className='col-lg-2 col-md-6 col-sm-12'>
                    <h4 className=' text-white'>Talents</h4>
                    <br />
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Models</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Dancers</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Actors</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Photographer</a>
                </div>

                <div className='col-lg-2 col-md-6 col-sm-12'>
                    <h4 className=' text-white'>Information</h4>
                    <br />
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Help Center</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Privacy</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Contact Us</a>
                    <a href="/" className='footerLinkColor'>
                        <span className='dot'>
                        </span> Products</a>
                </div>
            </div>
            <hr className='footerText'/>


            <div className='row mt-5'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div>
                        <img src="http://kayapati.com/demos/lavan/wp-content/uploads/sites/157/2018/05/logo.png" alt="" />
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-12 footerText'>
                    <p>
                        Mauris interdum, quam vel venenatis dictum, augue lectus interdum massa, nec tempus justo sem vel neque. Aliquam mattis neque vitae sem malesuada, id bibendum purus molestie.
                    </p>
                    <br /><br />
                    <p>
                        Integer vehicula mauris libero, at molestie eros imperdiet sit amet. Suspendisse mattis ante sit amet ante blandit, in sodales enim auctor. In at consequat sapien. Donec id aliquam nibh, quis hendrerit dolor.Mauris interdum, quam vel venenatis dictum, augue lectus interdum massa, nec tempus justo sem vel neque.
                    </p>
                </div>
            </div>
            <hr className='footerText'/>
            <div className=' text-center py-5 footerText'>
                <p>Kayapati.com © All Rights are Reserved </p>
            </div>
        </footer>
    );
};

export default Footer;