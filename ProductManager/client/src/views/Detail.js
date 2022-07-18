import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({}) // Change this line
    const { _id } = useParams();
    
    // Change these lines to match current project route and states
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${_id}`) 
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [_id]);
    
    // Change these lines to match current project route and states
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
    
export default Detail;