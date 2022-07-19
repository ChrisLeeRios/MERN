import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({}) // Change this line
    const { _id } = useParams();
    const navigate = useNavigate();

    // Change these lines to match current project route and states
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [_id]);

    const deleteProduct = (_Id) => {
        axios.delete(`http://localhost:8000/api/products/${_Id}`)
            .then(res => {
                // removeFromDom(_Id)
                navigate(`/products`)
            })
            .catch(err => console.error(err));

    }

    // Change these lines to match current project route and states
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${product._id}/edit`}>
                Edit
            </Link>
            <button onClick={(e) => { deleteProduct(product._id) }}>
                Delete
            </button>
        </div>
    )
}

export default Detail;