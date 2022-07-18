import React from 'react'
// import axios from 'axios';

// Change all persons and people and params from dot notation to match current project
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i}>Title: {product.title}
                <br/>Price: {product.price}
                <br/>Description: {product.description}
                <br/>ID: {product._id}</p>
            )}
        </div>
    )
}
    
export default ProductList;