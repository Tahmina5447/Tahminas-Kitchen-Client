import React from 'react';
import AboutMySelf from './AboutMySelf';
import CommingSoon from './CommingSoon';
import HomeItems from './HomeItems';
import Sliders from './Sliders';


const Home = () => {
    return (
        <div>
            <title>Tahmina's kitchen</title>
            <Sliders></Sliders>
            <AboutMySelf></AboutMySelf>
            <HomeItems></HomeItems>
            <CommingSoon></CommingSoon>
        </div>
    );
};

export default Home;