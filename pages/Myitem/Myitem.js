import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import useProducts from '../Hooks/UsePorducts/useProducts';

const Myitem = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useProducts();


    const newProducts = products.filter(product => product.email === user.email);
    return (
        <div>
            <h2 className='m-3 text-center'>My Items</h2>
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
                        newProducts.map(product => (
                            <tr>
                                <td>{product._id}</td>
                                <td><img style={{ width: "120px" }} src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.discripson}</td>
                                <td>{product.suplier}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Myitem;
