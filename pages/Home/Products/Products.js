import { CardGroup, Container } from 'react-bootstrap';
import useProducts from '../../Hooks/UsePorducts/useProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts([]);

    const newProducts = products.slice(0 - 6);
    return (
        <div className='invetorySection'>
            <h2>Inventory</h2>
            <div className='product-conteiner p-4'>
                <Container>
                    <CardGroup className='row'>
                        {
                            newProducts.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </CardGroup>
                </Container>

            </div>
        </div>
    );
};

export default Products;