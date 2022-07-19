import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    // Change the use states to match current thingyyyyy

    const [title, setTitle] = useState("");  
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        // Change route and params to match current thingyyyy
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then((res) =>{
                console.log(res)
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err=>console.log(err))
    }
    //onChange to update title and price and description
    return (
        <form onSubmit={onSubmitHandler}> 
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
