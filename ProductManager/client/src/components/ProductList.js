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
        <div className='w-50 mx-auto' >
            {props.products.map((product, i) =>
                <div className='text-center' key={i} >
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                    <img
                        className="shadow rounded"
                        width="20%"
                        src={product.imgUrl}
                        alt="Welp, no image bud"
                    />
                    <p>Expiration Date: {product.expirationDate}</p>
                    {product.isExpensive === true && <p>This Is Expensive</p>}
                    {product.isExpensive !== true && <p>This Is Cheap</p>}
                    <Link to={`/products/${product._id}`}>
                        <button>Details</button>
                    </Link>
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProductList;