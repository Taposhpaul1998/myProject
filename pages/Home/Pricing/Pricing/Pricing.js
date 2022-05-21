import React from 'react';
import { Button } from 'react-bootstrap';
import './Pricing.css'

const Pricing = ({ prices }) => {
    const { name, price, orders, organization, detels } = prices;
    return (
        <div id='pricing' className='pricing-card col-sm-12 col-md-6 col-lg-4'>
            <h2>{name}</h2>
            <h2><p>$</p>{price}</h2>
            <h6>{detels}</h6>
            <h6>{organization}</h6>
            <h6>{orders}</h6>
            <Button href='/pyment' className='update-btn w-100 mt-4'>Try Now</Button>
        </div>
    );
};

export default Pricing;