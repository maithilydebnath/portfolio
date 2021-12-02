import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import Portfolios from '../Portfolios/Portfolios';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Portfolios></Portfolios>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;