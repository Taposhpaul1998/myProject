import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Category = ({ category }) => {
    const { name, img } = category;
    return (
        <div className='product-card col-sm-12 col-md-6 col-lg-3 g-4 '>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h3 style={{ color: "#242768" }}>{name}</h3>
                    <Button href='/manageitems' className='w-100 update-btn'>Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Category;