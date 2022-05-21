import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../Hooks/UsePorducts/useProducts';

const Manageitem = () => {
    const [products, setProducts] = useProducts();

    const hendelDelete = (id) => {
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            const url = `https://lit-harbor-42660.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Images</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Discripson</th>
                        <th colSpan={3}>Suplier</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr>
                                <td>{product._id}</td>
                                <td><img style={{ width: "120px" }} src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.discripson}</td>
                                <td>{product.suplier}</td>
                                <td>{
                                    <Button href='/inventory' variant="primary">Add</Button>
                                }</td>
                                <td>{
                                    <Button onClick={() => hendelDelete(product._id)} variant="danger">Delete</Button>
                                }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <div style={{ width: '300px' }} className='mx-auto d-black'>
                <Button to="/addedItem" as={Link} className='submit-btn m-4 w-100'>Add New Item</Button>
            </div>
        </div>
    );
};

export default Manageitem;