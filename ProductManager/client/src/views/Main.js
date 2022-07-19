import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm'; // Change this line
import ProductList from '../components/ProductList'; // Change this line

const Main = (props) => {
    const [products, setProducts] = useState([]); // Change this line
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [products]);

    const removeFromDom = _Id => {
        setProducts(products.filter(product => product._id !== _Id));
    }

    // Change all perpson and peopple to match current project
    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList products={products}  removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;