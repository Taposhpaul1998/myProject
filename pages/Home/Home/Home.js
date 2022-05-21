import React from 'react';
import Banner from '../Banner/Banner';
import Categorys from '../Categorys/Categorys';
import Pricings from '../Pricing/Pricings/Pricings';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <Pricings></Pricings>
            <Categorys></Categorys>
        </>
    );
};

export default Home;