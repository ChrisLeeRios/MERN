import React from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';


// Change all persons and people and params from dot notation to match current project
const ProductList = (props) => {

    const { removeFromDom } = props;

    const deleteProduct = (_Id) => {
        axios.delete(`http://localhost:8000/api/products/${_Id}`)
            .then(res => {
                removeFromDom(_Id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.products.map((product, i) =>
                <>
                    <Link to={`/products/${product._id}`}>
                        <p key={i}>Title: {product.title}
                            <br />Price: {product.price}
                            <br />Description: {product.description}</p>
                    </Link>

                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </>
            )}
        </div>
    )
}

export default ProductList;