import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    // const [quntity, setQuntity] = useState([]);
    const { productid } = useParams();
    const [update, setUpdate] = useState([])

    useEffect(() => {
        fetch(`https://lit-harbor-42660.herokuapp.com/products/${productid}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUpdate(data))
    }, [])

    return (
        <div>
            <h2>product id:{update._id}</h2>
            <Table style={{ width: '80%' }} className=' mx-auto d-black mt-5' striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>{update.img}</th>
                        <th>{update.name}</th>
                        <th>{update.price}</th>
                        <th>{update.discripson}</th>
                        <th>{update.quantity}</th>
                        <th>
                            <Button className='mb-2' variant="success">Delavery</Button>
                        </th>


                    </tr>
                </thead>
                <tbody className='update'>
                    <tr>
                        <th>Quantity</th>
                        <th colSpan={3}> <input className='w-100 p-3' type="number" /> </th>
                        <th colSpan={2}>  <Button variant="primary">Update Products</Button></th>
                    </tr>
                </tbody>
            </Table>


            <div style={{ width: '300px' }} className='mx-auto d-black'>
                <Button to="/manageitems" as={Link} className='submit-btn m-4 w-100'>Manage Item</Button>
            </div>
        </div >
    );
};

export default Inventory;