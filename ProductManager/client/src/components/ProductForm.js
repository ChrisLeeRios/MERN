import React, { useState } from 'react'
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    // Change the use states to match current thingyyyyy

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);
    // const navigate = useNavigate();

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
            .then((res) => {
                console.log(res)
                setTitle("");
                setPrice("");
                setDescription("");
                // navigate("/products")
            })
            .catch(err => {
                console.log(err)
                // Get the errors from err.response.data
                const errorResponse = err.response.data.errors;
                // Define a temp error array to push the messages in
                const errorArr = [];
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    //onChange to update title and price and description
    return (
        <form onSubmit={onSubmitHandler}>
            {/* To display the errors add this line below  */}
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm;