import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = (props) => {
    const { _id } = useParams();
    const [title, setTitle] = useState(''); //Change this line
    const [price, setPrice] = useState(''); //Change This Line
    const [description, setDescription] = useState(''); //Change This Line
    const [imgUrl, setImgUrl] = useState(""); //Change this line
    const [expirationDate, setExpirationDate] = useState(""); //Change this line
    const [isExpensive, setIsExpensive] = useState(false); //Change this line
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    // Change the lines below to match current projects params
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setImgUrl(res.data.imgUrl);
                setExpirationDate(res.data.expirationDate);
                setIsExpensive(false);
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
            description,
            imgUrl,
            expirationDate,
            isExpensive
        })
            .then(res => {
                console.log(res)
                navigate("/products")
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

    // Change the lines below to match current projects params
    return (
        <div className='w-25 mx-auto'>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
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
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;