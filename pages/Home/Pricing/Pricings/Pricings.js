import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Pricing from '../Pricing/Pricing';
import './Pricings.css'


const Pricings = () => {
    const [pricing, setPricing] = useState([]);
    useEffect(() => {
        fetch('https://lit-harbor-42660.herokuapp.com/pricing')
            .then(res => res.json())
            .then(data => setPricing(data))
    }, [])
    return (
        <div className='pricing'>
            <h2>Pricing</h2>
            <div className='pricing-conteiner'>
                <Container>
                    <CardGroup className='row'>
                        {
                            pricing.map(prices => <Pricing
                                key={prices.id}
                                prices={prices}
                            ></Pricing>)
                        }
                    </CardGroup>
                </Container>

            </div>
        </div>
    );
};

export default Pricings;
