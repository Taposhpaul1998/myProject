import React, { useEffect } from 'react';
import { useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Category from '../Category/Category';
import './Categorys.css'

const Categorys = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('https://lit-harbor-42660.herokuapp.com/category')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
        <div id='category' className='categorys'>
            <h2>Category</h2>
            <div className='category-conteiner p-4'>
                <CardGroup className='row'>
                    {
                        categorys.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </CardGroup>

            </div>
        </div>
    );
};

export default Categorys;