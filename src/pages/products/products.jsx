import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from '../rating/rating';
import "./products.css"
import { Link, useNavigate } from 'react-router-dom';

const ProductsPage = () => {
    const navigate = useNavigate()

    const url = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axios.get(url).then((response) => {
            const productsData = response.data;
            setProducts([...productsData]);
        })
    }, [])

    return (
        <div className='container'>
            {products.map((product) => (
                <div onClick={() => {navigate(`/product/${product.id}`)}} key={product.id} className="product_wrapper">
                    <span>{product.title}</span>
                    <Rating count={Math.round(product.rating.rate)}></Rating>
                </div>
            ))
            }
        </div >
    );
};

export default ProductsPage;