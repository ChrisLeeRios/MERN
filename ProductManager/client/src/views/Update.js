import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Update = (props) => {
    const { _id } = useParams();
    const [title, setTitle] = useState(''); //Change this line
    const [price, setPrice] = useState(''); //Change This Line
    const [description, setDescription] = useState(''); //Change This Line
    
    // Change the lines below to match current projects params
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                console.log(res.data)
                console.log(_id)
            })
    }, [_id]);
    
    // Change the lines below to match current projects params
    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${_id}`, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    // Change the lines below to match current projects params
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} /* placeholder={} */ />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;