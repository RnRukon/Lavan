import React from 'react';
import './fineOutNowStyle.css'

const FineOutNow = () => {
    return (
        <div className='fineOutContainer d-flex justify-content-center text-center '>
            <div style={{ maxWidth: "900px" }}>
                <h2 style={{ fontFamily: "Engagement,Sanserif" }} className='text-white'>Our agency calls you to step into the world of Talents - the world's most glamorous industry.</h2>
                <button className='fineOutBtn'>Fine Out Now</button>
            </div>

        </div>
    );
};

export default FineOutNow;