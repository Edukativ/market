import "./product.css"
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from "axios";

import Rating from "../rating/rating";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false)

    const handleClick = () => {
        navigate(-1)
    }

    const url = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(url).then((response) => {
            const productsData = response.data;
            setProducts([...productsData]);
            setLoaded(true)
        })
    }, [])

    return (
        <>
            {loaded && products[id] && (  
                <div className='wrapper'>
                    <div className='content_wrapper'>
                        <span>{products[id - 1].title}</span>
                        <img src={products[id - 1].image} alt="" className="rongar" />
                        <span>Price: {products[id - 1].price}$</span>
                        <span>Description: {products[id - 1].description}$</span>
                        <Rating count={Math.round(products[id - 1].rating.rate)}></Rating>
                    </div>
                    <button onClick={handleClick}>Назад</button>
                </div>
            )}
        </>
    );
};

export default ProductPage;