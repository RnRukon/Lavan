import React from 'react';
import { talents } from './OurLatestTalenstData';
import './style.css';


const OurLatestTalents = () => {

    return (
        <div className=' container mt-5 '>

            <div className=' d-flex justify-content-center'>
                <div className=' text-center text-white ' style={{ maxWidth: 700 }}>
                    <h1 className='mb-5'>Our Latest Talents</h1>
                    <p className='mb-5'>Donec a euismod eros, nec porttitor sapien. Proin aliquam et tortor et elementum. Aenean ac fringilla nulla, sed pulvinar arcu. Phasellus lacinia vehicula luctus. Suspendisse potenti. Mauris eu est at enim blandit mattis. </p>
                </div>
            </div>
            <div className='row g-3'>

                {
                    talents.map((talent) =>
                        <div className=' col-lg-2 col-md-4 col-sm-12 cardContainers'>
                            <div class="cardContent">
                                <div class="cardContent-overlay"></div>
                                <img class="cardContent-image img-fluid" src={talent.img} alt='' />
                                <div class="cardContent-details fadeIn-top fadeIn-left">
                                    <h6 className=' text-white fw-bold'>42 years old </h6>
                                    <h6 className=' text-white fw-bold'>Talent Categories: </h6>
                                    <p>Photographers, Dancers, Extras </p>
                                    <h5 className=' text-white fw-bold'>Country: <span>France</span> </h5>
                                </div>
                            </div>
                            <h5 className='fw-bold talentName'>{talent.name}</h5>
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default OurLatestTalents;