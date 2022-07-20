import React, { useState } from 'react'
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    // Change the use states to match current thingyyyyy

    const [title, setTitle] = useState(""); //Change this line
    const [price, setPrice] = useState(""); //Change this line
    const [description, setDescription] = useState(""); //Change this line
    const [imgUrl, setImgUrl] = useState(""); //Change this line
    const [expirationDate, setExpirationDate] = useState(""); //Change this line
    const [isExpensive, setIsExpensive] = useState(false); //Change this line
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
            description,
            imgUrl,
            expirationDate,
            isExpensive
        })
            .then((res) => {
                console.log(res)
                setTitle("");
                setPrice("");
                setDescription("");
                setImgUrl("");
                setExpirationDate("");
                setIsExpensive(false);
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
        <div className='w-25 mx-auto'>

        <form onSubmit={onSubmitHandler}>
            {/* To display the errors add this line below  */}
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div className='form-group' >
                <label>Title</label><br />
                <input className='form-control' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div className='form-group' >
                <label>Price</label><br />
                <input className='form-control' type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>
            <div className='form-group' >
                <label>Description</label><br />
                <input className='form-control' type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </div>
            <div className='form-group' >
                <label>Image</label><br />
                <input className='form-control' type="text" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />
            </div>
            <div className='form-group' >
                <label>Expiration Date</label><br />
                <input className='form-control' type="date" onChange={(e) => setExpirationDate(e.target.value)} value={expirationDate} />
            </div>
            <div className='form-group d-flex gap-2' >
                <input className='form-check-input' type="checkbox" onChange={(e) => setIsExpensive(e.target.checked)} value={isExpensive} />
                <label> Is Expensive</label>
            </div>
            <input className='btn-primary mt-2' type="submit" />
        </form>

        </div>
    )
}

export default ProductForm;