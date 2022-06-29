import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FineOutNow from '../../Components/FineOutNow/FineOutNow';
import Footer from '../../Components/Footer/Footer';
import OurLatestTalents from '../../Components/OurLatestTalents/OurLatestTalents';

const Home = () => {
    return (
        <>
           
            <Banner />
            <FineOutNow />
            <OurLatestTalents />
            <Footer />
        </>
    );
};

export default Home;