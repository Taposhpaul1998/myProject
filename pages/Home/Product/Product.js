import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {

  const { name, img, discripson, price, suplier, _id } = product;
  const navigate = useNavigate();
  const handelUpdate = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div id='inventory' className='product-card col-sm-12 col-md-6 col-lg-4 g-4 '>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {discripson}
          </Card.Text>
          <Card.Text> Price: {price} tk
          </Card.Text>
          <Card.Text> Suplier: {suplier}
          </Card.Text>
          <Button onClick={() => handelUpdate(_id)} className='w-100 update-btn'>Update</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;